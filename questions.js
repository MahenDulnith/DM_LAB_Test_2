// ─── Multi-Subject MCQ Question Bank ───
// Subjects: Discrete Mathematics, Fundamentals of Computing, 
//           Intro to Programming, Data Communication, Math for Computing
// 229 total questions across all subjects

const SUBJECTS = {
    "software-engineering": {
        label: "Software Engineering",
        shortLabel: "SE",
        code: "IT2030",
        icon: "⚙️",
        color: "#9b59b6",
        description: "Introduction to SE, Process Models, Agile, and Ethics"
    },

  "discrete-math": {
    label: "Discrete Mathematics",
    shortLabel: "Discrete Math",
    code: "IT1160",
    icon: "🔢",
    color: "#4fffb0",
    description: "Permutations, Recursion, Graphs & Trees"
  },
  "fundamentals-of-computing": {
    label: "Fundamentals of Computing",
    shortLabel: "Fund. of Computing",
    code: "IT1010",
    icon: "🖥️",
    color: "#4db8ff",
    description: "Processor, ALU, Registers, OS, Memory & Architecture"
  },
  "intro-to-programming": {
    label: "Introduction to Programming",
    shortLabel: "Intro to Programming",
    code: "IT1020",
    icon: "💻",
    color: "#ff7c5c",
    description: "Variables, Control Structures & Functions"
  },
  "data-communication": {
    label: "Data Communication & Network",
    shortLabel: "Data Comm & Net",
    code: "IT1030",
    icon: "🌐",
    color: "#c77dff",
    description: "OSI Model & Network Protocols"
  },
  "math-for-computing": {
    label: "Mathematics for Computing",
    shortLabel: "Math for Computing",
    code: "IT1040",
    icon: "📐",
    color: "#ffd166",
    description: "Boolean Algebra & Set Theory"
  }
};

const TOPICS = {
    "se-module-1": { label: "Introduction to Software Engineering & SDLC", shortLabel: "Intro to SE & SDLC", subject: "software-engineering", labSheet: "Module 1", color: "#8e44ad", icon: "📖" },
    "se-module-2": { label: "Software Process Models", shortLabel: "Process Models", subject: "software-engineering", labSheet: "Module 2", color: "#9b59b6", icon: "🔄" },
    "se-module-3": { label: "Agile Development Methodologies & Scrum", shortLabel: "Agile & Scrum", subject: "software-engineering", labSheet: "Module 3", color: "#34495e", icon: "🏃" },
    "se-module-4": { label: "Use Case Diagrams & Scenarios", shortLabel: "Use Case Diagrams", subject: "software-engineering", labSheet: "Module 4", color: "#e67e22", icon: "👤" },
    "se-module-5": { label: "Activity Diagrams", shortLabel: "Activity Diagrams", subject: "software-engineering", labSheet: "Module 5", color: "#27ae60", icon: "🛤️" },

  // ═══ DISCRETE MATHEMATICS ═══
  "permutations-combinations": {
    label: "Permutations & Combinations",
    shortLabel: "Perm & Comb",
    subject: "discrete-math",
    labSheet: "LS05",
    color: "#4fffb0",
    icon: "🎲"
  },
  "recursion": {
    label: "Recursion",
    shortLabel: "Recursion",
    subject: "discrete-math",
    labSheet: "LS06",
    color: "#4db8ff",
    icon: "🔁"
  },
  "graphs": {
    label: "Graphs",
    shortLabel: "Graphs",
    subject: "discrete-math",
    labSheet: "LS07",
    color: "#ff7c5c",
    icon: "🕸️"
  },
  "trees": {
    label: "Trees, MST, BFS & DFS",
    shortLabel: "Trees & MST",
    subject: "discrete-math",
    labSheet: "LS08",
    color: "#c77dff",
    icon: "🌳"
  },

  // ═══ FUNDAMENTALS OF COMPUTING ═══
  "fc-processor-control": {
    label: "Processor & Control Unit",
    shortLabel: "Processor & CU",
    subject: "fundamentals-of-computing",
    labSheet: "FC",
    color: "#4db8ff",
    icon: "⚙️"
  },
  "fc-alu": {
    label: "Arithmetic Logic Unit",
    shortLabel: "ALU",
    subject: "fundamentals-of-computing",
    labSheet: "FC",
    color: "#4fffb0",
    icon: "🔧"
  },
  "fc-registers": {
    label: "Processor Registers",
    shortLabel: "Registers",
    subject: "fundamentals-of-computing",
    labSheet: "FC",
    color: "#ff7c5c",
    icon: "📋"
  },
  "fc-addressing-instructions": {
    label: "Addressing Modes & Instructions",
    shortLabel: "Addr & Instr",
    subject: "fundamentals-of-computing",
    labSheet: "FC",
    color: "#c77dff",
    icon: "📍"
  },
  "fc-interrupts-io": {
    label: "Interrupts & I/O",
    shortLabel: "Interrupts & I/O",
    subject: "fundamentals-of-computing",
    labSheet: "FC",
    color: "#ffd166",
    icon: "⚡"
  },
  "fc-os-boot": {
    label: "Operating Systems & Boot Process",
    shortLabel: "OS & Boot",
    subject: "fundamentals-of-computing",
    labSheet: "FC",
    color: "#ff6b9d",
    icon: "💿"
  },
  "fc-architecture": {
    label: "Computer Architecture",
    shortLabel: "Architecture",
    subject: "fundamentals-of-computing",
    labSheet: "FC",
    color: "#4db8ff",
    icon: "🏗️"
  },
  "fc-memory": {
    label: "Memory Systems",
    shortLabel: "Memory",
    subject: "fundamentals-of-computing",
    labSheet: "FC",
    color: "#4fffb0",
    icon: "💾"
  },
  "fc-display-network": {
    label: "Display & Network Interface",
    shortLabel: "Display & Net",
    subject: "fundamentals-of-computing",
    labSheet: "FC",
    color: "#c77dff",
    icon: "🖥️"
  },

  // ═══ INTRODUCTION TO PROGRAMMING ═══
  "ip-data-types-variables": {
    label: "Variables & Data Types",
    shortLabel: "Data Types",
    subject: "intro-to-programming",
    labSheet: "IP",
    color: "#ff7c5c",
    icon: "📦"
  },
  "ip-control-structures": {
    label: "Control Structures",
    shortLabel: "Control Flow",
    subject: "intro-to-programming",
    labSheet: "IP",
    color: "#4db8ff",
    icon: "🔀"
  },
  "ip-functions": {
    label: "Functions",
    shortLabel: "Functions",
    subject: "intro-to-programming",
    labSheet: "IP",
    color: "#4fffb0",
    icon: "⚡"
  },

  // ═══ DATA COMMUNICATION & NETWORK ═══
  "dcn-osi-model": {
    label: "OSI Model",
    shortLabel: "OSI Model",
    subject: "data-communication",
    labSheet: "DCN",
    color: "#c77dff",
    icon: "📶"
  },
  "dcn-protocols": {
    label: "Network Protocols",
    shortLabel: "Protocols",
    subject: "data-communication",
    labSheet: "DCN",
    color: "#4db8ff",
    icon: "🔗"
  },

  // ═══ MATHEMATICS FOR COMPUTING ═══
  "mfc-boolean-algebra": {
    label: "Boolean Algebra",
    shortLabel: "Boolean",
    subject: "math-for-computing",
    labSheet: "MFC",
    color: "#ffd166",
    icon: "🔣"
  },
  "mfc-set-theory": {
    label: "Set Theory",
    shortLabel: "Sets",
    subject: "math-for-computing",
    labSheet: "MFC",
    color: "#ff6b9d",
    icon: "∪"
  }
};

