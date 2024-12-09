import React from 'react'
import { Montserrat } from 'next/font/google'
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const montserrat = Montserrat ({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const About = () => {
  return (
    <div className={montserrat.className}>
        <div className='w-full h-[600px]'>
        <div className='flex justify-end items-center w-full h-full'>
            <div className='space-y-8 w-[40%]'>
                  <h3 className='text-xl font-semibold'>ABOUT COMPANY</h3>
                  <h1 className='text-6xl font-bold'>ABOUT US</h1>
                  <p className='w-[300px]'>We know how large objects will act, but things on a small scale</p>
                  <Button className='bg-[#23A6F0]'>Get Quote Now</Button>
            </div>
            <div className=''>
                <Image src={'/images/about.png'} width={700} height={100} alt='about'></Image>
            </div>
         </div>
         
        </div> 
             
    </div>
  )
}

export default About
