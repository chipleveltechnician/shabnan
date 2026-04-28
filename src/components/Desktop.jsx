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
