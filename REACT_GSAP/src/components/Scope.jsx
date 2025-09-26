import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"


const Scope=()=>{
   
  useGSAP(()=>{
     gsap.to(".circle",{
      x:100,
      rotate:300,
      duration:1,
      delay:1
     })
  },{scope:".container"})

return(

  <main>

    <div className="container">

      <div className="circle h-[120px] w-[120px] bg-black rounded-full ">

      </div>
    </div>
    <div className="block">

      <div className="box h-[130px] w-[130px] bg-red-500 mt-3 ">
        
      

      </div>

      <div className="circle h-[120px] w-[120px] bg-black rounded-full mt-6">

      </div>
      
    </div>
  </main>
)


}

export default Scope