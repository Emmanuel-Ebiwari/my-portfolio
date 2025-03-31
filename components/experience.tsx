"use client";

import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      company: "Tracksend",
      role: "Fullstack Developer",
      period: "2022 - Present",
      location: "Nigeria, Lagos",
      description:
        "Fullstack Developer at Tracksend, responsible for developing and optimizing the platform, integrating new features, improving messaging capabilities, and enhancing user experience.",
      technologies: [
        "React",
        "Next js",
        "Git",
        "GitHub",
        "Node js",
        "Golang",
        "MySQL",
        "Redis",
        "MongoDB",
        "Typescript",
        "ArgoCd",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      company: "Self Employed",
      role: "Freelance Web Developer",
      period: "2021 - Present",
      location: "Nigeria, Lagos",
      description:
        "Freelance web developer specializing in designing, launching, and maintaining websites, including church platforms, a book launch site, an e-commerce store, and a real estate website.",
      technologies: ["React", "Node", "PHP", "Wordpress", "Next js"],
    },
    {
      company: "Prowedge",
      role: " Website Support Engineer",
      period: "2021 - 2021",
      location: "Nigeria, Lagos",
      description:
        "Provide website support for Prowedge, including email support, cPanel email backups, uptime monitoring with Orion, Google Analytics monitoring, and bug fixes.",
      technologies: [
        "Cpanel",
        "Wordpress",
        "Javascript",
        "Html",
        "Css",
        "ManageWp",
        "Google Analytics",
      ],
    },
  ];

  return (
    <section id="experience" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h2 className="text-6xl font-bold mb-12 flex items-center">
          Experience
          <span className="text-indigo-500 ml-2">.</span>
          <div className="h-px bg-zinc-800 flex-grow ml-8"></div>
        </h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-zinc-800 pb-10 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-bold">{exp.company}</h3>
                  <p className="text-indigo-400 mb-2">{exp.role}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-zinc-300">{exp.period}</p>
                  <p className="text-zinc-400">{exp.location}</p>
                </div>
              </div>

              <p className="text-zinc-300 mb-6">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-800 text-xs px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
