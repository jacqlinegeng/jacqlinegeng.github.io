
import { Linkedin, Twitter, Github, Flower } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const TopMenuBar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-gray-900/30 backdrop-blur-xl border-b border-white/10 z-50 dark:bg-gray-900/30">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left side - Apple menu and app name */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/')}
            className="text-white font-bold text-sm hover:bg-white/10 rounded px-1 transition-colors flex items-center"
          >
            <Flower size={16} className="text-white" />
          </button>
          <button 
            onClick={() => navigate('/')}
            className="text-white text-sm font-medium hover:bg-white/10 rounded px-1 transition-colors"
          >
            Jacqline Geng
          </button>
        </div>

        {/* Right side - Social icons and controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="text-white/80 hover:text-white transition-colors p-1 flex items-center"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <div className="w-6 h-4 relative">
              {/* Light switch icon - made larger */}
              <div className={`w-5 h-3 border-2 border-white/60 rounded-sm relative transition-colors ${theme === 'dark' ? 'bg-white/20' : 'bg-white/60'}`}>
                <div className={`w-2 h-2 bg-white rounded-full absolute top-0.5 transition-transform ${theme === 'dark' ? 'translate-x-0' : 'translate-x-2'}`}></div>
              </div>
            </div>
          </button>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            <Linkedin size={16} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            <Github size={16} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            <Twitter size={16} />
          </a>
          <div className="text-white text-xs">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenuBar;