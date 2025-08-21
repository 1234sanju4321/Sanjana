import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Web Development",
      issuer: "CSI Student Chapter",
      year: "2023"
    },
    {
      title: "Generative AI at SAP",
      issuer: "SAP",
      year: "2024"
    },
    {
      title: "Prompt Engineering",
      issuer: "The Coding Club, Apollo University",
      year: "2024"
    },
    {
      title: "Google Cloud Platform",
      issuer: "Dr. Pallamasetti Innovations",
      year: "2024"
    },
    {
      title: "Google Cloud Computing Foundations Certificate",
      issuer: "Google Cloud",
      year: "2024"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={14} className="mr-2" />
                    <span className="text-sm">{cert.year}</span>
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

export default Certifications;