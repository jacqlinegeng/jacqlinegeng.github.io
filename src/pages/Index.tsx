
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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 dark:from-black dark:via-gray-950 dark:to-black relative overflow-hidden">
      {/* Tech-Inspired Dark Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Digital grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(160,130,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(160,130,200,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>

        {/* Glowing orbs with lavender/purple neon effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
        </div>

        {/* Holographic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent via-transparent to-violet-500/5"></div>

        {/* Noise texture for depth */}
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

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