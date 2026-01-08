import { useState } from "react";
import TopMenuBar from "../components/TopMenuBar";
import Dock from "../components/Dock";
import ProjectStory from "../components/ProjectStory";

const Projects = () => {
  const [showStory, setShowStory] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      username: "jacqlinegeng",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features. Built with modern web technologies for optimal performance.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Vue.js", "Firebase", "WebSocket"],
      username: "jacqlinegeng",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      id: 3,
      title: "AI Dashboard",
      description: "Analytics dashboard with machine learning insights and data visualization. Provides real-time analytics and predictive insights.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Python", "TensorFlow", "React", "D3.js"],
      username: "jacqlinegeng",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    }
  ];

  const handleStoryOpen = (index: number) => {
    setCurrentStoryIndex(index);
    setShowStory(true);
  };

  const handleStoryClose = () => {
    setShowStory(false);
    setCurrentStoryIndex(0);
  };

  const handleStoryNext = () => {
    if (currentStoryIndex < projects.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      handleStoryClose();
    }
  };

  const handleStoryPrev = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopMenuBar />

      <div className="pt-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Mac OS Window */}
          <div className="bg-card border-border text-card-foreground rounded-xl shadow-lg border">
            {/* Mac OS Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <h1 className="text-lg font-semibold text-card-foreground">Projects</h1>
              <div className="w-16"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">My Projects</h2>
            
            {/* Stories Row */}
            <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => handleStoryOpen(index)}
                  className="flex-shrink-0 group"
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full rounded-full object-cover border-2 border-white"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 max-w-[80px] truncate">
                    {project.title}
                  </p>
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-secondary rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleStoryOpen(projects.indexOf(project))}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Modal */}
      {showStory && (
        <ProjectStory
          projects={projects}
          currentIndex={currentStoryIndex}
          onClose={handleStoryClose}
          onNext={handleStoryNext}
          onPrev={handleStoryPrev}
        />
      )}

      <Dock />
    </div>
  );
};

export default Projects;