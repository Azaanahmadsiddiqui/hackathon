import React from 'react';
import Image from 'next/image';

const BestSeller = () => {
  return (
    <section className='py-16 px-4 md:px-8 lg:px-16 bg-gray-100'>
        <div className='text-center'>
            <h3 className='text-sm font-semibold text-green-600'>Featured Products</h3>
            <h1 className='text-3xl font-bold'>BESTSELLER PRODUCTS</h1>
            <p className='text-gray-600'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
            <div className='bg-white shadow-md p-6'>
                <Image src={'/images/product.png'} alt='Product 1' width={200} height={100} />
                <h3 className='text-lg font-bold mt-4'>Graphic Design</h3>
                <p className='text-sm text-gray-600'>English Department</p>
                <div className='flex items-center gap-2 mt-2'>
                    <p className='text-gray-400 text-xs'>$16.48</p>
                    <p className='text-green-600 text-xs font-semibold'>$6.48</p>
                </div>
                <Image src={'/images/product-colors.png'} alt='Colors' className='mt-2' width={50} height={10} />
            </div>
            <div className='bg-white shadow-md p-6'>
                <Image src={'/images/product2.png'} alt='Product 2' width={200} height={100} />
                <h3 className='text-lg font-bold mt-4'>Graphic Design</h3>
                <p className='text-sm text-gray-600'>English Department</p>
                <div className='flex items-center gap-2 mt-2'>
                    <p className='text-gray-400 text-xs'>$16.48</p>
                    <p className='text-green-600 text-xs font-semibold'>$6.48</p>
                </div>
                <Image src={'/images/product-colors.png'} alt='Colors' className='mt-2' width={50} height={10} />
            </div>
            <div className='bg-white shadow-md p-6'>
                <Image src={'/images/product3.png'} alt='Product 3' width={200} height={100} />
                <h3 className='text-lg font-bold mt-4'>Graphic Design</h3>
                <p className='text-sm text-gray-600'>English Department</p>
                <div className='flex items-center gap-2 mt-2'>
                    <p className='text-gray-400 text-xs'>$16.48</p>
                    <p className='text-green-600 text-xs font-semibold'>$6.48</p>
                </div>
                <Image src='/images/product-colors.png' alt='Colors' className='mt-2' width={50} height={10} />
            </div>
            <div className='bg-white shadow-md p-6'>
                <Image src={'/images/product4.png'} alt='Product 4' width={200} height={100} />
                <h3 className='text-lg font-bold mt-4'>Graphic Design</h3>
                <p className='text-sm text-gray-600'>English Department</p>
                <div className='flex items-center gap-2 mt-2'>
                    <p className='text-gray-400 text-xs'>$16.48</p>
                    <p className='text-green-600 text-xs font-semibold'>$6.48</p>
                </div>
                <Image src='/images/product-colors.png' alt='Colors' className='mt-2' width={50} height={10} />
            </div>
        </div>
    </section>
  )
}

export default BestSeller;
