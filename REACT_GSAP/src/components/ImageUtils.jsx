import React, { useState,useRef} from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

const ImageUtils = () => {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const [rotate,setRotate]=useState(0)

    const useAni=useRef()
    const randomx=gsap.utils.random(-400,400,100)
    const randomy=gsap.utils.random(-300,300,30)
    const randomRotate=gsap.utils.random(-400,400,10)
    useGSAP(()=>{
        gsap.to(useAni.current,{
x:x,
y:y,
rotate:rotate,
duration:0.7
        })
    },{scope:"main",dependencies:[x,y,rotate]})
  return (
    <main className='flex justify-center items-center min-h-screen'>
        <img ref={useAni} onClick={
            ()=>{
                setX(randomx)
            setY(randomy)
setRotate(randomRotate)
            }

        } className="h-30 w-30 " src='https://img.freepik.com/premium-psd/fly-transparent-background-fly-png-transparent-png_303714-6068.jpg?w=900'/>
    </main>
  )
}

export default ImageUtils
