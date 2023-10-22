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
        <div id="portfolio" className="flex flex-col items-center w-[1280px] gap-10 py-14 relative">
            
            <div className="mb-10">
                <h1 className="text-5xl font-bold">Portfolio</h1>
            </div>
            
            <div className="flex items-center gap-12 fromLeft1">
                <div className="w-[440px] h-[310px] bg-blue-600"> </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Project 1</h1>
                        <h1 className="text-4xl font-bold">Title Project 1</h1>
                    </div>
                    <div className="w-[600px]">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-12 fromRight1">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Project 1</h1>
                        <h1 className="text-4xl font-bold">Title Project 1</h1>
                    </div>
                    <div className="w-[600px]">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
                <div className="w-[440px] h-[310px] bg-blue-600"> </div>
            </div>

            <div className="flex items-center gap-12 fromLeft2">
                <div className="w-[440px] h-[310px] bg-blue-600"> </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Project 1</h1>
                        <h1 className="text-4xl font-bold">Title Project 1</h1>
                    </div>
                    <div className="w-[600px]">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-12 fromRight2">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Project 1</h1>
                        <h1 className="text-4xl font-bold">Title Project 1</h1>
                    </div>
                    <div className="w-[600px]">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
                <div className="w-[440px] h-[310px] bg-blue-600"> </div>
            </div>
            
            <div className="flex items-center gap-12 fromLeft3">
                <div className="w-[440px] h-[310px] bg-blue-600"> </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Project 1</h1>
                        <h1 className="text-4xl font-bold">Title Project 1</h1>
                    </div>
                    <div className="w-[600px]">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
            </div>
        
        </div>
    );
}
 
export default Portfolio;