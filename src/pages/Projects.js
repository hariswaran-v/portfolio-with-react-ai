import React from "react";
import { FolderOpen, ArrowRight } from "lucide-react";

const projectData = [
  {
    id: 1,
    icon: FolderOpen,
    title: "Blog Platform",
    description:
      "A full-stack blog platform built with MERN stack, featuring authentication, post editor, and dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-400/30",
    glowColor: "shadow-cyan-500/20",
    hoverGlow: "hover:shadow-cyan-500/40",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    icon: FolderOpen,
    title: "Portfolio Website",
    description:
      "A high-performance personal portfolio site using React and Tailwind with smooth scroll and animation.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-400/30",
    glowColor: "shadow-violet-500/20",
    hoverGlow: "hover:shadow-violet-500/40",
    gradient: "from-violet-500 to-indigo-500",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-5 px-4 scroll-mt-20 z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Radial Gradient Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-900 to-slate-950"></div>
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-20">
          <span className="text-violet-400 text-sm font-mono tracking-wider uppercase bg-violet-400/10 px-4 py-2 rounded-full border border-violet-400/20">
            My Projects
          </span>

          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-500 mt-6 mb-4">
            CODED
            <span className="block text-5xl md:text-6xl font-light text-white/80">
              REALITY
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Explore my latest creations powered by the MERN stack and modern
            frontend magic — built with performance, security, and style in
            mind.
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-blue-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className={`group relative p-8 rounded-3xl border ${project.borderColor} ${project.bgColor} backdrop-blur-xl ${project.glowColor} ${project.hoverGlow} transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-3 cursor-pointer`}
            >
              {/* Gradient Border Glow */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 p-[1px]`}
              >
                <div className="w-full h-full rounded-3xl bg-slate-900/60"></div>
              </div>

              <div className="relative z-10 text-left space-y-5">
                <div
                  className={`inline-flex p-4 rounded-2xl ${project.bgColor} border ${project.borderColor} group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className={`w-10 h-10 ${project.color}`} />
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full ${project.bgColor} border ${project.borderColor} text-slate-300 group-hover:text-white transition-colors`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className={`group/btn mt-4 flex items-center gap-2 text-sm font-semibold ${project.color} hover:text-white transition-colors`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
