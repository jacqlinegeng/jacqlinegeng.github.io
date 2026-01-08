import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import ContactModal from "./ContactModal";
import { Home, Zap, PenTool, MessageSquare, Music, BookOpen } from "lucide-react";

const Dock = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showContact, setShowContact] = useState(false);

  const dockItems = [
    {
      name: "Home",
      icon: <Home size={20} className="text-white" />,
      action: () => navigate("/")
    },
    {
      name: "Projects",
      icon: <Zap size={20} className="text-white" />,
      action: () => navigate("/projects")
    },
    {
      name: "Writing",
      icon: <PenTool size={20} className="text-white" />,
      action: () => navigate("/writing")
    },
    {
      name: "Reading",
      icon: <BookOpen size={20} className="text-white" />,
      action: () => navigate("/reading")
    },
    {
      name: "Messages",
      icon: <MessageSquare size={20} className="text-white" />,
      action: () => setShowContact(true)
    },
    {
      name: "Spotify",
      icon: <Music size={20} className="text-white" />,
      action: () => window.open("https://open.spotify.com/user/22uvhgmtzptpdu5q734fqbzqi?si=36328d1b344c4e6e", "_blank")
    }
  ];

  return (
    <>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-gray-900/30 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/20">
          <div className="flex items-center space-x-2">
            {dockItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                title={item.name}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
};

export default Dock;