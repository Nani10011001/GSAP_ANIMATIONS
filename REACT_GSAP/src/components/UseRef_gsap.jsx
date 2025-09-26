import React from 'react'
import{useRef} from "react"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

const UseRef_gsap = () => {
    const Gsap_useRef=useRef()
    useGSAP(()=>{
        gsap.to(Gsap_useRef.current,{
            y:300,
            opacity:0,
            duration:2,
            delay:1,
            rotate:300

        })
    })
  return (
    <div>
      <div ref={Gsap_useRef} className='w-30 h-30 bg-black'>
       

      </div>
    </div>
  )
}

export default UseRef_gsap
