gsap.from("#page-1 #box", {
    scale: 0,
    rotate: 360,
    delay: 1,
    duration: 1,
})
gsap.from("#page-2 #box", {
    scale: 0,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page-2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        scrub: 2,
    },
    duration: 1,
})
gsap.from("#page-3 #box", {
    scale: 0,
    rotate: 360,
    delay: 1,
    duration: 1,
})