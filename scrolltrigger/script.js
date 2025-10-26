gsap.from("#page1 #box",{
    scale:0.2,
    delay:0.5,
    duration:1,
    rotate:360,

  

})
/*gsap.from("#page2 #box",{
    scale:0.2,

    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:'body',
        markers:true,
        start:'top 60%',

    }
   

})*/
gsap.from("#page2 h1 " ,{
    x:300,
opacity:0,
delay:0.5,
duration:2,

    scrollTrigger:{
        trigger:"h1",
        scroller:'body',
        markers:true,
        start:'top 50%',
        end:'top 30%',
        scrub:true,
        
    }
})
gsap.from("#page2 h2 " ,{
    x:-300,
opacity:0,
delay:0.5,
duration:2,

    scrollTrigger:{
        trigger:"h2",
        scroller:'body',
        markers:true,// gives the marking text
        start:'top 50%',// move the text and make the transition occur when we hits the 50%
        end:'top 30%',
        scrub:2,// it make the code repeat and smooth the transition
        
    }
})
