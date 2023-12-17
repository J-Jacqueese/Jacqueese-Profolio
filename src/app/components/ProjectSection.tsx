"use client"
import React, { FC, useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.jpg",
    tags: ["All", "Web", 'H5'],
    gitUrl: '/',
    previewUrl: '/'
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.jpg",
    tags: ["All", "Web"],
    gitUrl: '/',
    previewUrl: '/'
  }
];
const ProjectSection: FC = () => {
  const [tag, setTag] = useState("All")
  const handleTagChange = (newTag: string) => {
    setTag(newTag)
  }
  const filteredProjects = projectsData.filter((project) => project.tags.includes(tag))
  return (
    <div>
      <h1 className='text-center text-white font-bold mb-4 text-4xl' id='project'>My Project</h1>
      <div className='text-white flex flex-row justify-center items-center gap-3 py-6'>
        <ProjectTag onClick={handleTagChange} tag="All" isSelected={tag === "All"}></ProjectTag>
        <ProjectTag onClick={handleTagChange} tag="Web" isSelected={tag === "Web"}></ProjectTag>
        <ProjectTag onClick={handleTagChange} tag="H5" isSelected={tag === "H5"}></ProjectTag>
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-6'>{filteredProjects.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}></ProjectCard>)}</div>
    </div>
  )
}

export default ProjectSection