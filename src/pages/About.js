import React from "react";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 scroll-mt-20 z-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          I'm <b>Hariswaran</b>, a self-driven MERN Stack developer with a
          passion for building responsive web apps. I specialize in full-stack
          JavaScript technologies and love creating elegant code and rich user
          interfaces.
        </p>
      </div>
    </section>
  );
};

export default About;
