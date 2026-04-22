import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myPhoto from "./images/myphoto.png";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={dark ? "bg-gray-900 text-white" : "bg-white text-black"}>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full flex justify-between items-center p-4 shadow-lg backdrop-blur-md z-50 transition-all duration-300 ${
        dark ? "bg-gray-900/90 text-white" : "bg-white/90 text-gray-900"
      }`}>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          KS
        </motion.h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {[
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Education", href: "#education" },
            { name: "Contact", href: "#contact" }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`hover:text-blue-500 transition-colors duration-200 font-medium ${
                activeSection === item.name.toLowerCase() ? "text-blue-500" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className={`ml-4 px-3 py-1 border rounded-full transition-all duration-200 hover:scale-105 ${
              dark 
                ? "border-gray-600 hover:bg-gray-800" 
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          <div className="space-y-1">
            <div className={`w-6 h-0.5 transition-all duration-300 ${dark ? "bg-white" : "bg-gray-900"} ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
            <div className={`w-6 h-0.5 transition-all duration-300 ${dark ? "bg-white" : "bg-gray-900"} ${mobileMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-0.5 transition-all duration-300 ${dark ? "bg-white" : "bg-gray-900"} ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
          </div>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`absolute top-full left-0 w-full p-4 space-y-2 md:hidden ${
              dark ? "bg-gray-900" : "bg-white"
            } shadow-lg`}
          >
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Education", href: "#education" },
              { name: "Contact", href: "#contact" }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 hover:text-blue-500 transition-colors duration-200 ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <motion.img
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            src={myPhoto}
            alt="profile"
            className="relative rounded-full w-40 h-40 md:w-48 md:h-48 border-4 border-white shadow-2xl object-cover object-top"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hi, I'm Karan Shaw
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Frontend Developer | React Enthusiast | Creative Coder
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/cv.docx"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 border-2 rounded-full font-semibold transition-all duration-200 ${
                dark 
                  ? "border-white text-white hover:bg-white hover:text-gray-900" 
                  : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
              }`}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 animate-bounce"
        >
          <svg className={`w-6 h-6 ${dark ? "text-white" : "text-gray-900"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className={`grid md:grid-cols-2 gap-8 items-center ${
            dark ? "bg-gray-800/50" : "bg-gray-50/50"
          } p-8 rounded-2xl backdrop-blur-sm`}>
            <div>
              <p className="text-lg leading-relaxed mb-4">
                I am a passionate frontend developer with a keen interest in React.js and modern web technologies. I love building responsive, user-friendly websites that deliver exceptional user experiences.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                My journey in web development started with HTML and CSS, and has evolved to include JavaScript, React, and various modern frameworks. I'm always eager to learn new technologies and improve my skills.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Passionate", "Creative", "Problem Solver", "Team Player", "Quick Learner"].map((trait) => (
                  <span
                    key={trait}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      dark 
                        ? "bg-blue-900/30 text-blue-300 border border-blue-700/50" 
                        : "bg-blue-100 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Experience", value: "Fresher" },
                { label: "Projects", value: "3+ Completed" },
                { label: "Technologies", value: "5+ Stack" },
                { label: "Learning", value: "Always" }
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-lg text-center ${
                    dark ? "bg-gray-700/50" : "bg-white/50"
                  } backdrop-blur-sm border ${
                    dark ? "border-gray-600" : "border-gray-200"
                  }`}
                >
                  <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
                  <div className="text-sm opacity-75">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "HTML", level: 90, icon: "🌐" },
              { name: "CSS", level: 85, icon: "🎨" },
              { name: "JavaScript", level: 80, icon: "⚡" },
              { name: "React", level: 75, icon: "⚛️" },
              { name: "Bootstrap", level: 80, icon: "🅱️" },
              // { name: "Tailwind CSS", level: 85, icon: "🎯" },
              { name: "Git/GitHub", level: 70, icon: "📦" },
              { name: "Responsive Design", level: 88, icon: "📱" }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg ${
                  dark ? "bg-gray-800/50" : "bg-white/50"
                } backdrop-blur-sm border ${
                  dark ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-sm text-blue-500 font-medium">{skill.level}%</span>
                </div>
                <div className={`w-full rounded-full h-2 ${
                  dark ? "bg-gray-700" : "bg-gray-200"
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className={`text-lg ${dark ? "text-gray-300" : "text-gray-600"}`}>
              Always learning and expanding my skill set with new technologies!
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Portfolio Website",
                description: "A responsive portfolio website built with modern web technologies to showcase my skills and projects.",
                tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
                github: "#",
                demo: "#",
                image: "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=Portfolio"
              },
              {
                title: "Image Search API Website",
                description: "A dynamic image search application that integrates with external APIs to fetch and display images.",
                tech: ["JavaScript", "API Integration", "CSS", "HTML"],
                github: "#",
                demo: "#",
                image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Image+Search"
              },
              {
                title: "React Task Manager",
                description: "A task management application built with React featuring CRUD operations and local storage.",
                tech: ["React", "JavaScript", "Tailwind CSS", "Local Storage"],
                github: "#",
                demo: "#",
                image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Task+Manager"
              },
              {
                title: "Weather Dashboard",
                description: "Real-time weather dashboard with location-based forecasts and beautiful data visualizations.",
                tech: ["JavaScript", "Weather API", "CSS", "Charts.js"],
                github: "#",
                demo: "#",
                image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Weather"
              },
              {
                title: "E-commerce Landing Page",
                description: "Modern e-commerce landing page with product showcases and smooth animations.",
                tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
                github: "#",
                demo: "#",
                image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=E-Commerce"
              },
              {
                title: "Blog Platform",
                description: "A clean and minimalist blog platform with markdown support and responsive design.",
                tech: ["React", "JavaScript", "CSS", "Markdown"],
                github: "#",
                demo: "#",
                image: "https://via.placeholder.com/400x250/EC4899/FFFFFF?text=Blog"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`group rounded-xl overflow-hidden ${
                  dark ? "bg-gray-800/50" : "bg-white/50"
                } backdrop-blur-sm border ${
                  dark ? "border-gray-700" : "border-gray-200"
                } shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className={`mb-4 line-clamp-2 ${
                    dark ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded-full ${
                          dark 
                            ? "bg-blue-900/30 text-blue-300 border border-blue-700/50" 
                            : "bg-blue-100 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Education Journey
            </span>
          </h2>
          
          <div className="relative">
            <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 ${
              dark ? "bg-gray-700" : "bg-gray-300"
            }`}></div>
            
            {[
              {
                degree: "Higher Secondary Education",
                board: "ISC Board",
                percentage: "56.80%",
                year: "2024",
                side: "left"
              },
              {
                degree: "Secondary Education",
                board: "ICSE Board",
                percentage: "70%",
                year: "2022",
                side: "right"
              }
            ].map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: edu.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  edu.side === "left" ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${edu.side === "left" ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl ${
                      dark ? "bg-gray-800/50" : "bg-white/50"
                    } backdrop-blur-sm border ${
                      dark ? "border-gray-700" : "border-gray-200"
                    } shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className={`text-lg mb-1 ${
                      dark ? "text-blue-400" : "text-blue-600"
                    }`}>
                      {edu.board}
                    </p>
                    <p className={`text-sm mb-2 ${
                      dark ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {edu.year}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-500">{edu.percentage}</span>
                      <span className={`text-sm ${
                        dark ? "text-gray-400" : "text-gray-600"
                      }`}>
                        Score
                      </span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className={`text-lg ${dark ? "text-gray-300" : "text-gray-600"}`}>
              Currently pursuing advanced web development skills and technologies
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className={`mb-8 ${dark ? "text-gray-300" : "text-gray-600"}`}>
                I'm always interested in hearing about new opportunities, exciting projects, or just having a chat about web development. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:karamshaw1708@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    dark ? "bg-gray-800/50" : "bg-white/50"
                  } backdrop-blur-sm border ${
                    dark ? "border-gray-700" : "border-gray-200"
                  } hover:shadow-lg transition-all duration-300`}
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className={`text-sm ${dark ? "text-gray-400" : "text-gray-600"}`}>
                      karamshaw1708@gmail.com
                    </div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="tel:+917602024262"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    dark ? "bg-gray-800/50" : "bg-white/50"
                  } backdrop-blur-sm border ${
                    dark ? "border-gray-700" : "border-gray-200"
                  } hover:shadow-lg transition-all duration-300`}
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className={`text-sm ${dark ? "text-gray-400" : "text-gray-600"}`}>
                      +91 7602024262
                    </div>
                  </div>
                </motion.a>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { name: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", url: "#" },
                    { name: "LinkedIn", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", url: "#" },
                    { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", url: "#" }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        dark 
                          ? "bg-gray-800 hover:bg-gray-700 border border-gray-700" 
                          : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
                      }`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className={`p-6 rounded-xl ${
                dark ? "bg-gray-800/50" : "bg-white/50"
              } backdrop-blur-sm border ${
                dark ? "border-gray-700" : "border-gray-200"
              }`}>
                <div className="mb-4">
                  <label className={`block mb-2 font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      dark 
                        ? "bg-gray-700 border-gray-600 text-white" 
                        : "bg-white border-gray-300 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-4">
                  <label className={`block mb-2 font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      dark 
                        ? "bg-gray-700 border-gray-600 text-white" 
                        : "bg-white border-gray-300 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label className={`block mb-2 font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      dark 
                        ? "bg-gray-700 border-gray-600 text-white" 
                        : "bg-white border-gray-300 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${
        dark 
          ? "bg-gray-900 border-gray-800 text-gray-400" 
          : "bg-white border-gray-200 text-gray-600"
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-semibold mb-2">Karan Shaw</p>
              <p className="text-sm">Frontend Developer | React Enthusiast</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex gap-4">
                {[
                  { name: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", url: "https://github.com/Karanshaw-tech" },
                  { name: "LinkedIn", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", url: "https://www.linkedin.com/in/karanshaw" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      dark 
                        ? "bg-gray-800 hover:bg-gray-700 border border-gray-700" 
                        : "bg-gray-100 hover:bg-gray-200 border border-gray-300"
                    }`}
                    aria-label={social.name}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-sm">
                  © 2026 Karan Shaw. All rights reserved.
                </p>
                <p className="text-xs mt-1">
                  Built with React, Tailwind CSS & Framer Motion
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
