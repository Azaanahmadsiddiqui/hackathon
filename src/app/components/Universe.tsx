import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const Universe = () => {
  return (
    <div className={montserrat.className}>
        <div className='bg-[#FFFFFF] h-auto md:h-[700px] text-white flex flex-col md:flex-row w-full'>
            <div className='w-full md:w-[70%] h-full ml-[100px]'>
                <Image src={'/images/hero-cover-1.png'} width={700} height={100} alt='carousel' />
            </div>
            <div className='w-full md:w-[50%] h-full mt-[220px]'>
                <h3 className='text-[#BDBDBD]'>SUMMER 2020</h3><br />
                <h1 className='text-5xl md:text-5xl font-semibold w-full md:w-[500px] text-black'>Part of the Neutral Universe</h1><br />
                <p className='text-black'>We know how large objects will act,</p><p className='text-black'> but things on a small scale.</p><br />
                <span className='flex gap-6'>
                  <Button className='bg-[#2DC071] text-white font-semibold'>BUY NOW</Button>
                  <Button className='bg-white text-[#2DC071] border-2 border-[#2DC071] font-semibold'>READ MORE</Button>
                </span>
            </div>
        </div>
    </div>
  );
};

export default Universe;
