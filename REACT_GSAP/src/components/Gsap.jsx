import React from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

const Gsap = () => {
    useGSAP(()=>{
        gsap.to(".box",{
            x:400,
            
            duration:1,
            scale:2,
            rotate:300,
            delay:1

        })
    })
  return (
    <div>
      <div className='box w-30 h-30 bg-blue-500'></div>
    </div>
  )
}

export default Gsap
