import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
  
 const montserrat = Montserrat ({
    subsets:["latin"],
    weight:['400','700'],
 });

const Hero = () => {
  return (
    <div className={montserrat.className}>
           <section className='relative h-screen flex items-center bg-cover bg-center' style={{ backgroundImage: 'url(/images/carousel1.png)' }}>
        <div className='container mx-auto text-center px-4 md:px-8 lg:px-16'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold'>Your Creative Journey Starts Here</h1>
            <p className='mt-4 text-xl text-white'>Explore our new collections and unleash your creativity</p>
            <button className='mt-6 bg-[#2DC071] text-white py-2 px-6 rounded-lg'>Shop Now</button>
        </div>
    </section>
    </div>
    
  )
}

export default Hero;
