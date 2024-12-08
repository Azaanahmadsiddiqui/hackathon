import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image';

const montserrat = Montserrat ({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const Clients = () => {
  return (
    <div className={montserrat.className}>
    <div className='h-[1600px] mt-20'>
        <div className='flex justify-center mt-6 gap-2'>
            <div>
                <Image src={'/images/products.png'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.png'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div>
                <Image src={'/images/products2.png'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.png'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div>
                <Image src={'/images/products3.png'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.png'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div>
                <Image src={'/images/products4.png'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.png'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
        </div>
        <div className='flex justify-center gap-2 mt-32'>
            <div>
                <Image src={'/images/products5.png'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.png'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div className=''>
                <Image src={'/images/products6.png'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.png'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div>
                <Image src={'/images/products7.png'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.png'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div>
                <Image src={'/images/products8.png'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.png'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
        </div>
        <div className='flex justify-center gap-2 mt-32'>
            <div>
                <Image src={'/images/products9.png'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.png'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div className=''>
                <Image src={'/images/products10.png'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.png'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div>
                <Image src={'/images/products11.png'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.png'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div>
                <Image src={'/images/products12.png'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.png'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            </div>
        </div>
        <span className='h-[100px] w-full flex justify-center items-center'>
             <Image src={'/images/Pagination.png'} width={250} height={100} alt='Pagination'></Image>
        </span>
    </div>
  )
}

export default Clients