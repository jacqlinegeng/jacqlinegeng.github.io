
import TopMenuBar from "../components/TopMenuBar";
import Dock from "../components/Dock";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <TopMenuBar />

      {/* Safari-style window */}
      <div className="pt-8 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
          {/* Safari Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-t-xl border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white dark:bg-gray-600 rounded-md px-3 py-1 text-sm text-gray-600 dark:text-gray-300 border dark:border-gray-500">
                about://me
              </div>
            </div>
            <div className="w-16"></div>
          </div>

          {/* Content */}
          <div className="p-8 max-h-[70vh] overflow-y-auto">
            {/* Hero Section with styled layout */}
            <div className="relative mb-12">
              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 text-blue-300 text-sm transform rotate-12">JACQLINE G</div>
              <div className="absolute top-4 right-8 text-pink-300 text-lg transform -rotate-12">✨</div>
              <div className="absolute bottom-8 left-6 text-purple-300 text-sm transform rotate-45">📎</div>
              <div className="absolute bottom-4 right-4 text-blue-300 text-2xl transform -rotate-12"></div>

              {/* Main content layout */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - Text content */}
                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">hello/bonjour/你好</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      i am a consultant by day, and a creative by night. i blend finance, tech, and creativity to build innovative solutions that inspire and empower others.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      FOLLOW ME ON MY JOURNEY AS I EXPLORE THE INTERSECTION OF TECH, FINANCE, AND HUMAN CONSCIOUSNESS.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                      LAST EDITED ON AUG 15, 2025<br />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      created by jacqline<br />
                      -------------------<br />
                      2025 // lock in mode
                    </p>
                  </div>
                </div>

                {/* Right side - Main image with decorative elements */}
                <div className="relative">
                  <div className="bg-white dark:bg-gray-700 rounded-2xl p-4 shadow-lg">
                    <img
                      src="/uploads/portfolio_pic.png"
                      alt="Jacqline Geng"
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>

                  {/* Decorative scribbles around image */}
                  <div className="absolute -top-4 -left-4 text-purple-300 text-xl transform -rotate-12">♡</div>
                  <div className="absolute -top-2 -right-6 text-blue-300 text-lg transform rotate-12">✧</div>
                  <div className="absolute -bottom-2 -left-6 text-pink-300 text-lg transform rotate-45">∿</div>
                  <div className="absolute -bottom-4 -right-2 text-purple-300 text-xl transform -rotate-45">◊</div>

                  {/* Text elements around image */}
                  <div className="absolute top-8 -right-12 bg-white dark:bg-gray-600 rounded-lg p-2 shadow-md transform rotate-6">
                    <p className="text-xs text-gray-700 dark:text-gray-300 max-w-24">
                      GROW, GLOW, FLOW
                    </p>
                  </div>

                  <div className="absolute bottom-20 -left-8 bg-white dark:bg-gray-600 rounded-lg p-2 shadow-md transform -rotate-3">
                    <p className="text-xs text-gray-700 dark:text-gray-300 max-w-20">
                      CHOOSE YOUR HARD; FIRST PRINCIPLES THINKING>>>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Section */}
            <div className="border-t border-gray-200 dark:border-gray-600 pt-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Experience</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Senior Consultant</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Deloitte • 2019 - Present</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Led risk compliance assessments for Fortune 500 tech and finance clients, developed C-suite–approved risk strategies, controls, and reports, and drove AI literacy through national reports, workshops, and hackathons.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Business Fellow</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Perplexity • 2025</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      built with Perplexity pilot initiatives (i.e. Perplexity Enterprise Pro, Comet)
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Developer Relations Engineer</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">thirdweb • 2022 - 2023</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Drove developer engagement for 12k+ monthly users by creating technical content, documentation, and workshops for onboarding, and product, feature, and platform adoption
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
