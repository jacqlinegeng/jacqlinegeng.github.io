import { useState } from "react";
import TopMenuBar from "../components/TopMenuBar";
import Dock from "../components/Dock";
import { notes } from "../data/notes";

const Writing = () => {
  const [selectedNote, setSelectedNote] = useState(0);

  const parseContent = (content: string) => {

    const imageUrls = [
      'https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/ef78bd4f94ce138e580b21b16eae4366/dc43d363-c94a-4ccd-adec-ef66218fc4c8/09b74ebf.png',
      'https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/ef78bd4f94ce138e580b21b16eae4366/fc879318-01f5-4059-b10a-8d524d9cbd45/c269aa51.png'
    ];
    const parts = content.split(/(\[.*?\]\(.*?\)|\!\[.*?\]\(.*?\))/g);

    return parts.map((part, index) => {
      // Check if this part is a markdown image
      const imageMatch = part.match(/\!\[(.*?)\]\((.*?)\)/);
      if (imageMatch) {
        const [, altText, url] = imageMatch;
        return (
          <img
            key={index}
            src={url}
            alt={altText}
            className="max-w-full h-auto my-4 rounded-lg shadow-md"
          />
        );
      }

      // Check if this part is a markdown link
      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        const [, linkText, url] = linkMatch;

        // Check if this URL should be displayed as an image
        if (imageUrls.includes(url)) {
          return (
            <img
              key={index}
              src={url}
              alt={linkText}
              className="max-w-full h-auto my-4 rounded-lg shadow-md"
            />
          );
        }

        // Otherwise, render as a regular link
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {linkText}
          </a>
        );
      }

      // For non-link/non-image parts, preserve formatting
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopMenuBar />

      <div className="pt-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border-border rounded-xl shadow-lg border overflow-hidden">
            {/* Notes App Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <h1 className="text-lg font-semibold text-card-foreground">Writing</h1>
              <div className="w-16"></div>
            </div>

            <div className="flex h-[70vh]">
              {/* Sidebar with notes list */}
              {/* Sidebar with notes list */}
              <div className="w-1/3 border-r border-border bg-secondary flex flex-col">
                <div className="p-4 border-b border-border">
                  <h2 className="font-semibold text-secondary-foreground">ALl Notes</h2>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {notes.map((note, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedNote(index)}
                      className={`p-4 border-b border-border cursor-pointer transition-colors ${selectedNote === index ? 'bg-primary/20 border-l-4 border-l-primary' : ''
                        }`}
                    >
                      <h3 className="font-medium text-secondary-foreground mb-1">{note.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{note.date}</p>
                      <p className="text-sm text-muted-foreground opacity-75">{note.preview}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-right">
                    read more at{' '}
                    <a
                      href="https://incosmicdust.substack.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      [jacqline's substack]
                    </a>
                  </p>
                </div>
              </div>

              {/* Main content area */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-8">
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-wrap font-sans text-card-foreground leading-relaxed">
                      {parseContent(notes[selectedNote].content)}
                    </div>
                    <div className="mt-8 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        copyright © Jacqline G
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dock />
    </div>
  );
};

export default Writing;