import React from 'react';
import { Brain, Users, Lightbulb, Target, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: "Effective Communication",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      description: "Strong verbal and written communication skills"
    },
    {
      name: "Critical Thinking & Problem Solving",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      description: "Analytical approach to complex challenges"
    },
    {
      name: "Innovation & Creative Thinking",
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      description: "Creative solutions and innovative approaches"
    },
    {
      name: "Collaboration & Teamwork",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      description: "Effective team collaboration and leadership"
    },
    {
      name: "Adaptability & Flexibility",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      description: "Quick adaptation to new technologies and environments"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;