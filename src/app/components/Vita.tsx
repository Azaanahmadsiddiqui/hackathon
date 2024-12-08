import React from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '700'],
});

const Vita = () => {
  return (
    <div className={montserrat.className}>
        <div className='bg-[#23856D] h-[700px] text-white flex flex-col md:flex-row md:items-center w-full'>
            <div className='w-full md:w-[50%] h-full md:ml-[100px] md:mt-[220px] flex flex-col items-center md:items-start'>
                <h3>SUMMER 2020</h3>
                <h1 className='text-7xl font-semibold w-[500px] text-center md:text-left'>Vita Classic Product</h1>
                <p className='text-center md:text-left'>We know how large objects will act,</p>
                <p className='text-center md:text-left'>but things on a small scale.</p>
                <span className='flex gap-6 mt-4'>
                  <p className='text-2xl'>$16.48</p>
                  <Button className='bg-[#2DC071] text-white font-semibold'>ADD TO CART</Button>
               </span>
            </div>
            <div className='w-full md:w-[70%] h-full flex justify-center'>
                <Image src='/images/carousel2.png' width={250} height={100} alt='carousel' />
            </div>
        </div>
    </div>
  )
}

export default Vita;
