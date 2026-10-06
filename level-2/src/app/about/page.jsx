"use client"
import React, { useState } from 'react'

const page = () => {
  const [name, setName] = useState("Satyam")
  return (
    <div>
      About pages {name}
    </div>
  )
}

export default page
