"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function ElevatorPitch() {
  return (
    <section id="elevator-pitch" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-bold mb-12 flex items-center">
          Elevator Pitch
          <span className="text-indigo-500 ml-2">.</span>
          <div className="h-px bg-zinc-800 flex-grow ml-8"></div>
        </h2>

        <motion.div
          className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden relative max-w-4xl mx-auto aspect-video"
          whileHover={{
            boxShadow: "0 0 30px rgba(99, 102, 241, 0.2)",
          }}
        >
          {/* Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 rounded-full bg-indigo-600/80 flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.9)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={36} className="text-white ml-1" />
            </motion.div>
          </div>

          {/* Video Overlay Text */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-xl font-semibold mb-2">My Elevator Pitch</h3>
            <p className="text-zinc-300">Click to play my 30-second introduction</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

