export const isString = val => typeof val === 'string';

const getTarget = (target, element) => {
    if (target === 'children') {
        return element.children;
    } else if (isString(target)) {
        return element.querySelectorAll(target);
    } else {
        return element;
    }
}

export const animateClass = (classString, { callback, target,...props}) => {
    gsap.utils.toArray(classString).forEach(element => {
        if (props.scrollTrigger) {
            props.scrollTrigger = { ...props.scrollTrigger, trigger: element };
        }
        
        callback(getTarget(target, element), props)
    });
}