function cursoreffect(){
    var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
    // cursor.style.left = dets.x+"px"
    // cursor.style.top = dets.y+"px"
})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursoreffect()
function page2Animation(){
    gsap.from(".elem h1",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            trigger:"page2",
            scroller:"body",
            start:"top 47%",
            end:"top 46%",
            markers:true,
            scrub:2
        }
    }) 
     
}

// page2Animation()

