import React from 'react'
import { Montserrat } from 'next/font/google'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const montserrat = Montserrat ({
    subsets:["latin"],
    weight: ['400','700'],
});

const ComponentHeader = () => {
  return (
    <div className={montserrat.className}>
        <div className='flex justify-between h-[100px] w-full items-center'>
            <span className=' ml-[50px]'>
                <h1 className='text-3xl font-bold'>Bandage</h1>
            </span>
            <span className='flex gap-6 font-semibold'>
                <p><Link href={'/'}>Home</Link></p>
                <p><Link href={'/'}>Product</Link></p>
                <p><Link href={'/'}>Pricing</Link></p>
                <p><Link href={'/contactUs'}>Contact</Link></p>
            </span>
            <span className='px-8 space-x-6 mr-[50px]'>
                <Button className='text-[#23A6F0] bg-white font-bold'>Login</Button>
                <Button className='bg-[#23A6F0] font-bold'>Become a member<ChevronRight className='' /></Button>
            </span>
        </div>
    </div>
  )
}

export default ComponentHeader