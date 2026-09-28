import pymupdf
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
folder = r"C:\Users\HARI HARA SUDHAN V\Downloads\drive-download-20260928T053348Z-1-001"
out_dir = r"d:\yuva\extracted_images"
os.makedirs(out_dir, exist_ok=True)

# VibeCraft instructions
vibe_path = r"C:\Users\HARI HARA SUDHAN V\Downloads\VibeCraft_Participant_Instructions.pdf"
if os.path.exists(vibe_path):
    doc = pymupdf.open(vibe_path)
    print("=== VIBECRAFT INSTRUCTIONS ===")
    for page in doc:
        print(page.get_text())

print("=== CONVERTING TIMETABLE PDFS TO PNG ===")
if os.path.exists(folder):
    for f in sorted(os.listdir(folder)):
        if f.endswith(".pdf"):
            doc = pymupdf.open(os.path.join(folder, f))
            for pno, page in enumerate(doc):
                pix = page.get_pixmap(dpi=200)
                base = os.path.splitext(f)[0]
                out_name = f"{base}_p{pno+1}.png" if len(doc) > 1 else f"{base}.png"
                pix.save(os.path.join(out_dir, out_name))
                print(f"Saved {out_name}")
