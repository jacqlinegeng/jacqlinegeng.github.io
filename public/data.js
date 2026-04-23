// Content data (dashes replaced with "to", "/", or commas per user)
window.PROJECTS = [
  {
    id: "neurowealth",
    title: "NeuroWealth",
    year: "2025",
    tag: "Fintech x Neuroscience",
    desc: "A fintech dashboard that tracks spending and investment behavior through neural activity. Reads EEG and fNIRS signals to surface the mental states behind financial decisions.",
    tech: ["React", "Python", "TensorFlow", "fNIRS/EEG", "PostgreSQL"],
    link: "https://github.com/jacqlinegeng/NeuroWealth",
    letter: "N"
  },
  {
    id: "vestibull",
    title: "Vestibull",
    year: "2024",
    tag: "Gamified learning",
    desc: "A gamified financial literacy platform with a live portfolio tracker. Challenges and rewards teach market mechanics while real time data keeps the stakes honest.",
    tech: ["React", "Node.js", "WebSocket", "FinAPI"],
    link: "https://vestibull.vercel.app/",
    letter: "V"
  },
  {
    id: "3dviz",
    title: "3DViz",
    year: "2024",
    tag: "ML / Visualization",
    desc: "Renders machine learning models as interactive 3D scenes: architectures, weights, and real time inference flows you can walk through rather than squint at.",
    tech: ["Three.js", "React", "PyTorch", "WebGL"],
    link: "https://3dviz-animation.vercel.app/",
    letter: "V"
  },
  {
    id: "genesis",
    title: "Genesis Labs",
    year: "2025",
    tag: "Founder",
    desc: "An experimental studio building tools at the edge of AI, finance, and creative computing. Currently in stealth. Sign up for the beta or follow along.",
    tech: ["LLMs", "Agents", "Product", "Strategy"],
    link: "https://genesis-ai-labs.vercel.app/",
    letter: "G",
    featured: true
  }
];

window.NOTES = [
  {
    id: "1", title: "on lock in mode", date: "Apr 12, 2026", kind: "journal",
    preview: "The quiet pleasure of committing, not to a thing, but to the version of yourself that would finish it.",
    body: [
      "There is a specific kind of quiet that arrives the moment you stop negotiating with yourself. Not the quiet of an empty room. The quiet of a decision that has stopped rattling.",
      "I used to call this discipline. I was wrong. Discipline is the scaffolding; lock in is the roof. It is what happens when the last corner of your attention finally settles into the work, and you look up four hours later genuinely surprised that your coffee is cold.",
      { quote: "The goal is not to be productive. The goal is to be present to the thing you are making." },
      "I think founders underrate the cost of half attention. Every open tab is a small hemorrhage. Every half finished decision is a line item on tomorrow's cognitive bill. I am trying, this quarter, to close more tabs than I open.",
      "Ask me in June how it is going."
    ]
  },
  {
    id: "2", title: "first principles, one more time", date: "Mar 04, 2026", kind: "essay",
    preview: "Most of my hard problems are two easy problems in a trench coat. The trick is getting them to stand apart.",
    body: [
      "First principles thinking is, in practice, extremely unglamorous. It is mostly the act of writing down things you already know in the dumbest possible order and noticing which ones do not actually depend on each other.",
      "The confusion, the feeling of hardness, almost always lives in the entanglement, not in the parts.",
      { quote: "If you cannot explain it to yourself in two bullets, you have not found the problem yet." },
      "When I get stuck now I do the same thing every time. A sheet of paper, three columns: what I know, what I am assuming, what I need to find out. The assuming column is where the rent is hidden."
    ]
  },
  {
    id: "3", title: "notes from Genesis, week six", date: "Feb 20, 2026", kind: "build log",
    preview: "Week six of building Genesis Labs. The product is becoming legible. The story is not, yet.",
    body: [
      "Six weeks in. The product is finally doing the thing I promised myself it would do, and now the harder work begins: convincing anyone else that it is a thing.",
      "Writing the landing page has been clarifying in the way only writing can be. Every sentence that I cannot finish is a feature I do not understand.",
      "Three things I have noticed:",
      "one. People do not want fewer tools. They want tools that make fewer decisions feel urgent.",
      "two. Agents are cheap. Coordination is not.",
      "three. The most interesting product surface is almost never the chat box."
    ]
  },
  {
    id: "4", title: "why I read half of books", date: "Jan 18, 2026", kind: "essay",
    preview: "A defense of abandoning books. Most of what you need is in the first third anyway.",
    body: [
      "I used to finish every book. I thought it was respect. I have since decided it was mostly sunk cost fallacy with better lighting.",
      "Non fiction books are, as a rule, a 40 page idea wearing a 280 page suit. Once the suit is on, authors have to pad. The first third is usually the thesis. The middle third is examples. The last third is the author hoping you will recommend it.",
      { quote: "Read more. Finish less. Return often." },
      "The new rule: if I am not excited to open it by page 100, I shelf it and move on. Sometimes I come back six months later and it clicks. Sometimes I do not. Both are fine."
    ]
  },
  {
    id: "5", title: "consulting by day, building by night", date: "Dec 02, 2025", kind: "journal",
    preview: "The double life is underrated. Each half teaches the other a lesson the other one refuses to hear.",
    body: [
      "People ask how I balance it. The honest answer is: I do not. I rotate. Consulting is a muscle that uses one set of fibers; building uses another. When one is sore, I use the other.",
      "Consulting taught me that clarity is a product. Building taught me that clarity is also a constraint."
    ]
  },
  {
    id: "6", title: "on choosing your hard", date: "Oct 22, 2025", kind: "essay",
    preview: "Every path is hard. The only real question is which species of hard you can tolerate the longest.",
    body: [
      "A mentor once told me that adulthood is mostly the slow realization that comfort is a kind of tax. You pay it monthly whether you want to or not.",
      "The alternative is not an absence of hard. It is choosing a hard that is at least yours. A hard whose shape you recognize, whose name you can pronounce, whose pain you would not trade for easier pain.",
      { quote: "Choose your hard. Everything else is a footnote." },
      "I chose building. I chose the kind of hard where progress is invisible for months and then suddenly you have a thing that did not exist before."
    ]
  }
];

