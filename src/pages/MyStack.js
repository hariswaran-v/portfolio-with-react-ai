import {
  Database,
  TerminalSquare,
  Atom,
  ServerCog,
  Code2,
  Zap,
  Shield,
  Layers,
} from "lucide-react";

const mernSkills = [
  {
    label: "MongoDB",
    icon: Database,
    description:
      "Document-based NoSQL database for high-performance, scalable applications with flexible schema design.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/20",
    hoverGlow: "hover:shadow-emerald-500/40",
    percentage: 92,
    features: ["Aggregation Pipeline", "Replica Sets", "Sharding", "GridFS"],
  },
  {
    label: "Express.js",
    icon: TerminalSquare,
    description:
      "Lightning-fast, minimalist web framework for Node.js with robust middleware ecosystem.",
    color: "text-slate-300",
    bgColor: "bg-slate-500/10",
    borderColor: "border-slate-500/30",
    glowColor: "shadow-slate-500/20",
    hoverGlow: "hover:shadow-slate-500/40",
    percentage: 95,
    features: ["RESTful APIs", "Middleware", "Routing", "Authentication"],
  },
  {
    label: "React.js",
    icon: Atom,
    description:
      "Component-based frontend library for building dynamic, interactive user interfaces with virtual DOM.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
    hoverGlow: "hover:shadow-blue-500/40",
    percentage: 98,
    features: ["Hooks", "Context API", "JSX", "Component Lifecycle"],
  },
  {
    label: "Node.js",
    icon: ServerCog,
    description:
      "Event-driven JavaScript runtime built on Chrome's V8 engine for scalable network applications.",
    color: "text-lime-400",
    bgColor: "bg-lime-500/10",
    borderColor: "border-lime-500/30",
    glowColor: "shadow-lime-500/20",
    hoverGlow: "hover:shadow-lime-500/40",
    percentage: 90,
    features: ["Event Loop", "NPM Ecosystem", "Streams", "Clustering"],
  },
];

const additionalSkills = [
  { icon: Code2, label: "TypeScript", color: "text-blue-500" },
  { icon: Zap, label: "Next.js", color: "text-white" },
  { icon: Shield, label: "JWT Auth", color: "text-orange-400" },
  { icon: Layers, label: "Redux", color: "text-purple-400" },
];

const MyStack = () => {
  return (
    <div className="relative min-h-screen py-24 px-4 scroll-mt-20 z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-slate-950"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Killer Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-cyan-400 text-sm font-mono tracking-wider uppercase bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
              Full Stack Mastery
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-500 mb-6 tracking-tight">
            MERN
            <span className="block text-5xl md:text-6xl font-light text-white/80">
              ECOSYSTEM
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Architecting next-generation web applications with cutting-edge
            technologies and industry-leading practices for maximum performance
            and scalability.
          </p>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mernSkills.map((skill, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl border ${skill.borderColor} bg-slate-900/60 backdrop-blur-xl ${skill.glowColor} ${skill.hoverGlow} transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 ${skill.bgColor}`}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-2xl ${skill.bgColor} border ${skill.borderColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skill.icon className={`w-8 h-8 ${skill.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.label}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full mr-1 ${
                                i < Math.floor(skill.percentage / 20)
                                  ? skill.color.replace("text-", "bg-")
                                  : "bg-slate-700"
                              }`}
                            ></div>
                          ))}
                        </div>
                        <span className={`text-sm font-mono ${skill.color}`}>
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors">
                  {skill.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    Key Expertise
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {skill.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${skill.color.replace(
                            "text-",
                            "bg-"
                          )}`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-500 font-medium">
                      PROFICIENCY LEVEL
                    </span>
                    <span className={`text-xs font-bold ${skill.color}`}>
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${
                        skill.color.includes("emerald")
                          ? "from-emerald-500 to-emerald-400"
                          : skill.color.includes("slate")
                          ? "from-slate-400 to-slate-300"
                          : skill.color.includes("blue")
                          ? "from-blue-500 to-blue-400"
                          : "from-lime-500 to-lime-400"
                      } transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105`}
                      style={{
                        width: `${skill.percentage}%`,
                        boxShadow: `0 0 10px ${
                          skill.color.includes("emerald")
                            ? "#10b981"
                            : skill.color.includes("slate")
                            ? "#94a3b8"
                            : skill.color.includes("blue")
                            ? "#3b82f6"
                            : "#84cc16"
                        }40`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">
            Extended <span className="text-cyan-400">Technology Arsenal</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((tech, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 px-6 py-3 bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <tech.icon
                  className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`}
                />
                <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStack;
