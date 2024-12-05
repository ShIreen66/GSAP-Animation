gsap.to(".box2 h1",{
    transform:"translateX(-235%)",
    // x: 250,
    
    scrollTrigger:{
        trigger:".page2",
        scroller: "body",
        duration: 2,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 2,
        markers: 'true',
        pin:true
    }
}); 

