import React from 'react'
import styles from "./style.module.scss";

const Button = ({ text , size, filled}) => {
    const btn = React.useRef();
    const handleSize = () => {
        switch (size) {
            case "small":
                btn.current.classList.add(styles.btnSmall);
                break;
            case "normal":
                btn.current.classList.add(styles.btnNormal);
                break;
        }
    }
    const handleFill = () => {
        if (filled)
            btn.current.classList.add(styles.btnFilled);
        else
            btn.current.classList.add(styles.btnOutline)
    }

    React.useEffect(() => {
        handleSize();
        handleFill();
    }, [])
    
    return (
        <button className={styles.btn} ref={btn}>
            {text}
        </button>
    )
}

export default Button;