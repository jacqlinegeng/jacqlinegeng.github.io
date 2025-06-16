
import { Linkedin, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopMenuBar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-gray-900/30 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left side - Apple menu and app name */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/')}
            className="text-white font-bold text-sm hover:bg-white/10 rounded px-1 transition-colors"
          >
            🍎
          </button>
          <div className="text-white text-sm font-medium">Jacqline Geng</div>
        </div>

        {/* Right side - Social icons */}
        <div className="flex items-center space-x-3">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            <Linkedin size={16} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            <X size={16} />
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
