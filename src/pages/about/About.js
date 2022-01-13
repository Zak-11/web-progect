import React, {useEffect} from 'react';
import './About.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Dt from "../../image/rte.png";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });

        }, []);

    return (
        <div className={'wrapper'}>

            <div data-aos="zoom-out-up" data-aos-duration="800" className={'about_top'}>
                <h1 data-aos="flip-left" data-aos-duration="3000">ABOUT</h1>
            </div>
            <div className={'about_content'}>

                <div data-aos="zoom-out-up"
                     data-aos-duration="2500" className={'about_text'}>
                    <h2>KRISTINA ZAK</h2>
                    <p>As a Georgian - Osetian - Russian artist living in Switzerland my paintings ,
                        are a mirror of my life, soul, imaginations and experiences.My journey
                        in art, started in 2016, when I decided to professionally paint and  express
                        my vision of life, through paintings, as my language to communicate with
                        the world. My biggest aim is I to create with passion and open soul. True
                        colors and structures, are my way to express my vision for this world. In every
                        travel journey,I look for inspiration and follow it. Step into my world and share
                        with me this happiness, freedom, harmony and passion.</p>
                </div>
                <div data-aos="flip-right"
                     data-aos-duration="2500"className={'about_photo'}>
                    <img src={Dt} alt={'page'}/>
                </div>

            </div>

        </div>
    );
};

export default About;