
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import {useRef} from "react"
import './App.css'

function App() {

  const gsapRef=useRef()
  useGSAP(()=>{
    gsap.from(gsapRef.current,{
      
      opacity:0,
      rotate:320,
      duration:1,
      delay:1
    })
  },{scope:".block"})



  return (
   <div className='bg-black  min-h-screen max-w-screen flex justify-center items-center'>
    
    <div className='container'>
      <div  className='box mb-10 w-30 h-30 bg-gradient-to-r from-blue-300 to-blue-600'>

      </div>

     
    </div>
    <div className='block'>
      <div className="cricle rounded-[100%] w-30 h-30 bg-gradient-to-r from-blue-300 to-blue-700 "></div>
    </div>

   </div>
  )
}

export default App
