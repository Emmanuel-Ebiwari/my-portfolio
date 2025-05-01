"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function ElevatorPitch() {
  return (
    <section id="elevator-pitch" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-6xl font-bold mb-12 flex items-center justify-end">
          <div className="h-px bg-zinc-800 flex-grow ml-8"></div>
          Elevator Pitch
          <span className="text-indigo-500 ml-2">.</span>
        </h2>

        <motion.div
          className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden relative max-w-4xl mx-auto aspect-video"
          whileHover={{
            boxShadow: "0 0 30px rgba(99, 102, 241, 0.2)",
          }}
        >
          {/* Video Placeholder */}
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/yrwyZ8GHjMQ?autoplay=0&mute=0&loop=0&controls=1&playlist=yrwyZ8GHjMQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Video Overlay Text */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              My Elevator Pitch
            </h3>
            <p className="text-zinc-300 text-sm md:text-base">
              Click to play my 1-minute introduction
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
