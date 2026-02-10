"use client"

import Button from "@/Button"
import { useState } from "react"

const page = () => {
  const [count, setCount] = useState<number>(0);
  function fn() {

  }

  return (
    <div>
      <Button user={"hello"} action={fn}/>
    </div>
  )
}

export default page
