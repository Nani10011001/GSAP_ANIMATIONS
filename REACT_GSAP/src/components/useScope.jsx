import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {useRef} from "react"

const UseScope = () => {
    const useContainer=useRef()
    useGSAP(()=>{
        gsap.from(useContainer.current,{
            y:200, 
            duration:1,
            dalay:1,
            rotate:200

        },{scope:useContainer})
    })
  return (
    <div>
      <div className="container">
        <div ref={useContainer} className="box h-40 w-40 bg-black"></div>
      </div>
      <div className="block">
        <div className="circle h-40 w-40 bg-black rounded-full mt-10"></div>
        <div className="box h-40 w-40 bg-black mt-5"></div>
      </div>
    </div>
  )
}

export default UseScope
