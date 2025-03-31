"use client";

import { motion } from "framer-motion";

export function About() {
  const workSkills = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Redux",
    "NodeJS",
    "Express",
    "Postgres",
    "MongoDB",
    "GitHub",
    "Jira",
    "Heroku",
    "AWS",
  ];

  const funSkills = [
    "Rust",
    "Tailwind",
    "Java",
    "Spring",
    "Figma",
    "Whimsical",
    "Planetscale",
    "GraphQL",
    "Python",
    "FastAPI",
  ];

  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-bold mb-12 flex items-center">
          About
          <span className="text-indigo-500 ml-2">.</span>
          <div className="h-px bg-zinc-800 flex-grow ml-8"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-full">
          <div className="lg:col-span-2">
            <div className="flex mb-6">
              <div className="bg-indigo-600 text-white text-2xl font-bold w-12 h-12 flex items-center justify-center rounded mr-4 flex-shrink-0">
                H
              </div>
              <div>
                <p className="text-lg text-zinc-300 mb-6">
                  ey! I'm Emmanuel Ebiwari, if you haven't already gathered that
                  by now. I'm a painter turned software engineer from Daytona,
                  Florida. I specialize in the backend, primarily Node and Rust,
                  but love building with whatever tools are right for the job.
                </p>

                <p className="text-lg text-zinc-300 mb-6">
                  I currently work for Google on Google Photos. I also toss in
                  my ¢2 with the design systems teams from time to time (once an
                  artist, always an artist, amirite?).
                </p>

                <p className="text-lg text-zinc-300 mb-6">
                  Outside of work, I still love to paint. Any given Sunday
                  you'll find me scribbling some happy clouds with my son ☁️ I
                  even teach courses online if you're looking to learn!
                </p>

                <p className="text-lg text-zinc-300 mb-6">
                  I'm passively looking for new positions where I can merge my
                  love for code with my love for the canvas. If you think you've
                  got an opening that I might like, let's connect{" "}
                  <span className="inline-block">🔗</span>
                </p>

                <div className="mt-8">
                  <a
                    href="#"
                    className="text-indigo-400 flex items-center hover:text-indigo-300 transition-colors"
                  >
                    My links <span className="ml-2">→</span>
                  </a>
                  <div className="flex mt-4 space-x-4">
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
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
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
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
                        className="lucide lucide-github"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
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
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
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
                        className="lucide lucide-globe"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" x2="22" y1="12" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
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
                  className="lucide lucide-briefcase text-indigo-500 mr-2"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <h3 className="text-xl font-semibold">Use at work</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {workSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-zinc-800 rounded-md px-3 py-2 text-sm"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(79, 70, 229, 0.2)",
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
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
                  className="lucide lucide-smile text-indigo-500 mr-2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" x2="9.01" y1="9" y2="9" />
                  <line x1="15" x2="15.01" y1="9" y2="9" />
                </svg>
                <h3 className="text-xl font-semibold">Use for fun</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {funSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-zinc-800 rounded-md px-3 py-2 text-sm"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(79, 70, 229, 0.2)",
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
