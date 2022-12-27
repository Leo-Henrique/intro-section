const clickOutside = (elements, callback) => {
    const attr = "data-clickOutside";
    const handleElements = () => {
        elements.forEach(parent => {
            const children = parent.querySelectorAll("*");
            const allElements = [parent, ...children]

            if (!parent.hasAttribute(attr))
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
    function handleClick({ target }) {
        if (!target.hasAttribute(attr)) {
            callback();
            handleElements();
            addEvents(false);
        }
    }

    handleElements();
    addEvents(true);
}

export default clickOutside;