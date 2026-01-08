
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

      {/* Neon Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large animated orbs with neon glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-400/20 dark:bg-pink-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-blue-400/20 dark:bg-blue-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-green-400/20 dark:bg-green-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5.5s', animationDelay: '0.5s' }}></div>

        {/* Smaller floating orbs with stronger glow */}
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-cyan-500/30 dark:bg-cyan-500/40 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/2 right-1/2 w-40 h-40 bg-pink-500/30 dark:bg-pink-500/40 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }}></div>

        {/* Animated gradient lines */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-pink-400/20 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>

        {/* Grid overlay with neon effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)]"></div>
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