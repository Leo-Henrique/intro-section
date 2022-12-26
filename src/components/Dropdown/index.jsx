import React from 'react'
import DropdownItem from "../DropdownItem";

const Dropdown = ({ name, children }) => {
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

export default Dropdown;