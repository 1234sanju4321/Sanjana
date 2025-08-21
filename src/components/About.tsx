import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Enthusiastic Computer Science student with expertise in AI, ML, and web technologies. 
            Skilled in communication, problem-solving, and teamwork with a strong focus on innovation 
            and adaptability. Contributed to impactful projects including AI-based stroke detection 
            and a voice-controlled smart wheelchair, aiming to leverage human-centered design and 
            emerging technologies to create meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;