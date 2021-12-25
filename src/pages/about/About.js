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
        <div className={'about_page'}>

            <div className={'about_top'}>

            </div>
            <div className={'about_content'}>

                <div data-aos="fade-up"
                     data-aos-duration="2500" className={'about_text'}>
                    <h2>ABOUT KRISTINA ZAK</h2>
                    <p>As a Georgian - Osetian - Russian artist living in Switzerland my paintings ,<br/>
                        are a mirror of my life, soul, imaginations and experiences.My journey <br/>
                        in art, started in 2016, when I decided to professionally paint and  express<br/>
                        my vision of life, through paintings, as my language to communicate with <br/>
                        the world. My biggest aim is I to create with passion and open soul. True <br/>
                        colors and structures, are my way to express my vision for this world. In every<br/>
                        travel journey,I look for inspiration and follow it. Step into my world and share<br/>
                        with me this happiness, freedom, harmony and passion.</p>
                </div>
                <div data-aos="fade-up-left"

                     data-aos-duration="2500"className={'about_photo'}>
                    <img src={Dt} alt={'page'}/>
                </div>

            </div>

        </div>
    );
};

export default About;