import { useState, useEffect } from "react";
import TopMenuBar from "../components/TopMenuBar";
import Dock from "../components/Dock";
import { BookOpen, Sparkles, Clock } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

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

const Reading = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const { data, error } = await supabase
      .from("reading_list")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching books:", error);
    } else {
      setBooks(data || []);
    }
    setLoading(false);
  };

  const currentlyReading = books.filter((book) => book.status === "currently_reading");
  const wantToRead = books.filter((book) => book.status === "want_to_read");
  const completed = books.filter((book) => book.status === "completed");

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated background with book-themed elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 dark:bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>

      <TopMenuBar />

      <div className="pt-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mac OS Window */}
          <div className="bg-card border-border rounded-xl shadow-2xl border">
            {/* Mac OS Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background rounded-md px-3 py-1 text-sm text-foreground border border-border text-center">
                  reading://list
                </div>
              </div>
              <div className="w-16"></div>
            </div>

            {/* Header */}
            <div className="text-center py-3 border-b border-border">
              <div className="flex items-center justify-center gap-2 mb-1">
                <BookOpen className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                <h1 className="text-lg font-bold text-foreground">Reading Journey</h1>
                <Sparkles className="w-5 h-5 text-pink-500 dark:text-pink-400" />
              </div>
              <p className="text-xs text-muted-foreground">Books that shape my thinking</p>
            </div>

            {/* Content */}
            <div className="p-4">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
            </div>
          ) : books.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">No books yet. Start your reading journey!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {/* Currently Reading Section */}
              <div>
                <div className="bg-secondary/50 border border-border rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <h2 className="text-sm font-semibold text-card-foreground">Currently Reading</h2>
                  </div>

                  {currentlyReading.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No books currently being read</p>
                  ) : (
                    <div className="space-y-2">
                      {currentlyReading.map((book) => (
                        <div
                          key={book.id}
                          onClick={() => setSelectedBook(book)}
                          className="group cursor-pointer"
                        >
                          <div className="bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-cyan-500/50 rounded-lg p-2 transition-colors">
                            <div className="flex gap-2">
                              {/* Book Cover */}
                              <div className="relative flex-shrink-0">
                                <div className="w-14 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded flex items-center justify-center overflow-hidden">
                                  {book.cover_url ? (
                                    <img
                                      src={book.cover_url}
                                      alt={book.title}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <BookOpen className="w-6 h-6 text-cyan-500" />
                                  )}
                                </div>
                              </div>

                              {/* Book Info */}
                              <div className="flex-1 min-w-0">
                                <h3 className="text-xs font-semibold text-card-foreground mb-0.5 line-clamp-2">
                                  {book.title}
                                </h3>
                                <p className="text-[10px] text-muted-foreground mb-1.5 truncate">
                                  by {book.author}
                                </p>

                                {/* Progress Bar */}
                                <div className="space-y-1">
                                  <div className="flex items-center justify-between text-[10px]">
                                    <span className="text-muted-foreground">Progress</span>
                                    <span className="font-semibold text-cyan-500">
                                      {book.progress}%
                                    </span>
                                  </div>
                                  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                      style={{ width: `${book.progress}%` }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Want to Read Section */}
              <div>
                <div className="bg-secondary/50 border border-border rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                    <h2 className="text-sm font-semibold text-card-foreground">Want to Read</h2>
                  </div>

                  {wantToRead.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No books in the queue</p>
                  ) : (
                    <div className="space-y-2">
                      {wantToRead.map((book) => (
                        <div
                          key={book.id}
                          onClick={() => setSelectedBook(book)}
                          className="group cursor-pointer"
                        >
                          <div className="bg-secondary/30 hover:bg-secondary/50 rounded-lg p-2 transition-colors border border-transparent hover:border-pink-500/50">
                            <div className="flex gap-2">
                              <div className="w-14 h-20 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                                {book.cover_url ? (
                                  <img
                                    src={book.cover_url}
                                    alt={book.title}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <BookOpen className="w-6 h-6 text-pink-500" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-xs font-semibold text-card-foreground line-clamp-2">
                                  {book.title}
                                </h4>
                                <p className="text-[10px] text-muted-foreground truncate">
                                  {book.author}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Completed Books Section */}
              <div>
                <div className="bg-secondary/50 border border-border rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <h2 className="text-sm font-semibold text-card-foreground">Completed</h2>
                    {completed.length > 0 && (
                      <span className="ml-auto text-[10px] text-muted-foreground">{completed.length}</span>
                    )}
                  </div>

                  {completed.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No completed books</p>
                  ) : (
                    <div className="space-y-2">
                      {completed.map((book) => (
                        <div
                          key={book.id}
                          onClick={() => setSelectedBook(book)}
                          className="group cursor-pointer"
                        >
                          <div className="bg-secondary/30 hover:bg-secondary/50 rounded-lg p-2 transition-colors border border-transparent hover:border-green-500/50">
                            <div className="flex gap-2">
                              <div className="w-14 h-20 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                                {book.cover_url ? (
                                  <img
                                    src={book.cover_url}
                                    alt={book.title}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <BookOpen className="w-6 h-6 text-green-500" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-xs font-semibold text-card-foreground line-clamp-2">
                                  {book.title}
                                </h4>
                                <p className="text-[10px] text-muted-foreground truncate">
                                  {book.author}
                                </p>
                                {book.completed_date && (
                                  <p className="text-[10px] text-muted-foreground mt-1">
                                    {new Date(book.completed_date).toLocaleDateString()}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
