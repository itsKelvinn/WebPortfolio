import React from 'react'

export default function Aboutme() {

  const imagePath = process.env.PUBLIC_URL + '/kelvingiovanno.png';

  return (
    <div className='flex w-full justify-center items-center content p-24 gap-10'>
        <div className='w-96'>
            <img src={imagePath} alt="Kelvin Giovanno" />
        </div>
        <div className='flex flex-col width-about'>
            <h1 className='text-xl font-bold text-blue-600'>Know</h1>
            <h1 className='text-5xl font-bold'>My story<span className='text-base font-normal'>plz</span></h1>
            <p className='mt-5'>
              I'm Kelvin Giovanno, also known as Kelvin or Vin. I'm on a mission to become a full-stack developer driven by my passion for problem-solving and creating impactful solutions. I chose BINUS University for my Computer Science major to pursue this dream. I enjoy delving into front-end, back-end, and UI/UX design, constantly learning and growing in these dynamic fields.
            </p>
            <div>
          </div>
        </div>
    </div>
  )
}
