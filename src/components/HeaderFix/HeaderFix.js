import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import logo from "../../image/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faTelegram} from "@fortawesome/free-brands-svg-icons";
import './HeadeFix.scss'
import {faListUl, faWindowClose} from "@fortawesome/free-solid-svg-icons";


const HeaderFix = () => {
    const [isMobile, setIsMobile] =useState(false)

    return (
        <div className={'navbar'}>
            <NavLink className={"logo"} to={'./'}>
                <h2 className={'navbar-logo'}>
                    <img className={'header__logo'} src={logo} alt="Logo"/>
                    KRISTINA TURDO
                </h2>
            </NavLink>

            <ul className={ isMobile ? 'nav-links-mobile' :'nav-links' }
            onClick={() => setIsMobile(false)}
            >
                <NavLink className={'home'} to="./">
                    <li >HOME</li>
                </NavLink>

                <NavLink className={'gallery'} to="/gallery">
                    <li >GALLERY</li>
                </NavLink>
                <NavLink className={'photo'} to="/photos">
                    <li>PHOTO</li>
                </NavLink>
                <NavLink className={'blog'} to="/blog">
                    <li>BLOG</li>
                </NavLink>
                <NavLink className={'contact'} to="/contact">
                    <li>CONTACT</li>
                </NavLink>

                <a href="https://t.me/Kristina_Zak">
                    <FontAwesomeIcon className={'singnup'} icon={faTelegram} />
                </a>
            </ul>
            <button className={'mobile-menu-icon'}
                    onClick={() => {setIsMobile(!isMobile)}}
             >
                {isMobile ? ( <FontAwesomeIcon icon={faWindowClose} color={' white'}/>)
                    :(<FontAwesomeIcon icon={faListUl} color={' white'}/>
                    ) }

            </button>
        </div>
    );
};

export default HeaderFix;