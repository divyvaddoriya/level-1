let tl=gsap.timeline();

tl.from("#nav img,#nav #nav-mid h3,#nav #nav-right button",{
    y: -100,
    duration: 0.5,
    stagger: 0.1,
    opacity: 0,
})
tl.from("#book",{
    x: 10,
    y: 10,
    opacity: 0.5,
    repeat: -1,
    yoyo: true,
})
tl.from("#main h1",{
    x: 100,
    stagger: 0.2,
    opacity: 0,
})
tl.from("#main>img",{
opacity: 0,
scale: 0,
duration: 1,
delay: 0.5,
})

tl.from("#swipe",{
    y: 10,
    opacity: 0,
    yoyo: true,
    repeat: -1,
})
