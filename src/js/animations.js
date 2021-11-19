import fadeIn from "./animations/fadeIn";
import { slideBg } from "./animations/slideBg";
import number from "./animations/number";
import { animateClass } from "./utils";

gsap.registerPlugin(ScrollTrigger);

/*
----------------------------------
    Fade In Animations
----------------------------------
*/

const scrollTrigger = {
    start: "20px 80%",
}

animateClass('.staggered-fadeIn-right', {
    callback: fadeIn,
    target: 'children',
    duration: 0.75,
    x: -100,
    scrollTrigger
});

animateClass('.staggered-fadeIn-left', {
    callback: fadeIn,
    target: 'children',
    duration: 0.75,
    x: 100,
    scrollTrigger
});

animateClass('.staggered-fadeIn', {
    callback: fadeIn,
    target: 'children',
    duration: 0.75,
    scrollTrigger
});

animateClass('.fadeIn-scale-up', {
    callback: fadeIn,
    duration: 0.5,
    scale: 0.7,
    scrollTrigger
});

animateClass('.fadeIn-right', {
    callback: fadeIn,
    duration: 0.5,
    x: -100,
    scrollTrigger
});

animateClass('.fadeIn-left', {
    callback: fadeIn,
    duration: 0.5,
    x: 100,
    scrollTrigger
});

animateClass('.staggered-fadeIn-down', {
    callback: fadeIn,
    target: 'children',
    duration: 0.75,
    y: -50,
    scrollTrigger
});

animateClass('.hero', {
    callback: slideBg,
    duration: 0.3, 
    from: '100%', 
    delay: 0.4
});

animateClass('.animate-number', {
    callback: number,
    nStart: 0,
    snap: {
        textContent: 1,
    },
    duration: 1,
    delay: 0.15,
    scrollTrigger
})