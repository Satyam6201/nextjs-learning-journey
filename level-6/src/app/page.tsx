'use client' // client side rendring

// server side fetch the data

import { useEffect } from "react";

 const page = async () => {

  // SSR:-(jitna baar data change hoga utna baar data nya wala dega)
  // const response = await fetch('http://localhost:3001/api/user',{
  //   cache: 'no-store' // ssr
  // });
  // let data = await response.json();
  // console.log(data);  //{ name: 'satyam', age: 22 } 

  // SSG:- (data ko update v kr denge tab v wahi purana data hi dega)
  // const response = await fetch('http://localhost:3001/api/user', {
  //   cache: 'force-cache'
  // });
  // let data = await response.json();
  // console.log(data); 

  // ISR:- (10 sec baad data phir se change hoga refresh krne pe)
  // const response = await fetch('http://localhost:3001/api/user', {
  //   next: {revalidate: 10}
  // });
  // let data = await response.json();
  // console.log(data);


  // client side me call krne k liye 
  const handleApi = async () => {
  const response = await fetch('/api/user');
  let data = await response.json();
  console.log(data);
  }

  useEffect(() => {
    handleApi()
  }, [])

  return (
    <div>
      hello
    </div>
  )
}

export default page
