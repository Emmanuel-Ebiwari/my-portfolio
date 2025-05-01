"use client";

import { motion } from "framer-motion";
import { SocialIcons } from "./social-icons";

export function About() {
  const workSkills = [
    "JavaScript",
    "TypeScript",
    "NextJs",
    "CSS",
    "React",
    "Redux",
    "NodeJS",
    "Express",
    "MySQL",
    "MongoDB",
    "GitHub",
    "Jira",
    "Docker",
    "Kubernetes",
    "Kafka",
    "BullMQ",
    "Redis",
    "ArgoCD",
  ];

  const funSkills = ["Tailwind", "Figma", "Python"];

  return (
    <section id="about" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-6xl font-bold  mb-6 md:mb-12 flex items-center">
          About
          <span className="text-indigo-500 ml-2">.</span>
          <div className="h-px bg-zinc-800 flex-grow ml-8"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-full">
          <div className="lg:col-span-2">
            <div className="flex mb-6">
              <div>
                <p className="leading-relaxed text-zinc-300 text-md md:text-lg mb-6">
                  <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-2 float-left text-1xl md:text-2xl">
                    H
                  </span>
                  ey! I'm Emmanuel Ebiwari. I'm a Fullstack Developer with a
                  strong background in building scalable and efficient web
                  applications
                </p>

                <p className="text-md md:text-lg text-zinc-300 mb-6">
                  I currently work at Tracksend, where I help develop automated
                  messaging solutions for businesses using SMS, Rich Media SMS,
                  and WhatsApp.
                </p>

                {/* <p className="text-lg text-zinc-300 mb-6">
                  Outside of work, I still love to paint. Any given Sunday
                  you'll find me scribbling some happy clouds with my son ☁️ I
                  even teach courses online if you're looking to learn!
                </p> */}
                <p className="text-lg text-zinc-300 mb-6">
                  Outside of work, I enjoy drawing and singing 
                  (though I haven't picked up an instrument yet). 
                  I also love unwinding with movies and games it's how I recharge and stay inspired.
                </p>

                <p className="text-md md:text-lg text-zinc-300 mb-6">
                  I'm always open to exciting opportunities whether it's
                  collaborating on something new or diving into fresh
                  challenges. Let's connect!{" "}
                  <span className="inline-block">🔗</span>
                </p>

                <div className="mt-2  md:mt-8 flex items-center">
                  <p className="text-indigo-400 flex items-center hover:text-indigo-300 transition-colors mt-4 space-x-4">
                    My links <span className="ml-2">→</span>
                  </p>
                  <div className="flex mt-4 ml-7 space-x-4">
                    <SocialIcons />
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
                <h3 className="text-lg md:text-xl font-semibold">
                  Use at work
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {workSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-zinc-800 rounded-md px-2 py-1 md:px-3 md:py-2 text-xs"
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
                <h3 className="text-lg md:text-xl font-semibold">
                  Use for fun
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {funSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-zinc-800 rounded-md px-2 py-1 md:px-3 md:py-2 text-xs"
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
