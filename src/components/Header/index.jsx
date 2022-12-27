import React from "react";
import { ReactComponent as SVGLogo } from "../../assets/logo.svg";
import { Dropdown, DropdownItem } from "../Dropdown";
import { ReactComponent as SVGTodo } from "../../assets/icon-todo.svg";
import { ReactComponent as SVGCalendar } from "../../assets/icon-calendar.svg";
import { ReactComponent as SVGReminders } from "../../assets/icon-reminders.svg";
import { ReactComponent as SVGPlanning } from "../../assets/icon-planning.svg";
import styles from "./style.module.scss";


const Header = () => {
    return (
        <header className={styles.header}>
            <a className={styles.headerLogo}
             href="#">
                <SVGLogo />
            </a>

            <nav className={styles.headerNav}>
                <ul>
                    <li>
                        <Dropdown name="Recursos">
                            <DropdownItem icon={SVGTodo} text="Lista de afazeres" />
                            <DropdownItem icon={SVGCalendar} text="Calendário" />
                            <DropdownItem icon={SVGReminders} text="Lembretes" />
                            <DropdownItem icon={SVGPlanning} text="Planejamento" />
                        </Dropdown>
                    </li>

                    <li>
                        <Dropdown name="Empresa">
                            <DropdownItem text="História" />
                            <DropdownItem text="Nosso time" />
                            <DropdownItem text="Blog" />
                        </Dropdown>
                    </li>

                    <li>
                        <a href="#">
                            Carreiras
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            Sobre
                        </a>
                    </li>
                </ul>
            </nav>

            <div className={styles.headerUser}>
                <button>
                    Login
                </button>

                <button>
                    Cadastre-se
                </button>
            </div>
        </header>
    )
}

export default Header;