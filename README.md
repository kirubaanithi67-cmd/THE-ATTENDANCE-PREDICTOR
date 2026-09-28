# ⛏️ The Attendance Predictor (Phase 1 & Phase 2 Unified Suite)

An 8-bit Minecraft-themed static web application designed for engineering students to calculate and forecast their attendance, simulate future dates, calculate safe skips, model On-Duty (OD) & Medical Leave recovery, and interact with an AI Attendance Advisor Chatbot.

Deployed as a zero-dependency static site ready for instant hosting on **Vercel** or **GitHub Pages**.

---

## 🎮 Key Features

### Phase 1: The Core Calculator
- **13 Complete Class Sections**: Scanned timetables across 10 PDF documents (including multi-page I-Year sections) fully transcribed and verified against official credit matrices.
- **Semester Timeline**: Active from **29 Aug 2026** to **29 Nov 2026** (excluding weekends and customizable holidays).
- **Date Controls**: Auto-detects today's date (`2026-09-28`), with override option for testing, and a "Today's classes already over" checkbox.
- **Mathematical Forecasting**:
  - Total classes held so far ($T$), attended ($A$), and remaining in the semester ($R$).
  - **75% Mandatory Target**: Exact classes required to attend ($x_{75}$ of $R$) and safe skips allowed ($R - x_{75}$).
  - **90% Distinction Target**: Classes required to attend ($x_{90}$ of $R$) or maximum achievable percentage if unreachable.
  - **Future Planning Date**: Calculates attendance percentage under 100% attendance vs 0% attendance through any future date.
- **Flashing Nether Irreversible Alert**: Loud, animated red warning banner triggered whenever $x_{75} > R$.
- **Status Badges**: `[🟢 SAFE]`, `[🟡 OK]`, `[🟠 DANGER]`, `[💀 IRREVERSIBLE]`.

### Phase 2: Visuals, Leaves, & The AI Assistant
- **Visual Attendance Health Dashboard**:
  - Interactive comparison bar charts tracking each subject against the 75% and 90% benchmark lines.
  - Health status matrix categorized into Safe, OK, Danger, and Irreversible counts.
- **On-Duty (OD) & Medical Leave Simulator**:
  - Models the impact of approved symposium ODs, hackathon leaves, sports certificates, or medical leaves.
  - Instant recalculation of new attendance percentages and net boost ($+\Delta\%$).
- **The "Attendance Advisor" AI Chatbot (Steve • The Attendance Oracle)**:
  - Floating 8-bit chat assistant reading live timetable and attendance state.
  - Responds in natural language to questions such as:
    - *"If I take a 3-day sick leave starting tomorrow, will my Chemistry attendance drop below 75%?"*
    - *"Can I safely skip Friday?"*
    - *"How many total classes can I safely bunk?"*
    - *"What is my danger list right now?"*
- **8-Bit Web Audio Synthesizer**: Authentic retro sound effects for clicks, sliders, level ups, danger alarms, and chat beeps.

---

## 📐 Mathematical Formulation

Let:
- $T$ = Total classes held so far in the subject (from 29 Aug 2026 up to today).
- $R$ = Total classes remaining in the semester (today onward to 29 Nov 2026).
- $\text{pct}$ = Current attendance percentage input ($0 \le \text{pct} \le 100$).
- $A = \frac{\text{pct}}{100} \times T$ (classes attended so far).

### 1. Mandatory 75% Attendance Requirement
$$x_{75} = \max\left(0, \left\lceil 0.75 \times (T + R) - A \right\rceil\right)$$
- **Classes to attend**: $x_{75}$ of $R$.
- **Safe skips allowed**: $\max(0, R - x_{75})$.
- **Irreversible Detention condition**: $x_{75} > R$.

### 2. Distinction 90% Attendance Requirement
$$x_{90} = \max\left(0, \left\lceil 0.90 \times (T + R) - A \right\rceil\right)$$
- **If $x_{90} \le R$**: Reachable by attending $x_{90}$ classes.
- **If $x_{90} > R$**: Unreachable. The Maximum Achievable % is:
$$\text{Max Achievable } \% = \frac{A + R}{T + R} \times 100\%$$

---

## 🧪 Built-in Test Cases & Verification

Click **"🧪 RUN PRESET TESTS"** in the top navigation bar to run automated assertions:

| # | Test Scenario | Inputs | Expected Output | Status |
|---|---------------|--------|-----------------|--------|
| **1** | 100% attendance on Day 1 | `today = 2026-08-29`, `pct = 100%` | $T = 0$, $R > 0$, $x_{75} = \lceil 0.75 R \rceil$, Safe skips $= \lfloor 0.25 R \rfloor$ | `✔ PASSED` |
| **2** | 60% attendance with 3 weeks left | `today = 2026-11-08`, `pct = 60%` | $x_{75} > R$, Irreversible Detention alert triggered | `✔ PASSED` |
| **3** | Today after semester ends | `today = 2026-11-30`, `today_done = true` | $R = 0$, $80\% \to \text{OK}$, $70\% \to \text{IRREVERSIBLE}$ | `✔ PASSED` |
| **4** | Planning dates (past & beyond sem) | `past = 2026-09-20`, `beyond = 2026-12-10` | Past handled gracefully ($R_{\text{fut}} = 0$), beyond clamped to semester end | `✔ PASSED` |

---

## 🚀 How to Deploy on Vercel

### Option 1: Via GitHub & Vercel Dashboard (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "Deploy Attendance Predictor Phase 1 & 2"
   git push origin main
   ```
2. Open [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository (`THE-ATTENDANCE-PREDICTOR`).
4. Keep the default settings (Framework Preset: **Other**, Build Command: empty, Output Directory: `./`).
5. Click **"Deploy"**. Your site is live immediately!

### Option 2: Via Vercel CLI
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy directly from the project folder
vercel --prod
```

---

## 💻 Running Locally

You can run this project locally with any static web server:

```bash
# Using Python 3:
python -m http.server 3000

# Using Node.js:
npx serve . -p 3000
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.
