import React, { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Palette,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  Lock,
  BarChart3,
} from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      icon: Code2,
      title: "Frontend Development",
      subtitle: "Pixel-Perfect User Interfaces",
      description:
        "Crafting stunning, responsive web applications with cutting-edge technologies and exceptional user experience design.",
      longDescription:
        "Transform your ideas into beautiful, interactive web experiences. I specialize in creating pixel-perfect, responsive interfaces that work flawlessly across all devices and browsers.",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Three.js",
      ],
      features: [
        "Responsive Design",
        "Cross-browser Compatibility",
        "Performance Optimization",
        "SEO-Friendly Structure",
        "Accessibility Compliance",
        "Modern UI/UX Patterns",
      ],
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20",
      hoverGlow: "hover:shadow-blue-500/40",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 1,
      icon: Server,
      title: "Backend Development",
      subtitle: "Scalable Server Architecture",
      description:
        "Building robust, secure, and scalable backend systems with modern Node.js ecosystem and industry best practices.",
      longDescription:
        "Engineer powerful server-side solutions that handle complex business logic, data processing, and seamless integrations with third-party services.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "AWS",
      ],
      features: [
        "RESTful API Design",
        "JWT Authentication",
        "Data Validation",
        "Error Handling",
        "Database Optimization",
        "Cloud Deployment",
      ],
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      glowColor: "shadow-emerald-500/20",
      hoverGlow: "hover:shadow-emerald-500/40",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: 2,
      icon: Database,
      title: "Database Architecture",
      subtitle: "Intelligent Data Solutions",
      description:
        "Designing efficient, scalable database schemas and implementing advanced data management strategies for optimal performance.",
      longDescription:
        "Create robust data architectures that grow with your business. From schema design to query optimization, ensuring your data works as hard as you do.",
      technologies: [
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "Mongoose",
        "Prisma",
        "GraphQL",
      ],
      features: [
        "Schema Design",
        "Query Optimization",
        "Data Indexing",
        "Backup Strategies",
        "Migration Scripts",
        "Performance Monitoring",
      ],
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/20",
      hoverGlow: "hover:shadow-purple-500/40",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const additionalServices = [
    { icon: Palette, label: "UI/UX Design", color: "text-pink-400" },
    { icon: Shield, label: "Security Audit", color: "text-red-400" },
    { icon: Zap, label: "Performance Optimization", color: "text-yellow-400" },
    { icon: Globe, label: "SEO Services", color: "text-green-400" },
    { icon: Smartphone, label: "Mobile Responsive", color: "text-blue-400" },
    {
      icon: BarChart3,
      label: "Analytics Integration",
      color: "text-orange-400",
    },
  ];

  return (
    <section
      id="services"
      className="relative scroll-mt-28 min-h-screen py-24 px-4 z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-900 to-slate-950" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-violet-400 text-sm font-mono tracking-wider uppercase bg-violet-400/10 px-4 py-2 rounded-full border border-violet-400/20">
              Professional Services
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-400 to-blue-500 mb-6 tracking-tight">
            WHAT I
            <span className="block text-5xl md:text-6xl font-light text-white/80">
              DELIVER
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            End-to-end development services that transform your vision into
            powerful, scalable web applications with cutting-edge technology and
            exceptional user experience.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-400 via-blue-500 to-cyan-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative p-8 rounded-3xl border ${service.borderColor} bg-slate-900/60 backdrop-blur-xl ${service.glowColor} ${service.hoverGlow} transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-3 cursor-pointer ${service.bgColor}`}
              onMouseEnter={() => setActiveService(service.id)}
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 p-[1px]`}
              >
                <div className="w-full h-full rounded-3xl bg-slate-900/60"></div>
              </div>

              <div className="relative z-10">
                <div
                  className={`inline-flex p-4 rounded-2xl ${service.bgColor} border ${service.borderColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-10 h-10 ${service.color}`} />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm font-semibold ${service.color} uppercase tracking-wider`}
                    >
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {activeService === service.id
                      ? service.longDescription
                      : service.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(activeService === service.id
                        ? service.technologies
                        : service.technologies.slice(0, 3)
                      ).map((tech, idx) => (
                        <span
                          key={idx}
                          className={`text-xs px-3 py-1 rounded-full ${service.bgColor} border ${service.borderColor} text-slate-300 group-hover:text-white transition-colors`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {activeService === service.id && (
                    <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-300">
                      <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
                          >
                            <CheckCircle
                              className={`w-4 h-4 ${service.color}`}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      className={`group/btn flex items-center gap-2 text-sm font-semibold ${service.color} hover:text-white transition-colors`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">
            Additional <span className="text-violet-400">Expertise</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl hover:border-violet-400/50 transition-all duration-300 hover:scale-105"
              >
                <service.icon
                  className={`w-8 h-8 ${service.color} mx-auto mb-3 group-hover:scale-110 transition-transform`}
                />
                <p className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">
                  {service.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
