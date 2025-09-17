gsap.from("h4",{
    x:100,
    opacity:0,
    duration:0.7,
    stagger:0.2
   
})
gsap.from("i",{
    x:100,
    opacity:0,
    duration:0.7,
 
})
const id=document.getElementById("icon")
const slide=document.getElementById("slide")
id.addEventListener("click",function(){
    slide.style.display=""
})
//tlreverse ()function
//timele pause
//timeline play are their