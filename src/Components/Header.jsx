import React from 'react';
import { Link } from 'react-router-dom';
import './css-style/header-style.css';

const Header = () => {
    return (
        <header className="top">
            <div>
                <div className="top-logo">
                    <span className="top-logo__text">
                        Nikita
                    </span>
                </div>
                <div className="top-menu">
                    <ul>
                        <li>
                            <Link className="top-menu__link" to="#">Home</Link>
                        </li>
                        <li>
                            <Link className="top-menu__link" to="#">App</Link>
                        </li>
                        <li>
                            <Link className="top-menu__link" to="#">Wallpaper</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
