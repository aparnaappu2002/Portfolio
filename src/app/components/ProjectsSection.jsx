"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "LUSH AURA",
    description: `Lush Aura is a full-stack eCommerce web application built with the MERN stack, featuring Google authentication, product management, cart functionality, and Stripe-powered checkout.`,
    image: "/images/projects/lushaura.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aparnaappu2002/LUSH-AURA",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Student Management",
    description: `A Student Management Project using TypeScript, Redux, and repository architecture offers efficient state handling and scalable, maintainable code for managing student data.`,
    image: "/images/projects/studentmanagement.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aparnaappu2002/StudentManagement-Typescript",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "OLX Clone",
    description: `OLX Clone is a responsive marketplace web app built with React, Node.js, Express, MongoDB, and Firebase authentication, enabling users to post and sell the products.`,
    image: "/images/projects/olx.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aparnaappu2002/Olx-Clone-using-React",
    previewUrl: "/",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Completed Projects"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Current Project"
          isSelected={tag === "Web"}
        /> */}
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/aparnaappu2002?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
