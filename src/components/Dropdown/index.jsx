import React from 'react';
import { ReactComponent as SVGArrowUp } from "../../assets/icon-arrow-up.svg"
import styles from "./style.module.scss";
import clickOutside from "../../clickOutside";

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
    const [dropdown, setDropdown] = React.useState(false);
    const btn = React.useRef();
    const toggleDropdown = () => {
        const attr = "data-transition";
        const { current } = btn;
        const menu = current.nextElementSibling;
        const { milliseconds } = {
            get duration() {return getComputedStyle(menu).transitionDuration},
            get seconds() {return this.duration.slice(0, -1)},
            get milliseconds() {return +this.seconds * 1000}
        }
        const close = () => {
            setDropdown(false);
            menu.classList.remove(styles.show);
            setTimeout(() => {
                menu.classList.remove(styles.display);
                current.removeAttribute(attr);
            }, milliseconds);
        }
        const animation = () => {
            current.setAttribute(attr, "");

            if (!dropdown) {
                setDropdown(true);
                menu.classList.add(styles.display);
                setTimeout(() => menu.classList.add(styles.show), 20);
                setTimeout(() => {
                    clickOutside([current, menu], close);
                    current.removeAttribute(attr);
                }, milliseconds + 20);
            } else 
                close();
        }

        if (!current.hasAttribute(attr)) animation();
    }

    return (
        <>
            <button className={styles.dropdownBtn}
            onClick={toggleDropdown}
            ref={btn}
            aria-expanded={dropdown ? true : false}>
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