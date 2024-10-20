import { div } from 'framer-motion/client';
import React from 'react';
import {FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaFigma, FaPhp} from 'react-icons/fa'
import { DiPhotoshop } from "react-icons/di"
import {SiAdobeillustrator} from "react-icons/si"

const skillIcons = [
    {icon : <FaHtml5 size={140} />, label: "HTML"},
    {icon : <FaCss3Alt size={140} />, label: "CSS"},
    {icon : <FaReact size={140} />, label: "React"},
    {icon : <FaJsSquare size={140} />, label: "JavaScript"},
    {icon : <FaFigma size={140} />, label: "Figma"},
    {icon : <FaPhp size={140} />, label: "Php"},
    {icon : <SiAdobeillustrator size={140} />, label: "Adobe Ilustrator"},
    {icon : <DiPhotoshop size={140} />, label: "Photoshop"},
]



const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32' id='skill'>
        <div className="text-white max-w-[1000px] mx-auto p-8 text-center">
            <h2 className="text-6xl font-bold mb-4">What I Do</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skillIcons.map((skill, index)=> (
            <div
            key={index}
            className='h-[220px] w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                {skill.icon}
                <p className='mt-2'>{skill.label}</p>
            </div>
        ))}
            </div>
        </div>
    </div>
  )
}

export default Skills