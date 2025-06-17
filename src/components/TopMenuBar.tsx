
import { Linkedin, Twitter, Github, Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const TopMenuBar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-gray-900/30 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left side - Apple menu and app name */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/')}
            className="text-white font-bold text-sm hover:bg-white/10 rounded px-1 transition-colors"
          >
            🌸
          </button>
          <div className="text-white text-sm font-medium">Jacqline Geng</div>
        </div>

        {/* Right side - Social icons and controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="text-white/80 hover:text-white transition-colors p-1"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <a 
            href="https://www.linkedin.com/in/jacqlinegeng/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            <Linkedin size={16} />
          </a>
          <a 
            href="https://github.com/jacqlinegeng" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            <Github size={16} />
          </a>
          <a 
            href="https://x.com/inthecosmicdust" 
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
