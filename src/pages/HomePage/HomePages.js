import React, {useEffect} from 'react';
import './HomePages.scss'
import Trres from './../../image/Untitled2.png'
import Tar from './../../image/Untitled5855.png'
import Weret from "../../image/image0 (1).jpeg";
import Ygh from "../../image/AnyConv.com__1 (19).jpeg";
import Des from "../../image/image0.jpeg";
import Rar from './../../image/image0 (13).jpeg'
import Tarin from './../../image/image1 (11).jpeg'
import Rara from './../../image/image0 (12).jpeg'
import Raser from './../../image/image2 (13).jpeg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import {NavLink} from "react-router-dom";


const HomePages = () => {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });


    }, []);
    return (

        <div className={'wrapper'}>


            <div className={'home_page'}>
                <div className={'description'}>

                    <div className={'description_links'}>

                        <div data-aos="flip-left" data-aos-duration="3000">
                            <NavLink to="/art">
                                <h2>ART /</h2>
                            </NavLink>
                        </div>
                        <div data-aos="flip-left" data-aos-duration="3000">
                            <NavLink to="/photos">
                                <h2>PHOTO</h2>
                            </NavLink>
                        </div>

                    </div>

                </div>
            </div>


            <div className={'my_project'}>
                <div className={'project_wrapper'}>
                    <div className={'project_start'}>
                        <img className={'project_img'} src={Rar} alt={'my dey'}/>
                    </div>
                    <div className={'project_between'}>
                        <img className={'project_img'} src={Rara} alt={'my dey'}/>
                    </div>
                    <div className={'project_end'}>
                        <img className={'project_img'} src={Raser} alt={'my dey'}/>
                    </div>

                </div>
            </div>


            <div className={'about_wrapper'}>
                <div className={'home_text'}>
                    <div data-aos="fade-down" data-aos-duration="2000">
                        <h2> “Art - as a passion”</h2>
                    </div>


                </div>

                <div className={'container_wrapper'}>
                    <div className={'container_start'}>
                        <img data-aos="fade-right" data-aos-duration="1000" className={'shadow'} src={Trres}
                             alt={'my dey'}/>
                    </div>
                    <div className={'container_between'}>
                        <img data-aos="fade-left" data-aos-duration="1500" className={'shadow'} src={Tarin}
                             alt={'my dey'}/>
                    </div>
                    <div className={'container_end'}>
                        <img className={'shadow'} data-aos="fade-up-right" data-aos-duration="2000" src={Tar}
                             alt={'my dey'}/>
                    </div>
                </div>
            </div>


            <div className="intro">
                <div className={'container_flaunt'}>
                    <div className={'video-vimeo'}>
                        <div className="video">

                            {/* <iframe className="video__media"

                                    title="vimeo-player"
                                    allow="autoplay"
                                 src="https://player.vimeo.com/video/659086923?&amp;autoplay=1&amp;loop=1&amp;title=0&amp;byline=1&amp;portrait=1&amp;&muted=1;&amp;controls=0"
                                    frameBorder="0"
                                    allowFullScreen=""/>*/}

                        </div>
                    </div>
                </div>
            </div>


            <div className={'video_home'}>
                <div className="wave_inner">
                    <figure className="wave">
                        <img data-aos="fade-up-right" data-aos-duration="600" src={Weret} alt={'my dey'}/>
                    </figure>
                    <figure className="wave">
                        <img data-aos="fade-up-right" data-aos-duration="600" src={Ygh} alt={'my dey'}/>
                    </figure>
                    <figure className="wave">
                        <img data-aos="fade-up-left" data-aos-duration="600" src={Des} alt={'my dey'}/>
                    </figure>
                </div>
            </div>

        </div>

    );
};

export default HomePages;