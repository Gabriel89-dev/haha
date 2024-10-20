import { div } from 'framer-motion/client';
import React from 'react';
import {FaInstagram,} from 'react-icons/fa';
import {LuMailOpen} from 'react-icons/lu';

const Footer = () => {
  return (
    <div className='bg-black min-h-screen-25px'>
    <div className='px-6 md:px-0 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Gabriel Keban</h1>

        <div className='flex space-x-6 mt-4'>
            <a href="https://www.instagram.com/bannn28_/" className='hover:text-gray-300'><FaInstagram size={24}/></a>
            <a href="" className='hover:text-gray-300'><LuMailOpen size={24}/></a>
        </div>
    </div>
    </div>
  )
}

export default Footer