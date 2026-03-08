import React, { useState, useEffect } from 'react';
import { Sparkles, Star, Zap, MessageCircle } from 'lucide-react';

declare global {
  interface Window {
    Tawk_API?: {
      maximize: () => void;
      hideWidget: () => void;
      showWidget: () => void;
    };
  }
}

const marqueeText = "";

const apps = [
     {
    id: 1,
    name: "米兰体育",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/699c510a7aea005f38310220.jpg",
    url: "https://www.pr9oj0.vip:9037/entry/register27248/?i_code=321944933",
  },
     {
    id: 2,
    name: "星空体育",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/69a40ac1ac80c84bfd15ae58.png",
    url: "https://www.8ahmna.vip:9003/register/?agent_code=55699651",
  },
       {
    id: 3,
    name: "开云体育",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/699c51217aea005f38310225.jpg",
    url: "https://www.vwqv2s.vip:9663/entry/register79049/?i_code=94491262",
  },
 
  
];

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredApp, setHoveredApp] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleAppClick = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const openTawkChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent)`
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10">
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 overflow-hidden shadow-2xl border-b-4 border-yellow-400">
            <div className="flex items-center py-3 px-4">
              <Sparkles className="text-yellow-300 animate-pulse mr-3" size={24} />
              <div className="flex-1 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                  <span className="text-white text-xl font-bold tracking-wider drop-shadow-lg">
                    {marqueeText.repeat(6)}
                  </span>
                </div>
              </div>
              <Sparkles className="text-yellow-300 animate-pulse ml-3" size={24} />
            </div>
          </div>
        </div>

        <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              </div>

              <div className="relative">
                <div className="inline-flex items-center justify-center mb-6">
                  <Star className="text-yellow-400 animate-spin" size={32} style={{ animationDuration: '3s' }} />
                  <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 mx-4 drop-shadow-2xl">
                    2026世界杯
                  
                    
                  </h1>
                  <Star className="text-yellow-400 animate-spin" size={32} style={{ animationDuration: '3s' }} />
                </div>

                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                  <Zap className="text-yellow-400 animate-bounce" size={28} />
                  <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {apps.map((app, index) => (
                  <div
                    key={app.id}
                    onClick={() => handleAppClick(app.url)}
                    onMouseEnter={() => setHoveredApp(app.id)}
                    onMouseLeave={() => setHoveredApp(null)}
                    className="group relative cursor-pointer"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>

                    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-cyan-500/50">
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">GO</div>
                      </div>

                      <div className="relative mb-3">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-xl overflow-hidden border-2 border-slate-600 group-hover:border-cyan-400 transition-colors duration-300 shadow-lg">
                          <img
                            src={app.iconUrl}
                            alt={app.name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        {hoveredApp === app.id && (
                          <div className="absolute -inset-2 border-2 border-cyan-400 rounded-xl animate-ping"></div>
                        )}
                      </div>

                      <h3 className="text-white font-bold text-sm sm:text-base mb-1 text-center group-hover:text-cyan-300 transition-colors duration-300">
                        {app.name}
                      </h3>

                      <div className="flex items-center justify-center gap-1">
                        <div className="h-px w-6 bg-gradient-to-r from-transparent to-blue-500"></div>
                        <p className="text-cyan-400 text-xs font-medium">
                          {app.description}
                        </p>
                        <div className="h-px w-6 bg-gradient-to-l from-transparent to-blue-500"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 via-teal-500 via-yellow-500 to-orange-500"></div>
      </div>

      <button
        onClick={openTawkChat}
        className="fixed bottom-6 right-6 bg-[#03a84e] hover:bg-[#028a3f] text-white rounded-full p-4 shadow-2xl hover:shadow-[#03a84e]/50 transition-all duration-300 transform hover:scale-110 z-50 flex items-center gap-2 group"
        aria-label="在线客服"
      >
        <MessageCircle size={24} className="group-hover:animate-bounce" />
        <span className="font-bold text-sm whitespace-nowrap">在线客服</span>
      </button>
    </div>
  );
}

export default App;

