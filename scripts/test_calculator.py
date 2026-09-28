import math
from datetime import date, timedelta
from verify_extracted_data import TIMETABLES

SEM_START = date(2026, 8, 29)
SEM_END = date(2026, 11, 29)

def get_class_counts_for_subject(section_id, today, today_done=False, holidays=None, future_date=None):
    if holidays is None:
        holidays = set()
    
    sec = next((s for s in TIMETABLES if s['id'] == section_id), None)
    if not sec:
        raise ValueError(f"Section {section_id} not found")
        
    grid = sec['grid'] # Mon-Fri (index 0-4), 9 periods
    
    # Track held so far (T), remaining in sem (R), remaining until future date (R_future)
    T = {k: 0 for k in sec['subjects']}
    R = {k: 0 for k in sec['subjects']}
    R_future = {k: 0 for k in sec['subjects']} if future_date else None
    
    cur = SEM_START
    while cur <= SEM_END:
        weekday = cur.weekday() # Mon=0, Tue=1, Wed=2, Thu=3, Fri=4, Sat=5, Sun=6
        if weekday < 5 and cur not in holidays:
            day_periods = grid[weekday]
            
            # Count periods for each subject on this day
            day_counts = {k: 0 for k in sec['subjects']}
            for cell in day_periods:
                if not cell:
                    continue
                if "/" in cell and cell not in sec['subjects']:
                    for p in cell.split("/"):
                        p = p.strip()
                        if p in day_counts:
                            day_counts[p] += 1
                elif cell in day_counts:
                    day_counts[cell] += 1
            
            # Classify as T (held) or R (remaining)
            if cur < today:
                for k, count in day_counts.items():
                    T[k] += count
            elif cur == today:
                if today_done:
                    for k, count in day_counts.items():
                        T[k] += count
                else:
                    for k, count in day_counts.items():
                        R[k] += count
            else: # cur > today
                for k, count in day_counts.items():
                    R[k] += count
                    
            # Check future date range (between today and future_date)
            if future_date and cur >= today and cur <= future_date:
                # If cur == today and today_done is True, today is already held so not in R_future
                if cur == today and today_done:
                    pass
                else:
                    for k, count in day_counts.items():
                        R_future[k] += count
                        
        cur += timedelta(days=1)
        
    return T, R, R_future

def calculate_subject_metrics(pct, T, R, R_future=None):
    A = (pct / 100.0) * T
    total = T + R
    
    # 75% calculation
    x75 = max(0, math.ceil(0.75 * total - A))
    can_skip_75 = max(0, R - x75)
    is_irreversible = x75 > R
    
    # 90% calculation
    x90 = max(0, math.ceil(0.90 * total - A))
    can_skip_90 = max(0, R - x90)
    is_90_reachable = x90 <= R
    max_achievable_pct = ((A + R) / total * 100.0) if total > 0 else 100.0
    
    # Status tag
    if is_irreversible:
        status = "IRREVERSIBLE"
    elif pct < 75:
        status = "DANGER"
    elif pct < 90:
        status = "OK"
    else:
        status = "SAFE"
        
    future_metrics = None
    if R_future is not None:
        total_future = T + R_future
        pct_all_attend = ((A + R_future) / total_future * 100.0) if total_future > 0 else 100.0
        pct_all_skip = (A / total_future * 100.0) if total_future > 0 else 100.0
        x_plan = max(0, math.ceil(0.75 * total_future - A))
        is_plan_reachable = x_plan <= R_future
        future_metrics = {
            "R_future": R_future,
            "pct_all_attend": pct_all_attend,
            "pct_all_skip": pct_all_skip,
            "x_plan": x_plan,
            "is_plan_reachable": is_plan_reachable
        }
        
    return {
        "T": T,
        "R": R,
        "A": A,
        "total": total,
        "x75": x75,
        "can_skip_75": can_skip_75,
        "is_irreversible": is_irreversible,
        "x90": x90,
        "can_skip_90": can_skip_90,
        "is_90_reachable": is_90_reachable,
        "max_achievable_pct": max_achievable_pct,
        "status": status,
        "future": future_metrics
    }

