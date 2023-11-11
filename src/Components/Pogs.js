import React from 'react'
import IMAGES from '../Assets'

export default function Pogs() {
  return (
    <div className='flex flex-col items-center pt-[160px] pb-[86px]'>
        <h3 className=' text-5xl font-bold'>
            Choose Your Adapter
        </h3>
        <div className='grid grid-cols-3'>
            <img src={IMAGES.adapter_10} alt="" />
            <img src={IMAGES.adapter_20} alt="" />
            <img src={IMAGES.adapter_30} alt="" />
            <img src={IMAGES.adapter_40} alt="" />
            <img src={IMAGES.adapter_45} alt="" />
            <img src={IMAGES.adapter_61} alt="" />
        </div>
        <button className='text-sm t-semibold text-white px-8 py-4 mt-10 bg-transparent border border-white rounded-2xl'>Explore Now</button>
    </div>
  )
}
