import React,{useRef} from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'


const Memory = () => {
    const aniRef=useRef()
    const {contextSafe}=useGSAP()
    const rotateBox= contextSafe(()=>{
gsap.to(aniRef.current,{

    x:400,
    rotate:400,
    delay:1,
    duration:2

})

    })
  return (
    <main className='flex flex-col justify-center items-center gap-7 min-h-screen'>
        <button onClick={rotateBox} className='px-5 bg-blue-300  rounded-[10px] py-3' >animate</button>

        <section ref={aniRef}className="container h-[100px] w-[100px] mt-3.5 bg-black">

        </section>
    </main>
  )
}

export default Memory
