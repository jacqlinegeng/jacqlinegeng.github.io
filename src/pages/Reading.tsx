import { useState } from "react";
import TopMenuBar from "../components/TopMenuBar";
import Dock from "../components/Dock";
import { BookOpen, Sparkles } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  progress: number;
  status: string;
  notes: string;
  cover_url: string;
  started_date: string | null;
  completed_date: string | null;
}

const HARDCODED_BOOKS: Book[] = [
  {
    id: "1",
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    progress: 65,
    status: "currently_reading",
    notes: "A fascinating dive into power dynamics. The historical examples bring each law to life.",
    cover_url: "https://m.media-amazon.com/images/I/31RW8HQ31WL._SY445_SX342_.jpg",
    started_date: "2025-01-01",
    completed_date: null
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    progress: 100,
    status: "completed",
    notes: "Game-changer for building sustainable habits. The 1% improvement philosophy is powerful.",
    cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
    started_date: "2024-11-15",
    completed_date: "2024-12-20"
  },
  {
    id: "3",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    progress: 40,
    status: "currently_reading",
    notes: "Mind-bending exploration of cognitive biases and decision-making processes.",
    cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg",
    started_date: "2024-12-28",
    completed_date: null
  },
  {
    id: "4",
    title: "Zero to One",
    author: "Peter Thiel",
    progress: 0,
    status: "want_to_read",
    notes: "On my list for startup insights and contrarian thinking.",
    cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1414347376i/18050143.jpg",
    started_date: null,
    completed_date: null
  },
  {
    id: "5",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    progress: 100,
    status: "completed",
    notes: "Brilliant perspectives on wealth, greed, and happiness. Everyone should read this.",
    cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1581527774i/41881472.jpg",
    started_date: "2024-10-05",
    completed_date: "2024-11-10"
  },
  {
    id: "6",
    title: "Deep Work",
    author: "Cal Newport",
    progress: 0,
    status: "want_to_read",
    notes: "Need to master focused work in an age of distraction.",
    cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447957962i/25744928.jpg",
    started_date: null,
    completed_date: null
  },
  {
    id: "7",
    title: "The Nvidia Way",
    author: "Tae Kim",
    progress: 25,
    status: "currently_reading",
    notes: "Fascinating insights into Jensen Huang's leadership and Nvidia's rise to dominance in AI chips.",
    cover_url: "https://m.media-amazon.com/images/I/515FVMiDWfL._SY445_SX342_.jpg",
    started_date: "2025-01-05",
    completed_date: null
  },
  {
    id: "8",
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    progress: 100,
    status: "completed",
    notes: "Life-changing wisdom on wealth and happiness. Naval's insights are timeless and practical.",
    cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598011736i/54898389.jpg",
    started_date: "2022-07-10",
    completed_date: "2022-10-05"
  },
  {
    id: "9",
    title: "Quantum Mechanics: The Theoretical Minimum",
    author: "Leonard Susskind & Art Friedman",
    progress: 4,
    status: "currently_reading",
    notes: "A clear and concise introduction to quantum mechanics. A must-read for anyone interested in the subject.",
    cover_url: "https://m.media-amazon.com/images/I/81Zk5MC9xfL._SY522_.jpg",
    started_date: "2024-09-10",
    completed_date: null
  },
  {
    id: "10",
    title: "Superintelligence: Paths, Dangers, Strategies",
    author: "Nick Bostrom",
    progress: 3,
    status: "currently_reading",
    notes: "A thought-provoking exploration of the future of AI and its potential risks. Essential reading for understanding AI safety.",
    cover_url: "https://m.media-amazon.com/images/I/814sKOe+BcL._SY522_.jpg",
    started_date: "2024-09-10",
    completed_date: null
  },
  {
    id: "11",
    title: "Steering by Starlight: The Science and Magic of Finding Your Way",
    author: "Martha Beck",
    progress: 100,
    status: "completed",
    notes: "An inspiring guide to navigating life's challenges using both science and intuition. A beautiful read on finding direction in life.",
    cover_url: "https://images3.penguinrandomhouse.com/cover/9781605298641",
    started_date: "2023-08-15",
    completed_date: "2023-09-20"
  },
  {
    id: "12",
    title: "Surely You're Joking, Mr. Feynman!",
    author: "Richard Feynman",
    progress: 3,
    status: "currently_reading",
    notes: "An entertaining collection of anecdotes from the life of the brilliant physicist Richard Feynman. His curiosity and humor are infectious.",
    cover_url: "https://m.media-amazon.com/images/I/71x3shLRNFL._SY522_.jpg",
    started_date: "2023-08-15",
    completed_date: null
  },
  {
    id: "13",
    title: "A Woman Makes a Plan: Advice for a Lifetime of Adventure, Beauty, and Success",
    author: "Maye Musk",
    progress: 100,
    status: "completed",
    notes: "An empowering memoir filled with life lessons from Maye Musk. Her journey is a testament to resilience and reinvention.",
    cover_url: "https://m.media-amazon.com/images/I/71O5zxF0iNL._AC_UF1000,1000_QL80_.jpg",
    started_date: "2024-08-15",
    completed_date: "2025-05-10"
  },
  {
    id: "14",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    progress: 100,
    status: "completed",
    notes: "A refreshing take on self-help that emphasizes embracing life's challenges. Mark Manson's blunt honesty is both humorous and insightful.",
    cover_url: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
    started_date: "2023-08-15",
    completed_date: "2023-09-05"
  }, 
  {
    id: "15",
    title: "The Defining Decade: Why Your Twenties Matter--And How to Make the Most of Them Now",
    author: "Meg Jay",
    progress: 100,
    status: "completed",
    notes: "An essential read for anyone in their twenties. Meg Jay provides practical advice on making the most of this pivotal decade.",
    cover_url: "https://m.media-amazon.com/images/I/812pT1QRzUL._AC_UF1000,1000_QL80_.jpg",
    started_date: "2023-02-15",
    completed_date: "2023-03-05"
  },
    {
    id: "16",
    title: "The Algebra of Wealth:A Simple Formula for Financial Security",
    author: "Scott Galloway",
    progress: 12,
    status: "currently_reading",
    notes: "A concise guide to achieving financial security through smart decision-making. Scott Galloway breaks down complex concepts into actionable steps.",
    cover_url: "https://m.media-amazon.com/images/I/71twg9q6bEL._AC_UF1000,1000_QL80_.jpg",
    started_date: "2023-02-15",
    completed_date: null
  },
      {
    id: "17",
    title: "AI Engineering",
    author: "Chip Huyen",
    progress: 20,
    status: "currently_reading",
    notes: "A practical guide to building and deploying AI systems. Chip Huyen provides valuable insights into the engineering challenges of AI.",
    cover_url: "https://m.media-amazon.com/images/I/815KH9GjFTL._AC_UF1000,1000_QL80_.jpg",
    started_date: "2023-02-15",
    completed_date: null
  },
        {
    id: "18",
    title: "The Untethered Soul: The Journey Beyond Yourself",
    author: "Michael A. Singer",
    progress: 6,
    status: "currently_reading",
    notes: "An enlightening exploration of consciousness and self-awareness. Michael A. Singer offers profound insights into achieving inner peace.",
    cover_url: "https://m.media-amazon.com/images/I/61dSHZxYdtL._AC_UF1000,1000_QL80_.jpg",
    started_date: "2023-02-15",
    completed_date: null
  },
          {
    id: "19",
    title: "Principles",
    author: "Ray Dalio",
    progress: 12,
    status: "currently_reading",
    notes: "A comprehensive guide to life and work principles from the legendary investor Ray Dalio. A must-read for anyone looking to improve decision-making and achieve success.",
    cover_url: "https://m.media-amazon.com/images/I/61LKD6scbfL.jpg",
    started_date: "2023-02-15",
    completed_date: null
  },
            {
    id: "20",
    title: "The Worlds I See",
    author: "Dr. Fei-Fei Li",
    progress: 9,
    status: "currently_reading",
    notes: "An inspiring memoir by AI pioneer Dr. Fei-Fei Li. Her journey from humble beginnings to leading advancements in artificial intelligence is truly motivational.",
    cover_url: "https://m.media-amazon.com/images/I/81blPlUVdyL.jpg",
    started_date: "2023-02-15",
    completed_date: null
  },
];

