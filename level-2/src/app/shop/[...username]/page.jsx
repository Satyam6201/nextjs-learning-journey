import React from 'react'

const page = async ({params}) => {
    const {username} = await params;
    console.log(username);
  return (
    <div>
      username = {username}
    </div>
  )
}

export default page
