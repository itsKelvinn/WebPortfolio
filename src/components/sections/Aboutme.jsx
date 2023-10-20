import React from 'react'

export default function Aboutme() {

  const imagePath = process.env.PUBLIC_URL + '/kelvingiovanno.png';

  return (
    <div className='flex w-full content pageHeight gap-10'>
        <div className='w-96'>
            <img src={imagePath} alt="Kelvin Giovanno" />
        </div>
        <div className='flex flex-col w-full gap-8'>
            <h1 className='text-xl font-bold'>About me</h1>
            <p className='about-me-description w-96'>
                Hi there! I'm Kelvin Giovanno, a passionate individual with a strong enthusiasm for coding. My goal is to become a full-stack engineer, and I'm actively working towards achieving that dream. I enjoy diving into complex problems and finding creative solutions. With a constant thirst for knowledge, I am continually learning and improving my skills to overcome any challenges that come my way.
            </p>
            <div>
              
            </div>

        </div>
    </div>
  )
}
