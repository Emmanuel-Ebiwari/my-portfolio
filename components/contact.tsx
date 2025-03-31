"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-zinc-900 rounded-xl p-12"
      >
        <h2 className="text-6xl font-bold mb-8 flex items-center">
          Contact
          <span className="text-indigo-500 ml-2">.</span>
        </h2>

        <p className="text-xl text-zinc-300 mb-4">
          Shoot me an email if you want to connect! You can also find me on{" "}
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Linkedin
          </a>{" "}
          or{" "}
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Twitter
          </a>{" "}
          if that's more your speed.
        </p>

        <div className="mt-8 flex items-center text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail mr-4"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <a
            href="mailto:ebiwariemma@gmail.com"
            className="hover:text-indigo-300 transition-colors"
          >
            ebiwariemma@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
