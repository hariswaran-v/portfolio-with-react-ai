import { Database, Server, Code2, Cpu } from "lucide-react";

const mernSkills = [
  {
    label: "MongoDB",
    icon: Database,
    description: "NoSQL database used for scalable applications.",
    color: "text-green-400",
    bgColor: "bg-green-900/20",
  },
  {
    label: "Express.js",
    icon: Server,
    description: "Fast and minimalist backend framework for Node.js.",
    color: "text-gray-300",
    bgColor: "bg-gray-800/20",
  },
  {
    label: "React.js",
    icon: Code2,
    description: "Frontend library for building modern UIs.",
    color: "text-blue-400",
    bgColor: "bg-blue-900/20",
  },
  {
    label: "Node.js",
    icon: Cpu,
    description: "JavaScript runtime environment on the server.",
    color: "text-lime-400",
    bgColor: "bg-lime-900/20",
  },
];

const MyStack = () => {
  return (
    <section className="relative py-20 px-4 scroll-mt-20 z-10 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          <span className="text-cyan-400">MERN</span> Stack Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mernSkills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-md shadow-lg transform transition duration-300 hover:scale-105 hover:border-cyan-400 ${skill.bgColor}`}
            >
              <skill.icon className={`w-10 h-10 mx-auto mb-4 ${skill.color}`} />
              <h3 className="text-xl font-semibold text-white">
                {skill.label}
              </h3>
              <p className="text-sm text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyStack;
