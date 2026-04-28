import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

const BootSequence = ({ phase, onLogin }) => {
  return (
    <div className="w-full h-full relative">
      {phase === 'bios' && <BiosScreen />}
      {phase === 'loading' && <LoadingScreen />}
      {phase === 'login' && <LoginScreen onLogin={onLogin} />}
      <div className="absolute inset-0 scanlines z-50 pointer-events-none"></div>
    </div>
  );
};

const BiosScreen = () => {
  const [lines, setLines] = useState([]);
  
  const bootText = [
    "TechBios (C) 2026 American Megatrends, Inc.",
    "BIOS Date: 04/27/26 19:00:27 Ver: 08.00.15",
    "CPU: Intel(R) Core(TM) i9-14900HX CPU @ 2.20GHz",
    "Speed: 2.20 GHz",
    "",
    "Press DEL to run Setup",
    "Press F11 for Boot Menu",
    "Single-Channel Memory Mode",
    "65536MB OK",
    "",
    "Auto-Detecting Pri Master..IDE Hard Disk",
    "Auto-Detecting Pri Slave...Not Detected",
    "Pri Master: WDC WD5000AAKX-001CA0 15.01H15",
    "Ultra DMA Mode-6, S.M.A.R.T. Capable and Status OK",
    "",
    "Loading Motherboard Diagnostics...",
    "[OK] VRM Controllers Checked",
    "[OK] Super I/O Chip Initiated",
    "[OK] PCH Temperature Normal",
    "Initiating Boot Sequence...",
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootText.length) {
        setLines(prev => [...prev, bootText[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Speed of text rendering
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-black text-gray-300 p-4 font-mono text-sm md:text-base bios-text flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="text-xl font-bold">TechBios</div>
        <div className="w-16 h-16 border-2 border-gray-500 flex items-center justify-center p-1">
          <span className="text-xs text-center">EPA POLLUTION PREVENTER</span>
        </div>
      </div>
      {lines.map((line, index) => (
        <div key={index}>{line || '\u00A0'}</div>
      ))}
      {lines.length < bootText.length && <div className="blink-cursor inline-block"></div>}
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center">
      <div className="mb-16">
        {/* Windows 10/11 style logo using CSS */}
        <div className="grid grid-cols-2 gap-1 w-24 h-24 transform hover:scale-105 transition-transform duration-500">
          <div className="bg-[#0078D7] w-full h-full"></div>
          <div className="bg-[#0078D7] w-full h-full"></div>
          <div className="bg-[#0078D7] w-full h-full"></div>
          <div className="bg-[#0078D7] w-full h-full"></div>
        </div>
      </div>
      <div className="win-spinner mt-12">
        <div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  );
};

const LoginScreen = ({ onLogin }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#020024] via-[#090979] to-[#00d4ff] relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
      
      <div className="z-10 flex flex-col items-center mt-[-10vh]">
        <div className="w-32 h-32 rounded-full bg-gray-200/20 border-4 border-white/30 flex items-center justify-center mb-6 shadow-2xl backdrop-blur-md">
          <User size={64} className="text-white/80" />
        </div>
        <h1 className="text-4xl font-semibold text-white mb-8 tracking-wide drop-shadow-lg">
          Muhammed Shabnan
        </h1>
        <p className="text-blue-200 mb-8 font-medium">Laptop Chip Level Technician</p>
        
        <button 
          onClick={onLogin}
          className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md"
        >
          Sign In
        </button>
      </div>

      <div className="absolute bottom-8 left-8 z-10 text-white/90">
        <div className="text-6xl font-light mb-2">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="text-xl font-medium">
          {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
      </div>
    </div>
  );
};

export default BootSequence;
