var tl= gsap.timeline();

gsap.to("#box",{
    x: 500,
    duration: 2,
    backgroundColor:"blue",
    rotate: 360,
    y:150
})

tl.to("h1",{
    x: 150,
    // opacity: 0,
    duration: 1,
    repeat: -1,
    yoyo: true,
    // stagger: 0.5,
    color: "orange"
})



