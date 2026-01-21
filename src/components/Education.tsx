import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech - Computer Science and Engineering",
      institution: "The Apollo University, Chittoor",
      year: "Expected Graduation: 2027",
      grade: "CGPA: 9.88"
    },
    {
      degree: "Higher Secondary",
      institution: "Jawahar Navodaya Vidhyalaya, Nellore",
      year: "2023",
      grade: "Percentage: 82%"
    },
    {
      degree: "Secondary School",
      institution: "Jawahar Navodaya Vidhyalaya, Nellore",
      year: "2021",
      grade: "Percentage: 88%"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-1">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.year}</span>
                      </div>
                      <span className="text-green-600 font-medium">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;