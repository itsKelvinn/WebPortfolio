import React from 'react'

export default function Footer() {
  return (
    <div className='bg-secondary w-full h-[80px] flex items-center justify-center'>
        <div className='w-[1280px] flex justify-between items-center'>
          <h1 className='font-bold text-2xl'>Kelvin's Folio</h1>
          <p className='font-normal text-base'>(c) Copyright  2023 Designed by Kelvin Giovanno</p>
          <div className='flex items-center gap-2'>
            <div className='w-[50px] h-[50px] border-2 border-[#333333] flex justify-center items-center rounded-md'>
              tes
            </div>
            <div className='w-[50px] h-[50px] border-2 border-[#333333] flex justify-center items-center rounded-md'>
              tes
            </div>
            <div className='w-[50px] h-[50px] border-2 border-[#333333] flex justify-center items-center rounded-md'>
              tes
            </div>
          </div>
        </div>
    </div>
  )
}
