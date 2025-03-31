"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero")

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Exp", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-16 md:w-20 bg-zinc-900 border-r border-zinc-800 flex flex-col items-center py-8 fixed h-screen z-20 top-20 left-0" // Added top-20 to position below header
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`group flex flex-col items-center justify-center h-24 w-full relative ${
            activeSection === item.href.substring(1) ? "text-white" : "text-zinc-500"
          }`}
          onClick={() => setActiveSection(item.href.substring(1))}
        >
          {activeSection === item.href.substring(1) && (
            <motion.div
              layoutId="activeSection"
              className="absolute left-0 w-1 h-12 bg-indigo-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
          <span className="vertical-text text-sm font-medium transition-colors group-hover:text-white">
            {item.name}
          </span>
        </Link>
      ))}
    </motion.div>
  )
}

