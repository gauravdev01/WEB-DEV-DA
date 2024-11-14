"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Weather App",
    description: "Created a weather app using HTML, CSS, and JavaScript that allows users to enter a city name and view its current weather conditions. The app should fetch data from a weather API and display the temperature, weather description, and an appropriate weather icon.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shrishant2325/Weather-App",
    previewUrl: "https://weather-app-delta-five-84.vercel.app/",
  },
  {
    id: 2,
    title: "Quiz App",
    description: "Developed a quiz application using HTML, CSS, and JavaScript where users can answer multiple-choice questions within a set time limit. The app should display questions sequentially, provide feedback on correct or incorrect answers, and show the final score at the end.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shrishant2325/Quizz-App",
    previewUrl: "https://quiz-app-kappa-hazel.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Built an e-commerce website using HTML, CSS, and JavaScript that allows users to browse products, add them to a cart, and proceed to checkout. The website should feature product categories, a search function, a cart summary, and a responsive design for optimal viewing across devices.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shrishant2325/E-Commerce",
    previewUrl: "https://e-commerce-three-brown.vercel.app/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Create an online food ordering app using HTML, CSS, and JavaScript, allowing users to browse restaurants, select dishes, customize orders, and proceed to checkout.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Shrishant2325/Myonlinemeal",
    previewUrl: "https://myonlinemeal-chi.vercel.app/",
  },
  {
    id: 5,
    title: "Gym Form App",
    description: "Developed an online GYM application crafted with HTML, CSS, and JavaScript, offering a responsive interface with interactive features like dynamic navigation, form submission, and engaging button animations for a seamless user experience.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shrishant2325/Gym-App",
    previewUrl: "https://gym-app-bay-tau.vercel.app/",
  },
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
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
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
    </section>
  );
};

export default ProjectsSection;