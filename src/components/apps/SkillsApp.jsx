import React from 'react';

const SkillsApp = () => {
  const hardwareSkills = [
    { name: "Motherboard Schematic Reading", level: 95 },
    { name: "SMD/BGA Micro-Soldering", level: 90 },
    { name: "Power Sequence Analysis", level: 85 },
    { name: "BIOS/EC Programming", level: 95 },
    { name: "Oscilloscope Diagnostics", level: 80 },
    { name: "Liquid Damage Recovery", level: 90 },
  ];

  const tools = [
    "Digital Multimeter", "Oscilloscope", "DC Power Supply", 
    "Hot Air Rework Station", "Soldering Iron", "BGA Machine", 
    "Thermal Camera", "EEPROM Programmer", "Microscope"
  ];

  return (
    <div className="p-4 font-sans text-gray-800">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b pb-2">
        <span className="bg-blue-600 w-3 h-3 inline-block"></span> 
        Technical Skills & Proficiencies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-semibold mb-4 text-gray-700">Core Competencies</h3>
          <div className="space-y-4">
            {hardwareSkills.map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs mb-1 font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2">
                  <div 
                    className="bg-blue-600 h-2 transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-gray-700">Diagnostic Equipment</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map(tool => (
              <span key={tool} className="px-3 py-1 bg-gray-100 border border-gray-300 text-xs font-medium text-gray-700 rounded-sm">
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-50 border border-gray-200 text-sm">
            <h4 className="font-bold mb-2">Diagnostic Process</h4>
            <ol className="list-decimal pl-5 space-y-1 text-gray-600">
              <li>Visual inspection under microscope.</li>
              <li>Check for short to ground on main power rails.</li>
              <li>Analyze power sequence using schematics.</li>
              <li>Isolate faulty components using thermal imaging/voltage injection.</li>
              <li>Replace ICs/Mosfets using proper thermal profiles.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsApp;
