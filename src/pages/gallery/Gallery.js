import React from 'react';
import './GalliryStyles.scss'
import Weret from "../../image/image0 (1).jpeg";
import Ferta from "../../image/image0 (13).jpeg";
import Req from "../../image/AnyConv.com__1 (10).jpeg";
import Ygh from "../../image/AnyConv.com__1 (19).jpeg";
import Des from "../../image/image0.jpeg";
import Ferts from "../../image/image55.jpeg";
import Wer from "../../image/image1 (4).jpeg";
import Yrt from "../../image/AnyConv.com__1 (9).jpeg";
import Fert from "../../image/image0 (3).jpeg";
import Brt from "../../image/image9.jpeg";
import Asd from "../../image/image2 (12).jpeg";
import Iop from "../../image/AnyConv.com__1 (22).jpeg";
import Dert from "../../image/AnyConv.com__1 (7).jpeg";


const Gallery = () => {
    return (
        <div className={'gallery_wrapper'}>

            <div className="intro_content">
                <h1>Gallery</h1>
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


        </div>
    );
};

export default Gallery;