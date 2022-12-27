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
    const btn = React.useRef();
    const content = React.useRef();
    const [visibility, setVisibility] = React.useState(false);
    let show, close;
    React.useEffect(() => {
        [show, close] = useAnimation(btn, content, styles, setVisibility);

    }, [visibility])


    return (
        <>
            <button className={styles.dropdownBtn}
            ref={btn}
            onClick={() => !visibility ? show(): close()}
            aria-expanded={visibility ? true : false}>
                <span>
                    {name}
                </span>

                <div>
                    <SVGArrowUp />
                </div>
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