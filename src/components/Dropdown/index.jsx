import React from 'react'

export const DropdownItem = ({icon, text}) => {
    return (
        <a href="#">
            {icon ? <div>{React.createElement(icon)}</div> : null}

            {icon ? <span>{text}</span> : text}
        </a>
    )
}


export const Dropdown = ({ name, children }) => {
    return (
        <>
            <button>
                {name}
            </button>

            <ul>
                {children.map((item, index) => {
                    return <DropdownItem key={index} {...item.props}  />
                })}
            </ul>
        </>
    )
}