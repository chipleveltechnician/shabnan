import React, { useState } from 'react';
import { 
  Monitor, 
  FileText, 
  Cpu, 
  Briefcase, 
  Phone, 
  Wifi, 
  Battery, 
  Volume2, 
  ChevronUp,
  Settings
} from 'lucide-react';
import Window from './Window';
import AboutApp from './apps/AboutApp';
import SkillsApp from './apps/SkillsApp';
import ExperienceApp from './apps/ExperienceApp';
import ContactApp from './apps/ContactApp';

const desktopIcons = [
  { id: 'about', title: 'About_Me.txt', icon: FileText, component: AboutApp },
  { id: 'skills', title: 'Skills.exe', icon: Cpu, component: SkillsApp },
  { id: 'experience', title: 'Experience', icon: Briefcase, component: ExperienceApp },
  { id: 'contact', title: 'Contact', icon: Phone, component: ContactApp },
];

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);
  const [time, setTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const openApp = (app) => {
    if (!openWindows.find(w => w.id === app.id)) {
      setOpenWindows([...openWindows, app]);
    }
    setActiveWindow(app.id);
  };

  const closeApp = (id) => {
    setOpenWindows(openWindows.filter(w => w.id !== id));
    if (activeWindow === id) {
      setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2].id : null);
    }
  };

  const focusApp = (id) => {
    setActiveWindow(id);
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      {/* Desktop Overlay for slightly darker wallpaper */}
      <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply pointer-events-none z-0"></div>

      {/* Animated Name on Wallpaper */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none">
        <div className="text-center" style={{ animation: 'fadeInUp 1.5s ease-out forwards' }}>
          {/* Glowing Ring */}
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 rounded-full border-2 border-blue-400/60 mx-auto flex items-center justify-center"
              style={{ animation: 'pulse-ring 3s ease-in-out infinite', boxShadow: '0 0 30px rgba(0,120,215,0.5)' }}>
              <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-300/40 flex items-center justify-center">
                <span className="text-3xl">⚙️</span>
              </div>
            </div>
            {/* Orbiting dot */}
            <div className="absolute top-0 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 rounded-full bg-blue-400"
              style={{ animation: 'orbit 4s linear infinite', transformOrigin: '50% 54px' }}>
            </div>
          </div>

          {/* Name */}
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-widest"
            style={{
              textShadow: '0 0 40px rgba(0,120,215,0.9), 0 0 80px rgba(0,120,215,0.4)',
              animation: 'glow-text 3s ease-in-out infinite alternate'
            }}
          >
            MUHAMMED SHABNAN
          </h1>

          {/* Subtitle with typing blink */}
          <p
            className="text-blue-200 text-base md:text-xl tracking-widest font-light"
            style={{ textShadow: '0 0 20px rgba(100,180,255,0.6)' }}
          >
            Laptop Chip Level Technician
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400" style={{ animation: 'blink-dot 1.5s ease-in-out infinite' }}></div>
            <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-text {
          from { text-shadow: 0 0 20px rgba(0,120,215,0.7), 0 0 40px rgba(0,120,215,0.3); }
          to   { text-shadow: 0 0 40px rgba(0,180,255,1),   0 0 80px rgba(0,180,255,0.5), 0 0 120px rgba(0,120,215,0.3); }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1);    box-shadow: 0 0 20px rgba(0,120,215,0.5); }
          50%       { transform: scale(1.08); box-shadow: 0 0 50px rgba(0,120,215,0.9); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg)   translateY(-48px) rotate(0deg); }
          to   { transform: rotate(360deg) translateY(-48px) rotate(-360deg); }
        }
        @keyframes blink-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(0.6); }
        }
      `}</style>

      {/* Desktop Icons Grid */}
      <div className="absolute top-0 left-0 bottom-12 p-4 flex flex-col flex-wrap gap-4 z-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-1 w-20 desktop-icon p-2 rounded cursor-pointer group" onClick={() => {}}>
            <Monitor size={40} className="text-white drop-shadow-md group-hover:text-blue-200" />
            <span className="text-white text-xs text-center drop-shadow-md">My Computer</span>
          </div>
          
          {desktopIcons.map(app => (
            <div 
              key={app.id}
              className="flex flex-col items-center gap-1 w-20 desktop-icon p-2 rounded cursor-pointer group"
              onClick={() => openApp(app)}
            >
              <app.icon size={40} className="text-white drop-shadow-md group-hover:text-blue-200" />
              <span className="text-white text-xs text-center drop-shadow-md break-words">{app.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Render Open Windows */}
      {openWindows.map(app => (
        <Window
          key={app.id}
          id={app.id}
          title={app.title}
          icon={app.icon}
          isActive={activeWindow === app.id}
          onClose={closeApp}
          onFocus={focusApp}
        >
          <app.component />
        </Window>
      ))}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-black/80 backdrop-blur-md border-t border-white/20 flex items-center justify-between z-50 select-none">
        <div className="flex items-center h-full">
          {/* Start Button */}
          <button className="h-full px-4 hover:bg-white/10 flex items-center gap-2 transition-colors">
            <div className="grid grid-cols-2 gap-0.5 w-5 h-5 transform">
              <div className="bg-[#00A4EF] w-full h-full"></div>
              <div className="bg-[#7FBA00] w-full h-full"></div>
              <div className="bg-[#F25022] w-full h-full"></div>
              <div className="bg-[#FFB900] w-full h-full"></div>
            </div>
          </button>
          
          {/* Open Apps in Taskbar */}
          <div className="flex h-full ml-2 space-x-1">
            {openWindows.map(app => (
              <button 
                key={app.id}
                onClick={() => focusApp(app.id)}
                className={`h-full px-3 flex items-center gap-2 border-b-2 transition-colors ${
                  activeWindow === app.id ? 'bg-white/10 border-blue-400' : 'hover:bg-white/5 border-transparent'
                }`}
              >
                <app.icon size={16} className="text-blue-400" />
              </button>
            ))}
          </div>
        </div>

        {/* System Tray */}
        <div className="flex items-center h-full px-2 text-white/90 text-sm">
          <div className="hidden md:flex items-center gap-3 px-3 h-full hover:bg-white/10 cursor-pointer transition-colors">
            <ChevronUp size={16} />
            <Wifi size={16} />
            <Volume2 size={16} />
            <Battery size={16} />
          </div>
          <div className="flex flex-col items-center justify-center px-3 h-full hover:bg-white/10 cursor-pointer transition-colors">
            <span className="text-[10px] leading-tight">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span className="text-[10px] leading-tight">{time.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
