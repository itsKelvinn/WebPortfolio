import React from 'react';
import { gsap } from 'gsap';
import { useEffect } from 'react';

const Contact = () => {
  const email = 'kelvingiovanno2000@gmail.com';
  const phoneNumber = '081927846355';

  const copyToClipboard = (text) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };


  useEffect(() => {
    gsap.from('.contact-section', {
        y: 50,
        opacity: 0,
        stagger: 0.2, // Adjust the stagger value as needed
        duration: 1, // Adjust the duration of the animation
        delay: .1,
        ease: 'power3.out', // Adjust the easing function as needed
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%', // Adjust the starting point as needed
            end: 'top 50%', // Adjust the end point as needed
            toggleActions: 'play none none reverse' // Define the toggle actions
        }
        });
    }, []);

  return (
    <div className="flex p-10">
      <div className="bg-secondary flex px-10 py-20 items-center contact-section">
        
      <div className="flex flex-col w-[500px] gap-5">
            <h1 className="text-5xl font-bold">Let's work Together on your next project</h1>
            <p className="text-base">
                Experienced in web dev & design, creating impactful solutions. Let's bring your ideas to life!
            </p>
        </div>



        <div className="w-[500px] flex justify-center items-center">
            <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-between gap-2 bg-[#2D2D2D] rounded-md'>
                    <div className='px-4'>
                        kelvingiovanno2000@gmail.com
                    </div>
                    <button className='px-4 py-3 h-full bg-primary rounded-r-md active:bg-black' onClick={() => copyToClipboard(email)}>Copy</button>
                </div>
                <div className='flex items-center justify-between  gap-2 bg-[#2D2D2D] rounded-md '>
                    <div className='px-4'>
                        081927846355
                    </div>
                    <button className='px-4 py-3 h-full bg-primary rounded-r-md active:bg-black' onClick={() => copyToClipboard(phoneNumber)}>Copy</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
