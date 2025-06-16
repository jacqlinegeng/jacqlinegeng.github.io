
import TopMenuBar from "../components/TopMenuBar";
import Dock from "../components/Dock";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopMenuBar />
      
      {/* Safari-style window */}
      <div className="pt-8 px-4">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 max-w-4xl mx-auto">
          {/* Safari Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-t-xl border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600 border">
                about://me
              </div>
            </div>
            <div className="w-16"></div>
          </div>

          {/* Content */}
          <div className="p-8 max-h-[70vh] overflow-y-auto">
            {/* Hero Section with Profile */}
            <div className="text-center mb-12">
              <div className="relative inline-block mb-6">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                  alt="Profile"
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                />
                {/* Scribbles around the image */}
                <div className="absolute -top-4 -left-4 text-2xl rotate-12">✨</div>
                <div className="absolute -top-2 -right-6 text-xl -rotate-12">🚀</div>
                <div className="absolute -bottom-2 -left-6 text-lg rotate-45">💡</div>
                <div className="absolute -bottom-4 -right-2 text-xl -rotate-45">⚡</div>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Hey, I'm [Your Name]</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A passionate developer who loves creating beautiful and functional digital experiences.
                Currently building amazing things with modern web technologies.
              </p>
            </div>

            {/* About Content */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm a full-stack developer with a passion for creating intuitive user experiences 
                  and robust backend systems. When I'm not coding, you can find me exploring new 
                  technologies or working on side projects.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I believe in writing clean, maintainable code and always strive to learn 
                  something new every day.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
                <div className="space-y-2">
                  {["React & TypeScript", "Node.js & Express", "Python & FastAPI", "PostgreSQL & MongoDB", "AWS & Docker"].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resume Section */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Experience</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Senior Developer</h3>
                  <p className="text-blue-600 font-medium">Tech Company • 2022 - Present</p>
                  <p className="text-gray-600 mt-2">
                    Leading development of user-facing features and backend APIs. 
                    Mentoring junior developers and contributing to architectural decisions.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Full Stack Developer</h3>
                  <p className="text-blue-600 font-medium">Startup Inc • 2020 - 2022</p>
                  <p className="text-gray-600 mt-2">
                    Built and maintained web applications using React, Node.js, and PostgreSQL. 
                    Collaborated with design team to implement pixel-perfect UIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dock />
    </div>
  );
};

export default About;
