import React from 'react';
import './HomePages.scss'
import Trres from './../../image/photo_2021-11-06_19-26-47.jpg'
import Des from './../../image/image0.jpeg'
import Asd from './../../image/image2 (12).jpeg'
import Ygh from './../../image/AnyConv.com__1 (19).jpeg'
import Iop from './../../image/AnyConv.com__1 (22).jpeg'
import Brt from './../../image/image9.jpeg'
import Req from './../../image/AnyConv.com__1 (10).jpeg'
import Yrt from './../../image/AnyConv.com__1 (9).jpeg'
import Weret from './../../image/image0 (1).jpeg'
import Ferts from './../../image/image55.jpeg'
import Wer from './../../image/image1 (4).jpeg'
import Ferta from './../../image/image0 (13).jpeg'
import Fert from './../../image/image0 (3).jpeg'
import Dert from './../../image/AnyConv.com__1 (7).jpeg'
import PowersLap from '../../Videos/pexels-kampus-production-8037388.mp4'


const HomePages = () => {
    return (
        <div className={'home_wrapper'}>

            <div className="intro">
                <div className="video">
                    <video className="video__media" loop muted autoPlay>
                        <source src={PowersLap}    type="video/mp4"/>
                    </video>
                </div>

                <div className="intro_content">
                    <div className="container">
                        <h1>Kristina Turdo</h1>
                        <p>Photograph Artist Creative person in everything.</p>


                    </div>
                </div>
            </div>
            <div className={'home_page'}>
                <div className={'description'}>

                    <div className="intro">
                        <div className="video">
                            <video className="video__media" loop muted autoPlay>
                                <source src={PowersLap}    type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>

            </div>


            <div className={'about_home'}>
                <div className={'about_wrapper'}>
                    <div className={'about_text'}>
                        <h2>Kristina Turdo</h2>
                        <p>“The artist's eye often stops at <br/>
                            what ordinary people do not see <br/>
                            anything remarkable; an accidental<br/>
                            sun crossing a spot, or shadow,<br/>
                            awaken a whole chain of thoughts, <br/>
                            feelings, and imagery. "</p>
                    </div>

                    <div className={'about-image'}>
                        <img src={Trres} alt={'my dey'}/>
                    </div>


                </div>
            </div>

            <div className={'galliry_home'}>

                <div className={'gallery'}>
                    <img src={Weret} alt={'my dey'}/>
                    <img src={Ferta} alt={'my dey'}/>
                    <img src={Req} alt={'my dey'}/>
                    <img src={Ygh} alt={'my dey'}/>
                    <img src={Des} alt={'my dey'}/>
                    <img src={Ferts } alt={'my dey'}/>
                    <img src={Wer} alt={'my dey'}/>
                    <img src={Yrt} alt={'my dey'}/>
                    <img src={Fert} alt={'my dey'}/>
                    < img src={Brt} alt={'my dey'}/>
                    <img src={Asd} alt={'my dey'}/>
                    < img src={Iop} alt={'my dey'}/>
                    < img src={Dert} alt={'my dey'}/>

                </div>


            </div>

            <div className={'footer_home'}>
                <h2>FOOTER</h2>
            </div>
        </div>

    );
};

export default HomePages;