import React from 'react';
import andoired from './../../../assets/andoired.png'
import web from './../../../assets/web1.jpg'
import graphics from './../../../assets/graphics.jpg'

const RightSiteNav = () => {
  return (
    <div className='w-11/12 ml-10'>
      <h2 className='text-xl text-center  mt-5 font-semibold bg-gradient-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text font-sans'>Programming blogs</h2>
      <div className='mt-3 rounded-lg shadow-2xl p-4 w-full mx-auto'>
        <img src={andoired} className='w-full rounded' alt="" />
        <h3 className='text-xl mt-2 font-semibold bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>Andoired system</h3>
        <p>Android is a mobile operating system (32-bit and 64-bit) based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.</p>
      </div>
      {/* Web */}
      <div className='mt-3 rounded-lg shadow-2xl p-4 w-full mx-auto'>
        <img src={web} className='mt-1 w-full rounded' alt="" />
        <h3 className='text-xl mt-2 font-semibold bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>Web Development</h3>
        <p>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.</p>
      </div>
      {/* graphics */}
      <div className='mt-3 rounded-lg shadow-2xl p-4 w-full mx-auto'>
        <img src={graphics} className='mt-1 w-full rounded' alt="" />
        <h3 className='text-xl mt-2 font-semibold bg-gradient-to-r from-blue-600 to-pink-600 inline-block text-transparent bg-clip-text font-sans'>Graphics Design</h3>
        <p>Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.</p>
      </div>
    </div>
  );
};

export default RightSiteNav;