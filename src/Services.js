import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaTools,
  FaCloud,
  FaLaptopCode,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl text-cyan-400" />,
    title: "Frontend Development",
    description:
      "Building responsive, pixel-perfect, and interactive UI using React.js and Tailwind CSS.",
  },
  {
    icon: <FaServer className="text-4xl text-cyan-400" />,
    title: "Backend APIs",
    description:
      "Creating robust REST APIs with Node.js and Express to power full-stack web apps.",
  },
  {
    icon: <FaDatabase className="text-4xl text-cyan-400" />,
    title: "Database Management",
    description:
      "Handling data securely with MongoDB and Mongoose for scalability and performance.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-cyan-400" />,
    title: "Mobile Responsive",
    description:
      "Ensuring your website looks great on all screen sizes with mobile-first design.",
  },
  {
    icon: <FaTools className="text-4xl text-cyan-400" />,
    title: "Debug & Optimization",
    description:
      "Fixing bugs and optimizing code for better performance and smoother UX.",
  },
  {
    icon: <FaCloud className="text-4xl text-cyan-400" />,
    title: "Cloud Deployment",
    description:
      "Deploying apps on platforms like Vercel, Netlify, and Render for live access.",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-cyan-400" />,
    title: "Fullstack Projects",
    description:
      "Delivering complete MERN stack apps with seamless frontend-backend integration.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-cyan-400" />,
    title: "Security Best Practices",
    description:
      "Implementing authentication and secure coding to protect user data.",
  },
];

const Services = () => {
  return (
    <section className="bg-slate-900 px-6 py-12 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400 text-left">
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-cyan-500/20 transition text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
