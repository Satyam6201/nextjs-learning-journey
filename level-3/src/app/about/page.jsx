import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      About page
       <Image
      src="/globe.svg"
      alt="Globe image"
      width={500}
      height={500}
    />    
    </div>
  )
}

export default page
