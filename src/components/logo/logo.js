import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../../image/logo.png";
import './logo.scss'


const Logo = () => {
    return (
<div className={'logo_container'}>
    <div className={'navbar_logo'}>

        <NavLink className="navbar_item" to={'./'}>
            <img className="header__logo" src={logo} alt="Logo"/>
        </NavLink>

        <NavLink className="navbar_text" to={'./'}>
             KRISTINA TURDO
        </NavLink>
    </div>
</div>

    );
};

export default Logo;