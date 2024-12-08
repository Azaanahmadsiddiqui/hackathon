import React from 'react';
import { Montserrat } from 'next/font/google';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const Footer = () => {
  return (
    <div className={montserrat.className}>
        <div className='w-full mt-20'>
            <div className='flex flex-col md:flex-row justify-between w-full border-b-2 bg-[#FAFAFA] h-auto md:h-[140px]'>
                 <div className='w-full md:w-auto ml-[200px] h-auto md:h-[142px] flex justify-center md:justify-start items-center'>
                    <h1 className='text-2xl font-bold py-4 md:py-0 text-center md:text-left'>Bandage</h1>
                 </div>
                 <div className='flex justify-center gap-6 mb-4 md:mb-0 md:mr-[200px] py-4 md:py-0'>
                    <span>
                        <FaFacebook className='text-2xl text-[#23A6F0]' />
                    </span>
                    <span>
                        <FiInstagram className='text-2xl text-[#23A6F0]' />
                    </span>
                    <span>
                        <FaTwitter className='text-2xl text-[#23A6F0]' />
                    </span>
                 </div>
            </div>
        </div>
        <div className='w-full flex flex-col md:flex-row mt-20 justify-center gap-4'>
            <div className='w-full md:w-[21%] space-y-4'>
                 <h1 className='text-3xl font-bold'>Company Info</h1>
                 <p>About Us</p>
                 <p>Carrier</p>
                 <p>We are hiring</p>
                 <p>Blog</p>
            </div>
            <div className='w-full md:w-[13%] space-y-4'>
                 <h1 className='text-3xl font-bold'>Legal</h1>
                 <p>About Us</p>
                 <p>Carrier</p>
                 <p>We are hiring</p>
                 <p>Blog</p>
            </div>
            <div className='w-full md:w-[13%] space-y-4'>
                 <h1 className='text-3xl font-bold'>Features</h1>
                 <p>Business Marketing</p>
                 <p>User Analytic</p>
                 <p>Live Chat</p>
                 <p>Unlimited Support</p>
            </div>
            <div className='w-full md:w-[13%] space-y-4'>
                 <h1 className='text-3xl font-bold'>Resources</h1>
                 <p>IOS & Android</p>
                 <p>Watch a Demo</p>
                 <p>Customers</p>
                 <p>API</p>
            </div>
            <div className='w-full md:w-[30%] space-y-4'>
                 <h1 className='text-3xl font-bold text-center md:text-left'>Get In Touch</h1>
                 <div className='relative flex'>
                    <Input placeholder='Your Email' />
                    <Button className='bg-[#23A6F0] rounded-none'>Subscribe</Button>
                </div>
                <p className='text-sm text-center md:text-left'>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className='h-[70px] w-full flex items-center mt-20 bg-[#FAFAFA] font-semibold'>
            <p className='ml-[200px] text-center md:text-left'>Made With Love By Finland All Rights Reserved</p>
        </div>
    </div>
  );
};

export default Footer;
