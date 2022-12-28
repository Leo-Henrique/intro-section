let handleClick;
const clickOutside = (addClickOutside, elements, callback) => {
    const attr = "data-clickOutside";
    const addAttribute = (add) => {
        elements.forEach(parent => {
            const children = parent.querySelectorAll("*");
            const allElements = [parent, ...children]

            if (add)
                allElements.forEach(element => element.setAttribute(attr, ""));
            else
                allElements.forEach(element => element.removeAttribute(attr));
        });
    }
    const addEvents = (add) => {
        const names = ["mousedown", "touchstart"];

        names.forEach(event => {
            if (add) 
                document.addEventListener(event, handleClick);
            else
                document.removeEventListener(event, handleClick);
        });
    }

    if (addClickOutside) {
        handleClick = ({ target }) => {
            if (!target.hasAttribute(attr)) callback();
        }
        addAttribute(true);
        addEvents(true);
    } else {
        addAttribute(false);
        addEvents(false);
    }
}

export default clickOutside;