
import { useState } from "react";
import TopMenuBar from "../components/TopMenuBar";
import Dock from "../components/Dock";

const Writing = () => {
  const [selectedNote, setSelectedNote] = useState(0);

  const notes = [
    {
      title: "My Journey into Web Development",
      date: "June 15, 2024",
      preview: "How I started coding and what I've learned along the way...",
      content: `# My Journey into Web Development

It all started with a simple "Hello, World!" program. I never imagined that those two words would spark a passion that would change my entire career trajectory.

## The Beginning

Like many developers, my first encounter with code was through curiosity. I wanted to understand how websites worked, how apps were built, and what made the digital world tick.

## Learning the Fundamentals

HTML, CSS, JavaScript - these became my new vocabulary. Each concept I mastered opened doors to new possibilities. I remember the excitement of creating my first interactive webpage.

## Growing and Evolving

The journey hasn't always been smooth. There were moments of frustration, debugging sessions that lasted hours, and concepts that seemed impossible to grasp. But each challenge made me stronger.

Today, I'm grateful for every step of this journey. Every line of code, every project, every mistake has contributed to who I am as a developer.`
    },
    {
      title: "The Art of Clean Code",
      date: "June 10, 2024",
      preview: "Thoughts on writing maintainable and readable code...",
      content: `# The Art of Clean Code

Clean code is not just about making things work - it's about making them work beautifully.

## What Makes Code Clean?

Clean code is:
- Easy to read and understand
- Simple and focused
- Well-tested
- Maintainable

## My Principles

1. **Meaningful names** - Variables and functions should tell a story
2. **Small functions** - Each function should do one thing well
3. **Comments when necessary** - Code should be self-documenting
4. **Consistent formatting** - Style matters

Writing clean code is an ongoing journey. Every refactor, every code review, every project teaches us something new about the craft.`
    },
    {
      title: "Building Inclusive Web Experiences",
      date: "June 5, 2024",
      preview: "Why accessibility should be at the core of every project...",
      content: `# Building Inclusive Web Experiences

The web should be accessible to everyone, regardless of their abilities or circumstances.

## Why Accessibility Matters

Accessibility isn't just about compliance - it's about empathy. When we build accessible websites, we create experiences that work for everyone.

## Key Principles

- **Perceivable** - Information must be presentable in ways users can perceive
- **Operable** - Interface components must be operable by all users
- **Understandable** - Information and UI operation must be understandable
- **Robust** - Content must be robust enough for various assistive technologies

## Practical Steps

1. Use semantic HTML
2. Provide alternative text for images
3. Ensure keyboard navigation
4. Maintain sufficient color contrast
5. Test with screen readers

Building inclusive experiences makes the web better for everyone.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <TopMenuBar />
      
      <div className="pt-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Notes App Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-yellow-50 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <h1 className="text-lg font-semibold text-gray-900">Notes</h1>
              <div className="w-16"></div>
            </div>

            <div className="flex h-[70vh]">
              {/* Sidebar with notes list */}
              <div className="w-1/3 border-r border-gray-200 bg-gray-50">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-900">All Notes</h2>
                </div>
                <div className="overflow-y-auto">
                  {notes.map((note, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedNote(index)}
                      className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors ${
                        selectedNote === index ? 'bg-yellow-100 border-l-4 border-l-yellow-500' : ''
                      }`}
                    >
                      <h3 className="font-medium text-gray-900 mb-1">{note.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{note.date}</p>
                      <p className="text-sm text-gray-500">{note.preview}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content area */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-8">
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-gray-900 leading-relaxed">
                      {notes[selectedNote].content}
                    </pre>
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
