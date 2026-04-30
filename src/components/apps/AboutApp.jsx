import React from 'react';
import profilePhoto from '../../assets/profile.jpg';

const AboutApp = () => {
  return (
    <div className="p-4 text-gray-800 font-sans">
      <div className="flex items-start gap-6 mb-8">
        <div className="w-32 h-32 bg-gray-200 border-2 border-blue-400 rounded-full overflow-hidden shrink-0 shadow-lg" style={{ boxShadow: '0 0 16px rgba(0,120,215,0.4)' }}>
          <img 
            src={profilePhoto}
            alt="Muhammed Shabnan" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-2">Muhammed Shabnan</h1>
          <h2 className="text-lg text-blue-600 mb-4 font-semibold">Specialized Laptop Chip Level Technician</h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Welcome to my technical portfolio. I am a highly skilled hardware technician specializing in laptop chip-level diagnostics and repair. With a deep understanding of motherboard architecture, micro-soldering, and power sequence analysis, I revive electronics that others consider unfixable.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold border-b border-gray-300 pb-1 mb-3">Professional Summary</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>Expertise in reading and analyzing complex motherboard schematics and boardviews.</li>
          <li>Proficient in diagnosing power issues (19V rail, 3.3V/5V ALW, CPU core voltage).</li>
          <li>Advanced BGA (Ball Grid Array) rework, including GPU and PCH replacement.</li>
          <li>BIOS programming, ME region cleaning, and EC (Embedded Controller) flashing.</li>
          <li>Liquid damage recovery and ultrasonic cleaning procedures.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutApp;
