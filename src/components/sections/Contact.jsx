import React, { useState } from 'react';
import { gsap } from 'gsap';
import { useEffect } from 'react';

const Contact = () => {
  const email = 'kelvingiovanno2000@gmail.com';
  const phoneNumber = '081927846355';

  const copyToClipboard = (text, setText) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setText('Copied!');
    setTimeout(() => {
      setText('Copy');
    }, 2000);
  };

  const [emailButton, setEmailButton] = useState('Copy');
  const [phoneButton, setPhoneButton] = useState('Copy');

  useEffect(() => {
    gsap.from('.contact-section', {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      delay: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <div className="flex p-10 relative overflow-hidden">
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
                {email}
              </div>
              <button className='w-[100px] px-4 py-3 h-full bg-primary rounded-r-md active:bg-black' onClick={() => copyToClipboard(email, setEmailButton)}>{emailButton}</button>
            </div>
            <div className='flex items-center justify-between  gap-2 bg-[#2D2D2D] rounded-md '>
              <div className='px-4'>
                {phoneNumber}
              </div>
              <button className='w-[100px] px-4 py-3 h-full bg-primary rounded-r-md active:bg-black' onClick={() => copyToClipboard(phoneNumber, setPhoneButton)}>{phoneButton}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
