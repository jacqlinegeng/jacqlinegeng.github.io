
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
    { name: "Writing", icon: "📝", route: "/writing" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Animated Vision Board Background */}
      <VisionBoard />
      
      {/* macOS Wallpaper Effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <TopMenuBar />
      
      {/* Main content with name in center */}
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
        {/* Portfolio title with decorative elements */}
        <div className="text-center mb-12">
          <div className="relative">
            <div className="absolute -top-8 -left-16 text-gray-400 dark:text-purple-300 text-sm transform -rotate-12">
              UI/UX
            </div>
            <div className="absolute -top-6 -right-20 text-gray-400 dark:text-blue-300 text-sm transform rotate-12">
              GRAPHIC DESIGN
            </div>
            <div className="absolute -bottom-8 -left-20 text-gray-400 dark:text-pink-300 text-sm transform rotate-12">
              ILLUSTRATION
            </div>
            <div className="absolute -bottom-6 -right-16 text-gray-400 dark:text-purple-300 text-sm transform -rotate-12">
              MOTION
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-black text-black dark:text-white mb-4 tracking-tight">
              <TypingAnimation 
                text="hi, i'm Jacqline Geng" 
                speed={80}
                className="inline-block"
              />
            </h1>
          </div>
          <div className="text-black/80 dark:text-white/80 text-lg mt-4">
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
      <div className="fixed bottom-4 right-4 z-10">
        <div className="text-black/60 dark:text-white/60 text-sm">
          /made with ♥ by jacqline 2025
        </div>
      </div>

      <Dock />
    </div>
  );
};

export default Index;