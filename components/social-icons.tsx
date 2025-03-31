"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Twitter, Globe } from "lucide-react"

export function SocialIcons() {
  const icons = [
    { Icon: Linkedin, href: "https://linkedin.com" },
    { Icon: Github, href: "https://github.com" },
    { Icon: Twitter, href: "https://twitter.com" },
    { Icon: Globe, href: "#" },
  ]

  return (
    <div className="flex items-center space-x-4">
      {icons.map(({ Icon, href }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Icon size={20} />
        </motion.a>
      ))}
    </div>
  )
}