def run_test_cases():
    print("=== RUNNING TEST CASES ===")
    
    # Test 1: 100% on Day 1 (2026-08-29)
    print("\n[TEST 1] 100% on Day 1 (2026-08-29, Saturday before classes start on Monday)")
    T, R, _ = get_class_counts_for_subject("iv-ece-a", date(2026, 8, 29), today_done=False)
    subA = calculate_subject_metrics(100.0, T['A'], R['A'])
    print(f"Subject A: T={subA['T']}, R={subA['R']}, x75={subA['x75']} of {subA['R']}, can_skip={subA['can_skip_75']}, status={subA['status']}")
    assert subA['T'] == 0, f"Expected T=0 on Day 1, got {subA['T']}"
    assert subA['x75'] == math.ceil(0.75 * subA['R']), "x75 mismatch"
    assert subA['status'] == "SAFE"
    print("  -> TEST 1 PASSED!")
    
    # Test 2: 60% attendance with only 3 weeks left (e.g. 2026-11-08, 3 weeks before 2026-11-29)
    print("\n[TEST 2] 60% attendance with 3 weeks left (2026-11-08)")
    T2, R2, _ = get_class_counts_for_subject("iv-ece-a", date(2026, 11, 8), today_done=True)
    subA2 = calculate_subject_metrics(60.0, T2['A'], R2['A'])
    print(f"Subject A: T={subA2['T']}, R={subA2['R']}, A={subA2['A']:.1f}, x75={subA2['x75']} of {subA2['R']}, max_achievable={subA2['max_achievable_pct']:.1f}%, status={subA2['status']}")
    assert subA2['is_irreversible'] == True, f"Expected Irreversible Detention, got x75={subA2['x75']}, R={subA2['R']}"
    assert subA2['status'] == "IRREVERSIBLE"
    print("  -> TEST 2 PASSED (IRREVERSIBLE DETENTION TRIGGERED)!")
    
    # Test 3: Today after semester ends (2026-11-30)
    print("\n[TEST 3] Today after semester ends (2026-11-30)")
    T3, R3, _ = get_class_counts_for_subject("iv-ece-a", date(2026, 11, 30), today_done=True)
    subA3_pass = calculate_subject_metrics(80.0, T3['A'], R3['A'])
    subA3_fail = calculate_subject_metrics(70.0, T3['A'], R3['A'])
    print(f"80% Attended after sem end: T={subA3_pass['T']}, R={subA3_pass['R']}, x75={subA3_pass['x75']}, status={subA3_pass['status']}")
    print(f"70% Attended after sem end: T={subA3_fail['T']}, R={subA3_fail['fail'] if 'fail' in subA3_fail else subA3_fail['status']}, x75={subA3_fail['x75']}, status={subA3_fail['status']}")
    assert subA3_pass['R'] == 0
    assert subA3_fail['R'] == 0
    assert subA3_pass['status'] == "OK"
    assert subA3_fail['status'] == "IRREVERSIBLE"
    print("  -> TEST 3 PASSED!")
    
    # Test 4: Planning date before today and planning date after Nov 29
    print("\n[TEST 4] Planning dates (before today, and after semester end)")
    T4, R4, R_fut_past = get_class_counts_for_subject("iv-ece-a", date(2026, 9, 28), today_done=False, future_date=date(2026, 9, 20))
    print(f"Planning date in past (2026-09-20): R_future={R_fut_past['A']}")
    assert R_fut_past['A'] == 0
    
    T4, R4, R_fut_future = get_class_counts_for_subject("iv-ece-a", date(2026, 9, 28), today_done=False, future_date=date(2026, 12, 10))
    print(f"Planning date beyond sem end (2026-12-10): R_future={R_fut_future['A']}, total R={R4['A']}")
    assert R_fut_future['A'] == R4['A'], "Planning date beyond semester end should cap at total semester remaining"
    print("  -> TEST 4 PASSED!")

if __name__ == "__main__":
    run_test_cases()
