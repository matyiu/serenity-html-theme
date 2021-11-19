export default (element, { nStart, duration, delay, ...restProps }) => {
    const end = parseInt(element.textContent);

    gsap.fromTo(element, {
        textContent: nStart,
    }, {
        duration,
        delay,
        textContent: end,
        ease: 'power2.out',
        onComplete: () => {
            element.textContent = element.textContent + '+';
        },
        ...restProps
    });
}