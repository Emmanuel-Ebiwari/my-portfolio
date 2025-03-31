"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payment processing and inventory management.",
      tech: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with animations and dark mode support.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered application that generates custom content based on user prompts.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-bold mb-12 flex items-center justify-end">
          <div className="h-px bg-zinc-800 flex-grow mr-8"></div>
          Projects
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
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-zinc-800 text-xs px-2 py-1 rounded">
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
  )
}

