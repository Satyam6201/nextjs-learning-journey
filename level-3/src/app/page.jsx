"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

  const router = useRouter();
 
  return (
    <div>
      <ul>
        <Link href={"/"}><li>Home</li></Link>
        <Link href={"/about"}><li>About</li></Link>        
        <Link href={"/contact"}><li>Contact</li></Link>
      </ul>  
      
      <button onClick={() => router.push("https://www.youtube.com/watch?v=Mct6dyl_gz4")}>Go To Youtube</button>
          
    </div>
  )
}

export default page
