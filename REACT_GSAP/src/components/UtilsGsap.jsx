import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

const UtilsGsap = () => {
    const random=gsap.utils.random(-400,400,10)
    const [circles,setCircle]=useState(0)
    useGSAP(()=>{
        gsap.to(".circle",{
x:circles,
duration:1,
delay:1


        })
    },[circles])

  return (
   <main>
    <section className='flex flex-col justify-center items-center gap-5 '> 
        <button className='bg-blue-500 px-7 py-3 rounded-[3px] ' onClick={()=>{
            setCircle(random)
        console.log(circles)}}
            
            >animate</button>

        <div className="circle h-[100px] w-[100px] bg-black"></div>
    </section>
   </main>
  )
}

export default UtilsGsap
