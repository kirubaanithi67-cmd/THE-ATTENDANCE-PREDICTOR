import json

# Define the exact extracted timetable data structure for all 13 sections
TIMETABLES = [
    {
        "id": "ii-bme",
        "name": "II BME",
        "semester": "III Semester",
        "venue": "IST 602 / FN",
        "subjects": {
            "A": {"code": "21MAB201T", "name": "Transforms and Boundary Value Problems", "credit": "3-1-0-4", "expected_periods": 4},
            "B": {"code": "21BMC202T", "name": "Biomedical Signals and Systems", "credit": "3-0-0-3", "expected_periods": 3},
            "C": {"code": "21BMC203J", "name": "Electric and Electronic Circuits", "credit": "3-0-2-4", "expected_periods": 3},
            "D": {"code": "21BMC204J", "name": "Digital Logic for Medical Systems", "credit": "2-0-2-3", "expected_periods": 3},
            "E": {"code": "21PYS202T", "name": "Medical Physics", "credit": "3-0-0-3", "expected_periods": 3},
            "F": {"code": "21LEM201T", "name": "Professional Ethics", "credit": "1-0-0-0", "expected_periods": 1},
            "G": {"code": "21LEM202T", "name": "Universal Human Values-II", "credit": "2-1-0-3", "expected_periods": 3},
            "H": {"code": "21PDM201L", "name": "Verbal Reasoning (CDC-TB-106)", "credit": "0-0-2-0", "expected_periods": 2},
            "I": {"code": "21PDH201T", "name": "Social Engineering", "credit": "2-0-0-2", "expected_periods": 2},
            "DLMS/EEC": {"code": "DLMS/EEC", "name": "DLMS/EEC Lab (107, 309)", "credit": "0-0-4-2", "expected_periods": 4}
        },
        "grid": [
            # Mon
            ["E", "C", "I", "I", "", "DLMS/EEC", "DLMS/EEC", "", ""],
            # Tue
            ["C", "E", "B", "A", "", "H", "H", "", ""],
            # Wed
            ["B", "D", "A", "", "", "H", "G", "", ""],
            # Thu
            ["A", "E", "B", "D", "", "", "", "DLMS/EEC", "DLMS/EEC"],
            # Fri
            ["F", "A", "C", "D", "", "", "", "G", "G"]
        ]
    },
    {
        "id": "ii-ece-ds-a",
        "name": "II ECE-DS A",
        "semester": "III Semester",
        "venue": "IST 416 / FN",
        "subjects": {
            "A": {"code": "21MAB201T", "name": "Transforms and Boundary Value Problems", "credit": "3-1-0-4", "expected_periods": 4},
            "B": {"code": "21ECC201T", "name": "Solid State Devices", "credit": "3-0-0-3", "expected_periods": 3},
            "C": {"code": "21CSS201T", "name": "Computer Organization and Architecture", "credit": "3-1-0-4", "expected_periods": 4},
            "D": {"code": "21ECC203T", "name": "Digital Logic Design", "credit": "3-0-0-3", "expected_periods": 3},
            "E": {"code": "21ECC205T", "name": "Electromagnetic Theory and Interference", "credit": "3-0-0-3", "expected_periods": 3},
            "F": {"code": "21LEM201T", "name": "Professional Ethics", "credit": "1-0-0-0", "expected_periods": 1},
            "G": {"code": "21LEM202T", "name": "Universal Human Values-II (G-602)", "credit": "2-1-0-3", "expected_periods": 3},
            "H": {"code": "21PDM201L", "name": "Verbal Reasoning (CDC-TB-106)", "credit": "0-0-2-0", "expected_periods": 2},
            "I": {"code": "21PDH209T", "name": "Social Engineering", "credit": "2-0-0-2", "expected_periods": 2},
            "LAB": {"code": "21ECC211L", "name": "Devices and Digital IC Laboratory", "credit": "0-0-4-2", "expected_periods": 4}
        },
        "grid": [
            # Mon
            ["E", "A", "I", "I", "", "G", "G", "LAB", "LAB"],
            # Tue
            ["C", "A", "E", "D", "", "G", "", "H", "H"],
            # Wed
            ["A", "B", "C", "D", "", "", "H", "", ""],
            # Thu
            ["B", "C", "A", "F", "", "LAB", "LAB", "", ""],
            # Fri
            ["D", "B", "E", "C", "", "", "", "", ""]
        ]
    },
    {
        "id": "ii-ece-ds-b",
        "name": "II ECE-DS B",
        "semester": "III Semester",
        "venue": "IST 411 / AN",
        "subjects": {
            "A": {"code": "21MAB201T", "name": "Transforms and Boundary Value Problems", "credit": "3-1-0-4", "expected_periods": 4},
            "B": {"code": "21ECC201T", "name": "Solid State Devices", "credit": "3-0-0-3", "expected_periods": 3},
            "C": {"code": "21CSS201T", "name": "Computer Organization and Architecture", "credit": "3-1-0-4", "expected_periods": 4},
            "D": {"code": "21ECC203T", "name": "Digital Logic Design", "credit": "3-0-0-3", "expected_periods": 3},
            "E": {"code": "21ECC205T", "name": "Electromagnetic Theory and Interference", "credit": "3-0-0-3", "expected_periods": 3},
            "F": {"code": "21LEM201T", "name": "Professional Ethics", "credit": "1-0-0-0", "expected_periods": 1},
            "G": {"code": "21LEM202T", "name": "Universal Human Values-II (G-401)", "credit": "2-1-0-3", "expected_periods": 3},
            "H": {"code": "21PDM201L", "name": "Verbal Reasoning (CDC-TB-106)", "credit": "0-0-2-0", "expected_periods": 2},
            "I": {"code": "21PDH209T", "name": "Social Engineering", "credit": "2-0-0-2", "expected_periods": 2},
            "LAB": {"code": "21ECC211L", "name": "Devices and Digital IC Laboratory", "credit": "0-0-4-2", "expected_periods": 4}
        },
        "grid": [
            # Mon
            ["", "", "LAB", "LAB", "", "D", "B", "C", "I"],
            # Tue
            ["LAB", "LAB", "", "", "", "C", "D", "E", "A"],
            # Wed
            ["G", "G", "", "", "", "I", "E", "A", "D"],
            # Thu
            ["G", "", "H", "H", "", "A", "C", "B", "E"],
            # Fri
            ["H", "", "", "", "", "F", "A", "B", "C"]
        ]
    },
    {
        "id": "iii-bme",
        "name": "III BME",
        "semester": "V Semester",
        "venue": "IST 211 / AN",
        "subjects": {
            "A": {"code": "21MAB301T", "name": "Probability and Statistics", "credit": "3-1-0-4", "expected_periods": 4},
            "B": {"code": "21BMC302J", "name": "Microcontrollers and Its Application in Medicine", "credit": "3-0-2-4", "expected_periods": 3},
            "C": {"code": "21BMC301J", "name": "Biomedical Signal Processing", "credit": "3-0-2-4", "expected_periods": 3},
            "D": {"code": "21BME266T", "name": "Biometrics", "credit": "3-0-0-3", "expected_periods": 3},
            "E": {"code": "21ECO103T", "name": "Modern wireless communication system", "credit": "3-0-0-3", "expected_periods": 3},
            "F": {"code": "21BMC303T", "name": "Principles of Medical Imaging", "credit": "3-0-0-3", "expected_periods": 3},
            "G": {"code": "21PDM301L", "name": "Analytical and Logical Thinking Skills (CDC-625)", "credit": "0-0-2-0", "expected_periods": 2},
            "H": {"code": "21LEM301T", "name": "Indian Art Form", "credit": "1-0-0-0", "expected_periods": 1},
            "I": {"code": "21GNP301L", "name": "Community Connect (I-108)", "credit": "0-0-2-1", "expected_periods": 2},
            "LAB-MPMC": {"code": "LAB-MPMC", "name": "MPMC LAB-107", "credit": "0-0-2-1", "expected_periods": 2},
            "LAB-DSP": {"code": "LAB-DSP", "name": "BIO DSP LAB-108", "credit": "0-0-2-1", "expected_periods": 2}
        },
        "grid": [
            # Mon
            ["G", "", "LAB-MPMC", "LAB-MPMC", "", "E", "B", "F", "H"],
            # Tue
            ["LAB-DSP", "LAB-DSP", "G", "", "", "C", "D", "A", "B"],
            # Wed
            ["", "", "", "", "", "C", "A", "F", "D"],
            # Thu
            ["", "", "", "I", "", "A", "C", "E", "B"],
            # Fri
            ["I", "", "", "", "", "F", "A", "D", "E"]
        ]
    },
    {
        "id": "iii-ece-a",
        "name": "III ECE-A",
        "semester": "V Semester",
        "venue": "IST 518 / FN",
        "subjects": {
            "A": {"code": "21MAB302T", "name": "Discrete Mathematics", "credit": "3-1-0-4", "expected_periods": 4},
            "B": {"code": "21ECC301P", "name": "Microprocessor, Microcontroller, and Interfacing Techniques", "credit": "3-1-0-4", "expected_periods": 4},
            "C": {"code": "21ECC303T", "name": "VLSI Design and Technology", "credit": "3-0-0-3", "expected_periods": 3},
            "D": {"code": "21ECE468T", "name": "System and Network on Chip", "credit": "3-0-0-3", "expected_periods": 3},
            "E": {"code": "21CSO355T", "name": "Machine learning for all", "credit": "3-0-0-3", "expected_periods": 3},
            "F": {"code": "21GNP301L", "name": "Community connect", "credit": "0-0-2-1", "expected_periods": 2},
            "G": {"code": "21PDM301L", "name": "Analytical and logical thinking skills (CDC/625)", "credit": "0-0-2-0", "expected_periods": 2},
            "H": {"code": "21LEM301T", "name": "Indian Art Form", "credit": "1-0-0-0", "expected_periods": 1},
            "LAB": {"code": "21ECC311L", "name": "VLSI Design/ Microprocessor Laboratory (LAB-108/309)", "credit": "0-0-4-2", "expected_periods": 4}
        },
        "grid": [
            # Mon
            ["E", "B", "B", "A", "", "G", "G", "", ""],
            # Tue
            ["H", "D", "B", "B", "", "", "G", "", ""],
            # Wed
            ["C", "A", "D", "F", "", "", "", "LAB", "LAB"],
            # Thu
            ["A", "E", "C", "F", "", "", "", "", ""],
            # Fri
            ["D", "A", "E", "C", "", "LAB", "LAB", "", ""]
        ]
    },
    {
        "id": "iii-ece-b",
        "name": "III ECE-B",
        "semester": "V Semester",
        "venue": "IST 518 / AN",
        "subjects": {
            "A": {"code": "21MAB302T", "name": "Discrete Mathematics", "credit": "3-1-0-4", "expected_periods": 4},
            "B": {"code": "21ECC301P", "name": "Microprocessor, Microcontroller, and Interfacing Techniques", "credit": "3-1-0-4", "expected_periods": 4},
            "C": {"code": "21ECC303T", "name": "VLSI Design and Technology", "credit": "3-0-0-3", "expected_periods": 3},
            "D": {"code": "21ECE468T", "name": "System and Network on Chip", "credit": "3-0-0-3", "expected_periods": 3},
            "E": {"code": "21CSO355T", "name": "Machine learning for all", "credit": "3-0-0-3", "expected_periods": 3},
            "F": {"code": "21GNP301L", "name": "Community connect", "credit": "0-0-2-1", "expected_periods": 2},
            "G": {"code": "21PDM301L", "name": "Analytical and logical thinking skills (CDC-625)", "credit": "0-0-2-0", "expected_periods": 2},
            "H": {"code": "21LEM301T", "name": "Indian Art Form", "credit": "1-0-0-0", "expected_periods": 1},
            "LAB": {"code": "21ECC311L", "name": "VLSI Design/ Microprocessor Laboratory (LAB-108/309)", "credit": "0-0-4-2", "expected_periods": 4}
        },
        "grid": [
            # Mon
            ["LAB", "LAB", "", "", "", "E", "B", "A", "D"],
            # Tue
            ["", "G", "", "", "", "F", "B", "D", "C"],
            # Wed
            ["G", "", "", "", "", "B", "B", "A", "H"],
            # Thu
            ["LAB", "LAB", "", "", "", "A", "C", "E", "F"],
            # Fri
            ["", "", "", "", "", "C", "A", "E", "D"]
        ]
    },
    {
        "id": "iii-ece-ds",
        "name": "III ECE-DS",
        "semester": "V Semester",
        "venue": "IST 519 / FN",
        "subjects": {
            "A": {"code": "21MAB302T", "name": "Discrete Mathematics", "credit": "3-1-0-4", "expected_periods": 4},
            "B": {"code": "21ECC301P", "name": "Microprocessor, Microcontroller, and Interfacing Techniques", "credit": "3-1-0-4", "expected_periods": 4},
            "C": {"code": "21ECC303T", "name": "VLSI Design and Technology", "credit": "3-0-0-3", "expected_periods": 3},
            "D": {"code": "21CSO355T", "name": "Machine learning for all", "credit": "3-0-0-3", "expected_periods": 3},
            "E": {"code": "21ECE371T", "name": "Database Design and Management", "credit": "3-0-0-3", "expected_periods": 3},
            "F": {"code": "21GNP301L", "name": "Community connect", "credit": "0-0-2-1", "expected_periods": 2},
            "G": {"code": "21PDM301L", "name": "Analytical and logical thinking skills (CDC-625)", "credit": "0-0-2-0", "expected_periods": 2},
            "H": {"code": "21LEM301T", "name": "Indian Art Form", "credit": "1-0-0-0", "expected_periods": 1},
            "LAB": {"code": "21ECC311L", "name": "VLSI Design/ Microprocessor Laboratory (LAB-108/107)", "credit": "0-0-4-2", "expected_periods": 4}
        },
        "grid": [
            # Mon
            ["E", "B", "C", "A", "", "", "", "", ""],
            # Tue
            ["C", "B", "D", "F", "", "LAB", "LAB", "", ""],
            # Wed
            ["H", "B", "A", "C", "", "", "", "", "G"],
            # Thu
            ["A", "D", "E", "F", "", "", "", "", ""],
            # Fri
            ["D", "A", "E", "B", "", "G", "", "LAB", "LAB"]
        ]
    },
    {
        "id": "iv-ece-a",
        "name": "IV ECE-A",
        "semester": "VII Semester",
        "venue": "IST 225",
        "subjects": {
            "A": {"code": "21GNH401T", "name": "Behavioural Psychology", "credit": "2-1-0-3", "expected_periods": 3},
            "B": {"code": "21ECC401T", "name": "Wireless Communication and Antenna Systems", "credit": "3-0-0-3", "expected_periods": 3},
            "C": {"code": "21ECC402P", "name": "Computer Communication and Network Security (Theory)", "credit": "2-1-0-3", "expected_periods": 3},
            "D": {"code": "21ECE461T", "name": "Semiconductor Memory Design", "credit": "3-0-0-3", "expected_periods": 3},
            "E": {"code": "21ECE463T", "name": "Scripting Language for Electronic Design Automation", "credit": "3-0-0-3", "expected_periods": 3},
            "F": {"code": "21CSO355T", "name": "Machine learning for all", "credit": "3-0-0-3", "expected_periods": 3},
            "LAB": {"code": "21ECC402P", "name": "Computer Communication and Network Security (Lab - IST 108)", "credit": "2-1-0-3", "expected_periods": 1}
        },
        "grid": [
            # Mon
            ["C", "", "A", "D", "", "", "", "", ""],
            # Tue
            ["C", "D", "B", "F", "", "", "", "", ""],
            # Wed
            ["B", "LAB", "E", "F", "", "", "", "", ""],
            # Thu
            ["F", "A", "E", "B", "", "", "", "", ""],
            # Fri
            ["C", "A", "D", "E", "", "", "", "", ""]
        ]
    },
    {
        "id": "iv-ece-b",
        "name": "IV ECE-B",
        "semester": "VII Semester",
        "venue": "IST 227",
        "subjects": {
            "A": {"code": "21GNH401T", "name": "Behavioural Psychology", "credit": "2-1-0-3", "expected_periods": 3},
            "B": {"code": "21ECC401T", "name": "Wireless Communication and Antenna Systems", "credit": "3-0-0-3", "expected_periods": 3},
            "C": {"code": "21ECC402P", "name": "Computer Communication and Network Security (Theory)", "credit": "2-1-0-3", "expected_periods": 3},
            "D": {"code": "21ECE461T", "name": "Semiconductor Memory Design", "credit": "3-0-0-3", "expected_periods": 3},
            "E": {"code": "21ECE463T", "name": "Scripting Language for Electronic Design Automation", "credit": "3-0-0-3", "expected_periods": 3},
            "F": {"code": "21CSO355T", "name": "Machine learning for all", "credit": "3-0-0-3", "expected_periods": 3},
            "LAB": {"code": "21ECC402P", "name": "Computer Communication and Network Security (Lab - IST 108)", "credit": "2-1-0-3", "expected_periods": 1}
        },
        "grid": [
            # Mon
            ["C", "A", "E", "F", "", "", "", "", ""],
            # Tue
            ["C", "E", "F", "B", "", "", "", "", ""],
            # Wed
            ["C", "D", "A", "B", "", "", "", "", ""],
            # Thu
            ["D", "B", "LAB", "A", "", "", "", "", ""],
            # Fri
            ["E", "D", "F", "", "", "", "", "", ""]
        ]
    },
    {
        "id": "i-ece-a",
        "name": "I ECE-A",
        "semester": "I Semester",
        "venue": "IST 602",
        "subjects": {
            "German": {"code": "21LEH104T", "name": "German", "credit": "2-1-0-3", "expected_periods": 3},
            "E": {"code": "21GNH101J", "name": "Philosophy of Engineering", "credit": "1-0-2-2", "expected_periods": 3},
            "A": {"code": "21MAB102T", "name": "Advanced Calculus and Complex Analysis", "credit": "3-1-0-4", "expected_periods": 4},
            "B": {"code": "21CYB101J", "name": "Chemistry (Theory)", "credit": "3-1-2-5", "expected_periods": 4},
            "Che-Lab": {"code": "21CYB101J-L", "name": "Chemistry Lab", "credit": "3-1-2-5", "expected_periods": 2},
            "C": {"code": "21BTB102J", "name": "Electronic System and PCB Design (Theory)", "credit": "2-0-0-2", "expected_periods": 2},
            "PCB-Lab": {"code": "21BTB102J-L", "name": "PCB Lab (IST 108)", "credit": "2-0-0-2", "expected_periods": 2},
            "D": {"code": "21CSS101J", "name": "Programming for Problem Solving (Theory)", "credit": "3-0-2-4", "expected_periods": 3},
            "PPS-Lab": {"code": "21CSS101J-L", "name": "PPS LAB (IST 618)", "credit": "3-0-2-4", "expected_periods": 2},
            "Workshop": {"code": "21MES101L", "name": "Basic Civil and Mechanical Workshop", "credit": "0-0-4-2", "expected_periods": 4},
            "CDC": {"code": "21PDM102L", "name": "General Aptitude (CDC)", "credit": "0-0-2-0", "expected_periods": 2},
            "NSS": {"code": "21GNM102L", "name": "NSS", "credit": "0-0-2-0", "expected_periods": 2},
            "F": {"code": "21BTB103T", "name": "Biology", "credit": "2-0-0-2", "expected_periods": 2}
        },
        "grid": [
            # Mon
            ["E", "E", "B", "A", "", "Che-Lab", "Che-Lab", "F", "CDC"],
            # Tue
            ["C", "B", "A", "D", "", "Workshop", "Workshop", "Workshop", "Workshop"],
            # Wed
            ["B", "E", "D", "", "", "PPS-Lab", "PPS-Lab", "PCB-Lab", "PCB-Lab"],
            # Thu
            ["German", "German", "", "A", "", "CDC", "CDC", "NSS", "NSS"],
            # Fri
            ["D", "A", "C", "B", "", "F", "", "German", ""]
        ]
    },
    {
        "id": "i-ece-b-eee",
        "name": "I ECE-B / EEE",
        "semester": "I Semester",
        "venue": "IST 602",
        "subjects": {
            "German": {"code": "21LEH104T", "name": "German", "credit": "2-1-0-3", "expected_periods": 3},
            "E": {"code": "21GNH101J", "name": "Philosophy of Engineering", "credit": "1-0-2-2", "expected_periods": 3},
            "A": {"code": "21MAB102T", "name": "Advanced Calculus and Complex Analysis", "credit": "3-1-0-4", "expected_periods": 4},
            "B": {"code": "21CYB101J", "name": "Chemistry (Theory)", "credit": "3-1-2-5", "expected_periods": 4},
            "Che-Lab": {"code": "21CYB101J-L", "name": "Chemistry Lab", "credit": "3-1-2-5", "expected_periods": 2},
            "F": {"code": "21BTB102J", "name": "Electronic System & PCB Design (for ECE)", "credit": "2-0-0-2", "expected_periods": 2},
            "G": {"code": "21EEC101J", "name": "Electrical Circuits (for EEE)", "credit": "2-0-0-2", "expected_periods": 2},
            "D": {"code": "21CSS101J", "name": "Programming for Problem Solving (Theory)", "credit": "3-0-2-4", "expected_periods": 3},
            "PPS-Lab": {"code": "21CSS101J-L", "name": "PPS LAB (IST 617/618)", "credit": "3-0-2-4", "expected_periods": 2},
            "Workshop": {"code": "21MES101L", "name": "Basic Civil and Mechanical Workshop", "credit": "0-0-4-2", "expected_periods": 4},
            "CDC": {"code": "21PDM102L", "name": "General Aptitude (CDC)", "credit": "0-0-2-0", "expected_periods": 2},
            "NSS": {"code": "21GNM102L", "name": "NSS", "credit": "0-0-2-0", "expected_periods": 2},
            "C": {"code": "21BTB103T", "name": "Biology", "credit": "2-0-0-2", "expected_periods": 2},
            "PCB-Lab": {"code": "PCB/EC-Lab", "name": "PCB Lab / EC Lab (IST 617)", "credit": "0-0-2-1", "expected_periods": 2}
        },
        "grid": [
            # Mon: Period 2 is F/G
            ["CDC", "F/G", "Che-Lab", "Che-Lab", "", "E", "E", "B", "A"],
            # Tue
            ["Workshop", "Workshop", "Workshop", "Workshop", "", "C", "B", "A", "D"],
            # Wed: Period 1 is F/G
            ["F/G", "PPS-Lab", "CDC", "CDC", "", "PPS-Lab", "B", "E", "D"],
            # Thu
            ["NSS", "NSS", "C", "A", "", "D", "", "German", "German"],
            # Fri
            ["PCB-Lab", "PCB-Lab", "", "", "", "German", "", "B", "A"]
        ]
    },
    {
        "id": "i-ece-ds",
        "name": "I ECE-DS",
        "semester": "I Semester",
        "venue": "IST 502",
        "subjects": {
            "German": {"code": "21LEH104T", "name": "German", "credit": "2-1-0-3", "expected_periods": 3},
            "E": {"code": "21GNH101J", "name": "Philosophy of Engineering", "credit": "1-0-2-2", "expected_periods": 3},
            "A": {"code": "21MAB102T", "name": "Advanced Calculus and Complex Analysis", "credit": "3-1-0-4", "expected_periods": 4},
            "B": {"code": "21CYB101J", "name": "Chemistry (Theory)", "credit": "3-1-2-5", "expected_periods": 4},
            "Che-Lab": {"code": "21CYB101J-L", "name": "Chemistry Lab", "credit": "3-1-2-5", "expected_periods": 2},
            "C": {"code": "21BTB102J", "name": "Electronic System and PCB Design (Theory)", "credit": "2-0-0-2", "expected_periods": 2},
            "PCB-Lab": {"code": "21BTB102J-L", "name": "PCB Lab (IST 617)", "credit": "2-0-0-2", "expected_periods": 2},
            "D": {"code": "21CSS101J", "name": "Programming for Problem Solving (Theory)", "credit": "3-0-2-4", "expected_periods": 3},
            "PPS-Lab": {"code": "21CSS101J-L", "name": "PPS LAB (IST 617)", "credit": "3-0-2-4", "expected_periods": 4},
            "Workshop": {"code": "21MES101L", "name": "Basic Civil and Mechanical Workshop", "credit": "0-0-4-2", "expected_periods": 4},
            "CDC": {"code": "21PDM102L", "name": "General Aptitude (CDC)", "credit": "0-0-2-0", "expected_periods": 2},
            "NSS": {"code": "21GNM102L", "name": "NSS", "credit": "0-0-2-0", "expected_periods": 2},
            "F": {"code": "21BTB103T", "name": "Biology", "credit": "2-0-0-2", "expected_periods": 2}
        },
        "grid": [
            # Mon
            ["F", "CDC", "PCB-Lab", "PCB-Lab", "", "E", "E", "B", "A"],
            # Tue
            ["Che-Lab", "Che-Lab", "NSS", "NSS", "", "C", "B", "A", "D"],
            # Wed
            ["CDC", "CDC", "A", "", "", "PPS-Lab", "PPS-Lab", "B", "E"],
            # Thu
            ["F", "A", "D", "", "", "German", "German", "C", "B"],
            # Fri
            ["", "German", "PPS-Lab", "PPS-Lab", "", "Workshop", "Workshop", "Workshop", "Workshop"]
        ]
    },
    {
        "id": "i-biotech-b-biomed",
        "name": "I Biotech-B / Biomed",
        "semester": "I Semester",
        "venue": "IST 702",
        "subjects": {
            "Japanese": {"code": "21LEH105T", "name": "Japanese", "credit": "2-1-0-3", "expected_periods": 3},
            "E": {"code": "21GNH101J", "name": "Philosophy of Engineering", "credit": "1-0-2-2", "expected_periods": 3},
            "A": {"code": "21MAB102T", "name": "Advanced Calculus and Complex Analysis", "credit": "3-1-0-4", "expected_periods": 4},
            "B": {"code": "21CYB101J", "name": "Chemistry (Theory)", "credit": "3-1-2-5", "expected_periods": 4},
            "Che-Lab": {"code": "21CYB101J-L", "name": "Chemistry Lab", "credit": "3-1-2-5", "expected_periods": 2},
            "D": {"code": "21CSS101J", "name": "Programming for Problem Solving (Theory)", "credit": "3-0-2-4", "expected_periods": 3},
            "PPS-Lab": {"code": "21CSS101J-L", "name": "PPS LAB", "credit": "3-0-2-4", "expected_periods": 2},
            "C": {"code": "21BTC105T", "name": "Cell biology (for Biotech)", "credit": "2-0-0-2", "expected_periods": 2},
            "Workshop": {"code": "21MES101L", "name": "Basic Civil and Mechanical Workshop", "credit": "0-0-4-2", "expected_periods": 4},
            "CDC": {"code": "21PDM102L", "name": "General Aptitude (CDC)", "credit": "0-0-2-0", "expected_periods": 2},
            "Yoga": {"code": "21GNM101L", "name": "Physical and Mental Health using Yoga", "credit": "0-0-2-0", "expected_periods": 2},
            "F": {"code": "21BTC101T", "name": "Biochemistry (for Biotech)", "credit": "3-0-0-3", "expected_periods": 3},
            "G": {"code": "21BTB104T", "name": "Biology: Human physiology & anatomy (for Biomed)", "credit": "2-0-0-2", "expected_periods": 2}
        },
        "grid": [
            # Mon: Period 4 is F/G
            ["C", "Yoga", "Yoga", "F/G", "", "E", "E", "A", "B"],
            # Tue
            ["CDC", "CDC", "C", "F", "", "", "B", "A", "D"],
            # Wed
            ["Workshop", "Workshop", "Workshop", "Workshop", "", "D", "B", "E", "D"],
            # Thu: Period 4 is C/G
            ["Che-Lab", "Che-Lab", "A", "C/G", "", "B", "", "Japanese", "Japanese"],
            # Fri
            ["F", "CDC", "A", "", "Japanese", "", "", "PPS-Lab", "PPS-Lab"]
        ]
    }
]

