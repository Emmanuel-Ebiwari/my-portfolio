"use client"

import { motion } from "framer-motion"

export function Experience() {
  const experiences = [
    {
      company: "Google",
      role: "Software Engineer",
      period: "2022 - Present",
      location: "Atlanta",
      description:
        "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
      technologies: ["Angular", "Python", "GCP", "Git", "GitHub", "Java", "Golang", "K8s"],
    },
    {
      company: "Facebook",
      role: "Software Engineer",
      period: "2020 - 2022",
      location: "San Francisco",
      description:
        "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
      technologies: ["React", "Node", "PHP", "GraphQL", "Presto", "Cassandra"],
    },
    {
      company: "Amazon",
      role: "Software Engineer",
      period: "2016 - 2020",
      location: "Seattle",
      description:
        "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
      technologies: ["Java", "Python", "AWS", "Spark", "Airflow", "S3", "DynamoDB"],
    },
  ]

  return (
    <section id="experience" className="py-16">
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
              className="border-b border-zinc-800 pb-16 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
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
                  <span key={tech} className="bg-zinc-800 text-xs px-3 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

