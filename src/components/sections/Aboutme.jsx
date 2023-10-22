import React, { useEffect } from 'react';
import { gsap } from 'gsap';


const Aboutme = () => {
  useEffect(() => {
    gsap.from('.width-about', {
      x: -50,
      opacity: 0,
      delay: .1,
      scrollTrigger: {
        trigger: '.width-about',
        start: 'top 80%', // Adjust the starting point as needed
        end: 'top 50%', // Adjust the end point as needed
        toggleActions: 'play none none reverse' // Define the toggle actions
      },
      duration: 1 // Adjust the duration of the animation
    });

    gsap.from('.w-96', {
      x: 50,
      opacity: 0,
      delay: .1,
      scrollTrigger: {
        trigger: '.w-96',
        start: 'top 80%', // Adjust the starting point as needed
        end: 'top 50%', // Adjust the end point as needed
        toggleActions: 'play none none reverse' // Define the toggle actions
      },
      duration: 1 // Adjust the duration of the animation
    });

    gsap.from('.absolute', {
      x: -50,
      delay: .1,
      scrollTrigger: {
        trigger: '.absolute',
        start: 'top 50%', // Adjust the starting point as needed
        end: 'top 30%', // Adjust the end point as needed
        toggleActions: 'play none none reverse' // Define the toggle actions
      },
      duration: 1 // Adjust the duration of the animation
    });
  }, []);

  const handleDownload = () => {
    // Replace 'your_cv.pdf' with the actual file name of your CV.
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Portofolio_KelvinGiovanno.pdf';
    link.download = 'CV_KelvinGiovanno.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const imagePath = process.env.PUBLIC_URL + '/kelvingiovanno.png';

  return (
    <div id='myStory' className='flex w-full justify-center items-center overflow-hidden'>
      <div className='flex justify-center items-center content p-24 gap-32 relative'>
        <div className='w-96 z-10'>
          <img src={imagePath} alt="Kelvin Giovanno" className='w-full' />
        </div>
        <div className='flex flex-col width-about'>
          <h1 className='text-xl font-bold text-blue-600'>Know</h1>
          <h1 className='text-5xl font-bold'>My story<span className='text-base font-normal'>plz</span></h1>
          <p className='mt-5 font-normal'>
            I'm Kelvin Giovanno, also known as Kelvin or Vin. I'm on a mission to become a full-stack developer driven by my passion for problem-solving and creating impactful solutions. I chose BINUS University for my Computer Science major to pursue this dream. I enjoy delving into front-end, back-end, and UI/UX design, constantly learning and growing in these dynamic fields.
          </p>
          <div className='flex mt-10'>
          <button onClick={handleDownload} className="cursor-pointer bg-blue-600 rounded-md px-3 py-2 font-bold text-white">
            Donwload CV
          </button>
          </div>
        </div>

        <div className='absolute rounded-full w-[1023px] h-[985px] bg-secondary left-[-520px] -z-1'></div>
      </div>
    </div>
  );
};

export default Aboutme;
