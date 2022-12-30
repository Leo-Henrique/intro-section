import addClickOutside from "./clickOutside";
import React from "react";

const useAnimation = ({ element, styles, closeOnElements }) => {
    const [visibility, setVisibility] = React.useState(false);
    const [open, setOpen] = React.useState(null);

    React.useEffect(() => {
        const content = element.current;
        closeOnElements &&= closeOnElements.map(obj => obj.current);
        const { milliseconds } = {
            get duration() {return getComputedStyle(content).transitionDuration},
            get seconds() {return this.duration.slice(0, -1)},
            get milliseconds() {return +this.seconds * 1000}
        }
        const handleTransition = (callback) => {
            const attr = "data-transition";

            if (!content.hasAttribute(attr)) {
                content.setAttribute(attr, "");
                callback(() => content.removeAttribute(attr));
            }
        }
        const closeElement = () => {
            handleTransition((finished) => {
                content.classList.remove(styles.show);
                setTimeout(() => {
                    content.classList.remove(styles.display);
                    setVisibility(false);
                    finished();
                }, milliseconds);
            })
        }
        const openElement = () => {
            handleTransition((finished) => {
                content.classList.add(styles.display);
                setTimeout(() => content.classList.add(styles.show), 20);
                setTimeout(() => {
                    addClickOutside([content], closeElement, closeOnElements);
                    setVisibility(true);
                    finished();
                }, milliseconds + 20);
            });
        }

        setOpen(() => openElement);
    }, []);

    return { visibility, open }
}

export default useAnimation;