import React, { useState, useEffect } from 'react';
import profilePhoto from '../assets/profile.jpg';

const BootSequence = ({ phase, onLogin }) => {
  return (
    <div className="w-full h-full relative">
      {phase === 'loading' && <LoadingScreen />}
      {phase === 'login' && <LoginScreen onLogin={onLogin} />}
      <div className="absolute inset-0 scanlines z-50 pointer-events-none"></div>
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
        <div className="w-40 h-40 rounded-full bg-gray-200/20 border-4 border-white/30 flex items-center justify-center mb-8 shadow-2xl backdrop-blur-md overflow-hidden">
          <img 
            src={profilePhoto} 
            alt="Muhammed Shabnan" 
            className="w-full h-full object-cover"
          />
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
