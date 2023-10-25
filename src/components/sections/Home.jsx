import React from 'react'
import ParticleBackground from '../particle/ParticleBackground'
import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    gsap.from('.text-1', {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: '.text-1',
        start: 'top 80%', // Adjust the starting point as needed
        end: 'top 50%', // Adjust the end point as needed
        toggleActions: 'play none none reverse' // Define the toggle actions
      },
      duration: 3 // Adjust the duration of the animation
    });

    gsap.from('.text-2', {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: '.text-2',
        start: 'top 80%', // Adjust the starting point as needed
        end: 'top 50%', // Adjust the end point as needed
        toggleActions: 'play none none reverse' // Define the toggle actions
      },
      duration: 3 // Adjust the duration of the animation
    });

    gsap.from('.title1', {
      y: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: '.title1',
        start: 'top 80%', // Adjust the starting point as needed
        end: 'top 50%', // Adjust the end point as needed
        toggleActions: 'play none none reverse' // Define the toggle actions
      },
      duration: 1 // Adjust the duration of the animation
    });

    gsap.from('.title2', {
      y: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: '.title2',
        start: 'top 80%', // Adjust the starting point as needed
        end: 'top 50%', // Adjust the end point as needed
        toggleActions: 'play none none reverse' // Define the toggle actions
      },
      duration: 1 // Adjust the duration of the animation
    });

  }, []);


  return (
    <div id='home' className='w-full h-[827px] flex justify-center relative'>
      <div className='px-10 h-full flex w-[1280px] z-10'>
          <div className='w-[700px] flex flex-col justify-center items-start'>
              <h1 className='text-1 text-2xl'>Hi there ,</h1>
              <h1 className='text-2 text-5xl font-bold'>I’m <span className='text-blue-800'>Kelvin Giovanno</span>, aspiring to be a full-stack developer</h1>
          </div>
      </div>
      <ParticleBackground />
    </div>
  )
}
