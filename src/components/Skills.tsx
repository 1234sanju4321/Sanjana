import React from 'react';
import { Code, Database, Brain, Wrench, Users, Lightbulb, Target, Zap } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: ["C", "C++", "Python", "Java"]
    },
    {
      category: "Development",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: ["HTML", "CSS", "JavaScript", "Rest APIs", "Flask", "Django", "MERN Stack"]
    },
    {
      category: "Databases",
      icon: <Database className="w-6 h-6 text-blue-600" />,
      skills: ["MySQL", "MongoDB"]
    },
    {
      category: "Machine Learning & AI",
      icon: <Brain className="w-6 h-6 text-blue-600" />,
      skills: ["Supervised Learning", "Data Preprocessing", "Prompt Engineering", "Generative AI"]
    },
    {
      category: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-blue-600" />,
      skills: ["Git", "GitHub", "R Studio", "Weka Tool", "Tableau"]
    },
    {
      category: "Core CS",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems"]
    }
  ];

  const softSkills = [
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

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {skillGroup.icon}
                  <h4 className="text-lg font-semibold text-gray-900 ml-3">
                    {skillGroup.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {skill.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;