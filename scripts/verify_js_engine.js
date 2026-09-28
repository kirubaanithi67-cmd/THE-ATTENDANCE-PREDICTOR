const { TIMETABLES_DATA } = require('../data/timetables.js');

const SEM_START = new Date('2026-08-29T00:00:00');
const SEM_END = new Date('2026-11-29T23:59:59');

function parseDateStr(str) {
  if (!str) return null;
  const parts = str.split('-');
  if (parts.length !== 3) return null;
  return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
}

function formatDateStr(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function calculateSectionAttendance({
  sectionId,
  todayStr = '2026-09-28',
  todayDone = false,
  holidaysList = [],
  futureDateStr = '',
  subjectPercentages = {} // { [subjectKey]: percentageNumber }
}) {
  const section = TIMETABLES_DATA.find(s => s.id === sectionId);
  if (!section) throw new Error(`Section ${sectionId} not found`);

  const todayDate = parseDateStr(todayStr) || new Date('2026-09-28T00:00:00');
  const futureDate = parseDateStr(futureDateStr);

  const holidaySet = new Set(holidaysList.map(h => h.trim()).filter(Boolean));

  const subjects = section.subjects;
  const grid = section.grid;

  const T = {}; // Classes held so far
  const R = {}; // Classes remaining in semester
  const R_future = futureDate ? {} : null;

  Object.keys(subjects).forEach(k => {
    T[k] = 0;
    R[k] = 0;
    if (R_future) R_future[k] = 0;
  });

  const cur = new Date(SEM_START.getTime());
  while (cur <= SEM_END) {
    const curStr = formatDateStr(cur);
    const dayOfWeek = cur.getDay(); // 0 is Sun, 6 is Sat

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && !holidaySet.has(curStr)) {
      const gridRowIdx = dayOfWeek - 1; // 0=Mon, 4=Fri
      const dayPeriods = grid[gridRowIdx];

      const dayCounts = {};
      Object.keys(subjects).forEach(k => { dayCounts[k] = 0; });

      dayPeriods.forEach(cell => {
        if (!cell) return;
        if (cell.includes('/') && !subjects[cell]) {
          const parts = cell.split('/');
          parts.forEach(p => {
            const trimmed = p.trim();
            if (dayCounts[trimmed] !== undefined) dayCounts[trimmed]++;
          });
        } else if (dayCounts[cell] !== undefined) {
          dayCounts[cell]++;
        }
      });

      const isBeforeToday = curStr < todayStr;
      const isToday = curStr === todayStr;
      const isAfterToday = curStr > todayStr;

      if (isBeforeToday) {
        Object.keys(dayCounts).forEach(k => { T[k] += dayCounts[k]; });
      } else if (isToday) {
        if (todayDone) {
          Object.keys(dayCounts).forEach(k => { T[k] += dayCounts[k]; });
        } else {
          Object.keys(dayCounts).forEach(k => { R[k] += dayCounts[k]; });
        }
      } else if (isAfterToday) {
        Object.keys(dayCounts).forEach(k => { R[k] += dayCounts[k]; });
      }

      // Future planning range calculation
      if (futureDate) {
        const isPastFuture = futureDateStr < todayStr;
        if (!isPastFuture) {
          if (curStr >= todayStr && curStr <= futureDateStr) {
            if (isToday && todayDone) {
              // already held today, doesn't count towards remaining future
            } else {
              Object.keys(dayCounts).forEach(k => { R_future[k] += dayCounts[k]; });
            }
          }
        }
      }
    }

    cur.setDate(cur.getDate() + 1);
  }

  // Calculate metrics per subject
  const subjectResults = {};
  let totalAttended = 0;
  let totalHeld = 0;
  let totalRemaining = 0;
  const irreversibleSubjects = [];

  Object.keys(subjects).forEach(k => {
    const info = subjects[k];
    const subT = T[k] || 0;
    const subR = R[k] || 0;
    const subTotal = subT + subR;

    const rawPct = subjectPercentages[k] !== undefined ? Number(subjectPercentages[k]) : 85;
    const pct = Math.max(0, Math.min(100, isNaN(rawPct) ? 85 : rawPct));

    const A = (pct / 100.0) * subT;
    totalAttended += A;
    totalHeld += subT;
    totalRemaining += subR;

    const x75 = Math.max(0, Math.ceil(0.75 * subTotal - A));
    const canSkip75 = Math.max(0, subR - x75);
    const isIrreversible = x75 > subR;

    const x90 = Math.max(0, Math.ceil(0.90 * subTotal - A));
    const canSkip90 = Math.max(0, subR - x90);
    const is90Reachable = x90 <= subR;
    const maxAchievablePct = subTotal > 0 ? ((A + subR) / subTotal * 100.0) : 100.0;

    let status = 'SAFE';
    if (isIrreversible) {
      status = 'IRREVERSIBLE';
      irreversibleSubjects.push({ key: k, name: info.name, maxAchievablePct, x75, R: subR });
    } else if (pct < 75) {
      status = 'DANGER';
    } else if (pct < 90) {
      status = 'OK';
    } else {
      status = 'SAFE';
    }

    let futureResult = null;
    if (R_future) {
      const subR_fut = R_future[k] || 0;
      const futTotal = subT + subR_fut;
      const pctAllAttend = futTotal > 0 ? ((A + subR_fut) / futTotal * 100.0) : 100.0;
      const pctAllSkip = futTotal > 0 ? (A / futTotal * 100.0) : 100.0;
      const xPlan = Math.max(0, Math.ceil(0.75 * futTotal - A));
      const isPlanReachable = xPlan <= subR_fut;

      futureResult = {
        R_future: subR_fut,
        pctAllAttend,
        pctAllSkip,
        xPlan,
        isPlanReachable
      };
    }

    subjectResults[k] = {
      key: k,
      info,
      T: subT,
      R: subR,
      total: subTotal,
      pct,
      A,
      x75,
      canSkip75,
      isIrreversible,
      x90,
      canSkip90,
      is90Reachable,
      maxAchievablePct,
      status,
      future: futureResult
    };
  });

  const overallPct = totalHeld > 0 ? ((totalAttended / totalHeld) * 100.0) : 100.0;
  const overallMaxPossible = (totalHeld + totalRemaining) > 0
    ? ((totalAttended + totalRemaining) / (totalHeld + totalRemaining) * 100.0)
    : 100.0;

  return {
    section,
    todayStr,
    todayDone,
    totalHeld,
    totalRemaining,
    overallPct,
    overallMaxPossible,
    hasIrreversible: irreversibleSubjects.length > 0,
    irreversibleSubjects,
    subjects: subjectResults
  };
}

// Self test
console.log('--- Testing JS Attendance Engine ---');
const testRes = calculateSectionAttendance({
  sectionId: 'iv-ece-a',
  todayStr: '2026-09-28',
  todayDone: false,
  subjectPercentages: { A: 100, B: 60, C: 80, D: 75, E: 90, F: 85, LAB: 100 }
});
console.log('Section:', testRes.section.name);
console.log('Total Held Periods:', testRes.totalHeld);
console.log('Total Remaining Periods:', testRes.totalRemaining);
console.log('Overall Pct:', testRes.overallPct.toFixed(2) + '%');
console.log('Has Irreversible Detention:', testRes.hasIrreversible);
console.log('Subject A:', testRes.subjects['A']);

module.exports = { calculateSectionAttendance, parseDateStr, formatDateStr };
