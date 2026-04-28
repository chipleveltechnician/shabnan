import React from 'react';

const ExperienceApp = () => {
  const experiences = [
    {
      role: "Senior Chip Level Technician",
      company: "TechFix Solutions",
      duration: "2023 - Present",
      description: "Leading the board repair division. Responsible for diagnosing and repairing complex dead laptop motherboards, replacing BGA chips, and training junior technicians in micro-soldering techniques."
    },
    {
      role: "Laptop Service Engineer",
      company: "ElectroCare Electronics",
      duration: "2020 - 2023",
      description: "Performed component-level repairs on various laptop brands. Specialized in resolving display issues (LVDS/eDP circuits), charging IC failures, and fixing BIOS corruption."
    },
    {
      role: "Hardware Support Trainee",
      company: "SystemTech Services",
      duration: "2018 - 2020",
      description: "Assisted senior technicians with disassembling devices, replacing standard parts (RAM, HDD, screens), and learning basic multimeter diagnostics."
    }
  ];

  return (
    <div className="p-4 font-sans text-gray-800">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      
      <div className="relative border-l-2 border-gray-300 pl-6 ml-2 space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow"></div>
            
            <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
            <div className="text-sm font-semibold text-blue-600 mb-2">{exp.company} | {exp.duration}</div>
            <p className="text-sm text-gray-600 bg-gray-50 p-3 border border-gray-200 rounded-sm">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceApp;
