
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  username: string;
  avatar: string;
}

interface ProjectStoryProps {
  projects: Project[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectStory = ({ projects, currentIndex, onClose, onNext, onPrev }: ProjectStoryProps) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const project = projects[currentIndex];

  if (!project) return null;

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      onNext();
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onPrev();
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Story Progress Bars */}
      <div className="absolute top-4 left-4 right-4 flex space-x-1 z-10">
        {projects.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden"
          >
            <div
              className={`h-full bg-white transition-all duration-300 ${
                index <= currentIndex ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-10">
        <div className="flex items-center space-x-3">
          <img
            src={project.avatar}
            alt={project.username}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <span className="text-white font-semibold text-sm">{project.username}</span>
          <span className="text-white/60 text-sm">2h</span>
        </div>
        <button
          onClick={handleClose}
          className="text-white p-2 hover:bg-white/20 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation Areas */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-0 w-1/3 h-full z-10 flex items-center justify-start pl-4 text-white/0 hover:text-white/50 transition-colors"
        disabled={currentIndex === 0}
      >
        {currentIndex > 0 && <ChevronLeft size={24} />}
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-0 w-1/3 h-full z-10 flex items-center justify-end pr-4 text-white/0 hover:text-white/50 transition-colors"
      >
        {currentIndex < projects.length - 1 ? <ChevronRight size={24} /> : <X size={24} />}
      </button>

      {/* Main Content */}
      <div className="w-full max-w-md mx-4 bg-gray-900 rounded-lg overflow-hidden">
        {/* Project Image */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Project Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-white/80 text-sm mb-3 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-white/20 rounded-full text-white text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Story Actions */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLiked(!liked)}
                className="text-white hover:scale-110 transition-transform"
              >
                <Heart size={24} fill={liked ? '#ff3040' : 'none'} color={liked ? '#ff3040' : 'white'} />
              </button>
              <button className="text-white hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </button>
              <button className="text-white hover:scale-110 transition-transform">
                <Send size={24} />
              </button>
            </div>
            <button
              onClick={() => setSaved(!saved)}
              className="text-white hover:scale-110 transition-transform"
            >
              <Bookmark size={24} fill={saved ? 'white' : 'none'} />
            </button>
          </div>
          
          <div className="text-white text-sm">
            <span className="font-semibold">42 likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStory;
