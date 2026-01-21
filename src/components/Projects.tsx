import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Voice-Controlled Smart Wheelchair",
      organization: "Apollo University",
      date: "March 2025",
      location: "Chittoor",
      description: "Designed and implemented a voice-controlled system for hands-free wheelchair navigation, achieving 90% command recognition accuracy. Built a speech-to-command pipeline with safety error handling, reducing incorrect command execution by 30%.",
      technologies: ["Arduino", "Speech Recognition", "AI Control", "Embedded Systems", "Safety Systems"]
    },
    {
      title: "TapNGo – IoT-Based Smart Home Automation System",
      organization: "Personal Project",
      date: "October 2025",
      location: "Chittoor",
      description: "Developed an IoT-based smart home automation system enabling real-time control of 5+ household appliances via mobile/web interfaces. Implemented device communication and logic, improving response time by 30% and reducing manual intervention.",
      technologies: ["IoT", "Mobile Development", "Web Interface", "Real-time Communication", "Device Integration"]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {project.organization}
                  </p>
                </div>
                <div className="flex flex-col lg:items-end space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;