import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image';

const montserrat = Montserrat ({
    subsets: ["latin"],
    weight:['400','700'],
});

const AboutSection = () => {
  return (
    <div className={montserrat.className}>
          <div className='gap-10 flex ml-[200px] items-center h-[200px] w-[1000px] mt-4'>
            <span className='ml-10 w-[370px] space-y-4'>
                <h4 className='text-[#E74040] text-sm font-semibold'>Problems trying</h4>
                <h1 className='text-2xl font-bold'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h1>
            </span>
            <span className='mr-10 w-[520px]'>
                <p className='text-sm text-[#BDBDBD]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </span>
        </div> 
        <div className='flex h-[250px] w-full justify-center items-center gap-20'>
            <span className=' w-[150px] items-center'>
                <h1 className='text-7xl font-bold'>15K</h1>
            <p>Happy Customers</p>
                </span>
            <span className=' w-[150px] items-center'>
                <h1 className='text-7xl font-bold'>150K</h1>
            <p>Monthly Visitors</p>
                </span>
            <span className=' w-[200px] items-center'>
                <h1 className='ml-10 text-7xl font-bold'>15</h1>
            <p>Countries Worldwide</p>
                </span>
            <span className=' w-[150px] items-center'>
                <h1 className='text-7xl font-bold'>100+</h1>
            <p className=''>Top Partners</p>
                </span>
        </div> 
        <div className='flex w-full justify-center'>
            <Image src={'/images/vedio.png'} width={1000} height={100} alt='vedio'></Image>
        </div>
        <div>
            <Image src={'/images/desktop-team.png'} width={1400} height={100} alt='team'></Image>
        </div>
        <div>
            <Image src={'/images/desktop-clients.png'} width={1400} height={100} alt='desktop clients'></Image>
        </div>
        <div>
            <Image src={'/images/desktop-testimonials.png'} width={1400} height={100} alt='testimonials'></Image>
        </div>
    </div>
  )
}

export default AboutSection