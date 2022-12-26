import React from 'react'

const DropdownItem = ({icon, text}) => {
    return (
        <a href="#">
            {icon ? <div>{React.createElement(icon)}</div> : null}

            {icon ? <span>{text}</span> : text}
        </a>
    )
}

export default DropdownItem;