import { isString } from "../utils"

const calcPosY = (element, value) => {
    if (!isString(value) || value.match(/px$/)) {
        return value;
    }

    const containerHeight = element.scrollHeight;

    return (containerHeight * (parseInt(value) / 100)) + 'px'
}

export const slideBg = (element, { duration, to, from, delay, ...restProps }) => {
    element.style.backgroundRepeat = 'no-repeat';

    if (to === undefined) {
        gsap.from(element, {
            duration,
            backgroundPositionY: calcPosY(element, from),
            ease: 'power1.out',
            delay,
            ...restProps
        })
    } else if (from === undefined) {
        gsap.to(element, {
            duration,
            backgroundPositionY: calcPosY(element, to),
            ease: 'power1.out',
            delay,
            ...restProps
        })
    } else {
        gsap.fromTo(element, {
            backgroundPositionY: calcPosY(element, from),
        }, {
            duration,
            backgroundPositionY: calcPosY(element, to),
            ease: 'power1.out',
            delay,
            ...restProps
        })
    }
}