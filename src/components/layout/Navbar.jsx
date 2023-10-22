import React from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const handleScroll = (id) => {
    gsap.to(window, {
      duration: 1, 
      scrollTo: {
        y: `#${id}`,
        offsetY: 50 
      },
      ease: 'power2.inOut' 
    });
  };
  

  return (
    <div className='fixed top-0 px-8 w-full bg-secondary flex h-16 justify-center z-50'>
      <div className='content flex justify-between items-center'>
        <div>
          <h1 className='text-xl font-bold'>Kelvin's Folio</h1>
        </div>
        <div className='flex gap-14 items-center'>
          <button
            className='font-normal text-base hover:text-blue-700 transition-all ease-in duration-200 cursor-pointer'
            onClick={() => handleScroll('home')}
          >
            Home
          </button>
          <button
            className='font-normal text-base hover:text-blue-700 transition-all ease-in duration-200 cursor-pointer'
            onClick={() => handleScroll('myStory')}
          >
            My Story
          </button>
          <button
            className='font-normal text-base hover:text-blue-700 transition-all ease-in duration-200 cursor-pointer'
            onClick={() => handleScroll('portfolio')}
          >
            Portfolio
          </button>
          <button
            className='font-normal text-base hover:text-blue-700 transition-all ease-in duration-200 cursor-pointer'
            onClick={() => handleScroll('services')}
          >
            Services
          </button>
          <button
            className='font-normal text-base hover:text-blue-700 transition-all ease-in duration-200 cursor-pointer'
            onClick={() => handleScroll('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
