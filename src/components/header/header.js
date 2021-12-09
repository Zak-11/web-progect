import React, {useState} from 'react';
import './header.scss'
import {NavLink} from "react-router-dom";
import logo from "../../image/logo.png";
import {MenuItems} from '../Menu/Menu'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faListUl, faWindowClose} from "@fortawesome/free-solid-svg-icons";




function Header() {
  const [showLinks, setShowLinks] = useState(false)

    const handleShownLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <div className='navbarItem'>

            <NavLink  to={'./'}>
                <h2 className={'navbar-logo'}>
                    <img className={'header__logo'} src={logo} alt="Logo"/>
                    KRISTINA TURDO
            </h2>
            </NavLink>

            <div className={'menu-icon'}>
                <FontAwesomeIcon icon={faListUl} color={' white'} />
                <FontAwesomeIcon icon={faWindowClose} color={' white'}/>
            </div>

            <ul className={'nav_menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink className={item.cName}
                               to={item.url}>
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Header;