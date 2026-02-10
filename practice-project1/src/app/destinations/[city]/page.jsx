'use client'
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'
import parisImg from "@/assets/paris.jpg"
import tokyoImg from "@/assets/tokyo.jpg"
import nyImg from "@/assets/new york.webp"

const page = async ({params}) => {
    const {city} = useParams();
  return (
    <div className='text-white mt-[100px] w-[50%]'>
       {city} is the beautiful city
       {
        city=="Paris" &&  <Image src={parisImg} width={400} height={400} alt='paris img'/>
       }
       {
        city=="Tokyo" &&  <Image src={tokyoImg} width={400} height={400} alt='tokyo img'/>
       }
       {
        city=="NewYork" &&  <Image src={nyImg} width={400} height={400} alt='ny img'/>
       }
    </div>
  )
}

export default page
