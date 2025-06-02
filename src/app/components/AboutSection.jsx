"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React JS</li>
        <li>Node JS</li>
        <li>Mongo DB</li>
        <li>Express JS</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Tech in Computer Science and Engineering </li>
        
        
      </ul>
    ),
  }
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    }); 
  };

  return (
    <section className="text-white " id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/aboutImage.jpg"  alt="about image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold  mb-4 bg-gradient-to-r from-pink-400 via-purple-400  to-red-400 bg-clip-text text-transparent">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
           I&apos;m a passionate MERN Stack Developer with a strong focus on building scalable, user-friendly web applications. Skilled in developing full-stack solutions using MongoDB, Express.js, React.js, and Node.js, I enjoy creating responsive UIs and robust backend services that solve real-world problems.
</p> <br />
<p className="text-base lg:text-lg text-justify">I have successfully built Lush Aura, a feature-rich eCommerce platform with product listings, user authentication, cart functionality, and payment integration. Currently, I&apos;m working on Planzo, an event management web application that helps users seamlessly plan and manage events through an intuitive, organized interface.</p> <br />

<p className="text-base lg:text-lg text-justify">I thrive in collaborative environments, love clean and maintainable code, and continuously seek to grow my skills in full-stack and cloud-based development.</p>
          
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;