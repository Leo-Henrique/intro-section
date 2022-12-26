import React from "react";
import { ReactComponent as SVGLogo } from "../../assets/logo.svg";

const Header = () => {
    return (
        <header>
            <a href="#">
                <SVGLogo />
            </a>

            <nav>
                <ul>
                    <li>
                        <button>
                            Recursos
                        </button>

                        <ul>
                            <li>
                                <a href="#">
                                    Todo list
                                </a>
                            </li>

                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;