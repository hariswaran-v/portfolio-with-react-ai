import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    description:
      "Responsive personal portfolio built with React and Tailwind CSS.",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "Blog App",
    image: "/images/blog.png",
    description:
      "Fullstack MERN blog app with user authentication and CRUD features.",
    link: "https://your-blog-app-link.com",
  },
  {
    title: "E-Commerce Store",
    image: "/images/ecommerce.png",
    description:
      "E-commerce store with product filters, cart, and checkout functionality.",
    link: "https://your-store-link.com",
  },
  {
    title: "Task Tracker",
    image: "/images/task.png",
    description: "Task management tool using React hooks and local storage.",
    link: "https://your-task-tracker-link.com",
  },
  {
    title: "Chat App",
    image: "/images/chat.png",
    description: "Real-time chat app built with Socket.io and Node.js.",
    link: "https://your-chat-app-link.com",
  },
  {
    title: "Weather App",
    image: "/images/weather.png",
    description: "Weather forecast app using OpenWeatherMap API.",
    link: "https://your-weather-app-link.com",
  },
];

const Projects = () => {
  return (
    <section className="bg-slate-900 px-6 py-12 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-cyan-400 text-left">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-cyan-500/20 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
