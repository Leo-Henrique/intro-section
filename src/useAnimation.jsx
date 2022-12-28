import clickOutside from "./clickOutside";

const useAnimation = ({ current: btn }, { current: content }, styles, setVisibility, notClose) => {
    const attr = "data-transition";
    const { milliseconds } = {
        get duration() {return getComputedStyle(content).transitionDuration},
        get seconds() {return this.duration.slice(0, -1)},
        get milliseconds() {return +this.seconds * 1000}
    }
    const close = () => {
        if (!content.hasAttribute(attr)) {
            content.setAttribute(attr, "");
            setVisibility(false);
            content.classList.remove(styles.show);
            setTimeout(() => {
                content.classList.remove(styles.display);
                content.removeAttribute(attr);

                if (notClose)
                    clickOutside(false, [btn, notClose.current], close);
                else
                    clickOutside(false, [btn, content], close);
            }, milliseconds)
        }
    }
    const show = () => {
        if (!content.hasAttribute(attr)) {
            content.setAttribute(attr, "");
            setVisibility(true);
            content.classList.add(styles.display);
            setTimeout(() => content.classList.add(styles.show), 20);
            setTimeout(() => {
                content.removeAttribute(attr);

                if (notClose)
                    clickOutside(true, [btn, notClose.current], close);
                else
                    clickOutside(true, [btn, content], close);
            }, milliseconds + 20)
        }
    }
    
    return [show, close];
}

export default useAnimation;