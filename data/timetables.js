// The Attendance Predictor - Timetable Dataset (13 Sections)
window.TIMETABLES_DATA = [
  {
    id: "ii-bme",
    name: "II BME",
    year: "II Year",
    semester: "III Semester",
    venue: "IST 602 / FN",
    subjects: {
      A: { code: "21MAB201T", name: "Transforms and Boundary Value Problems", faculty: "Dr. A. Manickam", venue: "IST 602", credit: "3-1-0-4", expected: 4 },
      B: { code: "21BMC202T", name: "Biomedical Signals and Systems", faculty: "Dr. Senthil Kumaran V N", venue: "IST 602", credit: "3-0-0-3", expected: 3 },
      C: { code: "21BMC203J", name: "Electric and Electronic Circuits", faculty: "Dr. Prabin Kumar Bera", venue: "IST 602", credit: "3-0-2-4", expected: 3 },
      D: { code: "21BMC204J", name: "Digital Logic for Medical Systems", faculty: "Dr. G. Gifta", venue: "IST 602", credit: "2-0-2-3", expected: 3 },
      E: { code: "21PYS202T", name: "Medical Physics", faculty: "Dr. D. Rajeswari", venue: "IST 602", credit: "3-0-0-3", expected: 3 },
      F: { code: "21LEM201T", name: "Professional Ethics", faculty: "Dr. H. SriBhuvaneshwari", venue: "IST 602", credit: "1-0-0-0", expected: 1 },
      G: { code: "21LEM202T", name: "Universal Human Values-II", faculty: "Mrs. N. Suganthi", venue: "IST 602", credit: "2-1-0-3", expected: 3 },
      H: { code: "21PDM201L", name: "Verbal Reasoning (CDC)", faculty: "CDC Faculty", venue: "TB-106", credit: "0-0-2-0", expected: 2 },
      I: { code: "21PDH201T", name: "Social Engineering", faculty: "Mrs. Francis Arockiya Mary", venue: "IST 602", credit: "2-0-0-2", expected: 2 },
      "DLMS/EEC": { code: "DLMS/EEC", name: "DLMS / EEC Laboratory", faculty: "Lab Faculty", venue: "107, 309", credit: "0-0-4-2", expected: 4 }
    },
    grid: [
      ["E", "C", "I", "I", "", "DLMS/EEC", "DLMS/EEC", "", ""],
      ["C", "E", "B", "A", "", "H", "H", "", ""],
      ["B", "D", "A", "", "", "H", "G", "", ""],
      ["A", "E", "B", "D", "", "", "", "DLMS/EEC", "DLMS/EEC"],
      ["F", "A", "C", "D", "", "", "", "G", "G"]
    ]
  },
  {
    id: "ii-ece-ds-a",
    name: "II ECE-DS A",
    year: "II Year",
    semester: "III Semester",
    venue: "IST 416 / FN",
    subjects: {
      A: { code: "21MAB201T", name: "Transforms and Boundary Value Problems", faculty: "Dr. C. Arun Kumar", venue: "IST 416", credit: "3-1-0-4", expected: 4 },
      B: { code: "21ECC201T", name: "Solid State Devices", faculty: "Dr. Jeevanantham S", venue: "IST 416", credit: "3-0-0-3", expected: 3 },
      C: { code: "21CSS201T", name: "Computer Organization and Architecture", faculty: "Dr. P. Murugapandiyan", venue: "IST 416", credit: "3-1-0-4", expected: 4 },
      D: { code: "21ECC203T", name: "Digital Logic Design", faculty: "Dr. S. Krishnakumar", venue: "IST 416", credit: "3-0-0-3", expected: 3 },
      E: { code: "21ECC205T", name: "Electromagnetic Theory and Interference", faculty: "Dr. V. Bharathi", venue: "IST 416", credit: "3-0-0-3", expected: 3 },
      F: { code: "21LEM201T", name: "Professional Ethics", faculty: "Dr. Jothi M", venue: "IST 416", credit: "1-0-0-0", expected: 1 },
      G: { code: "21LEM202T", name: "Universal Human Values-II", faculty: "Mrs. N. Suganthi", venue: "IST 602", credit: "2-1-0-3", expected: 3 },
      H: { code: "21PDM201L", name: "Verbal Reasoning (CDC)", faculty: "CDC Faculty", venue: "TB-106", credit: "0-0-2-0", expected: 2 },
      I: { code: "21PDH209T", name: "Social Engineering", faculty: "Mrs. D. Lavanya", venue: "IST 416", credit: "2-0-0-2", expected: 2 },
      LAB: { code: "21ECC211L", name: "Devices and Digital IC Laboratory", faculty: "Dr. Jeevanantham S / Dr. V. Bharathi", venue: "LAB-309/107", credit: "0-0-4-2", expected: 4 }
    },
    grid: [
      ["E", "A", "I", "I", "", "G", "G", "LAB", "LAB"],
      ["C", "A", "E", "D", "", "G", "", "H", "H"],
      ["A", "B", "C", "D", "", "", "H", "", ""],
      ["B", "C", "A", "F", "", "LAB", "LAB", "", ""],
      ["D", "B", "E", "C", "", "", "", "", ""]
    ]
  },
  {
    id: "ii-ece-ds-b",
    name: "II ECE-DS B",
    year: "II Year",
    semester: "III Semester",
    venue: "IST 411 / AN",
    subjects: {
      A: { code: "21MAB201T", name: "Transforms and Boundary Value Problems", faculty: "NEW FACULTY 3", venue: "IST 411", credit: "3-1-0-4", expected: 4 },
      B: { code: "21ECC201T", name: "Solid State Devices", faculty: "Dr. Jeevanantham S", venue: "IST 411", credit: "3-0-0-3", expected: 3 },
      C: { code: "21CSS201T", name: "Computer Organization and Architecture", faculty: "Dr. P. Murugapandiyan", venue: "IST 411", credit: "3-1-0-4", expected: 4 },
      D: { code: "21ECC203T", name: "Digital Logic Design", faculty: "Dr. S. Krishnakumar", venue: "IST 411", credit: "3-0-0-3", expected: 3 },
      E: { code: "21ECC205T", name: "Electromagnetic Theory and Interference", faculty: "Dr. V. Bharathi", venue: "IST 411", credit: "3-0-0-3", expected: 3 },
      F: { code: "21LEM201T", name: "Professional Ethics", faculty: "Dr. K. Vigneshwaran", venue: "IST 411", credit: "1-0-0-0", expected: 1 },
      G: { code: "21LEM202T", name: "Universal Human Values-II", faculty: "Mrs. D. Lavanya", venue: "IST 401", credit: "2-1-0-3", expected: 3 },
      H: { code: "21PDM201L", name: "Verbal Reasoning (CDC)", faculty: "CDC Faculty", venue: "TB-106", credit: "0-0-2-0", expected: 2 },
      I: { code: "21PDH209T", name: "Social Engineering", faculty: "Mrs. D. Lavanya", venue: "IST 411", credit: "2-0-0-2", expected: 2 },
      LAB: { code: "21ECC211L", name: "Devices and Digital IC Laboratory", faculty: "Dr. S. Krishnakumar", venue: "LAB-309/107", credit: "0-0-4-2", expected: 4 }
    },
    grid: [
      ["", "", "LAB", "LAB", "", "D", "B", "C", "I"],
      ["LAB", "LAB", "", "", "", "C", "D", "E", "A"],
      ["G", "G", "", "", "", "I", "E", "A", "D"],
      ["G", "", "H", "H", "", "A", "C", "B", "E"],
      ["H", "", "", "", "", "F", "A", "B", "C"]
    ]
  },
  {
    id: "iii-bme",
    name: "III BME",
    year: "III Year",
    semester: "V Semester",
    venue: "IST 211 / AN",
    subjects: {
      A: { code: "21MAB301T", name: "Probability and Statistics", faculty: "Dr. K. M. Karuppusamy", venue: "IST 211", credit: "3-1-0-4", expected: 4 },
      B: { code: "21BMC302J", name: "Microcontrollers and Its Application in Medicine", faculty: "Dr. K. Vigneshwaran", venue: "IST 211", credit: "3-0-2-4", expected: 3 },
      C: { code: "21BMC301J", name: "Biomedical Signal Processing", faculty: "Dr. V. N. Senthilkumaran", venue: "IST 211", credit: "3-0-2-4", expected: 3 },
      D: { code: "21BME266T", name: "Biometrics", faculty: "Dr. G. Gifta", venue: "IST 211", credit: "3-0-0-3", expected: 3 },
      E: { code: "21ECO103T", name: "Modern wireless communication system", faculty: "Dr. Vaishnavi", venue: "IST 211", credit: "3-0-0-3", expected: 3 },
      F: { code: "21BMC303T", name: "Principles of Medical Imaging", faculty: "Dr. N. Prasana venkatesh", venue: "IST 211", credit: "3-0-0-3", expected: 3 },
      G: { code: "21PDM301L", name: "Analytical and Logical Thinking Skills (CDC)", faculty: "CDC Faculty", venue: "CDC-625", credit: "0-0-2-0", expected: 2 },
      H: { code: "21LEM301T", name: "Indian Art Form", faculty: "Dr. G. Gifta", venue: "IST 211", credit: "1-0-0-0", expected: 1 },
      I: { code: "21GNP301L", name: "Community Connect", faculty: "Dr. J. Jencia / Dr. N. Prasanna Venkatesh", venue: "I-108", credit: "0-0-2-1", expected: 2 },
      "LAB-MPMC": { code: "MPMC-LAB", name: "MPMC LAB (Microcontroller Lab)", faculty: "Lab Faculty", venue: "LAB-107", credit: "0-0-2-1", expected: 2 },
      "LAB-DSP": { code: "BIO-DSP-LAB", name: "BIO DSP LAB", faculty: "Lab Faculty", venue: "LAB-108", credit: "0-0-2-1", expected: 2 }
    },
    grid: [
      ["G", "", "LAB-MPMC", "LAB-MPMC", "", "E", "B", "F", "H"],
      ["LAB-DSP", "LAB-DSP", "G", "", "", "C", "D", "A", "B"],
      ["", "", "", "", "", "C", "A", "F", "D"],
      ["", "", "", "I", "", "A", "C", "E", "B"],
      ["I", "", "", "", "", "F", "A", "D", "E"]
    ]
  },
  {
    id: "iii-ece-a",
    name: "III ECE-A",
    year: "III Year",
    semester: "V Semester",
    venue: "IST 518 / FN",
    subjects: {
      A: { code: "21MAB302T", name: "Discrete Mathematics", faculty: "New Faculty 3", venue: "IST 518", credit: "3-1-0-4", expected: 4 },
      B: { code: "21ECC301P", name: "Microprocessor, Microcontroller & Interfacing (incl. B-Proj)", faculty: "Dr. M. Manikandan", venue: "IST 518", credit: "3-1-0-4", expected: 4 },
      C: { code: "21ECC303T", name: "VLSI Design and Technology", faculty: "Dr. M. Jothi", venue: "IST 518", credit: "3-0-0-3", expected: 3 },
      D: { code: "21ECE468T", name: "System and Network on Chip", faculty: "Dr. V. Manikandan", venue: "IST 518", credit: "3-0-0-3", expected: 3 },
      E: { code: "21CSO355T", name: "Machine learning for all", faculty: "Dr. J. Jencia", venue: "IST 518", credit: "3-0-0-3", expected: 3 },
      F: { code: "21GNP301L", name: "Community connect", faculty: "Dr. V. Rajesh / Dr. V. Bharathi", venue: "IST 518", credit: "0-0-2-1", expected: 2 },
      G: { code: "21PDM301L", name: "Analytical and logical thinking skills (CDC)", faculty: "CDC Faculty", venue: "CDC/625", credit: "0-0-2-0", expected: 2 },
      H: { code: "21LEM301T", name: "Indian Art Form", faculty: "Dr. K. Vigneshwaran", venue: "IST 518", credit: "1-0-0-0", expected: 1 },
      LAB: { code: "21ECC311L", name: "VLSI Design / Microprocessor Laboratory", faculty: "Dr. M. Jothi & Dr. P. Murugapandiyan", venue: "LAB-108/309", credit: "0-0-4-2", expected: 4 }
    },
    grid: [
      ["E", "B", "B", "A", "", "G", "G", "", ""],
      ["H", "D", "B", "B", "", "", "G", "", ""],
      ["C", "A", "D", "F", "", "", "", "LAB", "LAB"],
      ["A", "E", "C", "F", "", "", "", "", ""],
      ["D", "A", "E", "C", "", "LAB", "LAB", "", ""]
    ]
  },
  {
    id: "iii-ece-b",
    name: "III ECE-B",
    year: "III Year",
    semester: "V Semester",
    venue: "IST 518 / AN",
    subjects: {
      A: { code: "21MAB302T", name: "Discrete Mathematics", faculty: "Dr. M. Thanga Rejini", venue: "IST 518", credit: "3-1-0-4", expected: 4 },
      B: { code: "21ECC301P", name: "Microprocessor, Microcontroller & Interfacing (incl. B-Proj)", faculty: "Mrs. B. Abirami", venue: "IST 518", credit: "3-1-0-4", expected: 4 },
      C: { code: "21ECC303T", name: "VLSI Design and Technology", faculty: "Dr. R. Vinoth Raj", venue: "IST 518", credit: "3-0-0-3", expected: 3 },
      D: { code: "21ECE468T", name: "System and Network on Chip", faculty: "Dr. V. Manikandan", venue: "IST 518", credit: "3-0-0-3", expected: 3 },
      E: { code: "21CSO355T", name: "Machine learning for all", faculty: "Dr. J. Jencia", venue: "IST 518", credit: "3-0-0-3", expected: 3 },
      F: { code: "21GNP301L", name: "Community connect", faculty: "Dr. H. Sudharsan / Ms. T. Swetha", venue: "IST 518", credit: "0-0-2-1", expected: 2 },
      G: { code: "21PDM301L", name: "Analytical and logical thinking skills (CDC)", faculty: "CDC Faculty", venue: "CDC-625", credit: "0-0-2-0", expected: 2 },
      H: { code: "21LEM301T", name: "Indian Art Form", faculty: "Dr. A. Anand", venue: "IST 518", credit: "1-0-0-0", expected: 1 },
      LAB: { code: "21ECC311L", name: "VLSI Design / Microprocessor Laboratory", faculty: "Dr. Sreenivasa Ijada Rao / Dr. B. DeviSri", venue: "LAB-108/309", credit: "0-0-4-2", expected: 4 }
    },
    grid: [
      ["LAB", "LAB", "", "", "", "E", "B", "A", "D"],
      ["", "G", "", "", "", "F", "B", "D", "C"],
      ["G", "", "", "", "", "B", "B", "A", "H"],
      ["LAB", "LAB", "", "", "", "A", "C", "E", "F"],
      ["", "", "", "", "", "C", "A", "E", "D"]
    ]
  },
  {
    id: "iii-ece-ds",
    name: "III ECE-DS",
    year: "III Year",
    semester: "V Semester",
    venue: "IST 519 / FN",
    subjects: {
      A: { code: "21MAB302T", name: "Discrete Mathematics", faculty: "New faculty 2", venue: "IST 519", credit: "3-1-0-4", expected: 4 },
      B: { code: "21ECC301P", name: "Microprocessor, Microcontroller & Interfacing (incl. B-Proj)", faculty: "Mrs. B. Abirami", venue: "IST 519", credit: "3-1-0-4", expected: 4 },
      C: { code: "21ECC303T", name: "VLSI Design and Technology", faculty: "Dr. R. Vinoth Raj", venue: "IST 519", credit: "3-0-0-3", expected: 3 },
      D: { code: "21CSO355T", name: "Machine learning for all", faculty: "Dr. Dr. Chitra Devi", venue: "IST 519", credit: "3-0-0-3", expected: 3 },
      E: { code: "21ECE371T", name: "Database Design and Management", faculty: "Dr. S. Saraswathi", venue: "IST 519", credit: "3-0-0-3", expected: 3 },
      F: { code: "21GNP301L", name: "Community connect", faculty: "Dr. S. Jeevanantham / Dr. V. Manikandan", venue: "IST 519", credit: "0-0-2-1", expected: 2 },
      G: { code: "21PDM301L", name: "Analytical and logical thinking skills (CDC)", faculty: "CDC Faculty", venue: "CDC-625", credit: "0-0-2-0", expected: 2 },
      H: { code: "21LEM301T", name: "Indian Art Form", faculty: "Dr. Prabin Kumar Bera", venue: "IST 519", credit: "1-0-0-0", expected: 1 },
      LAB: { code: "21ECC311L", name: "VLSI Design / Microprocessor Laboratory", faculty: "Dr. R. Vinothraj / Dr. H. Sri Bhuvaneshwari", venue: "LAB-108/107", credit: "0-0-4-2", expected: 4 }
    },
    grid: [
      ["E", "B", "C", "A", "", "", "", "", ""],
      ["C", "B", "D", "F", "", "LAB", "LAB", "", ""],
      ["H", "B", "A", "C", "", "", "", "", "G"],
      ["A", "D", "E", "F", "", "", "", "", ""],
      ["D", "A", "E", "B", "", "G", "", "LAB", "LAB"]
    ]
  },
  {
    id: "iv-ece-a",
    name: "IV ECE-A",
    year: "IV Year",
    semester: "VII Semester",
    venue: "IST 225",
    subjects: {
      A: { code: "21GNH401T", name: "Behavioural Psychology", faculty: "Dr. A. Anand", venue: "IST 225", credit: "2-1-0-3", expected: 3 },
      B: { code: "21ECC401T", name: "Wireless Communication and Antenna Systems", faculty: "Dr. K. Vigneshwaran", venue: "IST 225", credit: "3-0-0-3", expected: 3 },
      C: { code: "21ECC402P", name: "Computer Communication and Network Security (Theory)", faculty: "Dr. S. Jeevanantham", venue: "IST 225", credit: "2-1-0-3", expected: 3 },
      D: { code: "21ECE461T", name: "Semiconductor Memory Design", faculty: "Dr. H. SriBhuvaneshwari", venue: "IST 225", credit: "3-0-0-3", expected: 3 },
      E: { code: "21ECE463T", name: "Scripting Language for Electronic Design Automation", faculty: "Dr. Sreenivasa Rao Ijada", venue: "IST 225", credit: "3-0-0-3", expected: 3 },
      F: { code: "21CSO355T", name: "Machine learning for all", faculty: "Dr. N. Prasanna Venkatesh", venue: "IST 225", credit: "3-0-0-3", expected: 3 },
      LAB: { code: "21ECC402P", name: "Computer Communication and Network Security (Lab)", faculty: "Mrs. T. Swetha", venue: "LAB-IST 108", credit: "2-1-0-3", expected: 1 }
    },
    grid: [
      ["C", "", "A", "D", "", "", "", "", ""],
      ["C", "D", "B", "F", "", "", "", "", ""],
      ["B", "LAB", "E", "F", "", "", "", "", ""],
      ["F", "A", "E", "B", "", "", "", "", ""],
      ["C", "A", "D", "E", "", "", "", "", ""]
    ]
  },
  {
    id: "iv-ece-b",
    name: "IV ECE-B",
    year: "IV Year",
    semester: "VII Semester",
    venue: "IST 227",
    subjects: {
      A: { code: "21GNH401T", name: "Behavioural Psychology", faculty: "Dr. A. Annand", venue: "IST 227", credit: "2-1-0-3", expected: 3 },
      B: { code: "21ECC401T", name: "Wireless Communication and Antenna Systems", faculty: "Dr. K. Vigneshwaran", venue: "IST 227", credit: "3-0-0-3", expected: 3 },
      C: { code: "21ECC402P", name: "Computer Communication and Network Security (Theory)", faculty: "Dr. R. Rajasekar", venue: "IST 227", credit: "2-1-0-3", expected: 3 },
      D: { code: "21ECE461T", name: "Semiconductor Memory Design", faculty: "Dr. H. SriBhuvaneshwari", venue: "IST 227", credit: "3-0-0-3", expected: 3 },
      E: { code: "21ECE463T", name: "Scripting Language for Electronic Design Automation", faculty: "Dr. Sreenivasa Rao Ijada", venue: "IST 227", credit: "3-0-0-3", expected: 3 },
      F: { code: "21CSO355T", name: "Machine learning for all", faculty: "Dr. N. Prasanna Venkatesh", venue: "IST 227", credit: "3-0-0-3", expected: 3 },
      LAB: { code: "21ECC402P", name: "Computer Communication and Network Security (Lab)", faculty: "Ms. T. Swetha", venue: "LAB-IST 108", credit: "2-1-0-3", expected: 1 }
    },
    grid: [
      ["C", "A", "E", "F", "", "", "", "", ""],
      ["C", "E", "F", "B", "", "", "", "", ""],
      ["C", "D", "A", "B", "", "", "", "", ""],
      ["D", "B", "LAB", "A", "", "", "", "", ""],
      ["E", "D", "F", "", "", "", "", "", ""]
    ]
  },
  {
    id: "i-ece-a",
    name: "I ECE-A",
    year: "I Year",
    semester: "I Semester",
    venue: "IST 602",
    subjects: {
      German: { code: "21LEH104T", name: "German", faculty: "Mr. Selva", venue: "IST 602 / 626", credit: "2-1-0-3", expected: 3 },
      E: { code: "21GNH101J", name: "Philosophy of Engineering", faculty: "Dr. R. Aarthi", venue: "IST 602", credit: "1-0-2-2", expected: 3 },
      A: { code: "21MAB102T", name: "Advanced Calculus and Complex Analysis", faculty: "Dr. R. Ragul", venue: "IST 602", credit: "3-1-0-4", expected: 4 },
      B: { code: "21CYB101J", name: "Chemistry (Theory)", faculty: "Dr. P. Pachamuthu", venue: "IST 602", credit: "3-1-2-5", expected: 4 },
      "Che-Lab": { code: "21CYB101J-L", name: "Chemistry Lab", faculty: "Dr. P. Pachamuthu", venue: "Che lab", credit: "3-1-2-5", expected: 2 },
      C: { code: "21BTB102J", name: "Electronic System and PCB Design (Theory)", faculty: "Dr. U. Shajith Ali", venue: "IST 602", credit: "2-0-0-2", expected: 2 },
      "PCB-Lab": { code: "21BTB102J-L", name: "PCB Lab", faculty: "Dr. U. Shajith Ali", venue: "PCB Lab IST 108", credit: "2-0-0-2", expected: 2 },
      D: { code: "21CSS101J", name: "Programming for Problem Solving (Theory)", faculty: "Dr. A. Rama Prasath", venue: "IST 602", credit: "3-0-2-4", expected: 3 },
      "PPS-Lab": { code: "21CSS101J-L", name: "PPS LAB", faculty: "Dr. A. Rama Prasath", venue: "PPS LAB IST 618", credit: "3-0-2-4", expected: 2 },
      Workshop: { code: "21MES101L", name: "Basic Civil and Mechanical Workshop", faculty: "Dr. N.S. Balaji / Dr. M. Kumaran", venue: "Workshop (IST 20,21)", credit: "0-0-4-2", expected: 4 },
      CDC: { code: "21PDM102L", name: "General Aptitude (CDC)", faculty: "Mr. Sivanandhan", venue: "CDC IST510/710", credit: "0-0-2-0", expected: 2 },
      NSS: { code: "21GNM102L", name: "NSS", faculty: "Dr. R. Manickam", venue: "NSS IST201", credit: "0-0-2-0", expected: 2 },
      F: { code: "21BTB103T", name: "Biology", faculty: "Dr. M. Jaya Priya", venue: "IST 602 / 710", credit: "2-0-0-2", expected: 2 }
    },
    grid: [
      ["E", "E", "B", "A", "", "Che-Lab", "Che-Lab", "F", "CDC"],
      ["C", "B", "A", "D", "", "Workshop", "Workshop", "Workshop", "Workshop"],
      ["B", "E", "D", "", "", "PPS-Lab", "PPS-Lab", "PCB-Lab", "PCB-Lab"],
      ["German", "German", "", "A", "", "CDC", "CDC", "NSS", "NSS"],
      ["D", "A", "C", "B", "", "F", "", "German", ""]
    ]
  },
  {
    id: "i-ece-b-eee",
    name: "I ECE-B / EEE",
    year: "I Year",
    semester: "I Semester",
    venue: "IST 602",
    subjects: {
      German: { code: "21LEH104T", name: "German", faculty: "Mr. Selva", venue: "IST 602 / 626", credit: "2-1-0-3", expected: 3 },
      E: { code: "21GNH101J", name: "Philosophy of Engineering", faculty: "Dr. R. Aarthi", venue: "IST 602", credit: "1-0-2-2", expected: 3 },
      A: { code: "21MAB102T", name: "Advanced Calculus and Complex Analysis", faculty: "Dr. M. Deepa", venue: "IST 602 / 710", credit: "3-1-0-4", expected: 4 },
      B: { code: "21CYB101J", name: "Chemistry (Theory)", faculty: "Dr. N. Prabhu", venue: "IST 602", credit: "3-1-2-5", expected: 4 },
      "Che-Lab": { code: "21CYB101J-L", name: "Chemistry Lab", faculty: "Dr. N. Prabhu", venue: "Che lab", credit: "3-1-2-5", expected: 2 },
      F: { code: "21BTB102J", name: "Electronic System & PCB Design (for ECE)", faculty: "Dr. U. Shajith Ali", venue: "IST 710", credit: "2-0-0-2", expected: 2 },
      G: { code: "21EEC101J", name: "Electrical Circuits (for EEE)", faculty: "Dr. Dheepanchakkravarthy", venue: "IST 520", credit: "2-0-0-2", expected: 2 },
      D: { code: "21CSS101J", name: "Programming for Problem Solving (Theory)", faculty: "Dr. A. Rama Prasath", venue: "IST 602", credit: "3-0-2-4", expected: 3 },
      "PPS-Lab": { code: "21CSS101J-L", name: "PPS LAB", faculty: "Dr. A. Rama Prasath", venue: "PPS LAB IST 617/618", credit: "3-0-2-4", expected: 2 },
      Workshop: { code: "21MES101L", name: "Basic Civil and Mechanical Workshop", faculty: "Dr. Modasir MD Khan / Mr. M. Karthikeyan", venue: "Workshop (IST 20,21)", credit: "0-0-4-2", expected: 4 },
      CDC: { code: "21PDM102L", name: "General Aptitude (CDC)", faculty: "Mrs. Thenmozhi", venue: "CDC IST609/510", credit: "0-0-2-0", expected: 2 },
      NSS: { code: "21GNM102L", name: "NSS", faculty: "Dr. R. Manickam", venue: "NSS 201", credit: "0-0-2-0", expected: 2 },
      C: { code: "21BTB103T", name: "Biology", faculty: "Dr. M. Jaya Priya", venue: "IST 602 / 626", credit: "2-0-0-2", expected: 2 },
      "PCB-Lab": { code: "PCB/EC-Lab", name: "PCB Lab / EC Lab", faculty: "Lab Faculty", venue: "IST 617", credit: "0-0-2-1", expected: 2 }
    },
    grid: [
      ["CDC", "F/G", "Che-Lab", "Che-Lab", "", "E", "E", "B", "A"],
      ["Workshop", "Workshop", "Workshop", "Workshop", "", "C", "B", "A", "D"],
      ["F/G", "PPS-Lab", "CDC", "CDC", "", "PPS-Lab", "B", "E", "D"],
      ["NSS", "NSS", "C", "A", "", "D", "", "German", "German"],
      ["PCB-Lab", "PCB-Lab", "", "", "", "German", "", "B", "A"]
    ]
  },
  {
    id: "i-ece-ds",
    name: "I ECE-DS",
    year: "I Year",
    semester: "I Semester",
    venue: "IST 502",
    subjects: {
      German: { code: "21LEH104T", name: "German", faculty: "Mr. Selva", venue: "IST 502 / 626", credit: "2-1-0-3", expected: 3 },
      E: { code: "21GNH101J", name: "Philosophy of Engineering", faculty: "Dr. R. Ramesh", venue: "IST 502", credit: "1-0-2-2", expected: 3 },
      A: { code: "21MAB102T", name: "Advanced Calculus and Complex Analysis", faculty: "Dr. Pandiyarajan", venue: "IST 502 / 710 / 510", credit: "3-1-0-4", expected: 4 },
      B: { code: "21CYB101J", name: "Chemistry (Theory)", faculty: "Dr. Ujjwala", venue: "IST 502", credit: "3-1-2-5", expected: 4 },
      "Che-Lab": { code: "21CYB101J-L", name: "Chemistry Lab", faculty: "Dr. Ujjwala", venue: "Che lab", credit: "3-1-2-5", expected: 2 },
      C: { code: "21BTB102J", name: "Electronic System and PCB Design (Theory)", faculty: "Dr. V.N. Senthil Kumaran", venue: "IST 502", credit: "2-0-0-2", expected: 2 },
      "PCB-Lab": { code: "21BTB102J-L", name: "PCB Lab", faculty: "Dr. V.N. Senthil Kumaran", venue: "PCB Lab IST 617", credit: "2-0-0-2", expected: 2 },
      D: { code: "21CSS101J", name: "Programming for Problem Solving (Theory)", faculty: "Mrs. R. Sharanya", venue: "IST 502 / 710", credit: "3-0-2-4", expected: 3 },
      "PPS-Lab": { code: "21CSS101J-L", name: "PPS LAB", faculty: "Mrs. R. Sharanya", venue: "PPS LAB IST 617", credit: "3-0-2-4", expected: 4 },
      Workshop: { code: "21MES101L", name: "Basic Civil and Mechanical Workshop", faculty: "Dr. Sakthibalan / Dr. MD Modasir Khan", venue: "Workshop (IST 20,21)", credit: "0-0-4-2", expected: 4 },
      CDC: { code: "21PDM102L", name: "General Aptitude (CDC)", faculty: "Mr. Sivanandhan", venue: "CDC IST510", credit: "0-0-2-0", expected: 2 },
      NSS: { code: "21GNM102L", name: "NSS", faculty: "Dr. R. Manickam", venue: "NSS 201", credit: "0-0-2-0", expected: 2 },
      F: { code: "21BTB103T", name: "Biology", faculty: "Dr. M. Maria Leena", venue: "IST 710", credit: "2-0-0-2", expected: 2 }
    },
    grid: [
      ["F", "CDC", "PCB-Lab", "PCB-Lab", "", "E", "E", "B", "A"],
      ["Che-Lab", "Che-Lab", "NSS", "NSS", "", "C", "B", "A", "D"],
      ["CDC", "CDC", "A", "", "", "PPS-Lab", "PPS-Lab", "B", "E"],
      ["F", "A", "D", "", "", "German", "German", "C", "B"],
      ["", "German", "PPS-Lab", "PPS-Lab", "", "Workshop", "Workshop", "Workshop", "Workshop"]
    ]
  },
  {
    id: "i-biotech-b-biomed",
    name: "I Biotech-B / Biomed",
    year: "I Year",
    semester: "I Semester",
    venue: "IST 702",
    subjects: {
      Japanese: { code: "21LEH105T", name: "Japanese", faculty: "Mr. Nadeem", venue: "IST 702", credit: "2-1-0-3", expected: 3 },
      E: { code: "21GNH101J", name: "Philosophy of Engineering", faculty: "Dr. J. Ramya Parkavi", venue: "IST 702", credit: "1-0-2-2", expected: 3 },
      A: { code: "21MAB102T", name: "Advanced Calculus and Complex Analysis", faculty: "Dr. R. Suresh", venue: "IST 702 / 710", credit: "3-1-0-4", expected: 4 },
      B: { code: "21CYB101J", name: "Chemistry (Theory)", faculty: "Dr. R. Logudurai", venue: "IST 702", credit: "3-1-2-5", expected: 4 },
      "Che-Lab": { code: "21CYB101J-L", name: "Chemistry Lab", faculty: "Dr. R. Logudurai", venue: "Che lab", credit: "3-1-2-5", expected: 2 },
      D: { code: "21CSS101J", name: "Programming for Problem Solving (Theory)", faculty: "Dr. B. Chitradevi", venue: "IST 702", credit: "3-0-2-4", expected: 3 },
      "PPS-Lab": { code: "21CSS101J-L", name: "PPS LAB", faculty: "Dr. B. Chitradevi", venue: "PPS LAB", credit: "3-0-2-4", expected: 2 },
      C: { code: "21BTC105T", name: "Cell biology (for Biotech)", faculty: "Dr. Daniel Paul", venue: "IST 520 / 510", credit: "2-0-0-2", expected: 2 },
      Workshop: { code: "21MES101L", name: "Basic Civil and Mechanical Workshop", faculty: "Dr. R. Manimaran / Dr. R. Ramesh", venue: "Workshop (IST 20,21)", credit: "0-0-4-2", expected: 4 },
      CDC: { code: "21PDM102L", name: "General Aptitude (CDC)", faculty: "Mr. Sivanandhan", venue: "CDC IST710/702", credit: "0-0-2-0", expected: 2 },
      Yoga: { code: "21GNM101L", name: "Physical and Mental Health using Yoga", faculty: "Ms. Balasivapriya", venue: "YOGA", credit: "0-0-2-0", expected: 2 },
      F: { code: "21BTC101T", name: "Biochemistry (for Biotech)", faculty: "Dr. M. Jaya Priya", venue: "IST 710 / 702", credit: "3-0-0-3", expected: 3 },
      G: { code: "21BTB104T", name: "Biology: Human physiology & anatomy (for Biomed)", faculty: "Biomed Faculty", venue: "IST 520", credit: "2-0-0-2", expected: 2 }
    },
    grid: [
      ["C", "Yoga", "Yoga", "F/G", "", "E", "E", "A", "B"],
      ["CDC", "CDC", "C", "F", "", "", "B", "A", "D"],
      ["Workshop", "Workshop", "Workshop", "Workshop", "", "D", "B", "E", "D"],
      ["Che-Lab", "Che-Lab", "A", "C/G", "", "B", "", "Japanese", "Japanese"],
      ["F", "CDC", "A", "", "Japanese", "", "", "PPS-Lab", "PPS-Lab"]
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TIMETABLES_DATA };
}
