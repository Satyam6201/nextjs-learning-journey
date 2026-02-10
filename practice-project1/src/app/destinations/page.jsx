"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const destination=['Paris','Tokyo','NewYork'];
    const router = useRouter()
  return (
    <div className='flex justify-center items-center text-white  h-full flex-col gap-4'>
      <div className='font-bold text-2xl'>
        Choose Your Destination
      </div>
      <div className='flex flex-col gap-4'>
        {destination.map((des, index) => (
            <div key={index} className=' font-bold text-2xl flex items-center justify-center rounded-2xl 
            w-[200px] h-[100px] text-black bg-white hover:opacity-[0.5] transition-all'
            onClick={()=>router.push(`/destinations/${des}`)}>
               {des}
            </div>
        ))}
      </div>
    </div>
  )
}

export default page
