import React from 'react';
import { ReactComponent as SVGArrowUp } from "../../assets/icon-arrow-up.svg"
import styles from "./style.module.scss";
import useAnimation from "../../useAnimation";

export const DropdownItem = ({icon, text}) => {
    return (
        <li className={styles.dropdownItem}>
            <a href="#">
                {icon ? <div>{React.createElement(icon)}</div> : null}

                {icon ? <span>{text}</span> : text}
            </a>
        </li>
    )
}

export const Dropdown = ({ name, children }) => {
    const content = React.useRef();
    const { visibility, open } = useAnimation({
        element: content,
        styles,
    });

    return (
        <>
            <button className={styles.dropdownBtn}
            onClick={open}
            aria-expanded={visibility}>
                <span>
                    {name}
                </span>

                <span>
                    <SVGArrowUp />
                </span>
            </button>

            <ul className={styles.dropdownMenu}
            ref={content}>
                {children.map((item, index) => {
                    return <DropdownItem key={index} {...item.props}  />
                })}
            </ul>
        </>
    )
}