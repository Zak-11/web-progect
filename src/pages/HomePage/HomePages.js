import React from 'react';
import './HomePages.scss'
import Trres from './../../image/Untitled2.png'
import Tar from './../../image/1-_12_.jpg'
import Weret from "../../image/image0 (1).jpeg";
import Ygh from "../../image/AnyConv.com__1 (19).jpeg";
import Des from "../../image/image0.jpeg";
import Iop from "../../image/AnyConv.com__1 (22).jpeg";
import PowersLap from '../../Videos/pexels-kampus-production-8037388.mp4'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Fade from 'react-reveal/Fade';
import Footer from "../../components/Footer/Footer";





const HomePages = () => {

        AOS.init ()


    return (

        <div className={'home_wrapper'}>

            <div className="intro">
                <div className="video">
                    <video className="video__media" loop muted autoPlay>
                        <source src={PowersLap} type="video/mp4"/>
                    </video>
                </div>

                <div className="intro_content">
                    <Fade left>
                        <h1>Kristina Turdo</h1>
                    </Fade>



                </div>
            </div>

            <div className={'home_page'}>
                <div className={'description'}>
                    <Fade top>

                        <p > An artist, photographer, designer<br/>
                            is a creative person in everything. </p>
                    </Fade>
                </div>
            </div>


            <div className={'about_home'}>
                <div className={'about_wrapper'}>


                    <div className={'about_text'}>
                        <img data-aos="fade-up-right" data-aos-duration="600" src={Trres} alt={'my dey'}/>
                    </div>

                    <div className={'about-image'}>
                        <img data-aos="fade-down-left" data-aos-duration="600"src={Tar} alt={'my dey'}/>
                    </div>

                </div>
            </div>



            <div className={'video_home'}>


                <div className="wave_inner">
                <figure className="wave">
                    <img  data-aos="fade-up-right" data-aos-duration="600"src={Weret} alt={'my dey'}/>
                </figure>
                <figure className="wave">
                    <img  data-aos="fade-up-right" data-aos-duration="600"src={Ygh} alt={'my dey'}/>
                </figure>
                <figure className="wave">
                    <img  data-aos="fade-up-left"data-aos-duration="600"src={Des} alt={'my dey'}/>
                </figure>
                <figure className="wave">
                    <img  data-aos="fade-up-left" data-aos-duration="600"src={ Iop} alt={'my dey'}/>
                </figure>
            </div>
            </div>
            <Footer/>
        </div>

    );
};

export default HomePages;