import React from "react";
import { FolderOpen } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-4 scroll-mt-20 z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((p) => (
            <div
              key={p}
              className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              <FolderOpen className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Project {p}</h3>
              <p className="text-gray-400">
                A feature-rich web app built using the MERN stack with
                responsive design and secure backend.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
