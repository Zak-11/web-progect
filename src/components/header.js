import React from 'react';
import '../style/header.scss'
import logo from '../image/logo.png';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTelegram} from "@fortawesome/free-brands-svg-icons"

function Header() {
    return (
        <div className='header'>

                <div className="logo-container">
                    <NavLink className="menu__link" to={'./'}>
                        <img className="header__logo" src={logo} alt="Logo"/>
                    </NavLink>
                    <NavLink className="menu__link" to={'./'}>
                        <li> KRISTINA TURDO</li>
                    </NavLink>
                </div>


                <div className='menu_container'>
                    <ul>
                        <NavLink className="menu__link" to="/about">
                            <li>ABOUT</li>
                        </NavLink>

                        <NavLink className="menu__link" to="/gallery">
                            <li>GALLERY</li>
                        </NavLink>

                        <NavLink className="menu__link" to="/photos">
                            <li>PHOTOS</li>
                        </NavLink>

                        <NavLink className="menu__link" to="/blog">
                            <li>BLOG</li>
                        </NavLink>
                        <NavLink className="menu__link" to="/contact">
                            <li>CONTACT</li>
                        </NavLink>

                    </ul>

                </div>

            <div className='icon_container'>
                <FontAwesomeIcon className={'icon'} icon={faInstagram } />
                <FontAwesomeIcon className={'icon'} icon={faTelegram} />
            </div>

        </div>

    );
};

export default Header;