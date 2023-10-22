import React from 'react'

export default function Footer() {
  return (
    <div id='contact' className='bg-secondary w-full h-[60px] flex items-center justify-center'>
        <div className='w-[1280px] flex justify-between items-center'>
          <h1 className='font-bold text-lg'>Kelvin's Folio</h1>
          <p className='font-normal text-xs'>© Copyright  2023 Designed by Kelvin Giovanno</p>
          <div className='flex items-center gap-2'>
            <div className='w-[40px] h-[40px] border-[1px] border-[#333333] flex justify-center items-center rounded-md hover:bg-primary transition-all ease-in duration-200 cursor-pointer'>
              <a href="https://github.com/itsKelvinn">
                <img src={process.env.PUBLIC_URL + '/logos/github_logo.svg'} alt="github_logo" className='width-[20px] h-[20px]'/>
              </a>
            </div>
            <div className='w-[40px] h-[40px] border-[1px] border-[#333333] flex justify-center items-center rounded-md hover:bg-primary transition-all ease-in duration-200 cursor-pointer'>
              <a href="https://www.linkedin.com/in/kelvin-giovanno-82685021b/">
                <img src={process.env.PUBLIC_URL + '/logos/linkedin_logo.svg'} alt="linkedin_logo" className='width-[20px] h-[20px]'/>
              </a>
            </div>
            <div className='w-[40px] h-[40px] border-[1px] border-[#333333] flex justify-center items-center rounded-md hover:bg-primary transition-all ease-in duration-200 cursor-pointer'>
              <a href="">
                <img src={process.env.PUBLIC_URL + '/logos/twitter_logo.svg'} alt="Twitter_logo" className='width-[20px] h-[20px]'/>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}
