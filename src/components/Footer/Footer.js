import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTelegram} from "@fortawesome/free-brands-svg-icons";
import './Footer.scss'



const Footer = () => {
    return (

        <div className={'footer_home'}>
            <div className={'footer_contact'}>
                <p>Follow</p>

                <div className={'footer_icons'}>
                    <a href="https://t.me/Kristina_Zak">
                        <FontAwesomeIcon className={'singnup'} icon={faTelegram} />
                    </a>
                    <a href="https://t.me/Kristina_Zak">
                        <FontAwesomeIcon className={'singnup'} icon={faFacebookF} />
                    </a>
                    <a href="https://t.me/Kristina_Zak">
                        <FontAwesomeIcon className={'singnup'} icon={faInstagram} />
                    </a>
                </div>

            </div>
        </div>
                );
};

export default Footer;