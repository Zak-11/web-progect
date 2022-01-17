import React, {useEffect} from 'react';
import './GalliryStyles.scss'
import Weret from "../../image/photo_2021-12-19_17-41-09.jpg";
import Ferta from "../../image/IMG_2961.JPG";
import Fta from "../../image/photo_2021-12-19_17-46-49.jpg";
import Ftar from "../../image/photo_2022-01-07_18-15-59555.jpg";
import Wer from "../../image/photo_2022-01-07_18-19-27.jpg";
import Rety from "../../image/photo_2022-01-07_18-21-47.jpg";
import Qwer from "../../image/photo_2022-01-07_18-24-07.jpg";
import Poiu from "../../image/photo_2022-01-07_18-24-54.jpg";
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
        description:'Blue silence',
        descrP:'Sometimes words distract from hearing the silence. ',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Weret,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Tramonti e albe',
        descrP:'vessel of the soul',
    },
    {
        id:3,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Fta,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Freedom',
        descrP:'Freedom in mind, in the soul.',
    },
    {
        id: 4,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Ftar,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Berlin',
        descrP:' ',
    },
    {
        id: 5,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Wer,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Flowle',
        descrP:' ',
    },
    {
        id: 6,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Rety,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'Feather of hope ',
        descrP:' ',
    },
    {
        id: 7,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Qwer,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'A sand storm',
        descrP:' ',
    },
    {
        id: 8,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Poiu,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        description:'After the rain ',
        descrP:' ',
    }


]



const Gallery = () => {

    useEffect(() => {
        AOS.init({
            duration : 4000
        });
    }, []);
    return (
        <div className={'wrapper'}>


                <div data-aos="zoom-out-up" data-aos-duration="800" className={'gallery_top'}>
                    <h1 data-aos="flip-left" data-aos-duration="3000">ART</h1>
                </div>
                <div className="intro_content">
                </div>




            <div className={'galliry_content'}>

                <div className={'gallery'}>
                    {products.map((product,id) => (
                        <div className={'gallery_block'} key={id}>
                            <div className={'gallery_img'}>
                                <img data-aos="zoom-out-right"
                                     data-aos-duration="1000"
                                     src={product.photo}
                                     alt={product.imageAlt}/>
                            </div>

                            <div data-aos="zoom-out-left" data-aos-duration="3000" className={'gallery_text'}>
                                <h2>{product.description}</h2>
                                <p>{product.descrP}</p>
                            </div>

                        </div>


                    ))}

                </div>
            </div>

        </div>
    );
};

export default Gallery;