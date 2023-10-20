import React from 'react'
import { PrimaryButton } from '../common/Button'

export default function Navbar() {
  return (
    <div className='fixed top-0 px-8 w-full bg-secondary flex h-16 justify-center '>
        <div className='content flex justify-between items-center'>
          <div>
              <h1 className='text-xl font-bold'>Kelvin Giovanno</h1>
          </div>
          <div className='flex gap-5 items-center'>
            <div className='font-nomal text-base'>Home</div>
            <div className='font-nomal text-base'>About Me</div>
            <div className='font-nomal text-base'>Portfolio</div>
            <div className='font-nomal text-base'>Services</div>
            <div className='font-nomal text-base'>Experience</div>
            <PrimaryButton text={"Contact"}/>
          </div>
        </div>
    </div>
  )
}
