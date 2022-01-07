import React, {useEffect} from 'react';
import './Photos.scss'
import Fil from "../../image/neskolko-sovetov-ot-fotografa-chtoby-menshe-bylo-razocharovanij-pri-fotografirovanii-1.jpg";
import Ferta from "../../image/photo_2021-11-07_02-07-42.jpg";
import Weret from "../../image/IMG_24226.jpg";
import Fta from "../../image/photo_2021-11-06_20-54-43.jpg";
import Ftar from "../../image/photo_2021-11-07_02-43-25.jpg";
import Flater from "../../image/photo_2021-11-06_21-07-08.jpg";
import Fkopi from "../../image/photo_2022-01-03_23-31-20.jpg";
import Ftyr from "../../image/photo_2022-01-03_22-19-37.jpg";
import Ftyre from "../../image/photo_2022-01-03_23-26-53.jpg";
import Tyu from "../../image/photo_2022-01-03_23-14-13.jpg";
import Werer from "../../image/photo_2022-01-03_22-53-37.jpg";
import Wer from "../../image/photo_2022-01-03_22-23-57.jpg";
import Ertu from "../../image/photo_2022-01-06_15-43-26.jpg";

import AOS from "aos";

const photos = [
    {
        id: 1,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        product: Ferta,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Firenze',
        descrP:'Sometimes words distract from hearing the silence. ',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        product: Wer,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Barcelona',
        descrP:'vessel of the soul',
    },
    {
        id:3,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        product: Fta,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Paris',
        descrP:'Freedom in mind, in the soul.',
    },
    {
        id:4,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        product:  Weret,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Berlin',
        descrP:'Sometimes words distract from hearing the silence. ',
    },
    {
        id: 5,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        product:  Ftar,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'California',
        descrP:'Sometimes words distract from hearing the silence. ',
    },
    {
        id: 6,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        product: Ftyr,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Maldives',
        descrP:'Sometimes words distract from hearing the silence. ',
    },
    {
        id: 7,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        product: Werer,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Capri Island',
        descrP:'Sometimes words distract from hearing the silence. ',
    },

    {
        id: 8,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        product: Fkopi,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Milan',
        descrP:'Sometimes words distract from hearing the silence. ',
    },
    {
        id: 9,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        product: Flater,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Zürich',
        descrP:'Sometimes words distract from hearing the silence. ',
    },
    {
        id: 10,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        product: Ertu,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Venice',
        descrP:'Sometimes words distract from hearing the silence. ',
    },
    {
        id: 11,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        product:  Ftyre,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Bali',
        descrP:'Sometimes words distract from hearing the silence. ',
    },
    {
        id: 12,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        product: Tyu,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Singapore',
        descrP:'Sometimes words distract from hearing the silence. ',
    },
]

const Photos = () => {
    useEffect(() => {
        AOS.init({
            duration : 4000
        });
    }, []);


    return (
        <div className={'wrapper'}>
            <div data-aos="zoom-out-up" data-aos-duration="800"className={'gallery_head'}>
                <img src={Fil} alt={'page'}/>
                <h1 data-aos="flip-left" data-aos-duration="3000">PHOTO</h1>
            </div>

            <div className={'photo_content'}>
                {photos.map((photo,id)=>
                    <div className={'photo_wrapper'}key={id}>
                        <img data-aos="zoom-in-down"
                             data-aos-duration="3000"className={'photo_wrapper_img'}src={photo.product}/>

                        <div className={'image_text'}>
                            <h2>{photo.description}</h2>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
};

export default Photos;