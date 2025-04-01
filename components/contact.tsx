"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-xxl md:max-w-xl mx-auto bg-zinc-900 rounded-xl p-12 px-6 md:px-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          Contact
          <span className="text-indigo-500 ml-2">.</span>
        </h2>

        <p className="text-md md:text-l text-zinc-300 mb-4 px-0 md:px-4">
          Feel free to reach out via email if you'd like to connect! You can
          also find me on{" "}
          <a
            href="https://www.linkedin.com/in/emmanuel-ebiwari-9898051a9"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Linkedin
          </a>{" "}
          {/* or{" "}
          <a
            href="https://github.com/Emmanuel-Ebiwari"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Github
          </a>{" "} */}
          whichever works best for you.
        </p>

        <div className="mt-8 flex items-center justify-center text-md md:text-xl">
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
            className="lucide lucide-mail mr-1 md:mr-4"
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
