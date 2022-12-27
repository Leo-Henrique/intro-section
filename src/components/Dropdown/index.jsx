import React from 'react';
import { ReactComponent as SVGArrowUp } from "../../assets/icon-arrow-up.svg"
import styles from "./style.module.scss";

export const DropdownItem = ({icon, text}) => {
    return (
        <a href="#" className={styles.dropdownItem}>
            {icon ? <div>{React.createElement(icon)}</div> : null}

            {icon ? <span>{text}</span> : text}
        </a>
    )
}


export const Dropdown = ({ name, children }) => {
    return (
        <>
            <button className={styles.dropdownBtn}>
                <span>
                    {name}
                </span>

                <div>
                    <SVGArrowUp />
                </div>
            </button>

            <ul className={styles.dropdownMenu}>
                {children.map((item, index) => {
                    return <DropdownItem key={index} {...item.props}  />
                })}
            </ul>
        </>
    )
}