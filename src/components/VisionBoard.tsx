import { useEffect, useState } from 'react';

const VisionBoard = () => {
  const [items, setItems] = useState<Array<{ id: number; x: number; y: number; text: string; delay: number }>>([]);

  const visionItems = [
    'DESIGN', 'CREATE', 'INSPIRE', 'INNOVATE', 'DREAM', 'BUILD', 'ART', 'UI/UX',
    'VISUAL', 'MOTION', 'BRAND', 'CREATIVE', 'DIGITAL', 'MODERN', 'MINIMAL',
    'AESTHETIC', 'PASSION', 'VISION', 'FUTURE', 'TREND'
  ];

  useEffect(() => {
    const generatedItems = visionItems.map((text, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      text,
      delay: Math.random() * 5
    }));
    setItems(generatedItems);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-50">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute text-white/30 font-bold text-sm md:text-base lg:text-lg animate-pulse"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: '3s'
          }}
        >
          {item.text}
        </div>
      ))}
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-300/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-pink-300/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-3 h-8 bg-blue-300/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-purple-400/20 transform rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
    </div>
  );
};

export default VisionBoard;