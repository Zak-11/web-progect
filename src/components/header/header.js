import React from 'react';
import './header.scss'
import Nav from "../nav/Nav";
import Logo from "../logo/logo";



function Header() {
    return (
        <div className='header'>
            <Logo/>
            <Nav/>
        </div>
    );
};

export default Header;