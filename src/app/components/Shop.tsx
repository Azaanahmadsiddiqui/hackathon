import { ChevronDown, ChevronRight } from 'lucide-react'
import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const montserrat = Montserrat ({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const Shop = () => {
  return (
    <div className={montserrat.className}>
        <div className='h-[675px]'>
        <div className='h-[400px] w-full bg-[#FAFAFA]'>
            <div className='flex w-full h-[100px] justify-between items-center'>
                <h1 className='text-3xl font-bold ml-[100px]'>Shop</h1>
                <span className='flex ml-[700px]'>Home <ChevronRight className='text-[#BDBDBD]'/> <p className='text-[#BDBDBD]'>Shop</p> </span>
            </div>
            <br />
            <div className='flex'>
            <div className='flex w-full h-[300] mt-4 gap-6 justify-center'>
                <span><Image src={'/images/col-md-1.png'} width={200} height={100} alt='images'></Image></span>
                <span><Image src={'/images/col-md-2.png'} width={200} height={100} alt='images'></Image></span>
                <span><Image src={'/images/col-md-3.png'} width={200} height={100} alt='images'></Image></span>
                <span><Image src={'/images/col-md-4.png'} width={200} height={100} alt='images'></Image></span>
                <span><Image src={'/images/col-md-5.png'} width={200} height={100} alt='images'></Image></span>
            </div>
            </div>
        </div>
             <div className='h-[250px] w-full flex items-center'>
                <h3 className='ml-6 w-[200px]'>Showing all 12 results</h3>
                <span className='ml-[450px] flex justify-center items-center gap-4'>
                    <p>Views:</p>
                    <Image src={'/images/btn-sm.png'} width={50} height={50} alt='image'></Image>
                    <Image src={'/images/btn-sm.png'} width={50} height={50} alt='image'></Image>
                </span>
                <div className='ml-[100px] flex gap-4'>
                <Button className='bg-[#F9F9F9] text-[#737373] border-2'>Popularity<ChevronDown /></Button> 
                <Button className='bg-[#23A6F0]'>Filter</Button>
               </div>
             </div>
        </div>
        <span>
                   <Image src={'/images/clients.png'} width={1400} height={100} alt='clients'></Image>
        </span>
    </div>
  )
}

export default Shop