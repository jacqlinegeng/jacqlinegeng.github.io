
import { useNavigate } from "react-router-dom";
import TopMenuBar from "../components/TopMenuBar";
import Dock from "../components/Dock";
import DesktopFolder from "../components/DesktopFolder";
import TypingAnimation from "../components/TypingAnimation";
import VisionBoard from "../components/VisionBoard";

const Index = () => {
  const navigate = useNavigate();

  const folders = [
    { name: "About", icon: "👤", route: "/about" },
    { name: "Projects", icon: "💼", route: "/projects" },
    { name: "Writing", icon: "📝", route: "/writing" },
    { name: "Reading", icon: "📚", route: "/reading" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Animated Vision Board Background */}
      <VisionBoard />

      {/* Creative Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Flowing waves with neon glow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cyan-400/15 dark:bg-cyan-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-pink-400/15 dark:bg-pink-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] bg-blue-400/15 dark:bg-blue-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-cyan-400/40 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-pink-400/40 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-blue-400/40 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-400/40 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>

        {/* Diagonal light streaks */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent transform -skew-x-12 animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/30 to-transparent transform skew-x-12 animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-pink-400/5 dark:from-cyan-400/10 dark:to-pink-400/10"></div>
      </div>

      {/* macOS Wallpaper Effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <TopMenuBar />

      {/* Main content with name in center */}
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        {/* Portfolio title with decorative elements */}
        <div className="text-center mb-12">
          <div className="relative">
            {/* <div className="absolute -top-8 -left-16 text-gray-400 dark:text-purple-300 text-sm transform -rotate-12">
              startup
            </div>
            <div className="absolute -top-6 -right-20 text-gray-400 dark:text-blue-300 text-sm transform rotate-12">
              product & strategy
            </div>
            <div className="absolute -bottom-8 -left-20 text-gray-400 dark:text-pink-300 text-sm transform rotate-12">
              AI & data engineering
            </div>
            <div className="absolute -bottom-6 -right-16 text-gray-400 dark:text-purple-300 text-sm transform -rotate-12">
              mental health
            </div>
            <div className="absolute -top-20 -right-7 text-gray-400 dark:text-purple-300 text-sm transform -rotate-12">
              creativity
            </div> */}

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-black dark:text-white mb-4 tracking-tight">
              <TypingAnimation
                text="hi, i'm Jacqline Geng"
                speed={80}
                className="editorial-ultralight"
              />
            </h1>
          </div>
          <div className="editorial-font text-black/80 dark:text-white/80 text-lg mt-4" style={{ fontWeight: 200 }}>
            i build stuff blending finance, tech, and creativity.
          </div>
        </div>
      </div>

      {/* Desktop Icons positioned on the right */}
      <div className="fixed top-20 right-8 z-20">
        <div className="grid grid-cols-1 gap-6 max-w-xs">
          {folders.map((folder) => (
            <DesktopFolder
              key={folder.name}
              name={folder.name}
              icon={folder.icon}
              onClick={() => navigate(folder.route)}
            />
          ))}
        </div>
      </div>

      {/* Footer moved to bottom right */}
      {/* <div className="fixed bottom-4 right-4 z-10">
        <div className="text-black/60 dark:text-white/60 text-sm">
          // updated 2025
        </div>
      </div> */}

      <Dock />
    </div>
  );
};

export default Index;