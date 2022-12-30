const clickOutside = (elements, callback, closeOnElements) => {
    const {attr} = {
        get id() {return Math.floor(Math.random() * 1000000)},
        get name() {return "data-click-outside"},
        get attr() {return `${this.name}-${this.id}`},
    }
    const addAttributes = (add) => {
        const addOnAllChildren = (add, parent) => {
            const children = parent.querySelectorAll("*");
            const allElements = [parent, ...children];
    
            allElements.forEach(element => {
                if (add)
                    element.setAttribute(attr, "");
                else
                    element.removeAttribute(attr);
            })
        }

        elements.forEach(parent => addOnAllChildren(add, parent));
        if (closeOnElements) {
            closeOnElements.forEach(parent => {
                if (parent.tagName === "BUTTON")
                    addOnAllChildren(false, parent)
                else
                    parent.removeAttribute(attr);
            });
        }
    }
    const handleClick = ({ target }) => {
        if (!target.hasAttribute(attr)) {
            callback();
            addAttributes(false);
            addEvents(false);
        }
    }
    function addEvents(add) {
        const events = ["mousedown", "touchstart"];

        if (add)
            events.forEach(event => document.addEventListener(event, handleClick));
        else
            events.forEach(event => document.removeEventListener(event, handleClick));
    }

    addAttributes(true);
    addEvents(true);
}

export default clickOutside;