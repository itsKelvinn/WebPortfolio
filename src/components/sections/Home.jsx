import React from 'react'
import { SecondaryButton } from '../common/Button'

export default function Home() {
  return (
    <div className='w-full pageHeight flex mt-16 content'>
        <div className='h-full w-full flex flex-col justify-center items-center text-center'>
            <h1 className='text-5xl font-bold mb-4'>Hello, I'm Kelvin Giovanno</h1>
            <p className='text-lg'>I aspire to be a full-stack developer.</p>
            <SecondaryButton text={"Check my portfolio"}/>
        </div>
    </div>
  )
}