const Reading = () => {
  const [books] = useState<Book[]>(HARDCODED_BOOKS);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const currentlyReading = books.filter((book) => book.status === "currently_reading");
  const wantToRead = books.filter((book) => book.status === "want_to_read");
  const completed = books.filter((book) => book.status === "completed");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopMenuBar />

      <div className="pt-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Mac OS Window */}
          <div className="bg-card border-border rounded-xl shadow-lg border">
            {/* Mac OS Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background rounded-md px-3 py-1 text-sm text-foreground border border-border text-center">
                  reading://currently
                </div>
              </div>
              <div className="w-16"></div>
            </div>

            {/* Content */}
            <div className="p-8 max-h-[75vh] overflow-y-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-foreground" />
                  <h1 className="text-2xl font-semibold text-foreground">Reading</h1>
                </div>
                <p className="text-sm text-muted-foreground">
                  {books.length} books • {currentlyReading.length} in progress • {completed.length} completed
                </p>
              </div>

              {/* Book Shelf - Horizontal Scroll */}
              <div className="mb-10">
                <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-medium">Book Shelf</h2>
                <div className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-secondary/50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted-foreground/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-muted-foreground/50">
                  {books.map((book) => (
                    <div
                      key={book.id}
                      onClick={() => setSelectedBook(book)}
                      className="flex-shrink-0 cursor-pointer group"
                    >
                      <div className="relative w-28 h-40 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <img
                          src={book.cover_url}
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                        {book.status === "currently_reading" && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500" style={{ width: `${book.progress}%` }}></div>
                        )}
                        {book.status === "completed" && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-center max-w-[112px] truncate">
                        {book.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Currently Reading */}
              {currentlyReading.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-medium border-b border-border pb-2">
                    Currently Reading
                  </h2>
                  <div className="space-y-3">
                    {currentlyReading.map((book) => (
                      <div
                        key={book.id}
                        onClick={() => setSelectedBook(book)}
                        className="group cursor-pointer hover:bg-secondary/50 rounded-lg p-3 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-sm font-medium text-foreground group-hover:text-cyan-500 transition-colors">
                              {book.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-0.5">{book.author}</p>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="font-mono">{book.progress}%</span>
                            <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                              <div className="h-full bg-cyan-500" style={{ width: `${book.progress}%` }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Want to Read */}
              {wantToRead.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-medium border-b border-border pb-2">
                    Want to Read
                  </h2>
                  <div className="space-y-2">
                    {wantToRead.map((book) => (
                      <div
                        key={book.id}
                        onClick={() => setSelectedBook(book)}
                        className="group cursor-pointer hover:bg-secondary/50 rounded-lg p-3 transition-colors"
                      >
                        <h3 className="text-sm font-medium text-foreground group-hover:text-pink-500 transition-colors">
                          {book.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-0.5">{book.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Completed */}
              {completed.length > 0 && (
                <div>
                  <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-medium border-b border-border pb-2">
                    Completed ({completed.length})
                  </h2>
                  <div className="space-y-2">
                    {completed.map((book) => (
                      <div
                        key={book.id}
                        onClick={() => setSelectedBook(book)}
                        className="group cursor-pointer hover:bg-secondary/50 rounded-lg p-3 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-sm font-medium text-foreground group-hover:text-green-500 transition-colors">
                              {book.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-0.5">{book.author}</p>
                          </div>
                          {book.completed_date && (
                            <span className="text-xs text-muted-foreground font-mono">
                              {new Date(book.completed_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Book Details Modal */}
          {selectedBook && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedBook(null)}>
              <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex gap-6">
                  <div className="w-32 h-44 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {selectedBook.cover_url ? (
                      <img
                        src={selectedBook.cover_url}
                        alt={selectedBook.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <BookOpen className="w-16 h-16 text-cyan-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-card-foreground mb-2">
                      {selectedBook.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      by {selectedBook.author}
                    </p>
                    {selectedBook.status === "currently_reading" && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold text-cyan-500">
                            {selectedBook.progress}%
                          </span>
                        </div>
                        <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                            style={{ width: `${selectedBook.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    {selectedBook.notes && (
                      <div className="mt-6">
                        <h3 className="text-sm font-semibold text-card-foreground mb-2">Notes</h3>
                        <p className="text-sm text-muted-foreground italic">
                          "{selectedBook.notes}"
                        </p>
                      </div>
                    )}
                    <button
                      onClick={() => setSelectedBook(null)}
                      className="mt-6 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Dock />
    </div>
  );
};

export default Reading;
