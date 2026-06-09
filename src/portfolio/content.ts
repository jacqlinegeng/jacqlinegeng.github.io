// @ts-nocheck
/* ============================================================
   Jacqline Geng — portfolio content (data)
   Assigned to window.* so the page logic (app.ts) can read it.
   Edit text/books/projects here.
   ============================================================ */
export function loadContent() {
  /* ============ Content ============ */

  window.ABOUT = {
    // greeting — 你好 gets the Chinese handwriting font
    greeting: 'hello / bonjour / <span class="zh">你好</span>,',
    // diary entry — arrays of segments; segments with href become dotted links
    entry: [
      [
        { t: "I'm a consultant by day and a builder by night. I make tools at the intersection of AI, financial systems, and creativity, currently through " },
        { t: "Genesis Labs", href: "https://genesislabs.vc" },
        { t: ", an experimental studio I founded in 2025." }
      ],
      [
        { t: "These days I'm reading Feynman, writing on " },
        { t: "Substack", href: "https://incosmicdust.substack.com/" },
        { t: ", and shipping " },
        { t: "Genesis", href: "https://genesislabs.vc" },
        { t: ". Trying to close more tabs than I open." }
      ],
      [
        { t: "Grow, glow, flow. First principles, always." }
      ]
    ],
    signature: "— Jacqline",
    facts: [
      { k: "based in", v: "Toronto / New York" },
      { k: "now", v: "Financial Engineering, Deloitte" },
      { k: "founder", v: "Genesis Labs, est. 2025" },
      { k: "writing at", v: "incosmicdust" }
    ],
    photos: ["/assets/pb-1.png", "/assets/pb-2.png", "/assets/pb-3.png"]
  };

  window.EXPERIENCE = [
    { period: "2025 — now",  role: "Founder", org: "Genesis Labs", note: "AI workflow systems for financial institutions and fintech. Intelligent infrastructure across fintech, risk, and compliance.", highlight: true },
    { period: "2023 — now",  role: "Senior Consultant, Financial Engineering & Modelling", org: "Deloitte", note: "Risk and compliance strategy for Fortune 500 tech and finance clients. AI literacy workshops and national reports." },
    { period: "2019 — 2022", role: "Consultant", org: "Deloitte", note: "Risk compliance assessments across tech and finance portfolios." },
    { period: "2025",        role: "AI Business Fellow", org: "Perplexity", note: "Pilot work on Enterprise Pro and Comet." },
    { period: "2022 — 2023", role: "Developer Relations", org: "thirdweb", note: "12k+ monthly developers. Technical content, docs, onboarding workshops." }
  ];

  window.PROJECTS = [
    {
      id: "genesis", title: "Genesis Labs", year: "2025", tag: "Founder",
      desc: "An AI workflow systems studio for financial institutions and fintech companies. We design and implement intelligent infrastructure across fintech, risk, and compliance.",
      tech: ["LLMs", "Agents", "Risk", "Compliance"], link: "https://genesislabs.vc", featured: true
    },
    {
      id: "neurowealth", title: "NeuroWealth", year: "2025", tag: "Fintech x Neuroscience",
      desc: "A fintech dashboard that tracks spending and investment behavior through neural activity. Reads EEG and fNIRS signals to surface the mental states behind financial decisions.",
      tech: ["React", "Python", "TensorFlow", "fNIRS/EEG"], link: "https://github.com/jacqlinegeng/NeuroWealth"
    },
    {
      id: "vestibull", title: "Vestibull", year: "2024", tag: "Gamified learning",
      desc: "A gamified financial literacy platform with a live portfolio tracker. Challenges and rewards teach market mechanics while real time data keeps the stakes honest.",
      tech: ["React", "Node.js", "WebSocket", "FinAPI"], link: "https://vestibull.vercel.app/"
    },
    {
      id: "3dviz", title: "3DViz", year: "2024", tag: "ML / Visualization",
      desc: "Renders machine learning models as interactive 3D scenes: architectures, weights, and real time inference flows you can walk through rather than squint at.",
      tech: ["Three.js", "React", "PyTorch", "WebGL"], link: "https://3dviz-animation.vercel.app/"
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
        "I think founders underrate the cost of half attention. Every open tab is a small hemorrhage. I am trying, this quarter, to close more tabs than I open."
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
        "Three things I have noticed: people do not want fewer tools, they want tools that make fewer decisions feel urgent. Agents are cheap; coordination is not. And the most interesting product surface is almost never the chat box."
      ]
    },
    {
      id: "4", title: "why I read half of books", date: "Jan 18, 2026", kind: "essay",
      preview: "A defense of abandoning books. Most of what you need is in the first third anyway.",
      body: [
        "I used to finish every book. I thought it was respect. I have since decided it was mostly sunk cost fallacy with better lighting.",
        "Non fiction books are, as a rule, a 40 page idea wearing a 280 page suit. The first third is usually the thesis. The middle third is examples. The last third is the author hoping you will recommend it.",
        { quote: "Read more. Finish less. Return often." },
        "The new rule: if I am not excited to open it by page 100, I shelf it and move on. Sometimes I come back six months later and it clicks. Both are fine."
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
        "The alternative is not an absence of hard. It is choosing a hard that is at least yours. A hard whose shape you recognize, whose name you can pronounce.",
        { quote: "Choose your hard. Everything else is a footnote." },
        "I chose building. I chose the kind of hard where progress is invisible for months and then suddenly you have a thing that did not exist before."
      ]
    }
  ];

  /* s: reading | done | want.  c may be "" — a typographic cover is generated. */
  window.BOOKS = [
    /* —— currently reading —— */
    { t: "The War of Art", a: "Steven Pressfield", p: 24, s: "reading", c: "", n: "Winning the inner creative battle, one morning at a time." },
    { t: "AI Engineering", a: "Chip Huyen", p: 20, s: "reading", c: "/assets/books/ai-engineering.jpg", n: "Practical guide to building applications with foundation models." },
    { t: "The Mom Test", a: "Rob Fitzpatrick", p: 17, s: "reading", c: "", n: "How to talk to customers and learn if your business is a good idea." },
    { t: "Games People Play", a: "Eric Berne", p: 16, s: "reading", c: "", n: "The psychology of human relationships, as transactions and games." },
    { t: "You Look Like a Thing and I Love You", a: "Janelle Shane", p: 14, s: "reading", c: "", n: "How AI works and why it is making the world a weirder place." },
    { t: "The Algebra of Wealth", a: "Scott Galloway", p: 12, s: "reading", c: "/assets/books/algebra-of-wealth.jpg", n: "A simple formula for financial security." },
    { t: "Grokking Algorithms", a: "Aditya Y. Bhargava", p: 11, s: "reading", c: "", n: "An illustrated guide for programmers and other curious people." },
    { t: "Mother Hunger", a: "Kelly McDaniel", p: 11, s: "reading", c: "", n: "On understanding and healing from lost nurturance." },
    { t: "Pattern Breakers", a: "Mike Maples Jr.", p: 10, s: "reading", c: "", n: "Why some startups change the future." },
    { t: "The Founder's Dilemmas", a: "Noam Wasserman", p: 9, s: "reading", c: "", n: "Anticipating the pitfalls that can sink a startup." },
    { t: "Build", a: "Tony Fadell", p: 8, s: "reading", c: "", n: "An unorthodox guide to making things worth making." },
    { t: "Becoming Bulletproof", a: "Evy Poumpouras", p: 7, s: "reading", c: "", n: "Protect yourself, read people, influence situations." },
    { t: "The Lean Startup", a: "Eric Ries", p: 7, s: "reading", c: "", n: "Continuous innovation for radically successful businesses." },
    { t: "System Design Interview, Vol 2", a: "Alex Xu & Sahn Lam", p: 7, s: "reading", c: "", n: "An insider's guide to large scale system design." },
    { t: "Passages", a: "Gail Sheehy", p: 7, s: "reading", c: "", n: "Predictable crises of adult life." },
    { t: "The War on Normal People", a: "Andrew Yang", p: 5, s: "reading", c: "", n: "On disappearing jobs and universal basic income." },
    { t: "The Venture Mindset", a: "Ilya Strebulaev", p: 5, s: "reading", c: "", n: "How to make smarter bets and achieve extraordinary growth." },
    { t: "One Man's View of the World", a: "Lee Kuan Yew", p: 5, s: "reading", c: "", n: "Statecraft and clear eyed geopolitics." },
    { t: "The Son of Man", a: "Jean-Baptiste Del Amo", p: 4, s: "reading", c: "", n: "A dark, beautiful novel of fathers and sons." },
    { t: "System Design Interview Fundamentals", a: "Rylan Liu", p: 4, s: "reading", c: "", n: "Second edition. The groundwork." },
    { t: "Can't We Just Print More Money?", a: "Rupal Patel & Jack Meaning", p: 3, s: "reading", c: "", n: "Economics in ten simple questions, from the Bank of England." },
    { t: "Pre-Suasion", a: "Robert Cialdini", p: 3, s: "reading", c: "", n: "A revolutionary way to influence and persuade." },
    { t: "Beyond Anxiety", a: "Martha Beck", p: 3, s: "reading", c: "", n: "Curiosity, creativity, and finding your life's purpose." },
    { t: "Dark Matter", a: "Blake Crouch", p: 2, s: "reading", c: "", n: "A mind bending novel about the roads not taken." },
    { t: "Should I Stay or Should I Go?", a: "Ramani Durvasula", p: 2, s: "reading", c: "", n: "Surviving a relationship with a narcissist." },
    { t: "Private Equity", a: "Carrie Sun", p: 2, s: "reading", c: "", n: "A memoir from inside the machine." },
    { t: "Designing Data-Intensive Applications", a: "Martin Kleppmann", p: 2, s: "reading", c: "", n: "The big ideas behind reliable, scalable systems." },
    { t: "AI Models for Blockchain-Based Intelligent Networks", a: "Bharat Bhushan", p: 2, s: "reading", c: "", n: "Cyber physical systems and critical infrastructures." },
    { t: "Everything Is F*cked", a: "Mark Manson", p: 2, s: "reading", c: "", n: "A book about hope." },
    { t: "Trust", a: "Hernan Diaz", p: 1, s: "reading", c: "", n: "A Pulitzer winning novel about money and myth." },
    { t: "Influence", a: "Robert B. Cialdini", p: 1, s: "reading", c: "", n: "The psychology of persuasion, revised edition." },
    { t: "Are You Smart Enough to Work at Google?", a: "William Poundstone", p: 1, s: "reading", c: "", n: "Trick questions and zen like riddles." },
    { t: "The Nvidia Way", a: "Tae Kim", p: 1, s: "reading", c: "/assets/books/nvidia-way.jpg", n: "Jensen Huang and the making of a tech giant." },
    { t: "Spy the Lie", a: "Philip Houston", p: 1, s: "reading", c: "", n: "Former CIA officers teach you how to detect deception." },
    { t: "Empire of AI", a: "Karen Hao", p: 1, s: "reading", c: "", n: "Dreams and nightmares in Sam Altman's OpenAI." },
    { t: "How the Steel Was Tempered", a: "Nikolai Ostrovsky", p: 1, s: "reading", c: "", n: "An anthology of will against circumstance." },
    { t: "The Thorn Birds", a: "Colleen McCullough", p: 1, s: "reading", c: "", n: "An epic of forbidden love and ambition." },
    { t: "The Dawn of Everything", a: "David Graeber & David Wengrow", p: 1, s: "reading", c: "", n: "A new history of humanity." },
    { t: "The 48 Laws of Power", a: "Robert Greene", p: 65, s: "reading", c: "/assets/books/48-laws-of-power.jpg", n: "A careful dissection of power dynamics." },
    { t: "Thinking, Fast and Slow", a: "Daniel Kahneman", p: 40, s: "reading", c: "/assets/books/thinking-fast-and-slow.jpg", n: "Mind bending exploration of cognitive biases." },
    { t: "Surely You're Joking, Mr. Feynman!", a: "Richard Feynman", p: 34, s: "reading", c: "/assets/books/feynman.jpg", n: "Curiosity as a way of life." },

    /* —— finished —— */
    { t: "Hands-On Large Language Models", a: "Jay Alammar & M. Grootendorst", p: 100, s: "done", c: "", n: "Language understanding and generation, hands on.", done: "May 2026" },
    { t: "It's Not You", a: "Ramani Durvasula", p: 100, s: "done", c: "", n: "Identifying and healing from narcissistic people.", done: "Apr 2026" },
    { t: "Atomic Habits", a: "James Clear", p: 100, s: "done", c: "/assets/books/atomic-habits.jpg", n: "Game changer for building sustainable habits.", done: "Dec 2024" },
    { t: "The Psychology of Money", a: "Morgan Housel", p: 100, s: "done", c: "/assets/books/psychology-of-money.jpg", n: "Brilliant perspectives on wealth, greed, and happiness.", done: "Nov 2024" },
    { t: "The Almanack of Naval Ravikant", a: "Eric Jorgenson", p: 100, s: "done", c: "/assets/books/almanack-of-naval.jpg", n: "Life changing wisdom on wealth and happiness.", done: "Oct 2022" },
    { t: "The Defining Decade", a: "Meg Jay", p: 100, s: "done", c: "/assets/books/defining-decade.jpg", n: "Essential read for anyone in their twenties.", done: "Mar 2023" },
    { t: "A Woman Makes a Plan", a: "Maye Musk", p: 100, s: "done", c: "/assets/books/woman-makes-a-plan.jpg", n: "Resilience and reinvention.", done: "May 2025" },

    /* —— want to read —— */
    { t: "Ogilvy on Advertising", a: "David Ogilvy", p: 0, s: "want", c: "", n: "The original playbook on selling with words." },
    { t: "Play Nice But Win", a: "Michael Dell", p: 0, s: "want", c: "", n: "A CEO's journey from founder to leader." },
    { t: "The Authority Gap", a: "Mary Ann Sieghart", p: 0, s: "want", c: "", n: "Why women are still taken less seriously than men." },
    { t: "The Second Sex", a: "Simone de Beauvoir", p: 0, s: "want", c: "", n: "The classic of feminist philosophy." },
    { t: "Poor Charlie's Almanack", a: "Charles T. Munger", p: 0, s: "want", c: "", n: "The wit and wisdom of Charlie Munger." },
    { t: "Superbloom", a: "Nicholas Carr", p: 0, s: "want", c: "", n: "How technologies of connection tear us apart." },
    { t: "Designing Machine Learning Systems", a: "Chip Huyen", p: 0, s: "want", c: "", n: "An iterative process for production ready applications." },
    { t: "Zero to One", a: "Peter Thiel", p: 0, s: "want", c: "/assets/books/zero-to-one.jpg", n: "On the list for contrarian thinking." },
    { t: "Deep Work", a: "Cal Newport", p: 0, s: "want", c: "/assets/books/deep-work.jpg", n: "Focus in an age of distraction." }
  ];

  window.LINKS = {
    email: "jacqlinegeng@gmail.com",
    email2: "jigeng28@gsb.columbia.edu",
    github: "https://github.com/jacqlinegeng",
    linkedin: "https://www.linkedin.com/in/jacqlinegeng/",
    x: "https://x.com/inthecosmicdust",
    substack: "https://incosmicdust.substack.com/",
    spotify: "https://open.spotify.com/user/22uvhgmtzptpdu5q734fqbzqi",
    genesis: "https://genesislabs.vc"
  };
}
