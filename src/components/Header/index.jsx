import React from "react";
import { ReactComponent as SVGMenu} from "../../assets/icon-menu.svg";
import { Dropdown, DropdownItem } from "../Dropdown";
import { ReactComponent as SVGLogo } from "../../assets/logo.svg";
import { ReactComponent as SVGTodo } from "../../assets/icon-todo.svg";
import { ReactComponent as SVGCalendar } from "../../assets/icon-calendar.svg";
import { ReactComponent as SVGReminders } from "../../assets/icon-reminders.svg";
import { ReactComponent as SVGPlanning } from "../../assets/icon-planning.svg";
import Button from "../Button";
import styles from "./style.module.scss";
import useAnimation from "../../useAnimation";


const Header = () => {
    const btn = React.useRef();
    const content = React.useRef();
    const [visibility, setVisibility] = React.useState(false);
    let show, close;
    React.useEffect(() => {
        [show, close] = useAnimation(btn, content, styles, setVisibility);
    }, [visibility])

    return (
        <header className={styles.header}>
            <a className={styles.headerLogo}
             href="#"
             aria-label="Nome fictício representando a logo do site">
                <SVGLogo />
            </a>

            <button className={styles.headerBtnMobile}
            onClick={() => !visibility ? show() : close()}
            aria-controls="menuMobile"
            aria-expanded={visibility ? true : false}
            aria-label={visibility ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            ref={btn}>
                <SVGMenu />
            </button>

            <nav className={styles.headerMenu}
            id="menuMobile"
            ref={content}>
                <ul className={styles.headerNav}>
                    <li className={styles.navItem}>
                        <Dropdown name="Recursos">
                            <DropdownItem icon={SVGTodo} text="Lista de afazeres" />
                            <DropdownItem icon={SVGCalendar} text="Calendário" />
                            <DropdownItem icon={SVGReminders} text="Lembretes" />
                            <DropdownItem icon={SVGPlanning} text="Planejamento" />
                        </Dropdown>
                    </li>

                    <li className={styles.navItem}>
                        <Dropdown name="Empresa">
                            <DropdownItem text="História" />
                            <DropdownItem text="Nosso time" />
                            <DropdownItem text="Blog" />
                        </Dropdown>
                    </li>

                    <li className={styles.navItem}>
                        <a href="#">
                            Carreiras
                        </a>
                    </li>

                    <li className={styles.navItem}>
                        <a href="#">
                            Sobre
                        </a>
                    </li>
                </ul>

                <div className={styles.headerUser}>
                    <button>
                        Login
                    </button>

                    <Button text="Cadastre-se"
                    size="small"
                    filled={false}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Header;