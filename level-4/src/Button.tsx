import React from 'react'

type buttonProps = {
    user: string,
    action:() => void
}
const Button = ({user, action} : buttonProps) => {
  return (
    <div>
      hello
    </div>
  )
}

export default Button
