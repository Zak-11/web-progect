import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import logo from "../../image/112-removebg-preview.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Header.scss'
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    const [isMobile, setIsMobile] =useState(false)

    return (
        <div className={'navbar'}>
            <NavLink className={"logo"} to={'./'}>
                <h2 className={'navbar-logo'}>
                    <img className={'header__logo'}  src={logo} alt="Logo"/>

                </h2>
            </NavLink>

            <ul className={ isMobile ? 'nav-links-mobile' :'nav-links' }
            onClick={() => setIsMobile(false)}>


                <NavLink className={'gallerya'} to="/art">
                    <li >ART</li>
                </NavLink>
                <NavLink className={'photo'} to="/photos">
                    <li>PHOTO</li>
                </NavLink>
                <NavLink className={'blog'} to="/blog">
                    <li>BLOG</li>
                </NavLink>

                <NavLink className={'about'} to="/about">
                    <li>ABOUT</li>
                </NavLink>
                <NavLink className={'contact'} to="/contact">
                    <li>CONTACT</li>
                </NavLink>


            </ul>
            <div className={'mobile-menu-icon'}
                    onClick={() => {setIsMobile(!isMobile)}}
             >
                {isMobile ? ( <FontAwesomeIcon icon={faTimes} color={' white'}/>)
                    :(<FontAwesomeIcon icon={faBars} color={' white'}/>
                    ) }

            </div>
        </div>
    );
};

export default Header;