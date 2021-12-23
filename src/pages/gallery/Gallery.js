import React, {useEffect} from 'react';
import './GalliryStyles.scss'
import Weret from "../../image/photo_2021-12-19_17-41-09.jpg";
import Ferta from "../../image/IMG_2961.JPG";
import Fta from "../../image/photo_2021-12-19_17-46-49.jpg";

import Dt from "../../image/interyer-galerei-masrah-al-madina-04.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';


const products = [
    {
        id: 1,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Ferta,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',

    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Weret,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id:3,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Fta,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },

]



const Gallery = () => {

    useEffect(() => {
        AOS.init({
            duration : 4000
        });
    }, []);
    return (
        <div className={'gallery_wrapper'}>

            <div className={'gallery_top'}>

                <div data-aos="zoom-out-up" data-aos-duration="800"className={'gallery_head'}>
                    <img src={Dt} alt={'page'}/>
                    <h1 data-aos="flip-left" data-aos-duration="3000">Gallery</h1>
                </div>
                <div className="intro_content">


                </div>
            </div>

            <div className={'galliry_content'}>

                <div className={'gallery'}>
                    {products.map((product,id) => (
                        <div className={'gallery_block'} key={id}>
                            <img data-aos="fade-up-right"
                                 data-aos-duration="2000"
                                src={product.photo}
                                alt={product.imageAlt}/>
                            <div data-aos="fade-up-left" data-aos-duration="2000"className={'gallery_text'}>
                                <h2>Blue silence</h2>
                                <p>Sometimes words distract from hearing the silence.</p>
                            </div>

                        </div>


                    ))}

                </div>
            </div>

        </div>
    );
};

export default Gallery;