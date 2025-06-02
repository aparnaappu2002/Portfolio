"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

const technologies = [
  {
    name: "MongoDB",
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    name: "Express.js",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "bg-gray-500/10 text-gray-300 border-gray-500/20",
  },
  {
    name: "React",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    name: "Node.js",
    category: "Runtime",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    name: "JavaScript",
    category: "Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  {
    name: "TypeScript",
    category: "Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    name: "SQL",
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    name: "Redux",
    category: "State Management",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    name: "Git",
    category: "Version Control",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    name: "Firebase",
    category: "Backend as a Service",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  {
    name: "HTML5",
    category: "Markup",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  {
    name: "CSS3",
    category: "Styling",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    name: "EJS",
    category: "Template Engine",
    logo: "/images/projects/icons8-ejs-48.png",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
  },

  {
    name: "Razorpay",
    category: "Payment Gateway",
    logo: "https://razorpay.com/assets/razorpay-logo.svg",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  
]


const categories = [
  {
    name: "Frontend",
    techs: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    color: "border-blue-500/30 bg-blue-500/5",
    icon: "🎨",
  },
  {
    name: "Backend",
    techs: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    color: "border-green-500/30 bg-green-500/5",
    icon: "⚙️",
  },
  {
    name: "Languages",
    techs: ["JavaScript", "TypeScript"],
    color: "border-yellow-500/30 bg-yellow-500/5",
    icon: "💻",
  },
]

export default function TechStackSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".tech-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".tech-heading",
            start: "top 80%",
          },
        },
      )

      // Staggered animation for tech cards
      gsap.fromTo(
        ".tech-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".tech-grid",
            start: "top 80%",
          },
        },
      )

      // Category cards animation
      gsap.fromTo(
        ".category-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".categories-grid",
            start: "top 80%",
          },
        },
      )

      // MERN stack highlight animation
      gsap.fromTo(
        ".mern-highlight",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".mern-highlight",
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="tech-stack" className="py-20 md:py-32 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="tech-heading text-3xl md:text-4xl font-bold mb-4 text-white">Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable web applications. Specialized in the MERN stack with
            expertise in full-stack development.
          </p>
        </div>

        {/* MERN Stack Highlight */}
        {/* <div className="mern-highlight mb-16 p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MERN Stack Expertise
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.slice(0, 4).map((tech) => (
              <div key={tech.name} className="flex flex-col items-center group">
                <div className="relative h-20 w-20 mb-4 rounded-full p-4 bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20">
                  <Image
                    src={tech.logo || "/placeholder.svg?height=50&width=50"}
                    alt={tech.name}
                    width={50}
                    height={50}
                    className="object-contain filter brightness-110"
                  />
                </div>
                <h4 className="font-medium text-center text-white group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </h4>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Categories */}
        {/* <div className="categories-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`category-card rounded-lg border ${category.color} bg-black/50 backdrop-blur-sm p-6`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        {/* All Technologies */}
        <div className="tech-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="tech-card overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 group p-4 flex flex-col items-center text-center"
            >
              <div className="relative h-16 w-16 mb-3 flex items-center justify-center">
                <Image
                  src={tech.logo || "/placeholder.svg?height=50&width=50"}
                  alt={tech.name}
                  width={50}
                  height={50}
                  className="object-contain transition-transform duration-300 group-hover:scale-110 filter brightness-110"
                />
              </div>
              <h4 className="font-medium text-sm text-white group-hover:text-blue-400 transition-colors">
                {tech.name}
              </h4>
              <span
                className={`mt-2 text-xs inline-flex items-center rounded-md border px-2 py-1 font-medium ${tech.color} bg-transparent`}
              >
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <span className="text-gray-400">Proficient in</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white font-medium">Full Stack Development</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
