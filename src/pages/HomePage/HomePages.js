import React from 'react';
import './HomePages.scss'
import Trres from './../../image/Untitled2.png'
import Tar from './../../image/Untitled5855.png'
import Weret from "../../image/image0 (1).jpeg";
import Ygh from "../../image/AnyConv.com__1 (19).jpeg";
import Des from "../../image/image0.jpeg";
import Iop from "../../image/AnyConv.com__1 (22).jpeg";
import PowersLap from '../../Videos/pexels-kampus-production-8037388.mp4'
import Rar from './../../image/image0 (13).jpeg'
import Tarin from './../../image/image1 (11).jpeg'
import Rara from './../../image/image0 (12).jpeg'
import Raser from './../../image/image2 (13).jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Fade from 'react-reveal/Fade';
import Footer from "../../components/Footer/Footer";
import RubberBand from 'react-reveal/RubberBand';


const HomePages = () => {

    AOS.init()


    return (

        <div className={'home_wrapper'}>
          <div className={'home_page'}>
                <div className={'description'}>
                    <Fade top>
                        <h2>Kristina Turdo</h2>
                       {/* <p> An artist, photographer, designer<br/>
                            is a creative person in everything. </p>*/}
                    </Fade>
                </div>
            </div>


          <div className={'my_project'}>
                <div className={'project_wrapper'}>
                    <div className={'project_start'} >
                    <img className={'project_img'} src={Rar} alt={'my dey'}/>

                </div>
                      <div className={'project_between'}>
                          <img  className={'project_img'} src={Rara} alt={'my dey'}/>
                      </div>
                       <div className={'project_end'}>
                           <img className={'project_img'} src={Raser} alt={'my dey'}/>
                       </div>

                </div>
            </div>



              <div className={'about_wrapper'}>
                    <div className={'home_text'}>
                        <RubberBand>
                        <h2> MY PROCESS OF WORK AND INSPIRATION</h2>
                        </RubberBand>
                    </div>
                    <div className={'container_wrapper'}>
                        <div className={'container_start'}>
                            <img data-aos="fade-right" data-aos-duration="600" className={'shadow'} src={Trres}
                                 alt={'my dey'}/>
                        </div>
                        <div className={'container_between'}>
                            <img data-aos="fade-left" data-aos-duration="600" className={'shadow'} src={Tarin}
                                 alt={'my dey'}/>
                        </div>
                        <div className={'container_end'}>
                            <img className={'shadow'} data-aos="fade-up-right" data-aos-duration="600" src={Tar}
                                 alt={'my dey'}/>
                        </div>
                    </div>
                </div>





            <div className="intro">
                <div className="video">
                    <video className="video__media" loop muted autoPlay>
                        <source src={PowersLap} type="video/mp4"/>
                    </video>
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
                    <figure className="wave">
                        <img data-aos="fade-up-left" data-aos-duration="600" src={Iop} alt={'my dey'}/>
                    </figure>
                </div>
            </div>


            <Footer/>

        </div>

    );
};

export default HomePages;