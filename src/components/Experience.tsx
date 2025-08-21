import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Tools Intern",
      company: "Sri Padmavati Mahila Visva Vidyalayam",
      duration: "May 2025 – Aug 2025",
      location: "Tirupati",
      responsibilities: [
        "Explored AI-powered tools for web development and automation",
        "Worked on mini-projects integrating AI tools to enhance productivity"
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "CDHPM",
      duration: "June 2025 – July 2025",
      location: "Chittoor",
      responsibilities: [
        "Preprocessed hemodynamic datasets using Python & pandas for medical signal analysis",
        "Built automated hyperparameter tuning pipelines to improve cardiovascular risk prediction models"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600 font-medium mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;