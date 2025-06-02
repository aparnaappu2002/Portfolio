const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Redux"],
      icon: "🎨",
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications and RESTful APIs.",
      skills: ["Node.js", "Express.js", "REST API", "Authentication", "Authorization"],
      icon: "⚙",
    },
    {
      title: "Database Management",
      description: "Designing and implementing efficient database structures.",
      skills: ["MongoDB", "MySQL", "Firebase", "Redis"],
      icon: "🗄",
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and visually appealing user experiences.",
      skills: ["Responsive Design", "Figma", "Prototyping"],
      icon: "✨",
    },
    {
      title: "Deployment & DevOps",
      description: "Automating workflows and deploying applications to production.",
      skills: ["Git/GitHub", "AWS", "Vercel", "Netlify", "Docker"],
      icon: "🚀",
    },
    {
      title: "Programming Languages",
      description: "Proficient in multiple programming languages for various use cases.",
      skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
      icon: "💻",
    },
  ]

  return (
    <section id="skills">
        <div className="min-h-screen bg-dark py-20 px-4 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
            My Skills
          </h1>
          <p className="text-gray-300 text-l leading-relaxed max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across the full stack of web development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-red-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              {/* Icon */}
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {category.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{category.description}</p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-xs text-purple-200 hover:bg-purple-500/30 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
            <span className="text-gray-300">Ready to work together?</span>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div> */}
      </div>
    </div>

    </section>
    
  )
}

export default Skills