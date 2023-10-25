import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all'; // Import all GSAP plugins

const Aboutme = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

    gsap.from('.pic-aboutme', {
      x: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: '.pic-aboutme',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      },
      duration: 1
    });

    gsap.from('.aboutme', {
      x: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: '.aboutme',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      },
      duration: 1
    });

  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/CV_KelvinGiovanno.pdf';
    link.download = 'CV_KelvinGiovanno.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPortfolio = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Portfolio_KelvinGiovanno.pdf';
    link.download = 'Portfolio_KelvinGiovanno.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const imagePath = process.env.PUBLIC_URL + '/kelvingiovanno.png';

  return (
    <div id='myStory' className='flex w-full justify-center items-center overflow-hidden'>
      <div className='flex justify-center items-center content p-24 gap-32 relative'>
        <div className='pic-aboutme w-96 z-10'>
          <img src={imagePath} alt="Kelvin Giovanno" className='w-full' />
        </div>
        <div className='aboutme flex flex-col width-about'>
          <h1 className='text-xl font-bold text-blue-600'>Know</h1>
          <h1 className='text-5xl font-bold'>My story<span className='text-base font-normal'>plz</span></h1>
          <p className='mt-5 font-normal'>
            I'm Kelvin Giovanno, also known as Kelvin or Vin. I'm on a mission to become a full-stack developer driven by my passion for problem-solving and creating impactful solutions. I chose BINUS University for my Computer Science major to pursue this dream. I enjoy delving into front-end, back-end, and UI/UX design, constantly learning and growing in these dynamic fields.
          </p>
          <div className='flex mt-10 gap-5'>
            <button onClick={handleDownloadCV} className="cursor-pointer bg-blue-600 rounded-md px-3 py-2 font-bold text-white">
              Download CV
            </button>
            <button onClick={handleDownloadPortfolio} className="cursor-pointer bg-blue-600 rounded-md px-3 py-2 font-bold text-white">
              Download Portfolio
            </button>
          </div>
        </div>

        <div className='absolute rounded-full w-[1023px] h-[985px] bg-secondary left-[-520px] -z-1'></div>
      </div>
    </div>
  );
};

export default Aboutme;
