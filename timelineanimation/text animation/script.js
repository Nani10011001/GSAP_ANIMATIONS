function breakTheText(){
    const h1=document.querySelector("h1").textContent;
const breakText=h1.split("")
console.log(breakText)
const textlength=breakText.length/2;
console.log(textlength)
var cultter=""
breakText.forEach(function(elm,index){
if(index<textlength){
 cultter+=`<span class="a">${elm}</span>`
}else{
 cultter+=`<span class="b">${elm}</span>`
}
})
console.log(cultter)
const h1Again=document.querySelector("h1")
h1Again.innerHTML=cultter
}breakTheText()
gsap.from("h1 .a",{
    y:70,
    stagger:0.2,
    duration:0.7,
    opacity:0,
    delay:0.4
    
})
gsap.from("h1 .b",{
    y:70,
    stagger:-0.2,
    duration:0.7,
    opacity:0, delay:0.4
})