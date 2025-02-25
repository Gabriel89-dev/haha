"use client";
import React from 'react';
import Image from "next/image";
import aboutImg from "../assets/profil.png";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";
import { div } from 'framer-motion/client';

const About = () => {
  return (
    <div className='bg-black min-h-screen-25px'>
    <div className="max-w-[1200px] mx-auto" id="about">

        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 ">About <span className='text-orange-400'>Me</span></h1>
        <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">

            <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className="flex flex-row p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <Image 
                            src={book}
                            alt="book"
                            className="w-auto h-[130px]"
                    />
                    <div className="flex flex-col mt-4">
                    <h2 className="text-2xl font-bold text-white/80">Education</h2>
                    <p className="text-lg text-white/70 mt-2">at school I have learn several programming languages such as php, c++, and I am more interested in next js and tailwind css. </p>
                    </div>
                </div>
            </div>   
            <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden rounded-xl">
                <div className="flex flex-row p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <Image 
                            src={pc}
                            alt="book"
                            className="w-auto h-[130px]"
                    />
                    <div className="flex flex-col mt-4">
                    <h2 className="text-2xl font-bold text-white/90">Problem Solving</h2>
                    <p className="text-lg text-white/70 mt-2">I approach challanges with a logical and systematic mindset</p>
                    </div>
                </div>
            </div>   
            <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden rounded-xl">
                <div className="flex flex-row p-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <Image 
                            src={card}
                            alt="book"
                            className="w-auto h-[130px]"
                    />
                    <div className="flex flex-col mt-4">
                    <h2 className="text-2xl font-bold text-white/90">Experience</h2>
                    <p className="text-lg text-white/70 mt-2">I have experience in creating UI/UX Design for a website.</p>
                    </div>
                </div>
            </div>   
            <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden rounded-xl">
                <div className="flex flex-row p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <Image 
                            src={finance}
                            alt="book"
                            className="w-auto h-[130px]"
                    />
                    <div className="flex flex-col mt-4">
                    <h2 className="text-2xl font-bold text-white/90">Technical Skills</h2>
                    <p className="text-lg text-white/70 mt-2">As a UI / UX Deisgner but I keep trying to learn how to create responsive websites and designs that provide the best experience for users.</p>
                    </div>
                </div>
            </div>   
            </div>   
        </div>

    </div>
  )
}

export default About