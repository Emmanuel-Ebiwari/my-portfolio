"use client";

import { motion } from "framer-motion";
import { link } from "fs";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function Portfolio() {
  const projects = [
    {
      title: "Biologix Laboratories",
      description:
        "A laboratory website providing information about medical tests, services, and laboratory operations.",
      tech: ["Wordpress", "PHP"],
      image: "/projects/biologix.png",
      link: "https://lab.biologix.com.ng",
    },
    {
      title: "ShoesByBecky",
      description:
        "An e-commerce site showcasing and selling handmade shoes with payment processing and inventory management.",
      tech: ["Wordpress", "WooCommerce", "Paystack", "PHP"],
      image: "/projects/shoesbybecky.png",
      link: "https://shoesbybecky.com",
    },
    {
      title: "Disciples of Christ Ministry",
      description:
        "A church website for viewing events, watching livestreams, accessing previous video and audio sermons, and giving to the church.",
      tech: ["Wordpress", "Paystack", "PHP"],
      image: "/projects/dcmng.jpg",
      link: "https://dcmng.org",
    },
    {
      title: "Tracksend",
      description:
        "A website showcasing the features of a SaaS product that provides automated messaging solutions for businesses using SMS, Rich Media SMS, and WhatsApp.",
      tech: ["Wordpress", "PHP", "React"],
      image: "/projects/tracksend.jpg",
      link: "https://tracksend.co",
    },
    {
      title: "Medissah",
      description:
        "A hospital website for screening, booking appointments, and providing basic medical information.",
      tech: ["Wordpress"],
      image: "/projects/medissah.jpg",
      link: "https://medissah.com",
    },
    {
      title: "Kornerstone Church London",
      description:
        "A church website for viewing events, watching livestreams, accessing previous video and audio sermons, and giving to the church.",
      tech: ["Wordpress", "Paystack"],
      image: "/projects/kornerstone.jpg",
      link: "http://kstonechurch.org.uk",
    },
    {
      title: "Sharpen Your Axe",
      description:
        "A book launch website designed to allow users to preorder a book and access related information.",
      tech: ["Wordpress", "WooCommerce", "Paystack"],
      image: "/projects/sharpen-your-axe.jpg",
    },
    {
      title: "Tracksend Waitlist",
      description:
        "A waitlist application for Tracksend, allowing users to sign up and receive updates.",
      tech: ["React", "NodeJs", "MySQL"],
      image: "/projects/tracksend-marketing.jpg",
    },
    {
      title: "Tracksend Marketing",
      description:
        "A marketing website for Tracksend, showcasing features and benefits of the platform.",
      tech: ["HTML", "CSS", "Javascript"],
      image: "/projects/tracksend-marketing2.jpg",
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
        <h2 className="text-3xl md:text-6xl font-bold mb-12 flex items-center justify-end">
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
              <div className="relative h-40 md:h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  {project?.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-indigo-500"
                    >
                      <ExternalLink className="w-4 h-4  md:w-5 md:h-5" />
                    </a>
                  )}
                </div>
                <p className="text-zinc-400 mb-4 text-sm md:text-base">
                  {project.description}
                </p>

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
