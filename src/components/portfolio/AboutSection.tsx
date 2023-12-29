"use client"
import React, { FC, useState, useTransition } from 'react'
import Image from 'next/image'
import { TabButton } from './TabButton'
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-4'>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-4'>
        <li>University XYZ - Bachelors Degree in Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-4'>
        <li>Company ABC - Software Engineer (2 years)</li>
      </ul>
    ),
  },
  {
    title: "Certificate",
    id: "certificate",
    content: (
      <ul className='list-disc pl-4'>
        <li>Certificate XYZ - Advanced Web Development</li>
      </ul>
    ),
  },
];

const AboutSection: FC = () => {
  const [tab, setTab] = useState<string>("skills")
  const [isPending, startTransition] = useTransition()
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id)
    });
  }
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-12 sm:py-16 xl:px-8'>
        <Image src='/images/me.jpg' alt='Here is Me' width={450} height={500} fill={false} className='rounded-2xl transition-transform duration-500  hover:rotate-6' />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>I am a full-stack web developer with a passion for creating interactive and responsive web applications. My experience includes working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and am always eager to expand my knowledge and skill set. As a team player, I am excited to collaborate with others to create amazing applications.</p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
            <TabButton selectTab={() => handleTabChange("certificate")} active={tab === "certificate"}>Certificate</TabButton>
          </div>
          <div className='mt-4'>{TAB_DATA.find((t)=>t.id===tab)?.content}</div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection