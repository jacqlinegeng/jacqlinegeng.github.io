const VisionBoard = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-50">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gray-300/20 dark:bg-cyan-300/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-gray-400/20 dark:bg-pink-300/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-3 h-8 bg-gray-300/20 dark:bg-blue-300/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-gray-400/20 dark:bg-cyan-400/20 transform rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
    </div>
  );
};

export default VisionBoard;