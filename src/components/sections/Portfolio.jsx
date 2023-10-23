import { gsap } from 'gsap';
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Portfolio = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from('.fromLeft1', {
          x: -50,
          opacity: 0,
          duration: 1,
          delay: .3,
          scrollTrigger: {
            trigger: '.fromLeft1',
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        });
    
        gsap.from('.fromRight1', {
          x: 50,
          opacity: 0,
          duration: 1,
          delay: .3,
          scrollTrigger: {
            trigger: '.fromRight1',
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        });

        gsap.from('.fromLeft2', {
            x: -50,
            opacity: 0,
            duration: 1,
            delay: .3,
            scrollTrigger: {
              trigger: '.fromLeft2',
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse'
            }
          });
      
          gsap.from('.fromRight2', {
            x: 50,
            opacity: 0,
            duration: 1,
            delay: .3,
            scrollTrigger: {
              trigger: '.fromRight2',
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse'
            }
          });

          gsap.from('.fromLeft3', {
            x: -50,
            opacity: 0,
            duration: 1,
            delay: .3,
            scrollTrigger: {
              trigger: '.fromLeft3',
              start: 'top 80%',
              end: 'top 50%',
              toggleActions: 'play none none reverse'
            }
          });
      }, []);

    return (
        <div id="portfolio" className="flex flex-col items-center w-[1280px] gap-10 pt-14 relative">
            
            <div className="mb-10">
                <h1 className="text-5xl font-bold">Portfolio</h1>
            </div>
            
            <div className="flex items-center gap-12 fromLeft1">
                <div className="w-[440px] h-[310px]"> 
                    <img src={`${process.env.PUBLIC_URL}/portfolio/adex.png`}  alt="adex" className='w-full h-full object-contain'/>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Project 1 | Front-end</h1>
                        <h1 className="text-4xl font-bold">Adex Legends</h1>
                    </div>
                    <div className="w-[600px]">
                        <p>
                            Front-end Adex Legends aims to develop a user-friendly interface for the popular online game. Enhancing the user experience through intuitive design and seamless integration of game features.
                        </p>
                    </div>
                    <div className='flex'>    
                        <a href="https://drive.google.com/file/d/1L8rVN2AiDjSbDfsRAAq3LVGeUR1_8wZw/view" className='px-3 py-2 font-bold text-base bg-blue-800 rounded-md'>
                            Project links
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-12 fromRight1">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Project 2 | Back-end & Front-end</h1>
                        <h1 className="text-4xl font-bold">PixelHive</h1>
                    </div>
                    <div className="w-[600px]">
                        <p>
                            PixelHive is A digital marketplace leveraging Laravel for APIs, MySQL for secure data management, and Next.js for dynamic interactions. Redefining digital product exchange with seamless listing and trading.
                        </p>
                    </div>
                    <div className='flex'>    
                        <a href="https://github.com/Vinncz/pixelhive" className='px-3 py-2 font-bold text-base bg-blue-800 rounded-md'>
                            Project links
                        </a>
                    </div>
                </div>
                <div className="w-[440px] h-[310px]">
                    <img src={`${process.env.PUBLIC_URL}/portfolio/Pixelhive.png`}  alt="Pixelhive" className='w-full h-full object-contain'/>
                </div>
            </div>

            <div className="flex items-center gap-12 fromLeft2">
                <div className="w-[440px] h-[310px]"> 
                    <img src={`${process.env.PUBLIC_URL}/portfolio/binusmaya.png`}  alt="binusmaya" className='w-full h-full object-contain'/>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Project 3 | UI/UX</h1>
                        <h1 className="text-4xl font-bold">BinusMaya</h1>
                    </div>
                    <div className="w-[600px]">
                        <p>
                            Binus Maya LMS aims to redesign the learning platform for BINUS University, emphasizing a contemporary and user-friendly interface using Figma for enhanced usability and accessibility.
                        </p>
                    </div>
                    <div className='flex'>    
                        <a href="https://www.figma.com/file/15au4vN5XgQLbP1IH7ld3A/New-Binusmaya?type=design&mode=design&t=CpWG8MWFl4iDIBdi-1" className='px-3 py-2 font-bold text-base bg-blue-800 rounded-md'>
                            Project links
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-12 fromRight2">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Project 4 | Back-end & Front-end</h1>
                        <h1 className="text-4xl font-bold">PT Haliber Jaya Web</h1>
                    </div>
                    <div className="w-[600px]">
                        <p>
                            Hired by a prominent logistics company, PT Haliber Jaya, to design a dynamic WordPress website. Leveraging my expertise to create an engaging online platform that showcases their logistics prowess, optimizing user experience, and contributing to their digital growth.
                        </p>
                    </div>
                    <div className='flex'>    
                        <a href="https://haliberjaya.com/" className='px-3 py-2 font-bold text-base bg-blue-800 rounded-md'>
                            Project links
                        </a>
                    </div>
                </div>
                <div className="w-[440px] h-[310px]">
                    <img src={`${process.env.PUBLIC_URL}/portfolio/PTHaliber.png`}  alt="PTHaliber" className='w-full h-full object-contain'/>
                </div>
            </div>
            
            <div className="flex items-center gap-12 fromLeft3">
                <div className="w-[440px] h-[310px]">
                    <img src={`${process.env.PUBLIC_URL}/portfolio/KpopZtation.png`}  alt="KpopZtation" className='w-full h-full object-contain'/>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Project 5 | Back-end & Front-end</h1>
                        <h1 className="text-4xl font-bold">KpopZtation</h1>
                    </div>
                    <div className="w-[600px]">
                        <p>
                            KpopZtation develops an engaging website using ASP.net, allowing customers to access comprehensive album information and place orders seamlessly, enhancing the K-pop shopping experience.
                        </p>
                    </div>
                    <div className='flex'>    
                        <a href="https://github.com/itsKelvinn/KpopZstation" className='px-3 py-2 font-bold text-base bg-blue-800 rounded-md'>
                            Project links
                        </a>
                    </div>
                </div>
            </div>
        
        </div>
    );
}
 
export default Portfolio;