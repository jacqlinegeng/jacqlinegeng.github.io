
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import ContactModal from "./ContactModal";

const Dock = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showContact, setShowContact] = useState(false);

  const dockItems = [
    { 
      name: "Messages", 
      icon: "💬", 
      action: () => setShowContact(true)
    },
    { 
      name: "Notes", 
      icon: "📝", 
      action: () => navigate("/writing")
    },
    { 
      name: "VS Code", 
      icon: "⚡", 
      action: () => navigate("/projects")
    },
    { 
      name: "Spotify", 
      icon: "🎵", 
      action: () => window.open("https://open.spotify.com", "_blank")
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
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl transition-all duration-200 hover:scale-110 hover:-translate-y-1"
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
