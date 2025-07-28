import React from "react";
import { Code2, Server, Database } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="relative py-20 px-4 scroll-mt-20 z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          My <span className="text-cyan-400">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Code2,
              title: "Frontend Development",
              desc: "Responsive, pixel-perfect UI using React.js and Tailwind CSS.",
            },
            {
              icon: Server,
              title: "Backend APIs",
              desc: "RESTful APIs with Express and Node.js, secured with JWT and validations.",
            },
            {
              icon: Database,
              title: "Database Design",
              desc: "Structured MongoDB schemas for scalable apps.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              <s.icon className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
