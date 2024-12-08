import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat ({
    subsets: ["latin"],
    weight: ['400','700'],
});

const Editor = () => {
  return (
    <div className={montserrat.className}>
        <section className='py-16 px-4 md:px-8 lg:px-16'>
        <h2 className='text-3xl font-bold text-center'>Our Creative Studio</h2>
        <p className='mt-4 text-lg text-center'>We create unique and beautiful designs to match your style</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
            <div className='bg-white shadow-md p-6'>
                <Image src={'/images/col.png'} alt='Editor 1' width={500} height={300} />
                <h3 className='text-xl font-semibold mt-4'>Graphic Design</h3>
                <p className='text-gray-600'>High-quality designs for businesses and individuals</p>
            </div>
            <div className='bg-white shadow-md p-6'>
                <Image src={'/images/col2.png'} alt='Editor 2' width={500} height={300} />
                <h3 className='text-xl font-semibold mt-4'>Web Development</h3>
                <p className='text-gray-600'>Build responsive and engaging websites</p>
            </div>
            <div className='bg-white shadow-md p-6'>
                <Image src={'/images/card-item.png'} alt='Editor 3' width={500} height={300} />
                <h3 className='text-xl font-semibold mt-4'>Brand Strategy</h3>
                <p className='text-gray-600'>Develop effective strategies for brand growth</p>
            </div>
        </div>
    </section>
    </div>
    
  )
}

export default Editor;
