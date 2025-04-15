import React from 'react';
import assets from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <div className="flex items-center py-2 px-0">
                <h1 className="text-3xl font-bold">
                    <span style={{ color: 'orange' }}>W</span>
                    <span style={{ color: 'green' }}>eaveLeaf</span>
                </h1>
                <img src={assets.SunLogo} alt="BrandLogo" className="w-10 h-auto ml-2" />
            </div>
            <p className='w-full md:w-2/3 text-gray-500'>
                WeaveLeafs - where tradition meets innovation.
            </p>
            <p className='w-full md:w-2/3 text-gray-500'>
            Our vision is to preserve traditional craftsmanship while embracing modern design.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-500'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Private Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-500'>
                <li>+977-</li>
                <li>contact@weaveleaf.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center font-semibold'>Copyright 2025@ weaveleafs.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
