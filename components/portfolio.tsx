"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Portfolio() {
  const projects = [
    {
      title: "ShoesByBecky",
      description:
        "A full-featured e-commerce platform with payment processing and inventory management.",
      tech: ["Wordpress", "WooCommerce", "Paystack", "PHP"],
      image: "/projects/shoesbybecky.png",
    },
    {
      title: "Disciples of Christ Ministry",
      description:
        "A collaborative task management application with real-time updates and team features.",
      tech: ["Wordpress", "Paystack", "PHP"],
      image: "/projects/dcmng.jpg",
    },
    {
      title: "Tracksend",
      description:
        "A responsive portfolio website with animations and dark mode support.",
      tech: ["Wordpress", "PHP", "React"],
      image: "/projects/tracksend.jpg",
    },
    {
      title: "Medissah",
      description:
        "An AI-powered application that generates custom content based on user prompts.",
      tech: ["Wordpress"],
      image: "/projects/medissah.jpg",
    },
    {
      title: "Kornerstone Church London ",
      description:
        "An AI-powered application that generates custom content based on user prompts.",
      tech: ["Wordpress", "Paystack"],
      image: "/projects/kornerstone.jpg",
    },
    {
      title: "Sharpen Your Axe",
      description:
        "An AI-powered application that generates custom content based on user prompts.",
      tech: ["Wordpress", "WooCommerce", "Paystack"],
      image: "/projects/sharpen-your-axe.jpg",
    },
    {
      title: "Reis",
      description:
        "An AI-powered application that generates custom content based on user prompts.",
      tech: ["Wordpress", "Membership Management", "PHP"],
      image: "/projects/reis.jpg",
    },
  ];

  return (
    <section id="projects" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-bold mb-12 flex items-center justify-end">
          <div className="h-px bg-zinc-800 flex-grow mr-8"></div>
          Portfolio
          <span className="text-indigo-500 ml-2">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-800 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