const QUESTIONS = [
  {
    id: "pc-01",
    topic: "permutations-combinations",
    difficulty: "easy",
    source: "undefined",
    question: `In permutations, (A, B) and (B, A) are considered:`,
    options: [
      `Two different permutations`,
      `The same permutation`,
      `Invalid permutations`,
      `Only different if elements are numbers`
    ],
    correct: 0,
    explanation: `Permutations care about ORDER. (A,B) ≠ (B,A) — they are two distinct arrangements.`
  },
  {
    id: "pc-02",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `Which statement is TRUE about combinations?`,
    options: [
      `{A, B} and {B, A} are the SAME combination`,
      `{A, B} and {B, A} are DIFFERENT combinations`,
      `Combinations always have more outcomes than permutations`,
      `Combinations require repetition of elements`
    ],
    correct: 0,
    explanation: `Combinations ignore order. {A,B} = {B,A}. This is why nCr ≤ nPr (fewer outcomes).`
  },
  {
    id: "pc-03",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `You need to ARRANGE 3 people in a line. Should you use permutation or combination?`,
    options: [
      `Permutation — order of arrangement matters`,
      `Combination — you're just selecting people`,
      `Either one gives the same result`,
      `Neither — this requires the product rule`
    ],
    correct: 0,
    explanation: `Arranging in a LINE means position matters → order matters → permutation.`
  },
  {
    id: "pc-04",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `You need to SELECT a committee of 3 from 10 people. Should you use permutation or combination?`,
    options: [
      `Combination — order of selection doesn't matter`,
      `Permutation — each person has a unique role`,
      `Permutation — because n > r`,
      `Either one gives the same result`
    ],
    correct: 0,
    explanation: `A committee {A,B,C} = {C,A,B} — no specific roles, so order doesn't matter → combination.`
  },
  {
    id: "pc-05",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `What is the formula for nPr?`,
    options: [
      `n! / (n − r)!`,
      `n! / [r! × (n − r)!]`,
      `n! / r!`,
      `(n − r)! / n!`
    ],
    correct: 0,
    explanation: `nPr = n! / (n−r)!. The trap: n! / [r! × (n−r)!] is nCr, not nPr.`
  },
  {
    id: "pc-06",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `What is the formula for nCr?`,
    options: [
      `n! / [r! × (n − r)!]`,
      `n! / (n − r)!`,
      `r! / (n − r)!`,
      `n! × r! / (n − r)!`
    ],
    correct: 0,
    explanation: `nCr = n! / [r! × (n−r)!]. The trap: n! / (n−r)! is nPr, not nCr.`
  },
  {
    id: "pc-07",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `What is the relationship between nPr and nCr?`,
    options: [
      `nPr = nCr × r!`,
      `nCr = nPr × r!`,
      `nPr = nCr / r!`,
      `nPr = nCr + r!`
    ],
    correct: 0,
    explanation: `Since nPr counts ordered arrangements and nCr counts unordered selections, nPr = nCr × r! (multiply by the ways to arrange r items).`
  },
  {
    id: "pc-08",
    topic: "permutations-combinations",
    difficulty: "easy",
    source: "undefined",
    question: `What is 3P2?`,
    options: [
      `6`,
      `3`,
      `9`,
      `2`
    ],
    correct: 0,
    explanation: `3P2 = 3! / (3−2)! = 6 / 1 = 6. Trap: 3C2 = 3, not 3P2.`
  },
  {
    id: "pc-09",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `What is 5P3?`,
    options: [
      `60`,
      `10`,
      `120`,
      `20`
    ],
    correct: 0,
    explanation: `5P3 = 5!/(5−3)! = 120/2 = 60. Traps: 10 is 5C3, 120 is 5!, 20 is 5C3×2.`
  },
  {
    id: "pc-10",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `What is 5C3?`,
    options: [
      `10`,
      `60`,
      `20`,
      `6`
    ],
    correct: 0,
    explanation: `5C3 = 5! / (3! × 2!) = 120/12 = 10. Trap: 60 is 5P3, not 5C3.`
  },
  {
    id: "pc-11",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `What is 3C2 equal to?`,
    options: [
      `3`,
      `6`,
      `1`,
      `2`
    ],
    correct: 0,
    explanation: `3C2 = 3! / (2! × 1!) = 3. Trap: 6 is 3P2. Remember nCr is always ≤ nPr.`
  },
  {
    id: "pc-12",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `How many unique arrangements of the letters in 'AABBC' exist?`,
    options: [
      `30`,
      `120`,
      `60`,
      `24`
    ],
    correct: 0,
    explanation: `5! / (2! × 2! × 1!) = 120 / 4 = 30. Trap: 120 is 5! without accounting for identical letters.`
  },
  {
    id: "pc-13",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `7 books: 3 red, 2 green, 1 blue, 1 orange. How many unique shelf arrangements?`,
    options: [
      `420`,
      `5040`,
      `840`,
      `210`
    ],
    correct: 0,
    explanation: `7! / (3! × 2!) = 5040 / 12 = 420. Trap: 5040 is 7! ignoring identical books. We only divide by repeats of red(3!) and green(2!) since blue and orange are unique (1! = 1).`
  },
  {
    id: "pc-14",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `In the formula n! / (a! × b! × c! × …) for identical objects, what do a, b, c represent?`,
    options: [
      `The count of each group of identical objects`,
      `The positions of each object`,
      `The number of distinct object types`,
      `The total objects minus repeated ones`
    ],
    correct: 0,
    explanation: `a, b, c are the frequencies: e.g., AABBC has a=2 (A's), b=2 (B's), c=1 (C's).`
  },
  {
    id: "pc-15",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `Using Stars and Bars: distribute 10 identical VMs across 4 types. The formula is:`,
    options: [
      `C(n + k − 1, k − 1) = C(13, 3)`,
      `C(n, k) = C(10, 4)`,
      `C(n − 1, k − 1) = C(9, 3)`,
      `C(n + k, k) = C(14, 4)`
    ],
    correct: 0,
    explanation: `Stars and Bars: C(n+k−1, k−1) where n=10 items, k=4 categories → C(13, 3) = 286.`
  },
  {
    id: "pc-16",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `C(13, 3) equals:`,
    options: [
      `286`,
      `1716`,
      `364`,
      `455`
    ],
    correct: 0,
    explanation: `C(13,3) = 13! / (3! × 10!) = (13×12×11)/(3×2×1) = 1716/6 = 286.`
  },
  {
    id: "pc-17",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `Stars and Bars is used when distributing:`,
    options: [
      `Identical items into distinct categories (repetition allowed)`,
      `Distinct items into identical categories`,
      `Identical items into identical categories`,
      `Distinct items into distinct categories (no repetition)`
    ],
    correct: 0,
    explanation: `Stars and Bars specifically handles identical (indistinguishable) items going into distinct (distinguishable) bins, where a bin can receive 0 or more items.`
  },
  {
    id: "pc-18",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `A robot at (0,0) moves only Right or Up to reach (3,3). How many unique paths?`,
    options: [
      `20`,
      `6`,
      `36`,
      `64`
    ],
    correct: 0,
    explanation: `Total 6 moves (3R + 3U). Choose which 3 are R: C(6,3) = 20. Trap: 6 = 3! and 36 = 6² and 64 = 2⁶.`
  },
  {
    id: "pc-19",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `Robot from (0,0) to (3,3): total paths = 20, paths through (2,2) = 6. Paths AVOIDING (2,2)?`,
    options: [
      `14`,
      `6`,
      `20`,
      `16`
    ],
    correct: 0,
    explanation: `Total − Through obstacle = 20 − 6 = 14. Paths through (2,2): C(4,2) × C(2,2) = 6 × 1 = 6.`
  },
  {
    id: "pc-20",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `To count paths through point (2,2) on a 3×3 grid, we compute:`,
    options: [
      `C(4,2) × C(2,2) = 6 × 1 = 6`,
      `C(6,3) − C(4,2) = 20 − 6 = 14`,
      `C(3,2) × C(3,2) = 3 × 3 = 9`,
      `C(4,2) + C(2,2) = 6 + 1 = 7`
    ],
    correct: 0,
    explanation: `Paths through (2,2) = paths(origin→(2,2)) × paths((2,2)→(3,3)) = C(4,2) × C(2,2) = 6 × 1 = 6. We MULTIPLY (not add) because we need both segments.`
  },
  {
    id: "pc-21",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `From digits 1–5 (no repetition), how many 3-digit numbers can be formed?`,
    options: [
      `60`,
      `125`,
      `10`,
      `120`
    ],
    correct: 0,
    explanation: `5P3 = 5×4×3 = 60. Trap: 125 = 5³ (with repetition), 10 = 5C3, 120 = 5!.`
  },
  {
    id: "pc-22",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `From digits 1–5 (no repetition), 3-digit numbers GREATER THAN 500. How many?`,
    options: [
      `12`,
      `20`,
      `24`,
      `6`
    ],
    correct: 0,
    explanation: `First digit must be 5 (only digit ≥ 5). Remaining: choose 2 from {1,2,3,4} in order → 4P2 = 12.`
  },
  {
    id: "pc-23",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `Why is '12' the answer for 3-digit numbers >500 from {1,2,3,4,5}?`,
    options: [
      `First digit fixed as 5, then 4P2 = 4×3 = 12 for remaining two positions`,
      `5C3 − 3C1 = 10 − 3 = 7... wait, it's actually 12`,
      `5P3 / 5 = 60 / 5 = 12 (dividing equally among starting digits)`,
      `3 × 4 = 12 because 3 choices for second digit and 4 for third`
    ],
    correct: 0,
    explanation: `For >500: hundreds digit MUST be 5. Then 4 remaining digits for tens place, 3 for units = 4×3 = 12.`
  },
  {
    id: "pc-24",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `Choose 11 servers from 15 available: C(15, 11) = ?`,
    options: [
      `1365`,
      `15`,
      `330`,
      `32760`
    ],
    correct: 0,
    explanation: `C(15,11) = C(15,4) = (15×14×13×12)/(4!) = 1365. Key insight: C(n,r) = C(n, n−r).`
  },
  {
    id: "pc-25",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `Select 6 from 8 Linux, 4 from 5 Windows, 1 from 2 macOS servers. Total ways?`,
    options: [
      `280`,
      `140`,
      `560`,
      `56`
    ],
    correct: 0,
    explanation: `C(8,6) × C(5,4) × C(2,1) = 28 × 5 × 2 = 280. Key: MULTIPLY independent selections.`
  },
  {
    id: "pc-26",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `Why do we MULTIPLY C(8,6) × C(5,4) × C(2,1) instead of adding them?`,
    options: [
      `Because we need one choice from EACH category (AND = multiply)`,
      `Because OR requires multiplication`,
      `Because the servers are identical`,
      `Because addition would give a permutation instead`
    ],
    correct: 0,
    explanation: `When you need condition A AND condition B AND condition C, you multiply. Addition is for OR (either/or).`
  },
  {
    id: "pc-27",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `Password: 2 letters from {a,b,c,d} (repetition allowed) + 3 digits from {0,1,2,3,4} (repetition allowed). Total?`,
    options: [
      `2000`,
      `1200`,
      `500`,
      `20`
    ],
    correct: 0,
    explanation: `4² × 5³ = 16 × 125 = 2000. With repetition, each position is independent.`
  },
  {
    id: "pc-28",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `The password 'aa123' uses repetition of the letter 'a'. Which counting method handles this?`,
    options: [
      `itertools.product (permutations WITH repetition)`,
      `itertools.permutations (permutations WITHOUT repetition)`,
      `itertools.combinations (combinations WITHOUT repetition)`,
      `itertools.combinations_with_replacement`
    ],
    correct: 0,
    explanation: `itertools.product with repeat= allows the same element to appear multiple times in each position — essential for passwords.`
  },
  {
    id: "pc-29",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `Which itertools function generates permutations WITHOUT repetition?`,
    options: [
      `itertools.permutations(iterable, r)`,
      `itertools.product(iterable, repeat=r)`,
      `itertools.combinations(iterable, r)`,
      `itertools.combinations_with_replacement(iterable, r)`
    ],
    correct: 0,
    explanation: `itertools.permutations gives ordered arrangements without repeating elements. product allows repetition.`
  },
  {
    id: "pc-30",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `For permutations with IDENTICAL objects (like arranging 'AABBC'), which Python approach is correct?`,
    options: [
      `No direct itertools function — use the math formula n!/(a!×b!×...)`,
      `itertools.permutations() handles it automatically`,
      `itertools.product() with identical elements`,
      `itertools.combinations_with_replacement()`
    ],
    correct: 0,
    explanation: `The notes explicitly state: 'No direct function — use math formula' for permutations with identical objects.`
  },
  {
    id: "pc-31",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `\`itertools.combinations_with_replacement(['Rose','Lily','Tulip'], 3)\` allows:`,
    options: [
      `Selecting the same flower multiple times, order doesn't matter`,
      `Selecting each flower only once, order doesn't matter`,
      `Selecting the same flower multiple times, order matters`,
      `Selecting each flower only once, order matters`
    ],
    correct: 0,
    explanation: `combinations_with_replacement: repetition YES, order NO. So ('Rose','Rose','Lily') is valid.`
  },
  {
    id: "pc-32",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `Which itertools function has Repetition=Yes and Order=No?`,
    options: [
      `combinations_with_replacement`,
      `combinations`,
      `permutations`,
      `product`
    ],
    correct: 0,
    explanation: `combinations_with_replacement: Order=No, Repetition=Yes. product: Order=Yes, Repetition=Yes. permutations: Order=Yes, Repetition=No. combinations: Order=No, Repetition=No.`
  },
  {
    id: "pc-33",
    topic: "permutations-combinations",
    difficulty: "medium",
    source: "undefined",
    question: `What does \`math.comb(6, 3)\` return?`,
    options: [
      `20`,
      `120`,
      `6`,
      `720`
    ],
    correct: 0,
    explanation: `math.comb(6,3) = C(6,3) = 6!/(3!×3!) = 720/36 = 20. Trap: 120 = 6P3 and 720 = 6!.`
  },
  {
    id: "pc-34",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `To filter bouquets with ALL DIFFERENT flowers from \`combinations_with_replacement\`, the code checks:`,
    options: [
      `len(set(b)) == 3  (all elements unique)`,
      `len(b) == 3  (correct length)`,
      `b[0] != b[1]  (first two differ)`,
      `sum(b) > 0  (non-empty)`
    ],
    correct: 0,
    explanation: `Converting to a set removes duplicates. If len(set(b)) equals the bouquet size, all flowers are different.`
  },
  {
    id: "pc-35",
    topic: "permutations-combinations",
    difficulty: "hard",
    source: "undefined",
    question: `What does \`''.join(p)\` do when applied to a permutation tuple like ('A','B','C')?`,
    options: [
      `Converts the tuple to the string 'ABC'`,
      `Returns the tuple unchanged`,
      `Adds spaces between elements: 'A B C'`,
      `Returns the length: 3`
    ],
    correct: 0,
    explanation: `''.join(('A','B','C')) concatenates with empty separator → 'ABC'. This is used to convert permutation tuples to readable strings.`
  },
  {
    id: "rc-01",
    topic: "recursion",
    difficulty: "easy",
    source: "undefined",
    question: `Every recursive function MUST have:`,
    options: [
      `A base case and a recursive case`,
      `A for loop and a return statement`,
      `Two parameters minimum`,
      `A global variable to track progress`
    ],
    correct: 0,
    explanation: `Base case stops recursion. Recursive case breaks the problem into smaller subproblems. Both are mandatory.`
  },
  {
    id: "rc-02",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `What happens if a recursive function is missing its base case?`,
    options: [
      `Infinite recursion → RecursionError (stack overflow)`,
      `It returns None automatically`,
      `It runs once and stops`,
      `Python detects and adds a default base case`
    ],
    correct: 0,
    explanation: `Without a base case, the function calls itself endlessly until the call stack overflows → RecursionError.`
  },
  {
    id: "rc-03",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `Each recursive call uses memory on the:`,
    options: [
      `Call stack`,
      `Heap`,
      `Hard disk`,
      `CPU cache`
    ],
    correct: 0,
    explanation: `Each recursive call adds a new frame to the call stack. Too many → stack overflow.`
  },
  {
    id: "rc-04",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `The notes recommend: when writing a recursive function, always define the _____ first.`,
    options: [
      `Base case`,
      `Recursive case`,
      `Return type`,
      `Parameters`
    ],
    correct: 0,
    explanation: `Tip from notes: 'Always define the base case first. Trace small inputs manually (n=0,1,2) to verify correctness.'`
  },
  {
    id: "rc-05",
    topic: "recursion",
    difficulty: "easy",
    source: "undefined",
    question: `What is the base case for \`factorial(n)\`?`,
    options: [
      `n == 0 → return 1`,
      `n == 0 → return 0`,
      `n == 1 → return 0`,
      `n < 0 → return -1`
    ],
    correct: 0,
    explanation: `0! = 1 by mathematical definition. Trap: returning 0 would make factorial(anything) = 0 since everything multiplies by it.`
  },
  {
    id: "rc-06",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `If the factorial base case returned 0 instead of 1, what would \`factorial(5)\` return?`,
    options: [
      `0 — because everything multiplies by 0`,
      `120`,
      `5`,
      `RecursionError`
    ],
    correct: 0,
    explanation: `factorial(5) = 5×4×3×2×1×factorial(0). If factorial(0)=0, the entire chain multiplies by 0 → result is 0!`
  },
  {
    id: "rc-07",
    topic: "recursion",
    difficulty: "easy",
    source: "undefined",
    question: `What does \`factorial(5)\` return?`,
    options: [
      `120`,
      `24`,
      `60`,
      `720`
    ],
    correct: 0,
    explanation: `5! = 5×4×3×2×1 = 120. Traps: 24 = 4!, 720 = 6!.`
  },
  {
    id: "rc-08",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `How many recursive calls does \`factorial(n)\` make per invocation?`,
    options: [
      `1 — it calls factorial(n-1)`,
      `2 — it calls factorial(n-1) and factorial(n-2)`,
      `n — it calls itself n times`,
      `0 — it uses a loop internally`
    ],
    correct: 0,
    explanation: `factorial(n) = n × factorial(n-1). Only ONE recursive call per invocation. Fibonacci makes 2.`
  },
  {
    id: "rc-09",
    topic: "recursion",
    difficulty: "easy",
    source: "undefined",
    question: `What is the recursive formula for Fibonacci?`,
    options: [
      `F(n) = F(n−1) + F(n−2)`,
      `F(n) = n × F(n−1)`,
      `F(n) = F(n−1) × F(n−2)`,
      `F(n) = F(n+1) − F(n−1)`
    ],
    correct: 0,
    explanation: `Fibonacci adds the two previous values. Trap: n × F(n−1) is factorial, not Fibonacci.`
  },
  {
    id: "rc-10",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `The Fibonacci base cases are:`,
    options: [
      `F(0) = 0 and F(1) = 1`,
      `F(0) = 1 and F(1) = 1`,
      `F(1) = 0 and F(2) = 1`,
      `F(0) = 0 and F(1) = 0`
    ],
    correct: 0,
    explanation: `F(0)=0, F(1)=1. The sequence starts: 0, 1, 1, 2, 3, 5, 8... Trap: Some textbooks use F(1)=F(2)=1, but these notes use F(0)=0, F(1)=1.`
  },
  {
    id: "rc-11",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `What does \`Fibo(6)\` return?`,
    options: [
      `8`,
      `13`,
      `5`,
      `6`
    ],
    correct: 0,
    explanation: `Sequence: F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, F(6)=8. Trap: 13 is F(7).`
  },
  {
    id: "rc-12",
    topic: "recursion",
    difficulty: "hard",
    source: "undefined",
    question: `How many recursive calls does \`Fibo(n)\` make per invocation (for n > 1)?`,
    options: [
      `2 — it calls Fibo(n-1) AND Fibo(n-2)`,
      `1 — it calls Fibo(n-1) only`,
      `3 — it calls Fibo(n-1), Fibo(n-2), and Fibo(n-3)`,
      `n — it makes n calls`
    ],
    correct: 0,
    explanation: `Fibo(n) = Fibo(n-1) + Fibo(n-2) — TWO recursive calls. This is why Fibonacci is exponential time.`
  },
  {
    id: "rc-13",
    topic: "recursion",
    difficulty: "hard",
    source: "undefined",
    question: `In the code \`if n <= 1: return n\`, what does Fibo(0) return?`,
    options: [
      `0`,
      `1`,
      `None`,
      `Error`
    ],
    correct: 0,
    explanation: `When n=0: 0 ≤ 1 is True → return n → return 0. The base case returns n itself, not a constant.`
  },
  {
    id: "rc-14",
    topic: "recursion",
    difficulty: "easy",
    source: "undefined",
    question: `What does \`S(5)\` return? (sum of natural numbers 1 to 5)`,
    options: [
      `15`,
      `120`,
      `5`,
      `10`
    ],
    correct: 0,
    explanation: `S(5) = 5+4+3+2+1+0 = 15. Trap: 120 is 5! (factorial, not sum).`
  },
  {
    id: "rc-15",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `The recursive formula S(n) = n + S(n−1) with S(0) = 0 computes the:`,
    options: [
      `Sum of natural numbers from 0 to n`,
      `Factorial of n`,
      `Fibonacci number at position n`,
      `Power of 2^n`
    ],
    correct: 0,
    explanation: `S(n) = n + (n-1) + ... + 1 + 0 = sum of natural numbers. Don't confuse with n × S(n-1) which would be factorial.`
  },
  {
    id: "rc-16",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `What is the base case for the harmonic sum H(n)?`,
    options: [
      `H(1) = 1`,
      `H(0) = 0`,
      `H(0) = 1`,
      `H(1) = 0`
    ],
    correct: 0,
    explanation: `H(1) = 1 (the first harmonic number). Note: NOT H(0), because 1/0 is undefined.`
  },
  {
    id: "rc-17",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `H(n) = 1/n + H(n−1). What does \`round(harmonic_sum(5), 4)\` return?`,
    options: [
      `2.2833`,
      `2.5`,
      `1.0`,
      `5.0`
    ],
    correct: 0,
    explanation: `H(5) = 1/5 + 1/4 + 1/3 + 1/2 + 1 = 0.2 + 0.25 + 0.3333 + 0.5 + 1 = 2.2833.`
  },
  {
    id: "rc-18",
    topic: "recursion",
    difficulty: "hard",
    source: "undefined",
    question: `Why does harmonic_sum use base case H(1)=1 instead of H(0)=0?`,
    options: [
      `Because 1/0 is undefined (division by zero)`,
      `Because H(0) would make the sum infinite`,
      `Because Python requires n ≥ 1`,
      `Because the formula only works for odd numbers`
    ],
    correct: 0,
    explanation: `The recursive step computes 1/n. If n=0, we'd compute 1/0 → division by zero error. So we stop at n=1.`
  },
  {
    id: "rc-19",
    topic: "recursion",
    difficulty: "easy",
    source: "undefined",
    question: `What does \`sum_of_digits(1234)\` return?`,
    options: [
      `10`,
      `1234`,
      `4`,
      `24`
    ],
    correct: 0,
    explanation: `1+2+3+4 = 10. Uses n%10 (last digit) + sum_of_digits(n//10) (remaining digits).`
  },
  {
    id: "rc-20",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `In \`sum_of_digits(n)\`, what does \`n % 10\` extract?`,
    options: [
      `The last (rightmost) digit`,
      `The first (leftmost) digit`,
      `The number of digits`,
      `The sum of all digits`
    ],
    correct: 0,
    explanation: `n % 10 gives the remainder when divided by 10 = the last digit. E.g., 1234 % 10 = 4.`
  },
  {
    id: "rc-21",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `In \`sum_of_digits(n)\`, what does \`n // 10\` produce?`,
    options: [
      `The number with the last digit removed (e.g., 1234 → 123)`,
      `The last digit of n`,
      `n divided by 10 as a float`,
      `The first digit of n`
    ],
    correct: 0,
    explanation: `n // 10 is integer division: 1234 // 10 = 123. It strips the last digit.`
  },
  {
    id: "rc-22",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `Using recursive GCD: gcd(48, 18) traces as:`,
    options: [
      `gcd(48,18) → gcd(18,12) → gcd(12,6) → gcd(6,0) → 6`,
      `gcd(48,18) → gcd(18,48) → gcd(48,18) → infinite loop`,
      `gcd(48,18) → gcd(30,18) → gcd(12,18) → gcd(18,12)`,
      `gcd(48,18) → gcd(48,30) → gcd(48,18) → infinite`
    ],
    correct: 0,
    explanation: `gcd(48,18): 48%18=12 → gcd(18,12): 18%12=6 → gcd(12,6): 12%6=0 → gcd(6,0): b==0 → return 6.`
  },
  {
    id: "rc-23",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `What is the base case for recursive GCD?`,
    options: [
      `When b == 0, return a`,
      `When a == 0, return b`,
      `When a == b, return a`,
      `When a % b == 1, return 1`
    ],
    correct: 0,
    explanation: `gcd(a, b): if b == 0 return a. The algorithm is gcd(a,b) = gcd(b, a%b). Trap: 'when a == 0 return b' seems similar but the parameter order matters.`
  },
  {
    id: "rc-24",
    topic: "recursion",
    difficulty: "hard",
    source: "undefined",
    question: `In \`gcd(a, b)\`, the recursive call is \`gcd(b, a % b)\`. What is \`a % b\`?`,
    options: [
      `The remainder when a is divided by b`,
      `The quotient when a is divided by b`,
      `a minus b`,
      `The smaller of a and b`
    ],
    correct: 0,
    explanation: `a % b = remainder of a ÷ b. E.g., 48 % 18 = 12 (because 48 = 2×18 + 12).`
  },
  {
    id: "rc-25",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `What is the base case for Pascal's triangle recursion?`,
    options: [
      `k == 0 or k == n → return 1`,
      `n == 0 → return 0`,
      `k == 1 → return n`,
      `n == k → return n`
    ],
    correct: 0,
    explanation: `The edges of Pascal's triangle are always 1. When k=0 (first) or k=n (last) → return 1.`
  },
  {
    id: "rc-26",
    topic: "recursion",
    difficulty: "hard",
    source: "undefined",
    question: `What does \`pascal(4, 2)\` return?`,
    options: [
      `6`,
      `4`,
      `10`,
      `3`
    ],
    correct: 0,
    explanation: `pascal(4,2) = pascal(3,1) + pascal(3,2). pascal(3,1) = pascal(2,0) + pascal(2,1) = 1 + 2 = 3. pascal(3,2) = pascal(2,1) + pascal(2,2) = 2 + 1 = 3. Result: 3 + 3 = 6. This equals C(4,2) = 6.`
  },
  {
    id: "rc-27",
    topic: "recursion",
    difficulty: "hard",
    source: "undefined",
    question: `Pascal's triangle: pascal(n, k) = pascal(n−1, k−1) + pascal(n−1, k). How many recursive calls per invocation?`,
    options: [
      `2 — like Fibonacci, it makes two calls`,
      `1 — like factorial`,
      `3 — it makes three calls`,
      `n — depends on the row`
    ],
    correct: 0,
    explanation: `pascal(n,k) calls pascal(n-1, k-1) AND pascal(n-1, k) — two recursive calls, similar to Fibonacci.`
  },
  {
    id: "rc-28",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `What does \`sum_even(8)\` return?`,
    options: [
      `20`,
      `36`,
      `8`,
      `16`
    ],
    correct: 0,
    explanation: `sum_even(8) = 8 + sum_even(6) = 8 + 6 + sum_even(4) = 8+6+4+2+0 = 20.`
  },
  {
    id: "rc-29",
    topic: "recursion",
    difficulty: "medium",
    source: "undefined",
    question: `In \`sum_even(n)\`, the recursive step is \`n + sum_even(n − 2)\`. Why n−2 instead of n−1?`,
    options: [
      `To skip odd numbers and only sum even numbers`,
      `To make the function run faster`,
      `Because even numbers are always 2 apart`,
      `Both A and C are correct reasons`
    ],
    correct: 3,
    explanation: `Even numbers are spaced 2 apart (2,4,6,8...), so we subtract 2 to visit only even numbers.`
  },
  {
    id: "rc-30",
    topic: "recursion",
    difficulty: "hard",
    source: "undefined",
    question: `What does \`sum_factorials(4)\` return?`,
    options: [
      `33`,
      `24`,
      `10`,
      `34`
    ],
    correct: 0,
    explanation: `1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33. Trap: 24 = 4! alone, 10 = 1+2+3+4 (sum, not factorial sum).`
  },
  {
    id: "rc-31",
    topic: "recursion",
    difficulty: "hard",
    source: "undefined",
    question: `\`sum_factorials(n)\` calls \`factorial(n)\` inside it. This means it uses:`,
    options: [
      `Two different recursive functions (mutual dependency)`,
      `Only one recursive function`,
      `No recursion at all`,
      `Infinite recursion`
    ],
    correct: 0,
    explanation: `sum_factorials(n) = factorial(n) + sum_factorials(n-1). It calls factorial() (a separate recursive function) plus itself.`
  },
  {
    id: "rc-32",
    topic: "recursion",
    difficulty: "hard",
    source: "undefined",
    question: `Which function makes 2 recursive calls per invocation?`,
    options: [
      `Fibonacci and Pascal's triangle`,
      `Factorial and GCD`,
      `Sum of digits and harmonic sum`,
      `All recursive functions make 2 calls`
    ],
    correct: 0,
    explanation: `Fibonacci: F(n-1)+F(n-2) = 2 calls. Pascal: p(n-1,k-1)+p(n-1,k) = 2 calls. All others (factorial, GCD, sum, digits) make only 1 call.`
  },
  {
    id: "rc-33",
    topic: "recursion",
    difficulty: "hard",
    source: "undefined",
    question: `Factorial uses \`n × f(n-1)\` and sum uses \`n + S(n-1)\`. The key difference is:`,
    options: [
      `Multiplication (×) vs addition (+) — factorial multiplies, sum adds`,
      `The base case values are different`,
      `Factorial uses more memory`,
      `There is no difference in output`
    ],
    correct: 0,
    explanation: `Both have the same structure but the OPERATOR differs: × for factorial (5×4×3×2×1=120) vs + for sum (5+4+3+2+1=15).`
  },
  {
    id: "gr-01",
    topic: "graphs",
    difficulty: "easy",
    source: "undefined",
    question: `A graph is a _____ data structure.`,
    options: [
      `Non-linear`,
      `Linear`,
      `Sequential`,
      `Tabular`
    ],
    correct: 0,
    explanation: `Graphs are non-linear: nodes can connect to any number of other nodes in any pattern.`
  },
  {
    id: "gr-02",
    topic: "graphs",
    difficulty: "easy",
    source: "undefined",
    question: `The components of a graph are:`,
    options: [
      `Vertices (nodes) and edges (links)`,
      `Rows and columns`,
      `Keys and values`,
      `Roots and leaves`
    ],
    correct: 0,
    explanation: `A graph is made of vertices (nodes) connected by edges (links).`
  },
  {
    id: "gr-03",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `In an undirected graph, if edge (A,B) exists, then:`,
    options: [
      `Edge (B,A) also exists — they're the same edge`,
      `Edge (B,A) must be added separately`,
      `Only A can reach B, not B to A`,
      `The edge is invalid`
    ],
    correct: 0,
    explanation: `Undirected means no direction: (A,B) = (B,A). In directed graphs, A→B ≠ B→A.`
  },
  {
    id: "gr-04",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `Which NetworkX class creates a directed graph?`,
    options: [
      `nx.DiGraph()`,
      `nx.Graph()`,
      `nx.MultiGraph()`,
      `nx.DirectedGraph()`
    ],
    correct: 0,
    explanation: `nx.DiGraph() for directed. nx.Graph() for undirected. Trap: 'nx.DirectedGraph()' doesn't exist.`
  },
  {
    id: "gr-05",
    topic: "graphs",
    difficulty: "hard",
    source: "undefined",
    question: `What is the difference between \`nx.MultiGraph()\` and \`nx.Graph()\`?`,
    options: [
      `MultiGraph allows multiple edges between the same pair of nodes`,
      `MultiGraph only supports directed edges`,
      `Graph allows multiple edges but MultiGraph doesn't`,
      `There is no practical difference`
    ],
    correct: 0,
    explanation: `nx.MultiGraph allows parallel (multiple) edges between the same two nodes. nx.Graph allows only one edge per pair.`
  },
  {
    id: "gr-06",
    topic: "graphs",
    difficulty: "hard",
    source: "undefined",
    question: `\`nx.MultiDiGraph()\` combines which two features?`,
    options: [
      `Multiple edges between same nodes AND directed edges`,
      `Multiple nodes AND directed edges`,
      `Weighted edges AND directed edges`,
      `Self-loops AND multiple nodes`
    ],
    correct: 0,
    explanation: `MultiDiGraph = Multi (multiple parallel edges) + Di (directed). It's the most flexible graph type.`
  },
  {
    id: "gr-07",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `What happens when you call \`G.remove_node(1)\` in NetworkX?`,
    options: [
      `Node 1 AND all its connected edges are removed`,
      `Only node 1 is removed; its edges remain`,
      `Only the edges of node 1 are removed; the node stays`,
      `It raises an error if node 1 has edges`
    ],
    correct: 0,
    explanation: `Removing a node ALSO removes ALL edges connected to it. This is important — orphaned edges can't exist.`
  },
  {
    id: "gr-08",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `Which method adds a weighted edge from 'A' to 'B' with weight 2?`,
    options: [
      `G.add_weighted_edges_from([('A','B',2)])`,
      `G.add_edge('A','B', 2)`,
      `G.add_weight('A','B',2)`,
      `G.add_edges_from([('A','B')], weight=2)`
    ],
    correct: 0,
    explanation: `add_weighted_edges_from takes a list of (u, v, weight) tuples. The notes show this format explicitly.`
  },
  {
    id: "gr-09",
    topic: "graphs",
    difficulty: "easy",
    source: "undefined",
    question: `What is the degree of a node?`,
    options: [
      `The number of edges connected to it`,
      `The number of nodes in the graph`,
      `The weight of the node`,
      `The distance to the root`
    ],
    correct: 0,
    explanation: `Degree = count of edges incident to a node.`
  },
  {
    id: "gr-10",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `In a directed graph, \`G.in_degree('B')\` counts:`,
    options: [
      `Edges pointing INTO node B`,
      `Edges going OUT from node B`,
      `All edges connected to B (both directions)`,
      `The total degree of B`
    ],
    correct: 0,
    explanation: `in_degree = edges coming IN. out_degree = edges going OUT. Trap: G.degree() in DiGraph is in + out.`
  },
  {
    id: "gr-11",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `In a directed graph, \`G.out_degree('B')\` counts:`,
    options: [
      `Edges going OUT from node B`,
      `Edges pointing INTO node B`,
      `All edges connected to B`,
      `The number of neighbours of B`
    ],
    correct: 0,
    explanation: `out_degree = number of edges originating FROM node B to other nodes.`
  },
  {
    id: "gr-12",
    topic: "graphs",
    difficulty: "hard",
    source: "undefined",
    question: `In the airline DiGraph with edges A→B, B→C, C→D, C→E, E→D, C→B: what is in_degree of C?`,
    options: [
      `1 (only B→C points into C)`,
      `3 (C has edges to D, E, and B)`,
      `2 (B→C and E→C)`,
      `0 (C only sends edges out)`
    ],
    correct: 0,
    explanation: `Looking at edges INTO C: only B→C. Edges C→D, C→E, C→B go OUT from C (out_degree). So in_degree(C) = 1.`
  },
  {
    id: "gr-13",
    topic: "graphs",
    difficulty: "hard",
    source: "undefined",
    question: `In the same airline DiGraph: what is out_degree of C?`,
    options: [
      `3 (C→D, C→E, C→B)`,
      `1 (only C→D)`,
      `2 (C→D, C→E)`,
      `0 (no edges leave C)`
    ],
    correct: 0,
    explanation: `Edges FROM C: C→D, C→E, C→B = 3 outgoing edges.`
  },
  {
    id: "gr-14",
    topic: "graphs",
    difficulty: "easy",
    source: "undefined",
    question: `What is a self-loop?`,
    options: [
      `An edge where both endpoints are the SAME node: G.add_edge(1,1)`,
      `A cycle that visits all nodes`,
      `An edge with weight 0`,
      `Two edges between the same pair of nodes`
    ],
    correct: 0,
    explanation: `Self-loop: a node connected to itself. G.add_edge(1,1) creates an edge from 1 to 1.`
  },
  {
    id: "gr-15",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `Which function detects self-loops in a NetworkX graph?`,
    options: [
      `nx.selfloop_edges(G)`,
      `nx.self_loops(G)`,
      `G.selfloops()`,
      `nx.find_loops(G)`
    ],
    correct: 0,
    explanation: `nx.selfloop_edges(G) returns all self-loop edges. The exact function name matters.`
  },
  {
    id: "gr-16",
    topic: "graphs",
    difficulty: "easy",
    source: "undefined",
    question: `A simple path is a path where:`,
    options: [
      `No node is repeated`,
      `No edge has weight`,
      `It forms a cycle`,
      `It visits every node exactly once`
    ],
    correct: 0,
    explanation: `Simple path: each node appears at most once. Trap: 'visits every node exactly once' describes a Hamiltonian path.`
  },
  {
    id: "gr-17",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `A cycle is a path that:`,
    options: [
      `Starts and ends at the same node without repeating intermediate nodes/edges`,
      `Visits every node in the graph`,
      `Has no edges`,
      `Only exists in undirected graphs`
    ],
    correct: 0,
    explanation: `A cycle is a closed path: start = end, no intermediate node is repeated.`
  },
  {
    id: "gr-18",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `Which function checks if ANY path exists from A to D?`,
    options: [
      `nx.has_path(G, 'A', 'D')`,
      `nx.all_simple_paths(G, 'A', 'D')`,
      `nx.shortest_path(G, 'A', 'D')`,
      `G.is_connected('A', 'D')`
    ],
    correct: 0,
    explanation: `nx.has_path(G, source, target) returns True/False for reachability. The others return actual paths.`
  },
  {
    id: "gr-19",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `To find ALL simple paths from node 1 to node 4:`,
    options: [
      `nx.all_simple_paths(G, source=1, target=4)`,
      `nx.all_shortest_paths(G, source=1, target=4)`,
      `nx.simple_paths(G, 1, 4)`,
      `G.paths(1, 4)`
    ],
    correct: 0,
    explanation: `nx.all_simple_paths finds every path without repeated nodes. all_shortest_paths only finds shortest ones.`
  },
  {
    id: "gr-20",
    topic: "graphs",
    difficulty: "hard",
    source: "undefined",
    question: `To detect cycles in a DIRECTED graph, use:`,
    options: [
      `nx.simple_cycles(G)`,
      `nx.cycle_basis(G)`,
      `nx.find_cycles(G)`,
      `nx.detect_cycles(G)`
    ],
    correct: 0,
    explanation: `nx.simple_cycles(G) for DIRECTED. nx.cycle_basis(G) for UNDIRECTED. Using the wrong one is a common mistake.`
  },
  {
    id: "gr-21",
    topic: "graphs",
    difficulty: "hard",
    source: "undefined",
    question: `To detect cycles in an UNDIRECTED graph, use:`,
    options: [
      `nx.cycle_basis(G)`,
      `nx.simple_cycles(G)`,
      `nx.find_cycles(G)`,
      `G.cycles()`
    ],
    correct: 0,
    explanation: `cycle_basis for undirected, simple_cycles for directed. They are NOT interchangeable.`
  },
  {
    id: "gr-22",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `\`nx.to_dict_of_lists(G)\` returns:`,
    options: [
      `An adjacency list: {node: [neighbours]}`,
      `An adjacency matrix as a 2D array`,
      `A list of all edges`,
      `A dictionary of edge weights`
    ],
    correct: 0,
    explanation: `Adjacency list: each key is a node, value is list of its neighbours. E.g., {1:[2], 2:[1,3], 3:[2]}.`
  },
  {
    id: "gr-23",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `\`nx.to_numpy_array(G)\` returns:`,
    options: [
      `An adjacency matrix as a 2D numpy array`,
      `An adjacency list as a dictionary`,
      `A list of node positions`,
      `A distance matrix`
    ],
    correct: 0,
    explanation: `Adjacency matrix: 2D array where cell [i][j]=1 if edge exists between i and j, 0 otherwise.`
  },
  {
    id: "gr-24",
    topic: "graphs",
    difficulty: "hard",
    source: "undefined",
    question: `In an adjacency matrix, cell [i][j] = 1 means:`,
    options: [
      `An edge exists from node i to node j`,
      `Node i and j are the same node`,
      `There is no edge between i and j`,
      `Node i has degree j`
    ],
    correct: 0,
    explanation: `Matrix[i][j] = 1 → edge exists. Matrix[i][j] = 0 → no edge. For weighted graphs, the value can be the weight.`
  },
  {
    id: "gr-25",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `Which TWO ways can you get all nodes from a NetworkX graph?`,
    options: [
      `nx.nodes(G) or G.nodes()`,
      `G.get_nodes() or nx.get_nodes(G)`,
      `G.vertices() or nx.vertices(G)`,
      `len(G) or G.size()`
    ],
    correct: 0,
    explanation: `Both nx.nodes(G) and G.nodes() work. len(G) gives node COUNT, not the nodes themselves.`
  },
  {
    id: "gr-26",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `To get the number of nodes: \`G.number_of_nodes()\` or:`,
    options: [
      `len(G.nodes())`,
      `G.size()`,
      `G.count()`,
      `nx.num_nodes(G)`
    ],
    correct: 0,
    explanation: `G.number_of_nodes() or len(G.nodes()). Note: G.size() returns number of EDGES, not nodes!`
  },
  {
    id: "gr-27",
    topic: "graphs",
    difficulty: "medium",
    source: "undefined",
    question: `To get neighbours of node 2:`,
    options: [
      `G.neighbors(2)`,
      `G.adjacent(2)`,
      `nx.get_neighbors(G, 2)`,
      `G.connections(2)`
    ],
    correct: 0,
    explanation: `G.neighbors(node) returns an iterator of adjacent nodes. Note the American spelling: neighbors (not neighbours).`
  },
  {
    id: "gr-28",
    topic: "graphs",
    difficulty: "hard",
    source: "undefined",
    question: `Airline DiGraph: edges A→B, B→C, C→D, C→E, E→D, C→B. How many simple paths from A to D?`,
    options: [
      `2 (A→B→C→D and A→B→C→E→D)`,
      `1 (only A→B→C→D)`,
      `3 (includes A→B→C→B→C→D)`,
      `4`
    ],
    correct: 0,
    explanation: `Simple paths (no node repeated): A→B→C→D and A→B→C→E→D. Path A→B→C→B→C→D repeats B and C → not simple.`
  },
  {
    id: "gr-29",
    topic: "graphs",
    difficulty: "hard",
    source: "undefined",
    question: `In the airline DiGraph (A→B, B→C, C→D, C→E, E→D, C→B), which edge creates a cycle?`,
    options: [
      `C→B (creates cycle B→C→B)`,
      `A→B (starts from A)`,
      `E→D (ends at D)`,
      `C→D (direct path)`
    ],
    correct: 0,
    explanation: `C→B combined with B→C creates the cycle B→C→B. Without C→B, the graph would be acyclic.`
  },
  {
    id: "tr-01",
    topic: "trees",
    difficulty: "easy",
    source: "undefined",
    question: `A tree is a graph that is:`,
    options: [
      `Connected AND acyclic (no cycles)`,
      `Connected AND cyclic`,
      `Disconnected AND acyclic`,
      `Directed AND weighted`
    ],
    correct: 0,
    explanation: `Tree = connected + no cycles. Removing either property makes it NOT a tree.`
  },
  {
    id: "tr-02",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `Which statement is TRUE?`,
    options: [
      `All trees are graphs, but not all graphs are trees`,
      `All graphs are trees, but not all trees are graphs`,
      `Trees and graphs are completely different structures`,
      `A tree is a type of linked list`
    ],
    correct: 0,
    explanation: `Trees are a SUBSET of graphs. They are graphs with specific constraints (connected + acyclic).`
  },
  {
    id: "tr-03",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `A tree with n nodes has exactly how many edges?`,
    options: [
      `n − 1`,
      `n`,
      `n + 1`,
      `2n − 2`
    ],
    correct: 0,
    explanation: `Fundamental property: n nodes → exactly n−1 edges. Adding one more edge creates a cycle; removing one disconnects it.`
  },
  {
    id: "tr-04",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `A graph has 8 nodes and 7 edges with no cycles. Is it a tree?`,
    options: [
      `Yes — 8 nodes, 7 = 8−1 edges, and no cycles means it's a tree`,
      `No — trees need exactly n edges`,
      `Not enough information — we also need to check if it's directed`,
      `No — trees can't have 8 nodes`
    ],
    correct: 0,
    explanation: `n=8, edges=n−1=7, acyclic + connected (n−1 edges with no cycles implies connected) → valid tree.`
  },
  {
    id: "tr-05",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `In a tree, how many unique paths exist between any two nodes?`,
    options: [
      `Exactly one`,
      `At least two`,
      `Zero or one`,
      `It depends on the tree structure`
    ],
    correct: 0,
    explanation: `Exactly ONE unique path between any two nodes. If there were two paths, that would create a cycle.`
  },
  {
    id: "tr-06",
    topic: "trees",
    difficulty: "easy",
    source: "undefined",
    question: `The root of a tree is:`,
    options: [
      `The top-most node with no parent (in-degree 0)`,
      `The bottom-most node with no children`,
      `Any node with exactly two children`,
      `The node with the most edges`
    ],
    correct: 0,
    explanation: `Root = top node, has NO parent. In a directed tree, in_degree(root) = 0.`
  },
  {
    id: "tr-07",
    topic: "trees",
    difficulty: "easy",
    source: "undefined",
    question: `A leaf node is:`,
    options: [
      `A node with no children (out-degree 0)`,
      `A node with no parent`,
      `A node with exactly one child`,
      `The root node`
    ],
    correct: 0,
    explanation: `Leaf = bottom of tree, NO children/successors. out_degree(leaf) = 0.`
  },
  {
    id: "tr-08",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `In the tree [10→20, 10→30, 20→40, 20→50, 30→60, 30→70, 70→80], the leaf nodes are:`,
    options: [
      `40, 50, 60, 80`,
      `10, 40, 50, 60, 80`,
      `40, 50, 60, 70, 80`,
      `Only 80`
    ],
    correct: 0,
    explanation: `Leaves have NO children: 40 (✓), 50 (✓), 60 (✓), 80 (✓). Node 70 has child 80 → NOT a leaf.`
  },
  {
    id: "tr-09",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `Siblings are nodes that:`,
    options: [
      `Share the same parent`,
      `Are at the same depth`,
      `Are connected by an edge`,
      `Have the same number of children`
    ],
    correct: 0,
    explanation: `Siblings = same parent. E.g., 40 and 50 are siblings (parent = 20). Nodes at the same depth aren't necessarily siblings.`
  },
  {
    id: "tr-10",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `The depth of a node is:`,
    options: [
      `Number of edges from the root to that node`,
      `Number of edges from that node to the deepest leaf`,
      `The total number of descendants`,
      `The number of children`
    ],
    correct: 0,
    explanation: `Depth = edges from ROOT down to the node. Trap: 'root to deepest leaf' is HEIGHT, not depth.`
  },
  {
    id: "tr-11",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `In the tree rooted at 10 (10→30→70→80), what is the depth of node 70?`,
    options: [
      `2`,
      `3`,
      `1`,
      `0`
    ],
    correct: 0,
    explanation: `Path from root: 10→30→70 = 2 edges. Trap: depth of 80 is 3.`
  },
  {
    id: "tr-12",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `The height of a tree is:`,
    options: [
      `The longest path (in edges) from root to any leaf`,
      `The depth of the root node`,
      `The number of nodes in the tree`,
      `The number of leaf nodes`
    ],
    correct: 0,
    explanation: `Height = longest root-to-leaf path. In the example tree: 10→30→70→80 = 3 edges → height = 3.`
  },
  {
    id: "tr-13",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `Tree [10→20→40, 10→20→50, 10→30→60, 10→30→70→80]. The height is:`,
    options: [
      `3 (path 10→30→70→80)`,
      `2 (path 10→20→40)`,
      `4 (counting nodes, not edges)`,
      `7 (total number of edges)`
    ],
    correct: 0,
    explanation: `Height = LONGEST path = 10→30→70→80 = 3 edges. Trap: counting NODES gives 4, but height counts EDGES.`
  },
  {
    id: "tr-14",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `A full binary tree is one where every node has:`,
    options: [
      `Either 0 or exactly 2 children`,
      `Exactly 2 children (no exceptions)`,
      `At most 1 child`,
      `Any number of children`
    ],
    correct: 0,
    explanation: `Full binary tree: internal nodes have exactly 2 children, leaf nodes have 0. A node with 1 child violates it.`
  },
  {
    id: "tr-15",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `How to check if a graph is a valid tree in NetworkX?`,
    options: [
      `nx.is_tree(T)`,
      `T.is_tree()`,
      `nx.check_tree(T)`,
      `nx.validate_tree(T)`
    ],
    correct: 0,
    explanation: `nx.is_tree(T) returns True if the graph is connected and acyclic.`
  },
  {
    id: "tr-16",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `To get the children of node 20 in a directed tree T:`,
    options: [
      `list(T.successors(20))`,
      `list(T.predecessors(20))`,
      `list(T.children(20))`,
      `T.get_children(20)`
    ],
    correct: 0,
    explanation: `successors = children (edges going OUT from the node). predecessors = parent (edges coming IN).`
  },
  {
    id: "tr-17",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `To get the PARENT of node 40 in a directed tree T:`,
    options: [
      `list(T.predecessors(40))`,
      `list(T.successors(40))`,
      `T.parent(40)`,
      `nx.parent(T, 40)`
    ],
    correct: 0,
    explanation: `predecessors(node) = nodes that have edges pointing TO this node = parent. Trap: successors gives children.`
  },
  {
    id: "tr-18",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `To find leaf nodes in a directed tree T:`,
    options: [
      `[n for n in T.nodes() if T.out_degree(n) == 0]`,
      `[n for n in T.nodes() if T.in_degree(n) == 0]`,
      `nx.leaves(T)`,
      `T.get_leaves()`
    ],
    correct: 0,
    explanation: `Leaves have out_degree 0 (no children). Trap: in_degree 0 finds the ROOT, not leaves.`
  },
  {
    id: "tr-19",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `To find the ROOT of a directed tree T:`,
    options: [
      `[n for n in T.nodes() if T.in_degree(n) == 0]`,
      `[n for n in T.nodes() if T.out_degree(n) == 0]`,
      `T.root()`,
      `nx.root(T)`
    ],
    correct: 0,
    explanation: `Root has in_degree 0 (no parent points to it). Trap: out_degree 0 finds LEAVES. It's the exact opposite!`
  },
  {
    id: "tr-20",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `To calculate the HEIGHT of a tree rooted at node 10:`,
    options: [
      `max(nx.shortest_path_length(T, source=10).values())`,
      `nx.height(T)`,
      `len(T.nodes()) - 1`,
      `T.depth(10)`
    ],
    correct: 0,
    explanation: `shortest_path_length from root gives depth of each node. The maximum depth = height. nx.height() doesn't exist.`
  },
  {
    id: "tr-21",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `In array representation of a binary tree, the left child of node at index i is at:`,
    options: [
      `2*i + 1`,
      `2*i`,
      `i + 1`,
      `i * i`
    ],
    correct: 0,
    explanation: `Left child = 2i+1, Right child = 2i+2. This is the standard array-based binary tree formula.`
  },
  {
    id: "tr-22",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `In the full binary tree check, a tree is NOT full when a node has:`,
    options: [
      `Exactly one child (has_left ≠ has_right)`,
      `Zero children`,
      `Two children`,
      `A value of None`
    ],
    correct: 0,
    explanation: `Full binary tree: every node has 0 or 2 children. Having exactly 1 child (one exists, other is None) violates this.`
  },
  {
    id: "tr-23",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `For tree array \`[1, 2, 3, 4, 5, None, None]\`, is it a full binary tree?`,
    options: [
      `Yes — node 1 has 2 children (2,3), node 2 has 2 children (4,5), node 3 has 0 children`,
      `No — node 3 has no children while node 2 does`,
      `No — it contains None values`,
      `Cannot determine from array representation`
    ],
    correct: 0,
    explanation: `Every non-None node has either 0 or 2 children: root(2 kids), node2(2 kids), node3(0 kids), node4(0), node5(0). All valid → full binary tree.`
  },
  {
    id: "tr-24",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `A spanning tree of a graph with n nodes has:`,
    options: [
      `All n nodes and exactly n−1 edges, no cycles`,
      `All n nodes and all original edges`,
      `Some nodes and n−1 edges`,
      `All n nodes and n edges`
    ],
    correct: 0,
    explanation: `Spanning tree: includes ALL nodes, connected with MINIMUM edges (n−1), and NO cycles.`
  },
  {
    id: "tr-25",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `What is a Minimum Spanning Tree (MST)?`,
    options: [
      `The spanning tree with the smallest total edge weight`,
      `The tree with the fewest nodes`,
      `The shortest path between two nodes`,
      `Any spanning tree of the graph`
    ],
    correct: 0,
    explanation: `MST = spanning tree (all nodes, n−1 edges, no cycles) with MINIMUM total weight.`
  },
  {
    id: "tr-26",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `MST algorithms mentioned in the notes are:`,
    options: [
      `Prim's and Kruskal's`,
      `Dijkstra's and Bellman-Ford`,
      `BFS and DFS`,
      `Floyd-Warshall and A*`
    ],
    correct: 0,
    explanation: `The notes mention Prim's and Kruskal's for MST. Dijkstra's is for shortest path, not MST.`
  },
  {
    id: "tr-27",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `Given edges A-B(2), A-D(6), B-C(3), B-D(8), C-D(5). The MST edges are:`,
    options: [
      `A-B(2), B-C(3), C-D(5) → total weight 10`,
      `A-B(2), B-C(3), A-D(6) → total weight 11`,
      `A-B(2), A-D(6), B-D(8) → total weight 16`,
      `B-C(3), C-D(5), A-D(6) → total weight 14`
    ],
    correct: 0,
    explanation: `MST picks minimum weight edges avoiding cycles: A-B(2) + B-C(3) + C-D(5) = 10. Adding A-D(6) would create a cycle.`
  },
  {
    id: "tr-28",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `Why is A-D(6) NOT in the MST despite connecting A to D?`,
    options: [
      `A is already connected to D through A-B-C-D with lower total weight`,
      `A-D is a self-loop`,
      `A-D has odd weight`,
      `MST can't include edges from A`
    ],
    correct: 0,
    explanation: `A is reachable to D via A→B→C→D. Adding A-D(6) would create a cycle, and its weight is higher than alternatives.`
  },
  {
    id: "tr-29",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `NetworkX MST using Prim's algorithm:`,
    options: [
      `nx.minimum_spanning_tree(G, algorithm='prim')`,
      `nx.mst(G, 'prim')`,
      `nx.spanning_tree(G, algorithm='prim')`,
      `G.minimum_spanning_tree('prim')`
    ],
    correct: 0,
    explanation: `nx.minimum_spanning_tree(G, algorithm='prim') — exact function name from the notes.`
  },
  {
    id: "tr-30",
    topic: "trees",
    difficulty: "easy",
    source: "undefined",
    question: `BFS explores nodes:`,
    options: [
      `Level by level (breadth-first)`,
      `As deep as possible before backtracking`,
      `In random order`,
      `In reverse order`
    ],
    correct: 0,
    explanation: `BFS = Breadth-First: visits all nodes at current depth before moving to next level.`
  },
  {
    id: "tr-31",
    topic: "trees",
    difficulty: "easy",
    source: "undefined",
    question: `DFS explores nodes:`,
    options: [
      `As deep as possible before backtracking`,
      `Level by level`,
      `By weight (lightest first)`,
      `In alphabetical order`
    ],
    correct: 0,
    explanation: `DFS = Depth-First: goes as deep as possible down one branch, then backtracks.`
  },
  {
    id: "tr-32",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `BFS uses which data structure?`,
    options: [
      `Queue (FIFO — First In, First Out)`,
      `Stack (LIFO — Last In, First Out)`,
      `Array`,
      `Linked List`
    ],
    correct: 0,
    explanation: `BFS uses a Queue: process nodes in the ORDER they were discovered (FIFO). DFS uses a Stack.`
  },
  {
    id: "tr-33",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `DFS uses which data structure?`,
    options: [
      `Stack (LIFO — Last In, First Out)`,
      `Queue (FIFO — First In, First Out)`,
      `Heap`,
      `Hash Map`
    ],
    correct: 0,
    explanation: `DFS uses a Stack: explore the MOST RECENTLY discovered node first (LIFO). Or use recursion (implicit stack).`
  },
  {
    id: "tr-34",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `BFS is best for finding:`,
    options: [
      `Shortest path, level-order traversal, nearest neighbours`,
      `Cycle detection, topological sort`,
      `All possible paths`,
      `Maximum depth of a tree`
    ],
    correct: 0,
    explanation: `BFS explores level by level → naturally finds shortest paths (in unweighted graphs) and nearest nodes. DFS is for cycles/paths.`
  },
  {
    id: "tr-35",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `DFS is best for:`,
    options: [
      `Cycle detection, topological sort, exploring all paths`,
      `Finding shortest paths`,
      `Level-order traversal`,
      `Finding nearest neighbours`
    ],
    correct: 0,
    explanation: `DFS goes deep → good for detecting cycles, topological ordering, and finding ALL possible paths.`
  },
  {
    id: "tr-36",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `FIFO stands for:`,
    options: [
      `First In, First Out (Queue)`,
      `First In, Last Out (Stack)`,
      `Fast Input, Fast Output`,
      `Filtered In, Filtered Out`
    ],
    correct: 0,
    explanation: `FIFO = First In, First Out = Queue. Like a line at a store: first person in line is served first.`
  },
  {
    id: "tr-37",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `LIFO stands for:`,
    options: [
      `Last In, First Out (Stack)`,
      `Last In, Last Out (Queue)`,
      `Linked Input, Filtered Output`,
      `Linear In, Fast Out`
    ],
    correct: 0,
    explanation: `LIFO = Last In, First Out = Stack. Like a stack of plates: last plate placed is first removed.`
  },
  {
    id: "tr-38",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `Which NetworkX function performs BFS traversal?`,
    options: [
      `nx.bfs_tree(G, source=1)`,
      `nx.dfs_tree(G, source=1)`,
      `nx.bfs(G, 1)`,
      `G.bfs(1)`
    ],
    correct: 0,
    explanation: `nx.bfs_tree(G, source=node) returns the BFS tree. Trap: nx.dfs_tree is DFS.`
  },
  {
    id: "tr-39",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `Which NetworkX function performs DFS traversal?`,
    options: [
      `nx.dfs_tree(G, source=1)`,
      `nx.bfs_tree(G, source=1)`,
      `nx.dfs(G, 1)`,
      `G.dfs(1)`
    ],
    correct: 0,
    explanation: `nx.dfs_tree(G, source=node) returns the DFS tree.`
  },
  {
    id: "tr-40",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `Given DiGraph edges (1,3),(2,3),(1,4),(3,4), BFS from node 1 visits:`,
    options: [
      `[1, 3, 4] — level by level from node 1`,
      `[1, 3, 2, 4] — includes node 2`,
      `[1, 4, 3] — visits 4 before 3`,
      `[1, 2, 3, 4] — visits all nodes`
    ],
    correct: 0,
    explanation: `BFS from 1: Visit 1 → neighbours of 1 are {3, 4} → Visit 3, 4. Node 2 is NOT reachable from 1 (edge 2→3, not 1→2). So BFS visits [1, 3, 4].`
  },
  {
    id: "tr-41",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `If you use BFS to find a path in an UNWEIGHTED graph, the path found is guaranteed to be:`,
    options: [
      `The shortest path (fewest edges)`,
      `The longest path`,
      `A random path`,
      `The path with minimum total weight`
    ],
    correct: 0,
    explanation: `BFS explores level by level, so the first time it reaches a node, it's via the fewest edges → shortest path in unweighted graphs.`
  },
  {
    id: "tr-42",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `To find the shortest path lengths from node 1 to all other nodes:`,
    options: [
      `nx.shortest_path_length(G, source=1)`,
      `nx.all_shortest_paths(G, source=1)`,
      `nx.bfs_tree(G, source=1)`,
      `G.shortest_path(1)`
    ],
    correct: 0,
    explanation: `nx.shortest_path_length(G, source=1) returns a dict of {node: distance} from node 1. all_shortest_paths returns actual paths, not lengths.`
  },
  {
    id: "tr-43",
    topic: "trees",
    difficulty: "medium",
    source: "undefined",
    question: `To get the adjacency list of a graph:`,
    options: [
      `nx.to_dict_of_lists(G)`,
      `nx.to_numpy_array(G)`,
      `G.adjacency_list()`,
      `nx.adjacency(G)`
    ],
    correct: 0,
    explanation: `nx.to_dict_of_lists(G) → adjacency list. nx.to_numpy_array(G) → adjacency matrix. Don't mix them up.`
  },
  {
    id: "tr-44",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `Match: BFS uses _____, DFS uses _____.`,
    options: [
      `Queue, Stack`,
      `Stack, Queue`,
      `Array, Queue`,
      `Queue, Array`
    ],
    correct: 0,
    explanation: `BFS = Queue (FIFO, level by level). DFS = Stack (LIFO, go deep). This is one of the most common exam questions.`
  },
  {
    id: "tr-45",
    topic: "trees",
    difficulty: "hard",
    source: "undefined",
    question: `A graph has 5 nodes and 5 edges. Can it be a tree?`,
    options: [
      `No — a tree with 5 nodes must have exactly 4 edges`,
      `Yes — any connected graph is a tree`,
      `Yes — if it has no self-loops`,
      `It depends on whether it's directed`
    ],
    correct: 0,
    explanation: `Tree with n=5 nodes MUST have n−1=4 edges. 5 edges means it has a cycle → NOT a tree.`
  },
  {
    id: "old-sample-3",
    topic: "ip-data-types-variables",
    difficulty: "medium",
    source: "undefined",
    question: `Which of the following is NOT a primitive data type in most programming languages?`,
    options: [
      `int`,
      `string`,
      `boolean`,
      `array`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "old-sample-4",
    topic: "ip-control-structures",
    difficulty: "medium",
    source: "undefined",
    question: `What type of loop is guaranteed to execute at least once?`,
    options: [
      `for loop`,
      `while loop`,
      `do-while loop`,
      `nested loop`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-sample-5",
    topic: "dcn-osi-model",
    difficulty: "medium",
    source: "undefined",
    question: `Which layer of the OSI model is responsible for routing?`,
    options: [
      `Physical Layer`,
      `Data Link Layer`,
      `Network Layer`,
      `Transport Layer`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-sample-6",
    topic: "dcn-protocols",
    difficulty: "medium",
    source: "undefined",
    question: `What does TCP stand for?`,
    options: [
      `Transfer Control Protocol`,
      `Transmission Control Protocol`,
      `Transport Control Protocol`,
      `Terminal Control Protocol`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-sample-7",
    topic: "mfc-boolean-algebra",
    difficulty: "medium",
    source: "undefined",
    question: `What is the result of A AND (NOT A)?`,
    options: [
      `A`,
      `NOT A`,
      `1`,
      `0`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "old-sample-8",
    topic: "mfc-set-theory",
    difficulty: "medium",
    source: "undefined",
    question: `If set A = {1, 2, 3} and set B = {2, 3, 4}, what is A ∩ B?`,
    options: [
      `{1, 2, 3, 4}`,
      `{2, 3}`,
      `{1}`,
      `{4}`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-sample-1",
    topic: "ip-functions",
    difficulty: "medium",
    source: "undefined",
    question: `What is the main advantage of using functions in programming?`,
    options: [
      `Faster execution`,
      `Code reusability`,
      `Less memory usage`,
      `Better graphics`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-5ca510e2",
    topic: "fc-processor-control",
    difficulty: "medium",
    source: "undefined",
    question: `According to the provided lecture, what are the three main units contained within a processor?`,
    options: [
      `RAM, ROM, and Cache`,
      `Control Unit, Arithmetic Logic Unit, and Registers`,
      `Input, Output, and Storage Devices`,
      `Motherboard, CPU, and Hard Drive`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-73319418",
    topic: "fc-processor-control",
    difficulty: "medium",
    source: "undefined",
    question: `Which component of the processor is responsible for managing the overall operation of the computer, including fetching and decoding instructions?`,
    options: [
      `Arithmetic Logic Unit (ALU)`,
      `Registers`,
      `Control Unit`,
      `Memory`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-343abeb3",
    topic: "fc-processor-control",
    difficulty: "medium",
    source: "undefined",
    question: `What is the first step the Control Unit performs in its operation sequence?`,
    options: [
      `Distributing the execution to the ALU`,
      `Decoding the instruction to determine the operation`,
      `Fetching the next instruction from memory`,
      `Storing the result in a register`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-de156d43",
    topic: "fc-alu",
    difficulty: "medium",
    source: "undefined",
    question: `Which processor component is often called the "brain within the brain" and handles the core computational tasks?`,
    options: [
      `Control Unit`,
      `Registers`,
      `Cache Memory`,
      `Arithmetic Logic Unit (ALU)`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "old-a02c7aa9",
    topic: "fc-alu",
    difficulty: "medium",
    source: "undefined",
    question: `What are the input data values that the ALU processes called?`,
    options: [
      `Operators`,
      `Operands`,
      `Control Signals`,
      `Flags`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-ac7b652b",
    topic: "fc-alu",
    difficulty: "medium",
    source: "undefined",
    question: `The ALU receives signals from which unit to determine the specific operation to be performed?`,
    options: [
      `The Registers`,
      `The Memory Unit`,
      `The Control Unit`,
      `The Input/Output Devices`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-d6a7e77a",
    topic: "fc-alu",
    difficulty: "medium",
    source: "undefined",
    question: `Which of the following is NOT listed as a primary operation of the ALU?`,
    options: [
      `Arithmetic operations`,
      `Logical operations`,
      `Data fetching from disk`,
      `Shift operations`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-942a1b74",
    topic: "fc-registers",
    difficulty: "medium",
    source: "undefined",
    question: `What is the primary characteristic of processor registers?`,
    options: [
      `Large, slow storage locations outside the CPU`,
      `Small, fast storage locations within the CPU`,
      `Permanent, non-volatile storage`,
      `A tool for connecting to peripheral devices`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-0cc9aaff",
    topic: "fc-registers",
    difficulty: "medium",
    source: "undefined",
    question: `Which of the following is a primary function of processor registers?`,
    options: [
      `Storing the operating system kernel`,
      `Long-term data archiving`,
      `Managing power consumption`,
      `Holding operands for arithmetic and logic operations`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "old-4402b01a",
    topic: "fc-registers",
    difficulty: "medium",
    source: "undefined",
    question: `Which type of register is specifically designed to hold the base addresses of segments in memory?`,
    options: [
      `Floating-Point Registers`,
      `Data Registers`,
      `Segment Registers`,
      `Status Registers`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-d7527d5e",
    topic: "fc-registers",
    difficulty: "medium",
    source: "undefined",
    question: `Which register holds the address of the next instruction to be fetched from memory?`,
    options: [
      `Instruction Register (IR)`,
      `Program Counter (PC)`,
      `Status Register`,
      `Memory Address Register`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-30f53c6a",
    topic: "fc-registers",
    difficulty: "medium",
    source: "undefined",
    question: `During the instruction cycle, into which register is an instruction loaded after being fetched from memory?`,
    options: [
      `Program Counter (PC)`,
      `General Purpose Register`,
      `Instruction Register (IR)`,
      `Stack Pointer`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-8ab8169e",
    topic: "fc-registers",
    difficulty: "medium",
    source: "undefined",
    question: `What is the final step in the four-stage operation of processor registers where the result is written back to memory?`,
    options: [
      `Fetch`,
      `Decode`,
      `Execute`,
      `Write-back`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "old-2b086bd4",
    topic: "fc-registers",
    difficulty: "medium",
    source: "undefined",
    question: `According to the lecture, which processor architecture typically includes 32 general-purpose registers?`,
    options: [
      `x86 Architecture`,
      `ARM Architecture`,
      `RISC-V Architecture`,
      `Intel 8086 Architecture`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-737cdf3a",
    topic: "fc-addressing-instructions",
    difficulty: "medium",
    source: "undefined",
    question: `What is the purpose of addressing modes in a processor?`,
    options: [
      `To specify the speed of the processor clock`,
      `To specify the location of operands for an instruction`,
      `To manage the power supply to the CPU`,
      `To select the operating system to boot`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-234aa3f3",
    topic: "fc-addressing-instructions",
    difficulty: "medium",
    source: "undefined",
    question: `In which addressing mode is the operand's value specified directly within the instruction itself?`,
    options: [
      `Immediate Addressing Mode`,
      `Register Addressing Mode`,
      `Direct Addressing Mode`,
      `Indirect Addressing Mode`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "old-157fe650",
    topic: "fc-addressing-instructions",
    difficulty: "medium",
    source: "undefined",
    question: `The instruction ADD R1, R2 is an example of which addressing mode?`,
    options: [
      `Immediate Addressing Mode`,
      `Register Addressing Mode`,
      `Indirect Addressing Mode`,
      `Indexed Addressing Mode`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-813c3222",
    topic: "fc-addressing-instructions",
    difficulty: "medium",
    source: "undefined",
    question: `Which addressing mode contains the full memory address of the operand within the instruction?`,
    options: [
      `Indexed Addressing Mode`,
      `Indirect Addressing Mode`,
      `Direct Addressing Mode`,
      `Register Addressing Mode`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-5ca96ebc",
    topic: "fc-addressing-instructions",
    difficulty: "medium",
    source: "undefined",
    question: `In the instruction MOV R1, [R2], the address of the operand is found in register R2. What is this mode called?`,
    options: [
      `Direct Addressing Mode`,
      `Immediate Addressing Mode`,
      `Indexed Addressing Mode`,
      `Indirect Addressing Mode`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "old-46fa5d49",
    topic: "fc-addressing-instructions",
    difficulty: "medium",
    source: "undefined",
    question: `What does Indexed Addressing Mode do to find the effective address of an operand?`,
    options: [
      `It uses the value directly from the instruction.`,
      `It adds a constant value (index) to a base address held in a register.`,
      `It uses an address stored in another memory location.`,
      `It takes the operand directly from a specified register.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-4a6aa97b",
    topic: "fc-addressing-instructions",
    difficulty: "medium",
    source: "undefined",
    question: `Which type of instruction allows the CPU to retrieve data from memory and save data back to memory?`,
    options: [
      `Arithmetic instructions`,
      `Branching instructions`,
      `Logical instructions`,
      `Memory load and store instructions`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "old-f8055b89",
    topic: "fc-addressing-instructions",
    difficulty: "medium",
    source: "undefined",
    question: `The JMP and LOOP instructions are examples of which instruction type, used to alter the flow of a program?`,
    options: [
      `Stack instructions`,
      `Branching instructions`,
      `Logical instructions`,
      `Arithmetic instructions`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-e6394a7e",
    topic: "fc-addressing-instructions",
    difficulty: "medium",
    source: "undefined",
    question: `What is the purpose of a NOP (No Operation) instruction?`,
    options: [
      `To halt the processor completely`,
      `To perform an arithmetic calculation`,
      `To move the program counter to the next instruction without doing any other work`,
      `To trigger a hardware interrupt`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-1ce75640",
    topic: "fc-interrupts-io",
    difficulty: "medium",
    source: "undefined",
    question: `What is an interrupt?`,
    options: [
      `A signal sent to the CPU to stop its current activities and execute part of the OS`,
      `A command to increase the processor's clock speed`,
      `An error in a software program that causes it to crash`,
      `A type of memory used for temporary storage`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "old-e0a727e0",
    topic: "fc-interrupts-io",
    difficulty: "medium",
    source: "undefined",
    question: `Which type of interrupt is generated by hardware devices to signal they need attention from the OS?`,
    options: [
      `Software Interrupts`,
      `Traps`,
      `Hardware Interrupts`,
      `Exception Interrupts`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-5ea26a10",
    topic: "fc-interrupts-io",
    difficulty: "medium",
    source: "undefined",
    question: `When a program requests a service from the operating system, what kind of interrupt does it generate?`,
    options: [
      `Hardware Interrupt`,
      `Software Interrupt`,
      `Trap`,
      `Fault`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-464376a3",
    topic: "fc-interrupts-io",
    difficulty: "medium",
    source: "undefined",
    question: `What type of interrupt is generated by the CPU itself to indicate an error or special condition?`,
    options: [
      `Hardware Interrupt`,
      `Software Interrupt`,
      `Trap`,
      `System Call`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-0ec2ace3",
    topic: "fc-interrupts-io",
    difficulty: "medium",
    source: "undefined",
    question: `What is Memory-Mapped I/O?`,
    options: [
      `A method where I/O devices have separate, dedicated instructions`,
      `A system where I/O devices are mapped into the regular memory address space`,
      `A technique that requires the CPU to handle all data transfers personally`,
      `A special type of memory used only for I/O operations`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-ff77ef71",
    topic: "fc-interrupts-io",
    difficulty: "medium",
    source: "undefined",
    question: `In which I/O operation method does the processor actively check the status of the I/O device and move data itself?`,
    options: [
      `Direct Memory Access (DMA)`,
      `Interrupt-Driven I/O`,
      `Programmed I/O (PIO)`,
      `Memory-Mapped I/O`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-51dac249",
    topic: "fc-interrupts-io",
    difficulty: "medium",
    source: "undefined",
    question: `Which I/O technique allows an I/O device to transfer data directly to or from memory without involving the processor in the actual data transfer?`,
    options: [
      `Programmed I/O (PIO)`,
      `Interrupt-Driven I/O`,
      `Direct Memory Access (DMA)`,
      `Port-Mapped I/O`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-9bccce80",
    topic: "fc-os-boot",
    difficulty: "medium",
    source: "undefined",
    question: `What is the primary role of an Operating System (OS) in a computer?`,
    options: [
      `To run a single application at a time`,
      `To act as an interface between the user and the computer hardware`,
      `To design and create new hardware components`,
      `To only manage the computer's power supply`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-627c6466",
    topic: "fc-os-boot",
    difficulty: "medium",
    source: "undefined",
    question: `Which of the following is considered a primary goal of an OS?`,
    options: [
      `To make computer hardware more complex for the user`,
      `To slow down program execution for better analysis`,
      `To use the computer hardware in an efficient manner`,
      `To prevent users from installing new applications`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-9002e4c5",
    topic: "fc-os-boot",
    difficulty: "medium",
    source: "undefined",
    question: `Which type of OS aims to maximize CPU utilization by always having a process ready to execute?`,
    options: [
      `Real-time OS`,
      `Multiprogramming OS`,
      `Multitasking OS`,
      `Single-tasking OS`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-e37d7491",
    topic: "fc-os-boot",
    difficulty: "medium",
    source: "undefined",
    question: `An OS that can execute multiple tasks or processes seemingly at the same time by sharing system resources is known as what?`,
    options: [
      `Multiprogramming OS`,
      `Multiprocessing OS`,
      `Multitasking OS`,
      `Real-time OS`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-0dbc8dd3",
    topic: "fc-os-boot",
    difficulty: "medium",
    source: "undefined",
    question: `What defines a multiprocessing OS?`,
    options: [
      `It can run multiple programs in memory at once`,
      `It supports a system that has two or more processors`,
      `It responds to events within a strict time constraint`,
      `It allows for only one user to operate the system at a time`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-746abc8f",
    topic: "fc-os-boot",
    difficulty: "medium",
    source: "undefined",
    question: `In which type of operating system is returning a correct result within a specific time constraint the main priority?`,
    options: [
      `Multitasking OS`,
      `Multiprocessing OS`,
      `Multiprogramming OS`,
      `Real-time OS`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "old-373c60a5",
    topic: "fc-os-boot",
    difficulty: "medium",
    source: "undefined",
    question: `What is the main function of a device driver?`,
    options: [
      `To provide power to hardware devices`,
      `To physically connect a device to the motherboard`,
      `To provide a software interface between the OS and a hardware device`,
      `To cool down hardware components`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-ccfc0af8",
    topic: "fc-os-boot",
    difficulty: "medium",
    source: "undefined",
    question: `What are interrupts in the context of device driver operations?`,
    options: [
      `Signals sent by the CPU to the device to stop its operation`,
      `Errors reported by the operating system to the user`,
      `Power fluctuations that can damage hardware`,
      `Signals sent by the device to notify the CPU that it needs attention`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "old-eabb300c",
    topic: "fc-os-boot",
    difficulty: "medium",
    source: "undefined",
    question: `What is BIOS?`,
    options: [
      `A type of application software like a web browser`,
      `The main memory (RAM) of the computer`,
      `Firmware embedded on a memory chip on the motherboard`,
      `The operating system's kernel`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-71923254",
    topic: "fc-os-boot",
    difficulty: "medium",
    source: "undefined",
    question: `What is the first task the BIOS performs when a computer is powered on?`,
    options: [
      `Loading the operating system`,
      `Displaying the desktop`,
      `Power-On Self Test (POST)`,
      `Connecting to the internet`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-181fec6e",
    topic: "fc-os-boot",
    difficulty: "medium",
    source: "undefined",
    question: `What is the role of the "Bootstrap Loader" in the boot process?`,
    options: [
      `To check the computer's memory for errors`,
      `To load the operating system kernel into memory`,
      `To allow the user to change hardware settings`,
      `To test the keyboard and mouse for functionality`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-62ab7a13",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `Which type of memory is a smaller, faster memory located closer to the processor that stores copies of frequently accessed data?`,
    options: [
      `Secondary Memory`,
      `Virtual Memory`,
      `RAM (Random Access Memory)`,
      `Cache Memory`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "old-d980128b",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `What is virtual memory?`,
    options: [
      `The fastest type of memory, located directly on the CPU`,
      `A memory management technique that uses a portion of the hard drive as an extension of RAM`,
      `A type of physical RAM chip`,
      `Memory used exclusively for graphics processing`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-59419d3f",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `In the memory hierarchy, what is the trade-off as you move from CPU registers to secondary storage?`,
    options: [
      `Speed and cost increase, while size decreases`,
      `Speed and cost decrease, while size increases`,
      `Only the speed increases`,
      `Only the cost decreases`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-1898e0b4",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `Which type of memory is typically used for a computer's main memory (RAM)?`,
    options: [
      `SRAM`,
      `DRAM`,
      `ROM`,
      `Flash Memory`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-f5f2209a",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `What is the key feature of DDR (Double Data Rate) memory?`,
    options: [
      `It does not require power to retain data`,
      `It transfers data twice per clock cycle`,
      `It is synchronized with the CPU's clock, transferring data once per cycle`,
      `It is used exclusively in mobile devices`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-23a53171",
    topic: "fc-interrupts-io",
    difficulty: "medium",
    source: "undefined",
    question: `What is the primary responsibility of the I/O subsystem?`,
    options: [
      `To perform complex mathematical calculations`,
      `To manage communication between the processor and external devices`,
      `To store the operating system and user files`,
      `To cool the central processing unit`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-a9d19c37",
    topic: "fc-interrupts-io",
    difficulty: "medium",
    source: "undefined",
    question: `What is the difference between Interrupts and Polling for I/O operations?`,
    options: [
      `There is no difference; they are the same thing`,
      `Interrupts are CPU-initiated, while Polling is device-initiated`,
      `Polling involves the CPU periodically checking a device's status, while an interrupt is a signal from the device to the CPU`,
      `Polling is faster but less efficient than interrupts`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-bba4ab81",
    topic: "fc-interrupts-io",
    difficulty: "medium",
    source: "undefined",
    question: `Which type of keyboard is preferred by gamers and typists for its tactile feedback, responsiveness, and durability?`,
    options: [
      `Membrane Keyboard`,
      `Ergonomic Keyboard`,
      `Mechanical Keyboard`,
      `Wireless Keyboard`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-9d450b3d",
    topic: "fc-interrupts-io",
    difficulty: "medium",
    source: "undefined",
    question: `What technology do most modern mice use to detect movement?`,
    options: [
      `A rubber or metal rolling ball`,
      `Gyroscopic sensors`,
      `An LED or laser (Optical)`,
      `Sound waves`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-24469c0a",
    topic: "fc-display-network",
    difficulty: "medium",
    source: "undefined",
    question: `What type of signal does a VGA (Video Graphics Array) interface use to transfer video data?`,
    options: [
      `Digital signal`,
      `Analog signal`,
      `Both analog and digital signals`,
      `Encrypted signal`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-0466e01a",
    topic: "fc-display-network",
    difficulty: "medium",
    source: "undefined",
    question: `Which interface is the modern standard for transmitting high-definition digital video and audio data over a single cable?`,
    options: [
      `VGA`,
      `DVI`,
      `HDMI`,
      `Component Video`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-ab87fcf1",
    topic: "fc-display-network",
    difficulty: "medium",
    source: "undefined",
    question: `What is the function of a Network Interface in a computer?`,
    options: [
      `To manage the display of graphics on the monitor`,
      `To enable the computer to connect and communicate with a network`,
      `To interpret keystrokes from the keyboard`,
      `To store long-term data and files`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-8b687940",
    topic: "fc-display-network",
    difficulty: "medium",
    source: "undefined",
    question: `Which type of network interface is known for its reliability, speed, and security, but requires a physical connection?`,
    options: [
      `Wireless Network Interface`,
      `Bluetooth Interface`,
      `Infrared Interface`,
      `Wired Network Interface`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "old-9ef0d4d2",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `What is the defining characteristic of the Von Neumann architecture?`,
    options: [
      `It uses separate memory spaces for instructions and data.`,
      `Program instructions and data share the same memory space.`,
      `It requires multiple processors to function.`,
      `It can only execute one program at a time.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-c23b05fb",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `What is the "Von Neumann bottleneck"?`,
    options: [
      `The processor overheating due to high usage.`,
      `The limitation in performance because the CPU cannot access instructions and data simultaneously over the shared bus.`,
      `The slow speed of input/output devices.`,
      `A security flaw that allows unauthorized access to memory.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-2bf24981",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `A buffer overflow is a security vulnerability particularly relevant to Von Neumann architecture because:`,
    options: [
      `It has separate memory for code and data.`,
      `It runs programs sequentially.`,
      `Excess input data can overwrite memory intended for program instructions since they are stored in the same space.`,
      `It uses a very fast data bus.`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-4b35cb1b",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `What is the key feature of the Harvard architecture?`,
    options: [
      `A single, unified memory for all operations.`,
      `It uses one address space and memory bus for instructions and a separate one for data.`,
      `It is simpler and easier to implement than Von Neumann.`,
      `It primarily uses virtual memory for all its operations.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-7625a40d",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `What is the main advantage of the Harvard architecture's design?`,
    options: [
      `It has a simpler hardware design.`,
      `It allows for simultaneous access to instructions and data, increasing throughput.`,
      `It uses less physical memory.`,
      `It is more flexible due to a shared memory space.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-33a3d38e",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `How does the Modified Harvard Architecture combine features from the other two architectures?`,
    options: [
      `It uses a single bus but has separate physical memories.`,
      `It separates instruction and data memory but allows them to be accessed more flexibly, sometimes through a shared address space.`,
      `It is identical to the Von Neumann architecture but with a faster CPU.`,
      `It removes the ALU to simplify the design.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-c5cede54",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `Which architecture is most commonly found in modern high-performance CPUs?`,
    options: [
      `Von Neumann Architecture`,
      `Strict Harvard Architecture`,
      `Modified Harvard Architecture`,
      `A completely new architecture not mentioned in the lecture.`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-ade63d85",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `What is the purpose of memory virtualization?`,
    options: [
      `To physically increase the amount of RAM in a computer.`,
      `To manage how data is stored and accessed by the CPU for efficient performance.`,
      `To permanently store data when the computer is off.`,
      `To speed up the processor's clock cycle.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-51254eb8",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `What is "swapping" in the context of memory management?`,
    options: [
      `Moving the CPU to a different motherboard.`,
      `Temporarily moving a process from memory to a backing store (like a hard drive) to free up memory.`,
      `Upgrading the RAM sticks in a computer.`,
      `Exchanging data between two running applications.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-a67b86c7",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `What is "External Fragmentation"?`,
    options: [
      `When a file is broken into many pieces on a hard drive.`,
      `When a process is too large to fit into memory.`,
      `When total memory space exists to satisfy a request, but it is not in one continuous block.`,
      `Physical damage to the RAM chips.`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-c6035b71",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `What is the main concept behind "Paging"?`,
    options: [
      `Allocating one single, large block of memory to each process.`,
      `Separating a process into equal-sized pages that can be stored in non-contiguous memory locations.`,
      `Writing memory contents to a piece of paper.`,
      `Using only the hard drive for memory operations.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-87caadec",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `What is the primary benefit of using virtual memory?`,
    options: [
      `It makes the computer run faster than using physical RAM.`,
      `It allows the system to run larger programs than the physical RAM would allow.`,
      `It eliminates the need for a hard drive.`,
      `It is non-volatile, so data is never lost.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-34e679ce",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `Compared to physical memory (RAM), virtual memory is:`,
    options: [
      `Faster and smaller`,
      `Faster and larger`,
      `Slower and larger`,
      `Slower and smaller`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-b539887b",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `What is the defining characteristic of the Von Neumann architecture?`,
    options: [
      `It uses separate memory spaces for instructions and data.`,
      `Program instructions and data share the same memory space.`,
      `It requires multiple processors to function.`,
      `It can only execute one program at a time.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-99ab0b5c",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `What is the "Von Neumann bottleneck"?`,
    options: [
      `The processor overheating due to high usage.`,
      `The limitation in performance because the CPU cannot access instructions and data simultaneously over the shared bus.`,
      `The slow speed of input/output devices.`,
      `A security flaw that allows unauthorized access to memory.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-9a027e1b",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `A buffer overflow is a security vulnerability particularly relevant to Von Neumann architecture because:`,
    options: [
      `It has separate memory for code and data.`,
      `It runs programs sequentially.`,
      `Excess input data can overwrite memory intended for program instructions since they are stored in the same space.`,
      `It uses a very fast data bus.`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-e47f3ec2",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `What is the key feature of the Harvard architecture?`,
    options: [
      `A single, unified memory for all operations.`,
      `It uses one address space and memory bus for instructions and a separate one for data.`,
      `It is simpler and easier to implement than Von Neumann.`,
      `It primarily uses virtual memory for all its operations.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-6e61b508",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `What is the main advantage of the Harvard architecture's design?`,
    options: [
      `It has a simpler hardware design.`,
      `It allows for simultaneous access to instructions and data, increasing throughput.`,
      `It uses less physical memory.`,
      `It is more flexible due to a shared memory space.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-92bb4613",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `How does the Modified Harvard Architecture combine features from the other two architectures?`,
    options: [
      `It uses a single bus but has separate physical memories.`,
      `It separates instruction and data memory but allows them to be accessed more flexibly, sometimes through a shared address space.`,
      `It is identical to the Von Neumann architecture but with a faster CPU.`,
      `It removes the ALU to simplify the design.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-5935f0af",
    topic: "fc-architecture",
    difficulty: "medium",
    source: "undefined",
    question: `Which architecture is most commonly found in modern high-performance CPUs?`,
    options: [
      `Von Neumann Architecture`,
      `Strict Harvard Architecture`,
      `Modified Harvard Architecture`,
      `A completely new architecture not mentioned in the lecture.`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-2b653f6a",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `What is the purpose of memory virtualization?`,
    options: [
      `To physically increase the amount of RAM in a computer.`,
      `To manage how data is stored and accessed by the CPU for efficient performance.`,
      `To permanently store data when the computer is off.`,
      `To speed up the processor's clock cycle.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-0ef94afc",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `What is "swapping" in the context of memory management?`,
    options: [
      `Moving the CPU to a different motherboard.`,
      `Temporarily moving a process from memory to a backing store (like a hard drive) to free up memory.`,
      `Upgrading the RAM sticks in a computer.`,
      `Exchanging data between two running applications.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-4aac88a7",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `What is "External Fragmentation"?`,
    options: [
      `When a file is broken into many pieces on a hard drive.`,
      `When a process is too large to fit into memory.`,
      `When total memory space exists to satisfy a request, but it is not in one continuous block.`,
      `Physical damage to the RAM chips.`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "old-63205013",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `What is the main concept behind "Paging"?`,
    options: [
      `Allocating one single, large block of memory to each process.`,
      `Separating a process into equal-sized pages that can be stored in non-contiguous memory locations.`,
      `Writing memory contents to a piece of paper.`,
      `Using only the hard drive for memory operations.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-269056f5",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `What is the primary benefit of using virtual memory?`,
    options: [
      `It makes the computer run faster than using physical RAM.`,
      `It allows the system to run larger programs than the physical RAM would allow.`,
      `It eliminates the need for a hard drive.`,
      `It is non-volatile, so data is never lost.`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "old-d38a5f61",
    topic: "fc-memory",
    difficulty: "medium",
    source: "undefined",
    question: `Compared to physical memory (RAM), virtual memory is:`,
    options: [
      `Faster and smaller`,
      `Faster and larger`,
      `Slower and larger`,
      `Slower and smaller`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "se_m1_001",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Which of the following best describes Software Engineering compared to traditional programming?`,
    options: [
      `Writing code for specific tasks or features`,
      `Focusing solely on compiling and debugging code`,
      `Applying engineering principles to build reliable, maintainable systems across the entire software lifecycle`,
      `Developing quick scripts and prototypes as an individual effort`
    ],
    correct: 2,
    explanation: `Software Engineering is about applying engineering principles to build reliable, efficient, and maintainable systems, encompassing the entire lifecycle (analysis, design, testing, etc.), whereas programming is typically focused on writing code for specific tasks.`
  },
  {
    id: "se_m1_002",
    topic: "se-module-1",
    difficulty: "easy",
    source: "PDF",
    question: `What historical period and issue led to the realization that structured software engineering was necessary?`,
    options: [
      `The Hardware Crisis (1980s)`,
      `The Software Crisis (1960s–1990s)`,
      `The Internet Boom (2000s)`,
      `The AI Revolution (2010s)`
    ],
    correct: 1,
    explanation: `The Software Crisis from the 1960s to 1990s involved projects going over budget, missing deadlines, and resulting in critical failures, proving the need for structured software development processes.`
  },
  {
    id: "se_m1_003",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following correctly identifies the type of feasibility that answers the question: 'Does the system comply with GDPR or data protection laws?'`,
    options: [
      `Technical Feasibility`,
      `Economic Feasibility`,
      `Operational Feasibility`,
      `Legal Feasibility`
    ],
    correct: 3,
    explanation: `Legal Feasibility checks if the project is legally safe and complies with laws, policies, and regulations such as GDPR.`
  },
  {
    id: "se_m1_004",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `In the context of requirement gathering, 'The system should load within 3 seconds' is an example of a:`,
    options: [
      `Functional Requirement`,
      `Non-Functional Requirement`,
      `Constraint`,
      `Operational Requirement`
    ],
    correct: 1,
    explanation: `Non-Functional Requirements describe how the system should perform (e.g., speed, reliability, availability), unlike functional requirements which describe what the system should do.`
  },
  {
    id: "se_m1_005",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Which phase of the SDLC acts like a contract between the client and the development team outlining what will be built?`,
    options: [
      `System Design`,
      `Implementation`,
      `Requirements Gathering & Analysis`,
      `Feasibility Study`
    ],
    correct: 2,
    explanation: `Requirements Gathering & Analysis documents exactly what the client wants in an SRS, acting as an agreement or contract on what the system will entail.`
  },
  {
    id: "se_m1_006",
    topic: "se-module-1",
    difficulty: "easy",
    source: "PDF",
    question: `Who among the following is considered a 'Stakeholder' in a software project?`,
    options: [
      `Only the end users`,
      `Only the development team`,
      `Any person or group who has an interest in, uses, manages, or is affected by the software system`,
      `Only the project sponsors who provide funding`
    ],
    correct: 2,
    explanation: `A stakeholder is anyone directly or indirectly affected by the system, including end users, management, sponsors, suppliers, and regulatory bodies.`
  },
  {
    id: "se_m1_007",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `If a client states 'The system must run on Android only', this requirement is best classified as a:`,
    options: [
      `Functional Requirement`,
      `Non-Functional Requirement`,
      `Constraint (Limitation)`,
      `Business Requirement`
    ],
    correct: 2,
    explanation: `A constraint or limitation is a rule or boundary the system must follow, such as operating only within a specific environment like Android or a local network.`
  },
  {
    id: "se_m1_008",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `During the maintenance phase, if you modify the software to work on a new operating system version (e.g., iOS 17), what type of maintenance is this?`,
    options: [
      `Corrective Maintenance`,
      `Adaptive Maintenance`,
      `Perfective Maintenance`,
      `Preventive Maintenance`
    ],
    correct: 1,
    explanation: `Adaptive Maintenance involves changing the software to work in a new or changed environment, such as a new OS version.`
  },
  {
    id: "se_m1_009",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Which of the following testing types involves testing the system with actual users in the client environment to ensure it meets requirements?`,
    options: [
      `Unit Testing`,
      `Integration Testing`,
      `System Testing`,
      `Acceptance Testing`
    ],
    correct: 3,
    explanation: `Acceptance Testing (or User Acceptance Testing) checks if the system meets the client's requirements, typically involving actual users rather than just the development team.`
  },
  {
    id: "se_m1_010",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Which organization provides a widely recognized Code of Ethics and Professional Conduct for software engineers globally?`,
    options: [
      `W3C`,
      `IEEE and ACM`,
      `ISO`,
      `ICANN`
    ],
    correct: 1,
    explanation: `The IEEE and ACM jointly created the 'Software Engineering Code of Ethics and Professional Practice' in 1999 to guide professionals.`
  },
  {
    id: "se_m1_011",
    topic: "se-module-1",
    difficulty: "easy",
    source: "PDF",
    question: `What is the primary purpose of a Feasibility Study?`,
    options: [
      `To write the source code for the prototype`,
      `To determine if the project is technically possible, financially affordable, and realistic to build`,
      `To test the software for bugs`,
      `To train users on how to use the deployed system`
    ],
    correct: 1,
    explanation: `A Feasibility Study happens before development to answer 'Should we build this system?' by checking technical, economic, schedule, legal, and operational viability.`
  },
  {
    id: "se_m1_012",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `If your management forces you to release a software product with known critical bugs that could harm the public, what is the ethical action for a software engineer?`,
    options: [
      `Release it immediately as instructed by management to keep your job.`,
      `Secretly delete the source code to prevent the release.`,
      `Raise concerns based on the Code of Ethics, prioritizing the well-being and safety of the public.`,
      `Release it but blame the QA team for missing the bugs.`
    ],
    correct: 2,
    explanation: `Professional codes of ethics (like IEEE/ACM) state that software engineers must act consistently with the public interest and safety, even if it contradicts management pressure.`
  },
  {
    id: "se_m1_013",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What is a 'Pilot Release' in the deployment phase?`,
    options: [
      `Releasing the software exclusively to the development team.`,
      `Releasing the software to a small, selected group of users in the client environment for initial testing.`,
      `Testing the software on an airplane flight control system.`,
      `Deploying the software after all maintenance is complete.`
    ],
    correct: 1,
    explanation: `A pilot release involves installing the system for a small set of computers or users in the client environment to test its functionality in the real world before a full rollout.`
  },
  {
    id: "se_m1_014",
    topic: "se-module-1",
    difficulty: "easy",
    source: "PDF",
    question: `Which of the following is an example of Corrective Maintenance?`,
    options: [
      `Adding a new online payment gateway feature.`,
      `Updating the system to support a new database server.`,
      `Fixing a bug that causes the system to crash during user login.`,
      `Providing a new user manual.`
    ],
    correct: 2,
    explanation: `Corrective Maintenance is strictly about fixing bugs or errors found after the system has been deployed.`
  },
  {
    id: "se_m1_015",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Why is 'Operational Feasibility' important?`,
    options: [
      `It checks if the budget is sufficient.`,
      `It checks if the hardware exists.`,
      `It checks if the users are willing to use the system and if it will work in their real-world environment.`,
      `It checks if the project meets legal standards.`
    ],
    correct: 2,
    explanation: `Operational feasibility determines whether the system will actually be used by the intended users. If users are reluctant or lack the skills, the system may fail even if technically perfect.`
  },
  {
    id: "se_m1_016",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `What software failure involved patients receiving massive radiation overdoses due to poor testing and missing safety checks?`,
    options: [
      `Mariner 1`,
      `Ariane 5 Rocket`,
      `Therac-25`,
      `Knight Capital Trading Bot`
    ],
    correct: 2,
    explanation: `The Therac-25 failure was a real-world disaster where patients received massive radiation overdoses due to poor testing and missing safety checks in the software.`
  },
  {
    id: "se_m1_017",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What is the main purpose of a 'walkthrough' in the requirements gathering phase?`,
    options: [
      `To compile the source code into an executable file.`,
      `To physically walk through the client's office to observe their operations.`,
      `To conduct a peer review meeting where the team goes through the software requirements step-by-step to check for issues.`,
      `To test the final deployed application with end users.`
    ],
    correct: 2,
    explanation: `A walkthrough is a peer review meeting where the team goes through the software requirements, design, or code step by step to check for issues.`
  },
  {
    id: "se_m1_018",
    topic: "se-module-1",
    difficulty: "easy",
    source: "PDF",
    question: `Which phase of the SDLC immediately follows the Requirements Gathering and Analysis phase?`,
    options: [
      `Implementation`,
      `System Design`,
      `Testing`,
      `Maintenance`
    ],
    correct: 1,
    explanation: `After gathering and analyzing requirements, the team moves to System Design to translate the requirements into a blueprint for the system.`
  },
  {
    id: "se_m2_001",
    topic: "se-module-2",
    difficulty: "medium",
    source: "Recording",
    question: `What is the main difference between the SDLC and a Software Process Model according to the lecture analogy?`,
    options: [
      `SDLC is only for testing, while Process Models are for coding.`,
      `SDLC represents the basic steps of building a house, while a Process Model defines exactly the strategy of how those steps are executed.`,
      `They are exactly the same thing.`,
      `SDLC is used in Agile, while Process Models are used in Waterfall.`
    ],
    correct: 1,
    explanation: `As explained in the lecture with the house-building analogy, SDLC provides the basic steps (foundation, walls, roof), while a Software Process Model provides the specific strategy on how to execute them (all at once vs. floor-by-floor).`
  },
  {
    id: "se_m2_002",
    topic: "se-module-2",
    difficulty: "easy",
    source: "Recording",
    question: `Which software process model explicitly prevents you from going back to a previous phase once it is completed?`,
    options: [
      `Spiral Model`,
      `Classical Waterfall Model`,
      `Agile Model`,
      `Prototyping Model`
    ],
    correct: 1,
    explanation: `The Classical Waterfall Model is strictly linear. Requirements are 'frozen', and there are no feedback paths to go back to previous phases if errors are found later.`
  },
  {
    id: "se_m2_003",
    topic: "se-module-2",
    difficulty: "medium",
    source: "Recording",
    question: `Why is the Iterative Waterfall Model generally preferred over the Classical Waterfall Model?`,
    options: [
      `It completely skips the testing phase to save time.`,
      `It includes feedback paths (back arrows) allowing teams to return to earlier phases to correct errors discovered later.`,
      `It delivers a working product at the end of every week.`,
      `It does not require requirement gathering.`
    ],
    correct: 1,
    explanation: `The Iterative Waterfall Model introduced feedback loops, meaning if an error is found in design or testing, developers can go back to previous phases to fix it, solving a major flaw of the classical model.`
  },
  {
    id: "se_m2_004",
    topic: "se-module-2",
    difficulty: "hard",
    source: "Recording",
    question: `You are developing a medical software application that analyzes reports to detect cancer. Which process model should you use due to the critical nature of testing?`,
    options: [
      `Incremental Model`,
      `Prototyping Model`,
      `V-Model`,
      `Scrum`
    ],
    correct: 2,
    explanation: `The V-Model is explicitly recommended in the lecture for safety-critical and medical systems because the entire right side of the V is dedicated to heavy, thorough testing mapped to each development phase.`
  },
  {
    id: "se_m2_005",
    topic: "se-module-2",
    difficulty: "medium",
    source: "Recording",
    question: `If a client cannot clearly explain their requirements and is unsure of what they want, which process model is recommended to extract the actual requirements?`,
    options: [
      `Classical Waterfall Model`,
      `V-Model`,
      `Spiral Model`,
      `Prototyping Model`
    ],
    correct: 3,
    explanation: `The Prototyping Model is ideal when requirements are unclear. You build a quick dummy system to show the user, letting them visually confirm or correct their requirements.`
  },
  {
    id: "se_m2_006",
    topic: "se-module-2",
    difficulty: "medium",
    source: "Recording",
    question: `Which process model is best suited for developing a high-risk system like a defense missile controller or NASA aerospace software?`,
    options: [
      `Spiral Model`,
      `Prototyping Model`,
      `Iterative Waterfall Model`,
      `Agile Model`
    ],
    correct: 0,
    explanation: `The Spiral Model is risk-focused and is specifically cited in the lecture for defense and aerospace systems where mistakes are highly dangerous and costly.`
  },
  {
    id: "se_m2_007",
    topic: "se-module-2",
    difficulty: "medium",
    source: "Recording",
    question: `How did Microsoft use the Incremental Model to deliver the Windows Operating System?`,
    options: [
      `They delivered the entire completed OS code all at once.`,
      `They built a dummy OS and discarded it.`,
      `They developed and delivered the OS version by version (Windows 7, then 8, then 10), adding more features each time.`,
      `They heavily tested every component before ever releasing a version.`
    ],
    correct: 2,
    explanation: `Windows OS is the classic example of the Incremental Model from the lecture, delivering core functionality in an initial version (Windows 7) and subsequently releasing improved versions (8, 10, 11) while users are already using previous versions.`
  },
  {
    id: "se_m2_008",
    topic: "se-module-2",
    difficulty: "easy",
    source: "Recording",
    question: `What is the primary advantage of the Agile Methodology in modern software development?`,
    options: [
      `It freezes requirements at the beginning of the project.`,
      `It emphasizes comprehensive documentation.`,
      `It easily accepts changing requirements from customers even late in development, and delivers software in quick sprints.`,
      `It completes development entirely before any testing occurs.`
    ],
    correct: 2,
    explanation: `The lecture highlighted that Agile's biggest strength is its ability to accept changing requirements frequently and deliver software quickly at the end of every sprint.`
  },
  {
    id: "se_m2_009",
    topic: "se-module-2",
    difficulty: "hard",
    source: "Recording",
    question: `During the pandemic, a government needs an urgent vaccination appointment system. Why is the Incremental Model chosen over Agile if the team's training is unknown?`,
    options: [
      `Because Incremental Model requires all requirements upfront.`,
      `Because Agile requires a specifically 'Agile-trained' development team to implement Scrum or Kanban correctly.`,
      `Because Incremental Model relies heavily on risk analysis.`,
      `Because Agile is too slow for urgent deliveries.`
    ],
    correct: 1,
    explanation: `As discussed in the lecture activity, Agile requires the development team to be Agile-trained. If you cannot guarantee the team is trained in Agile, the Incremental Model is the safest choice for early delivery and changing requirements.`
  },
  {
    id: "se_m2_010",
    topic: "se-module-2",
    difficulty: "medium",
    source: "Recording",
    question: `In the V-Model, what do the Quality Assurance (QA) engineers do immediately after the software engineers gather requirements (SRS)?`,
    options: [
      `They write code for the prototype.`,
      `They wait idly until the coding phase is finished.`,
      `They review the SRS and create User Acceptance Test plans and test cases.`,
      `They deploy the system to the client.`
    ],
    correct: 2,
    explanation: `In the V-Model, QA engineers start working in parallel with developers. During requirement gathering, QA creates Acceptance Test plans based on those requirements before any code is written.`
  },
  {
    id: "se_m2_011",
    topic: "se-module-2",
    difficulty: "medium",
    source: "Recording",
    question: `In the Prototyping Model, what usually happens to the prototype after the client has confirmed their requirements?`,
    options: [
      `It is patched up and released as the final software.`,
      `It is sold to another client.`,
      `It is discarded, and the actual system is built from scratch.`,
      `It is used as the backend database.`
    ],
    correct: 2,
    explanation: `The lecture emphasizes that the prototype is just a dummy tool used to gather requirements correctly, and it should typically be discarded rather than patched into the final product.`
  },
  {
    id: "se_m2_012",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following is NOT a core component loop in the Spiral Model?`,
    options: [
      `Planning`,
      `Risk Analysis`,
      `Sprint Retrospective`,
      `Evaluation`
    ],
    correct: 2,
    explanation: `The four main sectors of a loop in the Spiral Model are Planning, Risk Analysis, Engineering (Design/Dev/Test), and Evaluation. Sprint Retrospective is part of Agile (Scrum).`
  },
  {
    id: "se_m2_013",
    topic: "se-module-2",
    difficulty: "easy",
    source: "Recording",
    question: `According to the lecture, is there a hard rule that dictates exactly which process model MUST be used for a specific project?`,
    options: [
      `Yes, Agile is mandatory for all modern projects.`,
      `Yes, Waterfall is required for government projects.`,
      `No, the choice of model depends on analyzing the situation, constraints, and client requirements.`,
      `Yes, Prototyping is mandatory if the client is non-technical.`
    ],
    correct: 2,
    explanation: `The lecturer explicitly stated there are no 'hard rules' linking one project type permanently to one model. The best model must be chosen based on an analysis of the situation and requirements.`
  },
  {
    id: "se_m2_014",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `What does the Agile Manifesto primarily value over rigid processes and tools?`,
    options: [
      `Comprehensive documentation`,
      `Contract negotiation`,
      `People and interactions`,
      `Following a strict plan`
    ],
    correct: 2,
    explanation: `The Agile Manifesto explicitly states that it values individuals and interactions over processes and tools.`
  },
  {
    id: "se_m2_015",
    topic: "se-module-2",
    difficulty: "medium",
    source: "Recording",
    question: `If you are developing a payroll system for a specific university department where requirements are extremely stable and clearly known, which model could still be reasonably used?`,
    options: [
      `Prototyping Model`,
      `Iterative Waterfall Model`,
      `Spiral Model`,
      `Agile Model`
    ],
    correct: 1,
    explanation: `As stated in the lecture, the Iterative Waterfall Model is acceptable and often used for straightforward, very common systems with highly stable and clear requirements, like a standard payroll system.`
  },
  {
    id: "se_m3_001",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Consider the following statements regarding the Agile Manifesto values:
I. Working software is valued over comprehensive documentation.
II. Following a plan is valued over responding to change.
III. Contract negotiation is valued over customer collaboration.
IV. Individuals and interactions are valued over processes and tools.

Which of the above statements are correct?`,
    options: [
      `I and II only`,
      `I and IV only`,
      `II, III, and IV`,
      `All of the above`
    ],
    correct: 1,
    explanation: `According to the Agile Manifesto, the 4 key values are: Individuals and interactions over processes and tools, Working software over comprehensive documentation, Customer collaboration over contract negotiation, and Responding to change over following a plan.`
  },
  {
    id: "se_m3_002",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which of the following is NOT a defined role in the Scrum framework?`,
    options: [
      `Product Owner`,
      `Scrum Master`,
      `Project Manager`,
      `Developer`
    ],
    correct: 2,
    explanation: `The Scrum framework defines exactly three roles: Product Owner, Scrum Master, and Developers. There is no traditional 'Project Manager' role in Scrum; the Scrum Master acts as a facilitator, not a manager.`
  },
  {
    id: "se_m3_003",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following artifacts are officially used in Scrum to provide transparency and manage work?
I. Sprint Retrospective
II. Product Backlog
III. Sprint Backlog
IV. Burn Down Charts`,
    options: [
      `II and III only`,
      `I, II, and III`,
      `II, III, and IV`,
      `All of the above`
    ],
    correct: 2,
    explanation: `The three main Scrum artifacts mentioned in the lecture are the Product Backlog, Sprint Backlog, and Burn Down Charts. The Sprint Retrospective is an activity (event), not an artifact.`
  },
  {
    id: "se_m3_004",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `A team conducts a daily 15-minute meeting. During this meeting, a developer asks the Scrum Master to assign them a new task for the day. Is this correct according to Scrum principles?`,
    options: [
      `Yes, the Scrum Master assigns tasks during the Daily Scrum.`,
      `Yes, but the Product Owner must approve the task assignment.`,
      `No, the Daily Scrum is for answering three key questions (What I did, What I will do, Obstacles), not for assigning tasks.`,
      `No, tasks should only be assigned during the Sprint Retrospective.`
    ],
    correct: 2,
    explanation: `The Daily Scrum is a short meeting to monitor progress using three key questions. It is not a status meeting for a manager to assign tasks; developers manage their own work from the Sprint Backlog.`
  },
  {
    id: "se_m3_005",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Evaluate the following User Story:
'As a database administrator, I want an SQL query so that I can search for books in the library.'
Why is this considered a POOR user story?`,
    options: [
      `It does not clearly identify the user role.`,
      `It includes technical implementation details ('SQL query') instead of a business goal.`,
      `It does not state the benefit ('So that...').`,
      `There is nothing wrong with this user story; it is well-written.`
    ],
    correct: 1,
    explanation: `A good user story should avoid technical implementation details (like 'SQL query' or 'database table') and instead focus on the business goal and benefit (e.g., 'I want to search books so that I can find them quickly').`
  },
  {
    id: "se_m3_006",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `What is the primary difference between the Sprint Review and the Sprint Retrospective?`,
    options: [
      `The Review focuses on improving the process, while the Retrospective focuses on demonstrating the product.`,
      `The Review demonstrates completed work to stakeholders (focus on product), while the Retrospective identifies improvements for the team's workflow (focus on process).`,
      `The Review is done daily, while the Retrospective is done monthly.`,
      `There is no difference; they are two names for the same meeting.`
    ],
    correct: 1,
    explanation: `The Sprint Review is focused on the Product (demonstrating the increment to stakeholders), whereas the Sprint Retrospective is focused on the Process (reflecting on team performance and identifying improvements).`
  },
  {
    id: "se_m3_007",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Who is primarily responsible for maintaining and prioritizing the Product Backlog?`,
    options: [
      `The Scrum Master`,
      `The Development Team`,
      `The Stakeholders`,
      `The Product Owner`
    ],
    correct: 3,
    explanation: `The Product Owner represents the customer/stakeholders and is solely responsible for creating, maintaining, and prioritizing the items in the Product Backlog.`
  },
  {
    id: "se_m3_008",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `A team has 120 tasks to complete over a 5-day sprint. On Day 1 they complete 20, Day 2 they complete 50, and Day 3 they complete 0. What is the Ideal Burn Down Velocity, and did they meet it on Day 3?`,
    options: [
      `Ideal is 20 tasks/day; Yes, they met it on Day 3.`,
      `Ideal is 24 tasks/day; No, they completed 0 tasks on Day 3.`,
      `Ideal is 50 tasks/day; No, they completed 0 tasks on Day 3.`,
      `Ideal is 120 tasks/day; Yes, they met it.`
    ],
    correct: 1,
    explanation: `Ideal Burn Down Velocity = Total Tasks / Total Days = 120 / 5 = 24 tasks per day. On Day 3, their actual velocity was 0 tasks, which is below the ideal.`
  },
  {
    id: "se_m3_009",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which of the following are Agile PRACTICES (techniques used during implementation) rather than Agile METHODOLOGIES (overall project management structures)?
I. Scrum
II. Test-Driven Development (TDD)
III. Pair Programming
IV. Kanban`,
    options: [
      `I and IV only`,
      `II and III only`,
      `I, II, and III`,
      `All of the above`
    ],
    correct: 1,
    explanation: `Scrum, Kanban, XP, and Lean are Agile Methodologies (structures). TDD, Pair Programming, and BDD are Agile Practices (specific techniques used by developers).`
  },
  {
    id: "se_m3_010",
    topic: "se-module-3",
    difficulty: "easy",
    source: "PDF",
    question: `In Scrum, what dictates the priority of items placed in the Product Backlog?`,
    options: [
      `The alphabetical order of the features.`,
      `The technical difficulty of the tasks (hardest first).`,
      `The business value (highest value items at the top).`,
      `The preference of the developers.`
    ],
    correct: 2,
    explanation: `In Scrum, work is prioritized so that the highest-value items appear at the top of the Product Backlog and are completed first.`
  },
  {
    id: "se_m4_001",
    topic: "se-module-4",
    difficulty: "medium",
    source: "PDF",
    question: `In a Use Case Diagram, what does the 'System Boundary' represent?`,
    options: [
      `The maximum budget limit of the project.`,
      `The boundary between the physical system and the external actors who interact with it.`,
      `The timeline constraints of the sprint.`,
      `The division between the frontend and backend databases.`
    ],
    correct: 1,
    explanation: `The System Boundary (represented by a rectangle) marks the boundary between the system being developed and the external entities (actors) that interact with it.`
  },
  {
    id: "se_m4_002",
    topic: "se-module-4",
    difficulty: "hard",
    source: "Recording",
    question: `Consider an ATM system. The 'Withdraw Money' use case always requires the user to be validated first. However, the system only prints a receipt if the user selects 'Yes' for a receipt. How should these relationships be modeled?`,
    options: [
      `'Validate User' ≪extends≫ 'Withdraw Money', and 'Print Receipt' ≪includes≫ 'Withdraw Money'`,
      `'Validate User' ≪includes≫ 'Withdraw Money', and 'Print Receipt' ≪extends≫ 'Withdraw Money'`,
      `'Withdraw Money' ≪includes≫ 'Validate User', and 'Print Receipt' ≪extends≫ 'Withdraw Money'`,
      `'Withdraw Money' ≪extends≫ 'Validate User', and 'Withdraw Money' ≪includes≫ 'Print Receipt'`
    ],
    correct: 2,
    explanation: `Since validation is mandatory and incorporated into the base use case, 'Withdraw Money' ≪includes≫ 'Validate User'. Since printing a receipt is optional and only happens under a certain condition, 'Print Receipt' ≪extends≫ 'Withdraw Money'. Note: The arrow for ≪include≫ points TO the included use case, and the arrow for ≪extend≫ points TO the base use case.`
  },
  {
    id: "se_m4_003",
    topic: "se-module-4",
    difficulty: "hard",
    source: "Recording",
    question: `In a university system, both 'Undergraduate' and 'Postgraduate' actors can execute the 'View Timetable' use case. However, only 'Postgraduate' can 'Book Lab'. To simplify the diagram, how should you model the actors?`,
    options: [
      `Draw separate association lines from both actors to 'View Timetable'.`,
      `Make 'Postgraduate' a base use case and 'Undergraduate' an extended use case.`,
      `Create a generic 'Student' actor linked to 'View Timetable'. Make 'Undergraduate' and 'Postgraduate' child actors of 'Student' using Generalization.`,
      `Use an ≪include≫ relationship between 'Undergraduate' and 'Postgraduate'.`
    ],
    correct: 2,
    explanation: `Actor Generalization reduces cluttered associations. You define a parent actor ('Student') with the common use cases, and let child actors ('Undergraduate', 'Postgraduate') inherit from it while adding their specific use cases.`
  },
  {
    id: "se_m4_004",
    topic: "se-module-4",
    difficulty: "medium",
    source: "Recording",
    question: `When writing a Use Case Scenario in a tabular format, what is the primary rule for writing the 'Main Scenario' (Main Flow)?`,
    options: [
      `It must list every single error that could possibly happen.`,
      `It is written under the assumption that everything is okay, no errors occur, and it leads directly to the successful outcome (Success Scenario).`,
      `It must only contain code snippets.`,
      `It describes the hardware requirements of the server.`
    ],
    correct: 1,
    explanation: `The Main Scenario (or Happy Path) describes the specific sequence of events when everything goes to plan, without errors. Variations and errors are documented in the 'Extensions' section.`
  },
  {
    id: "se_m4_005",
    topic: "se-module-4",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following statements about Use Case Relationships are TRUE?
I. An ≪include≫ use case never stands alone; it only occurs as part of a base use case.
II. An ≪extend≫ use case implicitly incorporates behavior at specific extension points based on a condition.
III. In generalization, a child use case inherits all behaviors of the parent but cannot override them.
IV. An Actor Generalization arrow points from the parent actor to the child actor.`,
    options: [
      `I and II only`,
      `II and III only`,
      `I, II, and IV`,
      `I and III only`
    ],
    correct: 0,
    explanation: `I and II are true. III is false because a child use case CAN add to or override the parent's behavior. IV is false because the generalization arrow (hollow triangle) always points from the Child to the Parent.`
  },
  {
    id: "se_m4_006",
    topic: "se-module-4",
    difficulty: "medium",
    source: "PDF",
    question: `Does a Use Case Diagram explain exactly HOW the system will implement its features (e.g., algorithms and code)?`,
    options: [
      `Yes, it details the internal logic and loops.`,
      `No, it only communicates WHAT the system will do, acting as a high-level requirements specification for stakeholders.`,
      `Yes, but only if the ≪include≫ relationship is used.`,
      `No, it only shows the database schema.`
    ],
    correct: 1,
    explanation: `Use case diagrams capture the functional requirements from a user's perspective (WHAT the system does), but do not go into technical implementation details (HOW it does it).`
  },
  {
    id: "se_m4_007",
    topic: "se-module-4",
    difficulty: "easy",
    source: "Recording",
    question: `In a Use Case Scenario, what does the 'Pre-condition' describe?`,
    options: [
      `The final output shown to the user after the task is done.`,
      `The state or criteria that must be true before the use case can begin execution (e.g., 'User has logged into ATM').`,
      `The event that triggers the use case to start.`,
      `The alternative paths if an error occurs.`
    ],
    correct: 1,
    explanation: `Preconditions define what needs to be true before the use case can successfully execute. Postconditions define what will be true after successful execution.`
  },
  {
    id: "se_m4_008",
    topic: "se-module-4",
    difficulty: "medium",
    source: "Recording",
    question: `If a user enters an invalid PIN during the 'Withdraw Money' use case, where should this alternative path be documented in the Use Case Specification Template?`,
    options: [
      `Under 'Main Scenario'`,
      `Under 'Pre-conditions'`,
      `Under 'Extensions' or 'Alternative Flows'`,
      `It should not be documented at all.`
    ],
    correct: 2,
    explanation: `The 'Extensions' (or Alternative Flows) section is used to describe what happens when variations to the main scenario arise, such as errors (e.g., invalid PIN, insufficient funds).`
  },
  {
    id: "se_m5_001",
    topic: "se-module-5",
    difficulty: "medium",
    source: "PDF",
    question: `In an Activity Diagram, what is the UML equivalent of an IF/ELSE statement, where the flow of control goes down ONLY ONE mutually exclusive path?`,
    options: [
      `Fork Node`,
      `Join Node`,
      `Merge Node`,
      `Decision/Branch Node`
    ],
    correct: 3,
    explanation: `A Decision/Branch node (diamond) splits the flow based on guard conditions (e.g., [valid], [invalid]), and the control flows down only the single path where the condition is true.`
  },
  {
    id: "se_m5_002",
    topic: "se-module-5",
    difficulty: "hard",
    source: "PDF",
    question: `Consider the following statements regarding Forks and Joins in Activity Diagrams:
I. A Fork splits a single flow into two or more concurrent flows.
II. Control flows down ALL paths emerging from a Fork node.
III. A Join merges divergent conditional branches back into a single flow.
IV. Every Fork must eventually have a corresponding Join.

Which statements are correct?`,
    options: [
      `I and II only`,
      `I, II, and IV`,
      `I, III, and IV`,
      `All of the above`
    ],
    correct: 1,
    explanation: `I, II, and IV are correct. III is false because a JOIN merges concurrent/parallel flows (from a fork). To merge conditional branches (from a decision node), you must use a MERGE node, not a Join.`
  },
  {
    id: "se_m5_003",
    topic: "se-module-5",
    difficulty: "medium",
    source: "PDF",
    question: `What is the purpose of 'Swimlanes' (Partitions) in an Activity Diagram?`,
    options: [
      `To group actions that belong to the same organizational unit or business actor.`,
      `To indicate loops and iterations.`,
      `To model database tables.`,
      `To show the timeline of the project in weeks.`
    ],
    correct: 0,
    explanation: `Swimlanes (Partitions) are used to group activities based on who or what is responsible for executing them (e.g., 'Customer', 'Finance Department', 'System').`
  },
  {
    id: "se_m5_004",
    topic: "se-module-5",
    difficulty: "easy",
    source: "PDF",
    question: `How is the 'Initial/Start Node' represented in a UML Activity Diagram?`,
    options: [
      `A solid filled black circle`,
      `A hollow circle with a dot inside (bullseye)`,
      `A diamond shape`,
      `A rounded rectangle`
    ],
    correct: 0,
    explanation: `The Start/Initial node is represented by a solid filled black circle. The Final/End node is represented by a filled circle inside a hollow circle (bullseye).`
  },
  {
    id: "se_m5_005",
    topic: "se-module-5",
    difficulty: "hard",
    source: "PDF",
    question: `A business process requires the 'Fulfillment Department' to prepare goods, and SIMULTANEOUSLY the 'Customer Service Department' to send an invoice. Once BOTH are complete, the order is closed. Which nodes must be used to model this?`,
    options: [
      `A Decision node to start, and a Merge node to close.`,
      `A Fork node to start the simultaneous activities, and a Join node to wait for both to finish before closing.`,
      `A Merge node to start, and a Fork node to close.`,
      `A single continuous Transition arrow through all activities.`
    ],
    correct: 1,
    explanation: `Because the activities happen concurrently (at the same time), a Fork node (thick bar) is used to split the flow, and a Join node (thick bar) is used to wait for both parallel threads to complete before proceeding.`
  },
  {
    id: "se_m5_006",
    topic: "se-module-5",
    difficulty: "medium",
    source: "PDF",
    question: `If an action in an Activity Diagram has a small 'rake-style' symbol (a pitchfork/trident icon) inside it, what does this indicate?`,
    options: [
      `The action is a loop that repeats indefinitely.`,
      `The action causes an error or exception.`,
      `The action is a 'Call Action' or 'Sub Activity', meaning it is defined in detail on another separate activity diagram.`,
      `The action requires manual human intervention.`
    ],
    correct: 2,
    explanation: `The rake symbol indicates a Call Behavior Action (Sub Activity). It means the activity is complex and its internal steps are detailed in a completely separate activity diagram.`
  },
  {
    id: "se_m5_007",
    topic: "se-module-5",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following is a COMMON MISTAKE when drawing Activity Diagrams?`,
    options: [
      `Using a Merge point to merge concurrent flows from a Fork.`,
      `Writing verbs in the present tense inside Action nodes.`,
      `Using Guard conditions on branches coming out of a Decision node.`,
      `Using a Fork node to model parallel activities.`
    ],
    correct: 0,
    explanation: `A very common mistake is confusing Merge and Join. A Merge point brings together divergent conditional paths (from a Decision). A Join brings together concurrent paths (from a Fork). You cannot use a Merge to combine forked flows.`
  },
  {
    id: "se_friend_1",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What is the primary focus of Software Engineering (SE)?`,
    options: [
      `Writing code as fast as possible`,
      `Applying engineering principles to build reliable, efficient, and maintainable software`,
      `Only testing software before release`,
      `Designing hardware components`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_2",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Which of the following is NOT something SE focuses on, according to the lecture?`,
    options: [
      `Following structured processes`,
      `Ensuring quality at every step`,
      `Planning across the entire software lifecycle`,
      `Ignoring the software lifecycle to save time`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "se_friend_3",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are benefits of good software engineering?
 I. Saves time and money in the long run
 II. Protects users and ensures their satisfaction
 III. Avoids major failures in critical systems
 IV. Guarantees the software will have zero bugs forever`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_4",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Which of these is an example of a critical system mentioned as needing careful software
engineering?`,
    options: [
      `A simple calculator app`,
      `Flight control software`,
      `A to-do list app`,
      `A wallpaper changer app`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_5",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture, why does software engineering matter?`,
    options: [
      `It makes coding more complicated`,
      `It helps avoid major failures in critical systems like banking and hospital systems`,
      `It removes the need for testing`,
      `It replaces the need for requirements`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_6",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Which best describes the 'Scope' of Programming compared to Software Engineering?`,
    options: [
      `Broad, includes the whole software lifecycle`,
      `Narrow, task-oriented`,
      `Focused only on deployment`,
      `Focused only on maintenance`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_7",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `In the SE vs Programming comparison, what is the 'End Goal' of Software Engineering?`,
    options: [
      `Just working code`,
      `Working, reliable, scalable, and user-validated software`,
      `Passing a code review`,
      `Finishing quickly`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_8",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following activities are listed as part of Software Engineering?
 I. Analysis
 II. Design and architecture
 III. Coding
 IV. Testing, deployment, and maintenance`,
    options: [
      `I, II, III, and IV only`,
      `I and II only`,
      `All of the above`,
      `II and III only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_9",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `According to the comparison table, how is 'Teamwork' typically handled in Programming vs
Software Engineering?`,
    options: [
      `Programming requires collaboration; SE is individual`,
      `Programming is often done individually; SE requires collaboration and coordination in teams`,
      `Both are always done individually`,
      `Both always require large teams`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_10",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Which 'Process' style is associated with plain Programming according to the comparison table?`,
    options: [
      `Follows structured, well-defined processes (e.g., SDLC)`,
      `May be ad hoc or informal`,
      `Always follows the Agile framework`,
      `Always follows the Waterfall model`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_11",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `During what period did 'The Software Crisis' mainly occur?`,
    options: [
      `1930s–1950s`,
      `1960s–1990s`,
      `2000s–2010s`,
      `2015–2020`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_12",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following were common causes of failure during the Software Crisis?
 I. Over budget
 II. Missed deadlines
 III. System crashes and disasters
 IV. Excessive testing`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_13",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What caused the failure of NASA's Mariner 1 rocket, according to the lecture?`,
    options: [
      `A missing hyphen in code`,
      `A software virus`,
      `A hardware malfunction only`,
      `A user error during launch`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_14",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What was the main reason the Therac-25 failure happened?`,
    options: [
      `Reused code without adaptation`,
      `Poor testing and missing safety checks`,
      `A missing hyphen in code`,
      `Wrong code update in a trading bot`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_15",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Which system lost $440 million in 30 minutes due to a wrong code update, according to the
lecture?`,
    options: [
      `Therac-25`,
      `Ariane 5 Rocket`,
      `Knight Capital`,
      `Mariner 1`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "se_friend_16",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What is the Software Development Life Cycle (SDLC) best described as?`,
    options: [
      `A single phase of testing`,
      `A roadmap for building software the right way`,
      `A programming language`,
      `A type of database`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_17",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `According to the lecture, SDLC helps teams to:
 I. Meet user needs and expectations
 II. Save time and cost by planning ahead
 III. Avoid risks and delivery delays
 IV. Skip the requirements phase`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_18",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What is a feasibility study primarily used to determine?`,
    options: [
      `The programming language to use`,
      `Whether the project should be built at all`,
      `The final price of the software`,
      `The number of developers needed`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_19",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What is the output of a feasibility study called?`,
    options: [
      `Software Requirements Specification (SRS)`,
      `Feasibility Report`,
      `Test Plan`,
      `System Design Document`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_20",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `A feasibility study helps decide whether a project is:
 I. Technically possible
 II. Financially affordable
 III. Realistic
 IV. Popular on social media`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_21",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `'Can we build it with the technology we have?' is the key question of which type of feasibility?`,
    options: [
      `Economic Feasibility`,
      `Technical Feasibility`,
      `Legal Feasibility`,
      `Schedule Feasibility`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_22",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `'Will the benefits outweigh the expenses?' relates to which type of feasibility?`,
    options: [
      `Technical Feasibility`,
      `Economic Feasibility`,
      `Operational Feasibility`,
      `Schedule Feasibility`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_23",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Checking whether a system complies with GDPR falls under which type of feasibility?`,
    options: [
      `Legal Feasibility`,
      `Operational Feasibility`,
      `Technical Feasibility`,
      `Economic Feasibility`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_24",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `'Will users actually use it?' is the key question of which type of feasibility?`,
    options: [
      `Schedule Feasibility`,
      `Operational Feasibility`,
      `Legal Feasibility`,
      `Technical Feasibility`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_25",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `'Can we deliver it on time?' relates to which type of feasibility?`,
    options: [
      `Schedule Feasibility`,
      `Economic Feasibility`,
      `Technical Feasibility`,
      `Legal Feasibility`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_26",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are among the five types of feasibility discussed in the lecture?
 I. Technical
 II. Economic
 III. Legal
 IV. Emotional
 V. Operational
 VI. Schedule`,
    options: [
      `I, II, III, V, and VI only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_27",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Which phase is the FIRST of the six key SDLC phases introduced in the lecture?`,
    options: [
      `Testing`,
      `Requirements gathering and Analysis`,
      `Deployment`,
      `Maintenance`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_28",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are among the six key SDLC phases mentioned in the lecture?
 I. Requirements gathering and Analysis
 II. System design
 III. Implementation
 IV. Marketing
 V. Testing
 VI. Deployment
 VII. Maintenance`,
    options: [
      `I, II, III, V, VI, and VII only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_29",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What document is typically produced during Requirements Gathering to clearly capture what the
client wants?`,
    options: [
      `Feasibility Report`,
      `Software Requirements Specification (SRS)`,
      `Test Plan`,
      `User Manual`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_30",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Who is typically involved in requirements gathering, according to the lecture?
 I. Clients
 II. Users
 III. Business analysts
 IV. Regulatory auditors only`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_31",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `The Requirements Gathering phase happens right after which phase?`,
    options: [
      `Testing`,
      `Feasibility Study`,
      `Deployment`,
      `Maintenance`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_32",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What role does the requirements document play between the client and development team?`,
    options: [
      `It acts like a contract outlining what will (and won't) be built`,
      `It's just a suggestion with no real value`,
      `It replaces the need for testing`,
      `It is only used after deployment`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_33",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which of these are common techniques for gathering requirements, according to the lecture?
 I. Interviews
 II. Questionnaires
 III. Observations
 IV. Document analysis
 V. Ignoring stakeholders
 VI. Prototyping
 VII. Brainstorming`,
    options: [
      `I, II, III, IV, VI, and VII only`,
      `I and II only`,
      `All of the above`,
      `II and III only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_34",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `A Functional Requirement describes:`,
    options: [
      `How the system should perform`,
      `What the system should do`,
      `The legal boundaries of the system`,
      `The cost of the system`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_35",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `'The system should load within 3 seconds' is an example of which type of requirement?`,
    options: [
      `Functional Requirement`,
      `Non-Functional Requirement`,
      `Limitation/Constraint`,
      `Stakeholder requirement`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_36",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `'The system must run on Android only' is an example of:`,
    options: [
      `Functional Requirement`,
      `Non-Functional Requirement`,
      `Limitation (Constraint)`,
      `Feasibility Study`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "se_friend_37",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `In the Student Attendance Management System example, which statement is the Non-Functional
Requirement?`,
    options: [
      `The system should allow teachers to mark daily attendance for each student`,
      `The system should be accessible on both desktop and mobile devices`,
      `The system must be deployed within the university's local network only`,
      `None of the above`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_38",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What is a stakeholder, as defined in the lecture?`,
    options: [
      `Only the person who pays for the software`,
      `Any person or group who has an interest in the software system`,
      `Only the developers working on the project`,
      `Only government regulators`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_39",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are categories of stakeholders mentioned in the lecture?
 I. End Users
 II. Internal Users
 III. External Partners
 IV. Regulatory Bodies
 V. Project Sponsor / Client
 VI. Competitors`,
    options: [
      `I, II, III, IV, and V only`,
      `I and II only`,
      `All of the above`,
      `II and III only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_40",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Which stakeholder category best describes 'Payment gateways, suppliers, delivery services'?`,
    options: [
      `End Users`,
      `Internal Users`,
      `External Partners`,
      `Regulatory Bodies`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "se_friend_41",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `'Education ministry, data protection authorities (GDPR)' are examples of which stakeholder
type?`,
    options: [
      `Internal Users`,
      `Regulatory Bodies`,
      `Project Sponsor`,
      `End Users`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_42",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are best practices in requirement gathering?
 I. Involve all key stakeholders early in the process
 II. Use clear, simple language, avoiding technical jargon
 III. Validate requirements with stakeholders using reviews or walkthroughs
 IV. Guess what users want to save time`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_43",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What is a 'walkthrough' in the context of requirement validation?`,
    options: [
      `A final product demo to customers`,
      `A peer review meeting where the team goes through requirements, design, or code step by step`,
      `A marketing presentation`,
      `A type of software test`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_44",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are common mistakes in requirement gathering, according to the lecture?
 I. Guessing stakeholder needs
 II. Using too much technical jargon
 III. Ignoring non-functional requirements
 IV. Involving all key stakeholders early`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_45",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What is the main purpose of the System Design phase?`,
    options: [
      `To write the actual code`,
      `To translate the SRS into a system blueprint`,
      `To deploy the software`,
      `To fix bugs after release`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_46",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `What is typically included in the System Design phase?
 I. UI Design
 II. Database Schema
 III. System Architecture
 IV. User training manuals`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_47",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What is 'unit testing' as described in the Implementation phase?`,
    options: [
      `Testing the entire system at once`,
      `Making sure each small part of the system works correctly on its own`,
      `Testing only the user interface`,
      `A type of feasibility study`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_48",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which types of testing are mentioned in the Testing phase?
 I. Unit Testing
 II. Integration Testing
 III. System Testing
 IV. Acceptance Testing
 V. Feasibility Testing`,
    options: [
      `I, II, III, and IV only`,
      `I and II only`,
      `All of the above`,
      `II and III only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_49",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What does Acceptance Testing check?`,
    options: [
      `If small pieces of code work correctly`,
      `If different modules work well together`,
      `If the system meets the client's requirements`,
      `If the code compiles without errors`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "se_friend_50",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What typically happens during the Deployment phase?`,
    options: [
      `The finished software is installed in the real environment where users will use it`,
      `The requirements are gathered for the first time`,
      `The code is written module by module`,
      `The system undergoes a feasibility study`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_51",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following happen during the Deployment phase?
 I. A pilot release may be used to test with a small group first
 II. Users are trained, and user manuals are prepared
 III. Help desks or technical support are set up
 IV. The software requirements are finalized for the first time`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_52",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `When does Software Maintenance begin?`,
    options: [
      `Before requirements gathering`,
      `After the software is deployed`,
      `During the design phase`,
      `During testing only`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_53",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Fixing a crash that happens when users try to log in is an example of which type of
maintenance?`,
    options: [
      `Adaptive Maintenance`,
      `Corrective Maintenance`,
      `Perfective Maintenance`,
      `Preventive Maintenance`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_54",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Updating an app to support a new version of Android or iOS is an example of:`,
    options: [
      `Corrective Maintenance`,
      `Adaptive Maintenance`,
      `Perfective Maintenance`,
      `Legal Maintenance`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_55",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `Adding an online payment option to an existing school system is an example of:`,
    options: [
      `Corrective Maintenance`,
      `Adaptive Maintenance`,
      `Perfective Maintenance`,
      `Operational Maintenance`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "se_friend_56",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are key ethical values in Software Engineering mentioned in the lecture?
 I. Responsibility
 II. Transparency
 III. Privacy
 IV. Fairness
 V. Profitability`,
    options: [
      `I, II, III, and IV only`,
      `I and II only`,
      `All of the above`,
      `II and III only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_57",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What does IEEE mainly focus on, according to the lecture?`,
    options: [
      `Computer science education only`,
      `Hardware, electrical, and computer engineering`,
      `Legal compliance only`,
      `Marketing standards`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_58",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What does ACM stand for and primarily focus on?`,
    options: [
      `Association for Computing Machinery; computer science, education, and software research`,
      `American Council for Machinery; hardware manufacturing`,
      `Association of Certified Managers; project management`,
      `Association for Computer Marketing`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_59",
    topic: "se-module-1",
    difficulty: "medium",
    source: "PDF",
    question: `What is the 'Software Engineering Code of Ethics and Professional Practice' also known as?`,
    options: [
      `The ACM-only code from 2018`,
      `A joint IEEE/ACM code created in 1999 for software engineers`,
      `A code created exclusively by the BCS`,
      `A legal requirement in all countries`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_60",
    topic: "se-module-1",
    difficulty: "hard",
    source: "PDF",
    question: `Which organizations/codes are mentioned as providing ethical guidelines relevant to software
engineering?
 I. IEEE Code of Ethics
 II. ACM Code of Ethics
 III. BCS Code of Conduct (UK)
 IV. Australian Computer Society (ACS) Code of Ethics
 V. IFIP Code of Ethics
 VI. FIFA Code of Conduct`,
    options: [
      `I, II, III, IV, and V only`,
      `I and II only`,
      `All of the above`,
      `II and III only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_61",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What does SDLC (Software Development Life Cycle) primarily define?`,
    options: [
      `How to execute the phases of software development`,
      `What phases to follow when developing software`,
      `Which programming language to use`,
      `The pricing model for the software`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_62",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What does a Software Process Model primarily define?`,
    options: [
      `What phases to follow`,
      `How to execute the SDLC phases`,
      `The legal requirements of the project`,
      `The stakeholders involved`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_63",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are given as examples of Software Process Models in the lecture?
 I. Waterfall
 II. Spiral
 III. Agile
 IV. Feasibility Study`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_64",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `According to the 'How Are They Connected?' comparison, SDLC is described as:`,
    options: [
      `A specific implementation`,
      `A general structure`,
      `A type of testing`,
      `A programming framework`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_65",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `In the house-building analogy from the lecture recording, what do the SDLC phases represent?`,
    options: [
      `The specific brand of materials used`,
      `The basic steps that never change, regardless of how the house is built`,
      `The architect's personal preference`,
      `The cost of the house`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_66",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `In the house-building analogy, what does the 'software process model' represent?`,
    options: [
      `The basic steps of building (foundation, walls, roof)`,
      `The way those basic steps are carried out (all at once vs. floor by floor)`,
      `The stakeholders of the house`,
      `The feasibility study of the house`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_67",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `Which software process model executes SDLC sequentially, according to the lecture?`,
    options: [
      `Agile model`,
      `Waterfall model`,
      `Spiral model`,
      `Incremental model`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_68",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `Which software process model executes SDLC in iterations (sprints)?`,
    options: [
      `Waterfall model`,
      `V-Model`,
      `Agile model`,
      `Classical Waterfall model`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "se_friend_69",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `According to the 'Evolution of Software Process Models' table, which descriptions are correctly
matched to their model?
 I. Waterfall Model - Linear and phase-based
 II. V-Model - Emphasizes validation and testing at each phase
 III. Incremental Model - Software delivered in small parts or versions
 IV. Spiral Model - Delivered in small parts only, with no risk assessment`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_70",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `In the Waterfall Model, what is the correct order of phases?`,
    options: [
      `Design -> Requirements -> Implementation -> Testing -> Deployment -> Maintenance`,
      `Requirements -> Design -> Implementation -> Testing -> Deployment -> Maintenance`,
      `Testing -> Requirements -> Design -> Implementation -> Deployment -> Maintenance`,
      `Requirements -> Implementation -> Design -> Testing -> Deployment -> Maintenance`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_71",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are true about the Classical Waterfall Model's handling of requirements,
according to the lecture?
 I. Requirements are frozen once gathered and approved
 II. There is no way to go back to a previous phase to fix an incorrect requirement
 III. Errors are typically only discovered in a later stage (Testing)
 IV. Requirements can be updated at any time without restriction`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_72",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture recording, which version of the Waterfall Model is actually used in
industry today?`,
    options: [
      `Classical Waterfall Model only`,
      `Neither version is used anymore`,
      `Iterative Waterfall Model`,
      `Both are used equally`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "se_friend_73",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What is a key limitation of the Waterfall Model mentioned in the lecture?`,
    options: [
      `It is too flexible for simple projects`,
      `It is not suitable for projects where requirements may change later`,
      `It requires too much testing`,
      `It cannot be used for any real project`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_74",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture recording, in the Classical Waterfall Model, when do requirement errors
typically surface?`,
    options: [
      `During the requirements phase itself`,
      `During the design phase`,
      `During the testing phase, which is too late to fix easily`,
      `They never surface`
    ],
    correct: 2,
    explanation: ``
  },
  {
    id: "se_friend_75",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `Which system type is given as a good example for using the Waterfall Model?`,
    options: [
      `A rapidly changing social media app`,
      `Payroll or HR Management systems with stable, well-defined requirements`,
      `A prototype-based mobile game`,
      `A defense missile control system`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_76",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What is the key improvement the Iterative Waterfall Model adds over the Classical Waterfall
Model?`,
    options: [
      `Removing the testing phase`,
      `Allowing feedback and revisions (going back) between phases`,
      `Combining design and coding into one phase`,
      `Skipping the feasibility study`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_77",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `According to the lecture, the Iterative Waterfall Model is suitable when:
 I. Requirements are mostly clear, but some minor changes may be needed
 II. Client feedback is available at the end of each phase
 III. The project is a medium-sized system with moderate risk
 IV. The project requirements are completely unknown and constantly changing`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_78",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture recording, an experienced team building a common system (e.g.,
payroll) is well suited to which model?`,
    options: [
      `Spiral Model`,
      `Iterative Waterfall Model`,
      `Prototyping Model`,
      `Agile Model`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_79",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What is the benefit of the 'feedback paths' (back arrows) in the Iterative Waterfall Model?`,
    options: [
      `They let teams go back to earlier phases to fix problems found later`,
      `They remove the need for testing`,
      `They allow skipping the design phase`,
      `They automatically fix bugs`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_80",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `For a Student Record Management System where requirements may change based on
administrative staff feedback, which model does the lecture suggest?`,
    options: [
      `Classical Waterfall Model`,
      `Iterative Waterfall Model`,
      `Spiral Model`,
      `V-Model`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_81",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `Why is it called the 'V-Model'?`,
    options: [
      `Because it stands for 'Very fast' development`,
      `Because the diagram of the model forms a V shape`,
      `Because it was invented by someone named V`,
      `Because it only has version-based releases`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_82",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What is the primary focus of the V-Model?`,
    options: [
      `Rapid prototyping`,
      `Testing and validation at every stage of development`,
      `Risk analysis only`,
      `Continuous customer feedback`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_83",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `In the V-Model diagram, what happens on the left side?`,
    options: [
      `Testing and validation`,
      `Planning and designing`,
      `Deployment`,
      `Maintenance`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_84",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `In the V-Model, Requirement Gathering corresponds to which testing type on the right side?`,
    options: [
      `Unit Testing`,
      `Integration Testing`,
      `System Testing`,
      `Acceptance Testing`
    ],
    correct: 3,
    explanation: ``
  },
  {
    id: "se_friend_85",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `In the V-Model diagram, which of the following are correct development-to-testing pairings?
 I. Module Design <-> Unit Testing
 II. Software Design <-> Integration Testing
 III. System Analysis <-> System Testing
 IV. Requirement Gathering <-> Coding`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_86",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture recording, when do QA engineers typically begin their work in a normal
SDLC, compared to the V-Model?`,
    options: [
      `Normally they start at the same time as developers in both cases`,
      `Normally they start later (during testing), but in the V-Model they work in parallel with developers`,
      `In the V-Model, QA engineers work only after deployment`,
      `QA engineers are not needed in the V-Model`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_87",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `In the V-Model, what do QA engineers create immediately after reviewing the SRS (Software
Requirements Specification) document?`,
    options: [
      `The final test report`,
      `User acceptance test plans and test cases`,
      `The source code`,
      `The deployment plan`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_88",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `Which types of systems is the V-Model best suited for, according to the lecture?`,
    options: [
      `Simple prototypes`,
      `Safety-critical systems like medical devices and automotive systems`,
      `Small social media apps`,
      `Quick internal tools`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_89",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What is the main purpose of the Prototyping Model?`,
    options: [
      `To deliver the final product as quickly as possible without feedback`,
      `To build a quick, rough version of the system to gather accurate feedback before building the final`,
      `To skip requirements gathering entirely`,
      `To focus only on risk analysis`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_90",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `What are the steps in the Prototyping Model, according to the lecture?
 I. Gather basic requirements
 II. Build a quick prototype
 III. Show it to the user and get feedback
 IV. Immediately deploy the prototype as the final system without any changes`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_91",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture recording, what typically happens to the prototype once requirements
are correctly understood?`,
    options: [
      `It is delivered to the client as the final system`,
      `It is usually discarded, and the real system is built from scratch`,
      `It is sold separately as a product`,
      `It replaces the SRS document`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_92",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `Why might a client struggle to clearly explain their requirements, according to the lecture
recording?`,
    options: [
      `They are intentionally hiding information`,
      `They may not be technically sound or computer literate`,
      `They always know exactly what they want`,
      `They prefer written specifications only`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_93",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What example is given in the lecture for using the Prototyping Model?`,
    options: [
      `A payroll system with stable requirements`,
      `A university mobile app, using a sample screen to get student feedback`,
      `A missile guidance system`,
      `A hospital radiation therapy machine`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_94",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are reasons to use the Prototyping Model, according to the lecture?
 I. Helps understand what the user really wants
 II. Saves time by avoiding big mistakes
 III. Great for projects where requirements are unclear or may change
 IV. Best for projects with completely fixed, well-known requirements`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_95",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `In the Prototyping Model, what allows the client to explain their needs more clearly?`,
    options: [
      `Reading a written specification document`,
      `Interacting with a working dummy version of the system`,
      `Attending a lecture on software engineering`,
      `Reviewing the final source code`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_96",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What is a key risk when using the Prototyping Model, according to the model comparison table?`,
    options: [
      `Requirements are always frozen`,
      `The prototype may be mistaken as the final product, leading to scope creep`,
      `It requires too much upfront planning`,
      `It cannot involve the customer at all`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_97",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `In the Incremental Model, how is the system developed?`,
    options: [
      `All at once in a single release`,
      `Step by step in small parts called increments`,
      `Only through risk analysis loops`,
      `Exclusively through a prototype`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_98",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `In the Incremental Model, what does each increment go through?`,
    options: [
      `Only the testing phase`,
      `The entire SDLC (Requirements -> Design -> Implementation -> Testing -> Deployment)`,
      `Only the design phase`,
      `Only requirements gathering`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_99",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What real-world example is used to illustrate the Incremental Model?`,
    options: [
      `Therac-25 radiation machine`,
      `Windows operating system (Windows 7 -> 8 -> 10 -> 11)`,
      `A single payroll system release`,
      `The Ariane 5 rocket`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_100",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `According to the lecture, the Incremental Model is suitable when:
 I. Working on very large projects
 II. Most requirements are known, but the system needs to be developed in phases
 III. Quick delivery of working features and early user feedback is needed
 IV. The project is extremely simple with only one small function`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_101",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture recording, why might a company use the Incremental Model for a broad,
general-audience product (like an operating system)?`,
    options: [
      `Because it targets one specific client with fixed needs`,
      `Because it will be used by many different people, and functions can be released gradually`,
      `Because it avoids all testing`,
      `Because it requires no requirements gathering`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_102",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `In the Incremental Model, what can happen to earlier increments while later ones are being
developed?`,
    options: [
      `They cannot be changed at all`,
      `They can be improved based on customer feedback`,
      `They are deleted`,
      `They are merged into the final release only`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_103",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What does each 'increment' add to the system, according to the lecture?`,
    options: [
      `A completely new, unrelated system`,
      `New features on top of the previous increment`,
      `Nothing; increments are identical`,
      `Only bug fixes, never new features`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_104",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What is the Spiral Model best described as?`,
    options: [
      `A purely linear model`,
      `A risk-focused and iterative approach combining Waterfall and Prototyping features`,
      `A model with no testing at all`,
      `A model used only for small, simple projects`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_105",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `What are the four main sections (quadrants) of each loop in the Spiral Model?
 I. Planning
 II. Risk Analysis
 III. Engineering
 IV. Evaluation
 V. Deployment only`,
    options: [
      `I, II, III, and IV only`,
      `I and II only`,
      `All of the above`,
      `II and III only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_106",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What happens during the 'Risk Analysis' quadrant of a Spiral Model loop?`,
    options: [
      `The system is deployed to all users`,
      `Potential risks are identified and steps are taken to reduce or eliminate them`,
      `The final code is written`,
      `The client signs the contract`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_107",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What happens during the 'Evaluation' quadrant of a Spiral Model loop?`,
    options: [
      `The customer reviews the work done, and the next loop is planned based on feedback`,
      `The requirements are frozen permanently`,
      `The project is cancelled`,
      `Only unit testing occurs`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_108",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `According to the lecture, the Spiral Model is recommended for:
 I. Large, complex, or high-risk projects
 II. Projects where requirements are not fully known and may change
 III. Projects needing frequent reviews, testing, and updates
 IV. Very small, low-risk, one-person projects`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_109",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `Which types of systems are given as examples where the Spiral Model is appropriate?
 I. Defense systems
 II. Aerospace / NASA-related systems
 III. Missile guidance software
 IV. Simple personal blogs`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_110",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture recording, why is the Spiral Model described as a 'combination of
several models'?`,
    options: [
      `Because it uses only Agile principles`,
      `Because it incorporates SDLC, prototyping, and incremental delivery within its loops`,
      `Because it has no relationship to any other model`,
      `Because it replaces the need for SDLC entirely`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_111",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What is a key characteristic of the Agile Model?`,
    options: [
      `Rigid, one-time delivery with no customer involvement`,
      `Iterative and incremental development with team collaboration, customer involvement, and flexibility`,
      `A model that freezes requirements at the start`,
      `A model used only for hardware development`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_112",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What is a 'sprint' in the Agile Model?`,
    options: [
      `A single long phase lasting an entire year`,
      `A short, fixed-length cycle (usually 1-4 weeks) that delivers a working product`,
      `A type of testing document`,
      `A stakeholder meeting held once`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_113",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are the two most popular Agile frameworks mentioned in the lecture?
 I. Scrum
 II. Kanban
 III. Waterfall
 IV. V-Model`,
    options: [
      `I and II only`,
      `II and III only`,
      `All of the above`,
      `I and III only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_114",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What is the foundational document that Agile values and principles are based on?`,
    options: [
      `The SWEBOK Guide`,
      `The Agile Manifesto (2001)`,
      `The ACM Code of Ethics`,
      `IEEE Software Standard 730`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_115",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture, what makes Agile increasingly popular among companies today?`,
    options: [
      `It avoids customer feedback entirely`,
      `It allows customers to change requirements frequently and get quick releases`,
      `It requires no trained team members`,
      `It eliminates the need for testing`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_116",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `What is required for a development team to successfully follow Agile methodology, according to
the lecture recording?`,
    options: [
      `No special preparation is needed`,
      `The team needs to be trained in Agile principles`,
      `The team must use only the Waterfall model first`,
      `The team must avoid all customer contact`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_117",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are described as key roles in the Scrum framework?
 I. Product Owner - chooses what to build
 II. Scrum Master - guides the team
 III. Team - builds the product
 IV. Business Analyst - sole owner of testing`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_118",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `Which model is described as 'Flow-based' with 'Continuous' delivery, best suited for
maintenance and support workflows in the Model Comparison table?`,
    options: [
      `Scrum (Agile)`,
      `Kanban (Agile)`,
      `Spiral`,
      `V-Model`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_119",
    topic: "se-module-2",
    difficulty: "hard",
    source: "PDF",
    question: `In the COVID-19 vaccination appointment system activity, which models were ruled out, and why
(based on the lecture's reasoning)?
 I. Waterfall Model - requires all requirements upfront, no early delivery, no flexible changes
 II. V-Model - too heavy on testing, not fast enough for an urgent rollout
 III. Prototyping Model - too time-consuming to build a prototype before starting real development
 IV. Incremental Model - ruled out because it cannot handle changing requirements`,
    options: [
      `I, II, and III only`,
      `II and III only`,
      `All of the above`,
      `I and II only`
    ],
    correct: 0,
    explanation: ``
  },
  {
    id: "se_friend_120",
    topic: "se-module-2",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture's analysis, which model was identified as the best choice for the
COVID-19 vaccination appointment system scenario, and why?`,
    options: [
      `Spiral Model, because it focuses purely on risk`,
      `Incremental Model, because it enables early delivery, handles changing requirements, and allows`,
      `Classical Waterfall Model, because requirements were fully known in advance`,
      `V-Model, because heavy testing was the top priority`
    ],
    correct: 1,
    explanation: ``
  },
  {
    id: "se_friend_121",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `In a traditional software development model, what typically happens if a customer requests
a major requirement change after 6 months into a 12-month project?`,
    options: [
      `The change is implemented instantly with no cost impact`,
      `Rework is required, costs increase, and delays can occur`,
      `The project automatically switches to an Agile approach`,
      `The change is added to the next sprint backlog`
    ],
    correct: 1,
    explanation: `Traditional models struggle with late changes because significant work is already complete, leading to rework, higher cost, and delays.`
  },
  {
    id: "se_friend_122",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which of the following best describes the Agile approach to requirement changes
compared to the traditional approach?`,
    options: [
      `Agile discourages any changes once a sprint has started`,
      `Agile treats changing requirements as an obstacle to avoid entirely`,
      `Agile requires a full 12-month plan before development begins`,
      `Agile embraces changing requirements and adapts more effectively than traditional models`
    ],
    correct: 3,
    explanation: `Agile was introduced specifically to handle changing requirements more effectively than traditional models.`
  },
  {
    id: "se_friend_123",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture, which characteristic is associated with the “Traditional Way” of
software development?`,
    options: [
      `Lack of transparency`,
      `Highest value delivery`,
      `High quality within the shortest time`,
      `Frequent short iterations`
    ],
    correct: 0,
    explanation: `The Traditional Way is described as high cost, resistant to change, and lacking transparency.`
  },
  {
    id: "se_friend_124",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which of these is listed as a benefit of the “Modern Way” (Agile) compared to Traditional
development?`,
    options: [
      `Less or no iterations`,
      `High cost`,
      `Highest value, high quality, shortest time`,
      `Changes are not acceptable`
    ],
    correct: 2,
    explanation: `The Modern Way delivers the highest value and quality within the shortest time, unlike the Traditional Way.`
  },
  {
    id: "se_friend_125",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `A customer originally requested a simple online shopping system, but after 6 months
realizes they also need mobile support and online payments. In a traditional development
approach, what is the most likely consequence?`,
    options: [
      `These features are added for free since planning was flexible`,
      `These changes are costly and difficult to implement because development is already underway`,
      `The system automatically detects the new requirement`,
      `Nothing changes since traditional models are always flexible`
    ],
    correct: 1,
    explanation: `This is the exact example used in the lecture to show why late changes are costly and difficult in traditional development.`
  },
  {
    id: "se_friend_126",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which of the following is NOT one of the challenges of traditional software development
mentioned in the lecture?`,
    options: [
      `Errors may be discovered late`,
      `Customers may not see the system until the end of the project`,
      `Teams may build features that users no longer need`,
      `Software is delivered in small, frequent increments`
    ],
    correct: 3,
    explanation: `Delivering software in small, frequent increments is how Agile helps, not a traditional challenge.`
  },
  {
    id: "se_friend_127",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `How does Agile help address the problem of “requirements may change during
development”?`,
    options: [
      `By adapting to changing requirements through iterative delivery`,
      `By avoiding customer contact until the final release`,
      `By locking requirements at the start and never changing them`,
      `By extending the project timeline indefinitely`
    ],
    correct: 0,
    explanation: `Agile helps by delivering in increments and adapting to changing requirements as they arise.`
  },
  {
    id: "se_friend_128",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `The Agile Manifesto was introduced to the software industry around which year, as
mentioned in the lecture?`,
    options: [
      `1995`,
      `1980`,
      `2001`,
      `2010`
    ],
    correct: 2,
    explanation: `The lecturer states the Agile Manifesto came into the industry around 2000-2001.`
  },
  {
    id: "se_friend_129",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `What is the main difference between “Values” and “Principles” in the Agile Manifesto, as
explained in the lecture?`,
    options: [
      `Values are specific coding techniques, while principles are business goals`,
      `Values represent the core philosophy, while principles guide how values are applied in practice`,
      `Values apply only to Scrum, while principles apply only to Kanban`,
      `There is no difference; the terms are interchangeable`
    ],
    correct: 1,
    explanation: `Values define the philosophy (e.g., wanting to be healthy); principles are the actions that apply that philosophy in practice.`
  },
  {
    id: "se_friend_130",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `How many key Values and Principles does the Agile Manifesto define, according to the
lecture?`,
    options: [
      `3 Values and 10 Principles`,
      `5 Values and 15 Principles`,
      `4 Values and 10 Principles`,
      `4 Values and 12 Principles`
    ],
    correct: 3,
    explanation: `The Agile Manifesto defines 4 key Values and 12 Principles.`
  },
  {
    id: "se_friend_131",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which Agile value emphasizes team collaboration and including customers in the
process?`,
    options: [
      `Individuals and Interactions`,
      `Working Software`,
      `Contract Negotiation`,
      `Following a Plan`
    ],
    correct: 0,
    explanation: `Individuals and Interactions emphasizes team collaboration and customer involvement over rigid processes and tools.`
  },
  {
    id: "se_friend_132",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `In the Agile Manifesto's comparison table, “Working Software” in Agile is valued over
which traditional practice?`,
    options: [
      `Process and Tools`,
      `Contract Negotiation`,
      `Comprehensive Documentation`,
      `Following a Plan`
    ],
    correct: 2,
    explanation: `Working Software is valued over Comprehensive Documentation in the Agile Manifesto.`
  },
  {
    id: "se_friend_133",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which traditional practice does “Responding to Change” replace in the Agile value
comparison?`,
    options: [
      `Comprehensive Documentation`,
      `Following a Plan`,
      `Contract Negotiation`,
      `Process and Tools`
    ],
    correct: 1,
    explanation: `Responding to Change is valued over Following a Plan.`
  },
  {
    id: "se_friend_134",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which Agile methodology organizes work into short, time-boxed iterations known as
Sprints?`,
    options: [
      `Kanban`,
      `Extreme Programming`,
      `Lean Software Development`,
      `Scrum`
    ],
    correct: 3,
    explanation: `Scrum organizes work into short iterations called Sprints, typically one to four weeks.`
  },
  {
    id: "se_friend_135",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which Agile methodology is primarily represented using a visual board to manage and
track work?`,
    options: [
      `Kanban`,
      `Scrum`,
      `Lean Software Development`,
      `Extreme Programming`
    ],
    correct: 0,
    explanation: `Kanban uses a visual board (with columns and sticky notes/cards) to track the progress of work.`
  },
  {
    id: "se_friend_136",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Extreme Programming (XP) primarily focuses on which of the following?`,
    options: [
      `Eliminating waste and maximizing value`,
      `Visual tracking of tasks on a board`,
      `Engineering practices and code quality`,
      `Defining a Sprint Goal`
    ],
    correct: 2,
    explanation: `XP focuses on engineering practices and ensuring high code quality.`
  },
  {
    id: "se_friend_137",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which methodology's main focus is “eliminating waste and maximizing value”?`,
    options: [
      `Scrum`,
      `Lean Software Development`,
      `Extreme Programming`,
      `Kanban`
    ],
    correct: 1,
    explanation: `Lean Software Development focuses on eliminating waste and maximizing the value delivered.`
  },
  {
    id: "se_friend_138",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture, roughly how long does a typical Scrum sprint last?`,
    options: [
      `6 to 12 months`,
      `A single day`,
      `Exactly one year`,
      `One to four weeks`
    ],
    correct: 3,
    explanation: `Sprints usually last one to four weeks, commonly two to three weeks per the lecturer.`
  },
  {
    id: "se_friend_139",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which statement best distinguishes Agile “methodologies” from Agile “practices”?`,
    options: [
      `Methodologies provide the overall structure for managing a project, while practices are specific`,
      `Methodologies are specific coding techniques; practices define the overall project structure`,
      `Methodologies and practices mean exactly the same thing`,
      `Practices are only used in Scrum, while methodologies are used in all frameworks`
    ],
    correct: 0,
    explanation: `Methodologies (e.g., Scrum, Kanban) give overall project structure; practices (e.g., TDD, Pair Programming) are specific implementation techniques.`
  },
  {
    id: "se_friend_140",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `In Test-Driven Development (TDD), what is the correct sequence of actions?`,
    options: [
      `Write the code first, then write tests, then refactor`,
      `Deploy the software, then write tests`,
      `Write the tests before writing the code`,
      `Skip testing entirely to save time`
    ],
    correct: 2,
    explanation: `In TDD, test cases are written first, and code is then written to satisfy those tests.`
  },
  {
    id: "se_friend_141",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `What is a key benefit of Pair Programming as described in the lecture?`,
    options: [
      `It eliminates the need for any testing`,
      `Two developers work together, helping catch bugs and improve code quality early`,
      `It replaces the need for a Scrum Master`,
      `It is only used in the Waterfall model`
    ],
    correct: 1,
    explanation: `Pair programming lets two developers catch bugs and improve quality collaboratively and quickly.`
  },
  {
    id: "se_friend_142",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Behavior-Driven Development (BDD) primarily focuses on defining system behavior using:`,
    options: [
      `Complex technical algorithms only understandable by developers`,
      `Database schema diagrams`,
      `Sprint burndown metrics`,
      `Business-focused scenarios`
    ],
    correct: 3,
    explanation: `BDD defines system behavior using business-focused scenarios understandable by both business and technical people.`
  },
  {
    id: "se_friend_143",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which of the following best defines Scrum?`,
    options: [
      `An Agile framework that organizes work into Sprints and emphasizes team collaboration`,
      `A programming language used for Agile development`,
      `A type of documentation used only in Waterfall projects`,
      `A single developer working independently without a team`
    ],
    correct: 0,
    explanation: `Scrum is an Agile framework that divides work into Sprints and relies on team collaboration.`
  },
  {
    id: "se_friend_144",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Who is primarily responsible for representing the customer and prioritizing requirements
in a Scrum team?`,
    options: [
      `Scrum Master`,
      `Developers`,
      `Project Manager`,
      `Product Owner`
    ],
    correct: 3,
    explanation: `The Product Owner represents the customer/stakeholders and prioritizes requirements.`
  },
  {
    id: "se_friend_145",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which Scrum role is described as a “service leader” who supports the team rather than
assigning tasks?`,
    options: [
      `Product Owner`,
      `Scrum Master`,
      `Developer`,
      `Business Analyst`
    ],
    correct: 1,
    explanation: `The Scrum Master acts as a service leader/facilitator, not a task-assigning manager.`
  },
  {
    id: "se_friend_146",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `What is a common misconception about the Scrum Master's role, as clarified in the
lecture?`,
    options: [
      `That the Scrum Master writes all the code`,
      `That the Scrum Master only works with customers`,
      `That the Scrum Master is the same as a traditional project manager or team leader`,
      `That the Scrum Master owns the product backlog`
    ],
    correct: 2,
    explanation: `The lecture explicitly clarifies the Scrum Master is not a traditional project manager or team lead.`
  },
  {
    id: "se_friend_147",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which role is primarily responsible for designing, developing, testing, and delivering a
working product increment each sprint?`,
    options: [
      `Developers`,
      `Product Owner`,
      `Scrum Master`,
      `Business Analyst`
    ],
    correct: 0,
    explanation: `Developers design, build, test, and deliver the working product increment each sprint.`
  },
  {
    id: "se_friend_148",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Who has the authority to accept or reject completed work at the end of a sprint?`,
    options: [
      `Scrum Master`,
      `Developers`,
      `Client's IT department`,
      `Product Owner`
    ],
    correct: 3,
    explanation: `The Product Owner accepts or rejects completed work based on whether it meets requirements.`
  },
  {
    id: "se_friend_149",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `According to the lecture, the Product Owner is NOT the same as which of the following?`,
    options: [
      `A stakeholder representative`,
      `The actual client who sponsors the software`,
      `The person who maintains the product backlog`,
      `A member of the Scrum team`
    ],
    correct: 1,
    explanation: `The lecture stresses the Product Owner is not the actual client; the client sponsors the software, while the PO represents customers/stakeholders.`
  },
  {
    id: "se_friend_150",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `What is the “key focus” of the Scrum Master role as stated in the lecture materials?`,
    options: [
      `Maximizing the value of the product`,
      `Delivering working software`,
      `Helping the team work effectively`,
      `Writing user stories`
    ],
    correct: 2,
    explanation: `The Scrum Master's key focus is helping the team work effectively.`
  },
  {
    id: "se_friend_151",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which Scrum artifact contains a prioritized list of all requirements, features, and
improvements for the product?`,
    options: [
      `Product Backlog`,
      `Sprint Backlog`,
      `Burn Down Chart`,
      `Definition of Done`
    ],
    correct: 0,
    explanation: `The Product Backlog is the prioritized list of all requirements, features, and improvements.`
  },
  {
    id: "se_friend_152",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `In the Product Backlog, where do the highest-value items typically appear?`,
    options: [
      `At the bottom`,
      `In a random order`,
      `Only in Release 3`,
      `At the top`
    ],
    correct: 3,
    explanation: `High-value items appear at the top of the Product Backlog; lower-valued items toward the bottom.`
  },
  {
    id: "se_friend_153",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Why does the Product Backlog continue to change and evolve throughout a project?`,
    options: [
      `Because it is deleted and recreated every sprint`,
      `Because customer feedback and new requirements are incorporated after each increment`,
      `Because the Scrum Master edits it randomly`,
      `Because it must match the Sprint Backlog exactly at all times`
    ],
    correct: 1,
    explanation: `The Product Backlog evolves as customer feedback and new requirements are added after each increment.`
  },
  {
    id: "se_friend_154",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `What is the Sprint Backlog best described as?`,
    options: [
      `A complete list of every requirement ever proposed for the product`,
      `A chart showing remaining work versus time`,
      `A subset of the Product Backlog containing items selected for a specific sprint`,
      `A document only the client can edit`
    ],
    correct: 2,
    explanation: `The Sprint Backlog is a subset of the Product Backlog for the items selected for a particular sprint.`
  },
  {
    id: "se_friend_155",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `A Sprint Burn Down Chart typically plots which two variables?`,
    options: [
      `Work remaining vs. time`,
      `Team salary vs. sprint number`,
      `Number of bugs vs. number of developers`,
      `Customer satisfaction vs. cost`
    ],
    correct: 0,
    explanation: `A burn down chart is a graphical representation of work remaining versus time.`
  },
  {
    id: "se_friend_156",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `In a typical Sprint Burn Down Chart, which axis usually shows the outstanding work
(backlog)?`,
    options: [
      `The horizontal axis`,
      `Neither axis; it is shown as a pie chart`,
      `It alternates each sprint`,
      `The vertical axis`
    ],
    correct: 3,
    explanation: `The outstanding work/backlog is usually on the vertical axis, with time along the horizontal axis.`
  },
  {
    id: "se_friend_157",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `What is the standard template for writing a user story?`,
    options: [
      `As a , I will because`,
      `As a , I want to so that`,
      `As a , I verify using`,
      `As a , I assign to`
    ],
    correct: 1,
    explanation: `The standard user story template is: As a , I want to so that .`
  },
  {
    id: "se_friend_158",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Which of the following is a well-written user story according to the lecture's criteria?`,
    options: [
      `As a customer, I want a database table to store account balances.`,
      `As a member, I want an SQL query to search books.`,
      `As a customer, I want to view my account balance so that I can monitor my finances.`,
      `As a user, I want to generate reports.`
    ],
    correct: 2,
    explanation: `This option correctly identifies a user role, a goal, and a benefit, without technical jargon.`
  },
  {
    id: "se_friend_159",
    topic: "se-module-3",
    difficulty: "medium",
    source: "PDF",
    question: `Why is the user story “As a customer, I want a database table to store account balances”
considered a poor example?`,
    options: [
      `It is too short`,
      `It does not mention “As a”`,
      `It includes a technical implementation detail (database) instead of focusing on user value`,
      `It has too many benefits listed`
    ],
    correct: 2,
    explanation: `User stories should avoid technical implementation details like databases and focus on user value.`
  },
  {
    id: "se_friend_160",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Why is “As a user, I want to generate reports” considered an incomplete user story?`,
    options: [
      `It is missing the benefit (“so that...”) explaining why the user wants this`,
      `It does not specify a technical database structure`,
      `It uses too many words`,
      `It does not name a specific report type`
    ],
    correct: 0,
    explanation: `The story lacks the “so that...” clause explaining the benefit to the user.`
  },
  {
    id: "se_friend_161",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are challenges associated with traditional software development,
as discussed in the lecture?
 I. Software is delivered in short, frequent increments
 II. Requirements may change during development
 III. Customer feedback is gathered and incorporated after every iteration
 IV. Errors may be discovered late in the process
 V. Teams may build features that users no longer need`,
    options: [
      `II, IV, and V only`,
      `I, II, and IV only`,
      `II and IV only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Frequent increments and continuous feedback describe Agile, not traditional challenges.`
  },
  {
    id: "se_friend_162",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are the 4 key values defined in the Agile Manifesto?
 I. Individuals and Interactions
 II. Comprehensive Documentation
 III. Customer Collaboration
 IV. Contract Negotiation
 V. Responding to Change`,
    options: [
      `I, III, and V only`,
      `I, II, and III only`,
      `I and III only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Comprehensive Documentation and Contract Negotiation are the traditional counterparts, not Agile values.`
  },
  {
    id: "se_friend_163",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are recognized Agile development methodologies mentioned in the
lecture?
 I. Scrum
 II. Kanban
 III. Waterfall
 IV. Extreme Programming (XP)
 V. Spiral Model`,
    options: [
      `I, II, and IV only`,
      `I, II, and III only`,
      `I and II only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Waterfall and Spiral are traditional software process models, not Agile methodologies.`
  },
  {
    id: "se_friend_164",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are considered Agile practices (as opposed to methodologies) in
the lecture?
 I. Test-Driven Development (TDD)
 II. Scrum
 III. Pair Programming
 IV. Behavior-Driven Development (BDD)
 V. Kanban`,
    options: [
      `I, III, and IV only`,
      `I, II, and III only`,
      `I and III only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Scrum and Kanban are methodologies (overall structure), while TDD, Pair Programming, and BDD are implementation practices.`
  },
  {
    id: "se_friend_165",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are among the three main Scrum roles?
 I. Project Manager
 II. Business Analyst
 III. Product Owner
 IV. Scrum Master
 V. Developers`,
    options: [
      `III, IV, and V only`,
      `I, III, and IV only`,
      `III and IV only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Project Manager and Business Analyst are not defined Scrum roles; the three Scrum roles are Product Owner, Scrum Master, and Developers.`
  },
  {
    id: "se_friend_166",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are responsibilities of the Product Owner?
 I. Facilitate daily scrum meetings and remove obstacles for the team
 II. Define and prioritize requirements
 III. Design, develop, and test the software code
 IV. Maintain the Product Backlog
 V. Accept or reject completed work`,
    options: [
      `II, IV, and V only`,
      `I, II, and IV only`,
      `II and IV only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Facilitating scrum activities is the Scrum Master's job; designing/coding is the Developers' job.`
  },
  {
    id: "se_friend_167",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are responsibilities of the Scrum Master?
 I. Facilitate Scrum activities
 II. Promote collaboration and communication among the team
 III. Define and prioritize the product backlog
 IV. Design and develop the software code
 V. Remove obstacles that affect the team's progress`,
    options: [
      `I, II, and V only`,
      `I, II, and III only`,
      `I and II only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Prioritizing the backlog is the Product Owner's job; coding is the Developers' job.`
  },
  {
    id: "se_friend_168",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are the three main Scrum artifacts?
 I. Product Backlog
 II. Definition of Done
 III. Sprint Backlog
 IV. Burn Down Chart
 V. Release Plan`,
    options: [
      `I, III, and IV only`,
      `I, II, and III only`,
      `I and III only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `The lecture names Product Backlog, Sprint Backlog, and Burn Down Chart as the three main Scrum artifacts.`
  },
  {
    id: "se_friend_169",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are among the four main Scrum activities discussed in the lecture?
 I. Sprint Planning
 II. Product Backlog Refinement
 III. Daily Scrum
 IV. Sprint Review
 V. Sprint Retrospective`,
    options: [
      `I, III, IV, and V only`,
      `I, II, III, and IV only`,
      `I and III only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `The lecture lists Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective as the four main Scrum activities.`
  },
  {
    id: "se_friend_170",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following statements about Sprint Planning are correct?
 I. It is conducted at the beginning of each Sprint
 II. Its purpose includes selecting Product Backlog items for the Sprint
 III. It results in a clear plan for the upcoming Sprint
 IV. It is conducted after the Sprint Review to reflect on team performance
 V. It includes defining the Sprint Goal`,
    options: [
      `I, II, III, and V only`,
      `I, II, III, and IV only`,
      `I and II only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Reflecting on team performance after the Sprint Review describes the Sprint Retrospective, not Sprint Planning.`
  },
  {
    id: "se_friend_171",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are true about the Daily Scrum?
 I. It typically lasts around 15 minutes
 II. It is held once per month
 III. It addresses what was completed, what's next, and any obstacles
 IV. It is used to monitor daily progress
 V. It replaces the need for a Sprint Review`,
    options: [
      `I, III, and IV only`,
      `I, II, and III only`,
      `I and III only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `The Daily Scrum is held daily (not monthly) and does not replace the Sprint Review.`
  },
  {
    id: "se_friend_172",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are purposes of the Sprint Review?
 I. Demonstrate completed work
 II. Gather stakeholder feedback
 III. Reflect only on team performance with no stakeholder involvement
 IV. Review progress toward the Sprint Goal
 V. Update the Product Backlog if needed`,
    options: [
      `I, II, IV, and V only`,
      `I, II, III, and IV only`,
      `I and II only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Reflecting only on team performance without stakeholders describes the Sprint Retrospective, not the Sprint Review.`
  },
  {
    id: "se_friend_173",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are true about the Sprint Retrospective?
 I. It focuses on the team and the process
 II. It is conducted after the Sprint Review
 III. Its main purpose is to demonstrate the product to the client
 IV. It aims to identify what went well and areas for improvement
 V. It results in a plan for improvements in the next Sprint`,
    options: [
      `I, II, IV, and V only`,
      `I, II, III, and IV only`,
      `I and II only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Demonstrating the product to the client is the purpose of the Sprint Review, not the Retrospective.`
  },
  {
    id: "se_friend_174",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are elements that should be included in a well-written user story?
 I. A clearly identified user role
 II. Technical implementation details like database structures
 III. A description of the goal the user wants to achieve
 IV. An explanation of the benefit (“so that...”)
 V. SQL queries or code snippets describing functionality`,
    options: [
      `I, III, and IV only`,
      `I, II, and III only`,
      `I and III only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Good user stories avoid technical implementation details such as databases or SQL queries.`
  },
  {
    id: "se_friend_175",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Based on the burndown chart activity (120 tasks over 5 days: Day1=20, Day2=50, Day3=0,
Day4=20, Day5=30), which of the following statements are correct?
 I. The ideal burn down velocity is 24 tasks per day
 II. Day 2 had the highest productivity with 50 tasks completed
 III. Day 3 had the lowest productivity with 0 tasks completed
 IV. The team completed all 120 tasks by the end of Day 5
 V. The team completed only 100 tasks in total`,
    options: [
      `I, II, III, and IV only`,
      `I, II, III, and V only`,
      `I and II only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `120 tasks / 5 days = 24 tasks/day ideal velocity. 20+50+0+20+30 = 120 tasks total, so the team completed all tasks.`
  },
  {
    id: "se_friend_176",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following correctly match an Agile value to what it replaces in the Traditional
way?
 I. Individuals and Interactions over Process and Tools
 II. Working Software over Comprehensive Documentation
 III. Customer Collaboration over Contract Negotiation
 IV. Responding to Change over Comprehensive Documentation
 V. Working Software over Following a Plan`,
    options: [
      `I, II, and III only`,
      `I, II, and IV only`,
      `I and II only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Responding to Change is valued over Following a Plan (not Comprehensive Documentation), and Working Software is valued over Comprehensive Documentation (not Following a Plan) — D and E swap the pairs incorrectly.`
  },
  {
    id: "se_friend_177",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `In the Hospital Appointment Management System example, which of the following user
stories were assigned HIGH priority in the initial Product Backlog?
 I. As a patient, I want to register an account so that I can use the appointment system.
 II. As a patient, I want to receive appointment reminders so that I do not miss my appointment.
 III. As a patient, I want to search for doctors by specialization so that I can find the correct doctor.
 IV. As a doctor, I want to view my daily appointments so that I can prepare for consultations.
 V. As a patient, I want to book an appointment so that I can reserve a consultation time.`,
    options: [
      `I, III, and V only`,
      `I, II, and III only`,
      `I and III only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `Registration, doctor search, and appointment booking were High priority; reminders were Low and the doctor dashboard was Medium priority.`
  },
  {
    id: "se_friend_178",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are valid reasons given in the lecture for why Sprint 1 of the
Hospital Appointment System focused on registration and doctor search?
 I. They have the highest business value
 II. They are core system functionality needed for the system to operate
 III. They are the lowest-priority items in the backlog
 IV. They form a foundation for future features
 V. They allow the team to deliver a working product early`,
    options: [
      `I, II, IV, and V only`,
      `I, II, III, and IV only`,
      `I and II only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `These items were selected because they are high-value, core, foundational, and allow early delivery — not because they were low priority.`
  },
  {
    id: "se_friend_179",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following statements accurately describe the difference between Agile
“methodologies” and “practices”?
 I. Methodologies provide the overall structure for managing a project
 II. Practices are specific techniques used during implementation
 III. TDD and Pair Programming are examples of methodologies
 IV. Scrum and Kanban are examples of methodologies
 V. Practices provide the overall project structure while methodologies focus on implementation`,
    options: [
      `I, II, and IV only`,
      `I and II only`,
      `All of the above`,
      `III and V only`
    ],
    correct: 0,
    explanation: `TDD and Pair Programming are practices, not methodologies, and option E reverses the correct definitions.`
  },
  {
    id: "se_friend_180",
    topic: "se-module-3",
    difficulty: "hard",
    source: "PDF",
    question: `Which of the following are true regarding the difference between a Client and a Product
Owner, as clarified in the lecture?
 I. The Product Owner is the same person as the Client
 II. The Client sponsors the software and communicates the initial requirements
 III. The Product Owner represents customers and stakeholders within the Scrum team
 IV. The Product Owner prioritizes the requirements after they are collected
 V. The Client is always a member of the development team`,
    options: [
      `II, III, and IV only`,
      `I, II, and III only`,
      `II and III only`,
      `All of the above`
    ],
    correct: 0,
    explanation: `The lecture explicitly states the Product Owner is not the same person as the client.`
  },
  {
    id: "se_m3_rec_71",
    topic: "se-module-3",
    difficulty: "medium",
    source: "Recording",
    question: `According to the lecturer, what analogy is used to explain the difference between Agile 'values' and 'principles'?`,
    options: [
      `Values are like wanting to be healthy; principles are the actions you take (go to gym, eat healthy) to achieve that value`,
      `Values are specific coding rules; principles are project deadlines`,
      `Values are team roles; principles are sprint durations`,
      `Values and principles are the same thing expressed differently`
    ],
    correct: 0,
    explanation: `The lecturer uses the health analogy: 'You wanted to be healthy — that is the value. To achieve that, you go to gym, eat healthy food, do yoga — those are the principles.'`
  },
  {
    id: "se_m3_rec_72",
    topic: "se-module-3",
    difficulty: "medium",
    source: "Recording",
    question: `According to the lecturer, why does the Scrum framework require a proper team rather than individuals working alone?`,
    options: [
      `Because sprints are very short (1-4 weeks), individuals cannot deliver all features alone in that time period`,
      `Because Scrum Master needs someone to manage`,
      `Because the Agile Manifesto requires at least 10 developers`,
      `Because individuals are not allowed to use Agile methodologies`
    ],
    correct: 0,
    explanation: `The lecturer explains: 'If you wanted to deliver a workable software in two weeks, that is very short time. Individuals can't work towards all the features for that short time period — so we need a proper team.'`
  },
  {
    id: "se_m3_rec_73",
    topic: "se-module-3",
    difficulty: "medium",
    source: "Recording",
    question: `The lecturer explicitly clarified that the Scrum Master does NOT do which of the following?`,
    options: [
      `Assign tasks to developers`,
      `Support the development team`,
      `Facilitate Scrum activities`,
      `Remove obstacles for the team`
    ],
    correct: 0,
    explanation: `The lecturer states: 'Scrum Master won't assign any task for the developers — that is handled by the development team. He will act as a support system.'`
  },
  {
    id: "se_m3_rec_74",
    topic: "se-module-3",
    difficulty: "medium",
    source: "Recording",
    question: `In the TDD example given by the lecturer, what scenario was used to explain writing tests before code?`,
    options: [
      `A discount calculation: if product price is 100 and 10% discount applied, the final price should be 90`,
      `A login system: if username and password are correct, access should be granted`,
      `A search function: if keyword matches, results should appear`,
      `A sorting algorithm: if input is unsorted, output should be sorted`
    ],
    correct: 0,
    explanation: `The lecturer used a discount example: 'If the product price is 100 rupees, after applying 10% discount, the price should be 90. We write this test case first, then write the code to meet it.'`
  },
  {
    id: "se_m3_rec_75",
    topic: "se-module-3",
    difficulty: "medium",
    source: "Recording",
    question: `According to the lecturer, why is code quality important in Extreme Programming (XP)?`,
    options: [
      `Because poorly written code (e.g., 4 lines vs 2 lines for the same logic) affects software performance and makes it harder for other developers to read`,
      `Because code quality is only measured by the number of comments`,
      `Because XP requires all code to be written in one programming language`,
      `Because code quality only matters during deployment`
    ],
    correct: 0,
    explanation: `The lecturer explains: 'One developer can write the code in two lines, another in four lines. The two-line code is better because four lines takes more time. If you don't meet engineering practices, other developers can't read or find errors from your code.'`
  },
  {
    id: "se_m3_rec_76",
    topic: "se-module-3",
    difficulty: "medium",
    source: "Recording",
    question: `According to the lecture recording, what is the main advantage of writing test cases BEFORE writing code in TDD?`,
    options: [
      `We can avoid later bugs because we write code exactly to meet the test criteria, saving time in short sprint periods`,
      `It eliminates the need for a Scrum Master`,
      `It allows skipping the sprint review process`,
      `It makes the code run faster`
    ],
    correct: 0,
    explanation: `The lecturer says: 'We can avoid any later bugs or issues in a short time period because we are writing the code exactly to meet the criteria. Then we will most of the time avoid these errors.'`
  },
  {
    id: "se_m3_rec_77",
    topic: "se-module-3",
    difficulty: "medium",
    source: "Recording",
    question: `In the burndown chart example from the lecture, the team had 120 tasks over 5 days. What was the ideal burndown velocity and which day had the lowest productivity?`,
    options: [
      `24 tasks/day ideal velocity; Day 3 had lowest productivity (0 tasks completed)`,
      `30 tasks/day ideal velocity; Day 1 had lowest productivity`,
      `20 tasks/day ideal velocity; Day 5 had lowest productivity`,
      `24 tasks/day ideal velocity; Day 4 had lowest productivity`
    ],
    correct: 0,
    explanation: `The lecturer calculated: '120 tasks divided by 5 days = 24 tasks per day ideal velocity. Day 3 had 0 tasks — the lowest productivity day.'`
  },
  {
    id: "se_m3_rec_78",
    topic: "se-module-3",
    difficulty: "medium",
    source: "Recording",
    question: `According to the lecturer, what happens to the Product Backlog after each sprint increment?`,
    options: [
      `It changes and evolves because customer feedback may introduce new features or improvements that need to be added`,
      `It is frozen and never changes once created`,
      `It is deleted and recreated from scratch`,
      `It is only updated by the Scrum Master`
    ],
    correct: 0,
    explanation: `The lecturer says: 'The product backlog changes and evolves throughout the project because each increment we get client feedback. Sometimes the client might want new features, so we update the product backlog.'`
  },
  {
    id: "se_m3_rec_79",
    topic: "se-module-3",
    difficulty: "medium",
    source: "Recording",
    question: `According to the lecturer, why should user stories avoid technical implementation details like 'database' or 'SQL query'?`,
    options: [
      `Because user stories should be simple and understandable among all stakeholders, including non-technical customers`,
      `Because databases are not used in Agile development`,
      `Because only the Scrum Master is allowed to mention technical terms`,
      `Because technical terms make the story too long`
    ],
    correct: 0,
    explanation: `The lecturer explains: 'User stories should be understandable to both business and technical people. You should avoid technical terms because the story should be simple and understandable among everyone, including customers and stakeholders.'`
  },
  {
    id: "se_m3_rec_80",
    topic: "se-module-3",
    difficulty: "medium",
    source: "Recording",
    question: `According to the lecture recording, what is the primary goal of a Sprint Review?`,
    options: [
      `To inspect the increment and adapt the product backlog if needed`,
      `To plan the next sprint`,
      `To assign new tasks to team members`,
      `To conduct the retrospective`
    ],
    correct: 0,
    explanation: `The lecturer explicitly asks this as a quiz question and answers: 'The correct answer is to inspect the increment and adapt the product backlog if needed. Planning happens in sprint planning, and retrospective is a separate activity.'`
  },
  {
    id: "se_m3_rec_81",
    topic: "se-module-3",
    difficulty: "medium",
    source: "Recording",
    question: `According to the lecturer, in Pair Programming, why do two developers work on the same task together?`,
    options: [
      `Because in Agile's short sprints, two developers can find bugs early, discuss code quality, and deliver error-free code faster`,
      `Because one developer writes code while the other takes notes`,
      `Because company policy requires it for all projects`,
      `Because one developer is always a beginner who needs supervision`
    ],
    correct: 0,
    explanation: `The lecturer explains that in Agile's short time periods, two developers working together can 'find out bugs easily' and 'discuss and interact among them to identify any bugs or errors in an early stage' for quick delivery.`
  }
];
