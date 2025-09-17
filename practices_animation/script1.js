/*gsap.from("h1",{
    opacity:0,
    
    duration:2,
    
delay:1,   
y:20,
stagger:0.3 // make elements appear oneby one
})
gsap.to(".box",{
    x:1200,
    delay:1,
    duration:3,
    rotate:"360",
    repeat:-1,//infinte
    yoyo:true,//reverse
})
gsap.to(".box2",{
    x:1100,
    delay:1,
    duration:2,
    rotation:360,


})*/
let timeLine=gsap.timeline();// its make the code synchronize
timeLine.to(".box",{
    
    x:1500,
    duration:1.5,
    rotate:360,
});
timeLine.to(".box2",{
    
    x:1500,
    duration:1.5,
    rotate:360,
});
timeLine.to(".box3",{
    
    x:1500,
    duration:1.5,
    
});