def verify():
    print("=" * 70)
    print("VERIFICATION OF EXTRACTED TIMETABLES AGAINST CREDIT / PERIODS PER WEEK")
    print("=" * 70)
    
    total_mismatches = 0
    
    for sec in TIMETABLES:
        print(f"\n--- Section: {sec['name']} ({sec['semester']}) ---")
        counts = {sub_key: 0 for sub_key in sec['subjects']}
        
        for row_idx, day_row in enumerate(sec['grid']):
            for period_idx, cell in enumerate(day_row):
                if not cell:
                    continue
                # Handle multi-slot cells like F/G, C/G
                if "/" in cell and cell not in sec['subjects']:
                    parts = cell.split("/")
                    for p in parts:
                        p = p.strip()
                        if p in counts:
                            counts[p] += 1
                        else:
                            print(f"  [ERROR] Unknown slot '{p}' in cell '{cell}' at Day {row_idx+1}, Period {period_idx+1}")
                elif cell in counts:
                    counts[cell] += 1
                else:
                    print(f"  [ERROR] Unknown subject slot '{cell}' at Day {row_idx+1}, Period {period_idx+1}")
        
        # Now compare with expected
        for sub_key, sub_info in sec['subjects'].items():
            actual = counts[sub_key]
            expected = sub_info.get("expected_periods", None)
            credit = sub_info.get("credit", "N/A")
            diff = actual - expected if expected is not None else 0
            status = "MATCH" if diff == 0 else f"MISMATCH ({actual} vs {expected} exp)"
            if diff != 0:
                total_mismatches += 1
                print(f"  * {sub_key:10} | {sub_info['name'][:35]:35} | Credit: {credit:8} | Actual: {actual:2} | Exp: {expected:2} | [{status}]")
            else:
                print(f"    {sub_key:10} | {sub_info['name'][:35]:35} | Credit: {credit:8} | Actual: {actual:2} | Exp: {expected:2} | [{status}]")
                
    print("\n" + "=" * 70)
    print(f"Verification complete. Total flagged mismatches: {total_mismatches}")
    print("=" * 70)

if __name__ == "__main__":
    verify()
