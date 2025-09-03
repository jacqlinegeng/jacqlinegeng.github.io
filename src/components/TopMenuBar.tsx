
import { Linkedin, Twitter, Github, Flower } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import Switch from "./Switch";


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
          <Switch theme={theme} toggleTheme={toggleTheme} />
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