"use client";
import Image from "next/image";
import {motion} from 'framer-motion';
import project from "../assets/Porto.jpg";
import proj1 from "../assets/porto1.jpg";
import proj2 from "../assets/porto2.jpg";
import proj3 from "../assets/porto3.jpg";
import proj4 from "../assets/porto4.jpg";
import proj5 from "../assets/Porto5.jpg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import React, { use } from 'react'
import { FaArrowAltCircleDown } from "react-icons/fa";

const LinkIcon = [
    {icon : <FaArrowAltCircleDown size={140} />, label: "Arrow"},
]


const projects = [
    {
    title:"Portfolio Website",
    desc:"This project is a portfolio that I made using HTML, CSS and a little JavaScript help for the animation/motion help.",
    devstuck:"HTML, CSS, JavaScript",
    link:"https://gabriel89-dev.github.io/portfolio-gabriel/",
    git:"#",
    src: project
    },
    {
    title:"News Page Design Website",
    desc:"the design of this news page is one of the projects I made for the GTA San andreas Roleplay game which has been established from 2010",
    devstuck:"FIGMA",
    link:"https://www.figma.com/proto/t0jnMy8ZOD5jVPvuWwt37A/Untitled?page-id=0%3A1&node-id=1-2&t=a7QpYFwRZ3jDVHV7-1",
    git:"#",
    src: proj1
    },
    {
    title:"Mods Collection Deisgn Website",
    desc:"This mods collction is one of the requests from my friend to save a few mods.",
    devstuck:"FIGMA",
    link:"https://www.figma.com/proto/ImgD0iXEmx6QWnjuO3d6YM/Untitled?page-id=0%3A1&node-id=204-12&node-type=canvas&viewport=535%2C414%2C0.21&t=bS6h8hLVr5QeEc37-1&scaling=min-zoom&content-scaling=fixed",
    git:"#",
    src: proj2
    },
    {
    title:"Coffee Shop Website",
    desc:"This is a website design for a coffee shop that has a green nuance, of course, made with the help of figma",
    devstuck:"FIGMA",
    link:"https://www.figma.com/proto/Nf43SXgBixE5aWzIf9qqgY/Ui%2C-Cafe-Learning?page-id=0%3A1&node-id=2-3&node-type=canvas&viewport=1276%2C244%2C0.36&t=dtzwV5ywv1BocFsb-1&scaling=min-zoom&content-scaling=fixed",
    git:"#",
    src: proj3
    },
    {
    title:"Ecommerce Digital",
    desc:"This is my first learning project",
    devstuck:"FIGMA",
    link:"https://www.figma.com/proto/8g59LluCwK1qqJQPIXX6OH/Belajar-ui?page-id=0%3A1&node-id=2-2&node-type=canvas&viewport=698%2C610%2C1.13&t=x69oF16Yy5NbvcCL-1&scaling=scale-down&content-scaling=fixed",
    git:"#",
    src: proj4
    },
    {
    title:"Personal Portfolio Design",
    desc:"this is a portfolio of website designs that I made with figma",
    devstuck:"FIGMA",
    link:"https://www.figma.com/proto/rbXcKgl5I0MJd4M8yhDmAu/Portdolio-PKL?page-id=0%3A1&node-id=6-19&viewport=-1198%2C584%2C1.97&t=S2NnS5Lxx5cEvlTX-1&scaling=min-zoom&content-scaling=fixed",
    git:"#",
    src: proj5
    }
]

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-40" id="portfolio">

<h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12 ">My<span className='text-orange-400'>Portfolio</span></h1>
        
        <div className="px-6 md:px-0 max-w-[1200px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity:0, y:75 }}
                    whileInView={{ opacity: 1,y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className={`mt-12 flex flex-col  ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
                    >

                        <div className="space-y-2 max-w-[550px]">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <p className="text-lg text-white/70 p-4 break-words">{project.desc}</p>
                            <p className="text-xl text-orange-500 font-semibold">{project.devstuck}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                
                                <a href={project.link}>Link</a>
                                <a href={project.git}></a>
                            </div>
                        </div>

                        <div className="flex py-5 justify-center items-center">
                            <Image src={project.src} alt={project.title} className="h-[400px] w-auto object-cover"/>
                        </div>

                    </motion.div>
                ))}
        </div>

    </div>
  )
}

export default Portfolio