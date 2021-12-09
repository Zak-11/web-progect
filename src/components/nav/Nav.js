import React from 'react';
import './nav.scss'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faTelegram} from "@fortawesome/free-brands-svg-icons";




const Nav = () => {
    return (
        <div className='nav'>

            <NavLink className={'nav_link'} to="/about">
                    <li>ABOUT</li>
                </NavLink>

                <NavLink className={'nav_link'} to="/gallery">
                    <li >GALLERY</li>
                </NavLink>

                <NavLink className={'nav_link'} to="/photos">
                    <li >PHOTOS</li>
                </NavLink>

                <NavLink className={'nav_link'} to="/blog">
                    <li>BLOG</li>
                </NavLink>
                <NavLink className={'nav_link'} to="/contact">
                    <li>CONTACT</li>
                </NavLink>

                  <a href="https://www.instagram.com/p/CSzxmlzqqDUD6fRj0KD071yeC9IJkQxiJiuJDw0/?utm_medium=copy_link">
                        <FontAwesomeIcon className={'nav_link'} icon={faInstagram } />
                    </a>
                    <a href="https://t.me/Kristina_Zak">
                        <FontAwesomeIcon className={'nav_link'} icon={faTelegram} />
                    </a>
        <Menu/>


        </div>

    );
};

export default Nav;