window.BOOKS = [
  { t: "The 48 Laws of Power", a: "Robert Greene", p: 65, s: "reading", c: "https://m.media-amazon.com/images/I/31RW8HQ31WL._SY445_SX342_.jpg", n: "A careful dissection of power dynamics. The historical examples bring each law to life." },
  { t: "Thinking, Fast and Slow", a: "Daniel Kahneman", p: 40, s: "reading", c: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg", n: "Mind bending exploration of cognitive biases and decision making." },
  { t: "The Nvidia Way", a: "Tae Kim", p: 25, s: "reading", c: "https://m.media-amazon.com/images/I/515FVMiDWfL._SY445_SX342_.jpg", n: "Jensen's leadership and Nvidia's rise through the AI chip race." },
  { t: "AI Engineering", a: "Chip Huyen", p: 20, s: "reading", c: "https://m.media-amazon.com/images/I/815KH9GjFTL._AC_UF1000,1000_QL80_.jpg", n: "Practical guide to building and deploying AI systems." },
  { t: "Principles", a: "Ray Dalio", p: 12, s: "reading", c: "https://m.media-amazon.com/images/I/61LKD6scbfL.jpg", n: "Dalio's principles for life and work. A framework, not a bible." },
  { t: "Surely You're Joking, Mr. Feynman!", a: "Richard Feynman", p: 34, s: "reading", c: "https://m.media-amazon.com/images/I/71x3shLRNFL._SY522_.jpg", n: "Curiosity as a way of life." },
  { t: "The Untethered Soul", a: "Michael A. Singer", p: 12, s: "reading", c: "https://m.media-amazon.com/images/I/61dSHZxYdtL._AC_UF1000,1000_QL80_.jpg", n: "An exploration of consciousness and self awareness." },
  { t: "Superintelligence", a: "Nick Bostrom", p: 8, s: "reading", c: "https://m.media-amazon.com/images/I/814sKOe+BcL._SY522_.jpg", n: "A thought provoking exploration of AI safety." },
  { t: "Atomic Habits", a: "James Clear", p: 100, s: "done", c: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg", n: "Game changer for building sustainable habits.", done: "Dec 2024" },
  { t: "The Psychology of Money", a: "Morgan Housel", p: 100, s: "done", c: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg", n: "Brilliant perspectives on wealth, greed, and happiness.", done: "Nov 2024" },
  { t: "The Almanack of Naval Ravikant", a: "Eric Jorgenson", p: 100, s: "done", c: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598011736i/54898389.jpg", n: "Life changing wisdom on wealth and happiness.", done: "Oct 2022" },
  { t: "The Defining Decade", a: "Meg Jay", p: 100, s: "done", c: "https://m.media-amazon.com/images/I/812pT1QRzUL._AC_UF1000,1000_QL80_.jpg", n: "Essential read for anyone in their twenties.", done: "Mar 2023" },
  { t: "A Woman Makes a Plan", a: "Maye Musk", p: 100, s: "done", c: "https://m.media-amazon.com/images/I/71O5zxF0iNL._AC_UF1000,1000_QL80_.jpg", n: "Resilience and reinvention.", done: "May 2025" },
  { t: "Steering by Starlight", a: "Martha Beck", p: 100, s: "done", c: "https://images3.penguinrandomhouse.com/cover/9781605298641", n: "Navigating life with both science and intuition.", done: "Sep 2023" },
  { t: "Zero to One", a: "Peter Thiel", p: 0, s: "want", c: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1414347376i/18050143.jpg", n: "On the list for contrarian thinking." },
  { t: "Deep Work", a: "Cal Newport", p: 0, s: "want", c: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447957962i/25744928.jpg", n: "Focus in an age of distraction." }
];

window.EXPERIENCE = [
  { role: "Founder", org: "Genesis Labs", period: "2025 to present", note: "Building an experimental studio at the edge of AI, finance, and creative computing.", highlight: true },
  { role: "Senior Consultant, Financial Engineering & Modelling", org: "Deloitte", period: "2023 to present", note: "Risk and compliance strategy for Fortune 500 tech and finance clients. AI literacy workshops and national reports." },
  { role: "Consultant", org: "Deloitte", period: "2019 to 2022", note: "Risk compliance assessments across tech and finance portfolios." },
  { role: "AI Business Fellow", org: "Perplexity", period: "2025", note: "Pilot work on Enterprise Pro and Comet." },
  { role: "Developer Relations", org: "thirdweb", period: "2022 to 2023", note: "12k+ monthly developers. Technical content, docs, onboarding workshops." }
];
