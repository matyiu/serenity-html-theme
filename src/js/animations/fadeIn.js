export default (element, { duration, x, y, ...restProps }) => {
    gsap.from(element, {
        x: x ?? 0,
        y: y ?? 0,
        opacity: 0,
        duration,
        stagger: {
            each: 0.1,
            ease: 'power2.out'
        },
        ...restProps
    });
}