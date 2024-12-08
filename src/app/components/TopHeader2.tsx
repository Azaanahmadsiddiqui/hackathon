import React from 'react'
import { Montserrat } from 'next/font/google'
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { MdOutlineLocalPhone } from 'react-icons/md';

const montserrat = Montserrat ({
    subsets: ["latin"],
    weight: ['400', "700"],
});

const TopHeader2 = () => {
  return (
    <div className={montserrat.className}>
          <div className='w-full p-3 hidden md:flex items-center bg-[#23856D]'>
         <span className='text-white flex items-center gap-1 ml-40 w-[200px]'>
            <MdOutlineLocalPhone />
            <p>(225) 555-0118</p>
            </span>
            <span className='text-white flex items-center gap-1 ml-8'>
            <TfiEmail /> 
            <p>michelle.rivera@example.com</p>
            </span>
            <div className='max-w-8xl flex mx-auto items-center '>
             <p className='text-white items-center'>
            
            <span className='font-bold ml-2'>Follow Us  and get a chance to win 80% off</span>
            </p>
        </div>
        <p className='text-white flex items-center gap-2 mr-20'>Follow Us 
            <span className='ml-1'>:</span>
        <FiInstagram />
        <AiOutlineYoutube />
        <FaFacebook />
        <FaTwitter />
        </p>
    </div>
    </div>
  )
}

export default TopHeader2