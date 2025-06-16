
import { useState } from "react";
import TopMenuBar from "../components/TopMenuBar";
import Dock from "../components/Dock";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Vue.js", "Firebase", "WebSocket"]
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard with machine learning insights and data visualization",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tech: ["Python", "TensorFlow", "React", "D3.js"]
    }
  ];

  const gridProjects = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    description: "A cool project description",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
  }));

  return (
    <div className="min-h-screen bg-gray-100">
      <TopMenuBar />
      
      <div className="pt-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Featured Projects Slideshow */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-8 overflow-hidden">
            <div className="relative h-96">
              <img
                src={featuredProjects[currentSlide].image}
                alt={featuredProjects[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white max-w-2xl px-8">
                  <h2 className="text-3xl font-bold mb-4">{featuredProjects[currentSlide].title}</h2>
                  <p className="text-lg mb-6">{featuredProjects[currentSlide].description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {featuredProjects[currentSlide].tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
              >
                →
              </button>
              
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Projects</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gridProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-24 object-cover rounded-md mb-3 group-hover:scale-105 transition-transform"
                  />
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-xs">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dock />
    </div>
  );
};

export default Projects;
