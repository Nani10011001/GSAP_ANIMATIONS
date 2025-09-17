gsap.from(".box",{
  x:1000 ,
  duration:4,
  delay:1
  
})//we use the to take box from initial position to final position

gsap.to(".box2",{
    x:1200,
    y:100,
    duration:3,
    delay:1,
    rotate:360,
    backgroundColor:'orange',
    borderRadius:"50%",
    scale:2//big the twice
})
//gsap from final to initial position

