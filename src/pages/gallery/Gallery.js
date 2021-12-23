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
import Dt from "../../image/interyer-galerei-masrah-al-madina-04.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';


const products = [
    {
        id: 1,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Weret,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',

    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Ferta,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        photo: Req,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        photo: Ygh,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        photo: Des,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 6,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Ferts,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 7,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        photo: Wer,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 8,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        photo: Yrt,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 9,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        photo: Fert,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 10,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        photo: Brt,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 11,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        photo: Asd,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 12,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        photo: Iop,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 13,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        photo: Dert,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]



const Gallery = () => {
    AOS.init()

    return (
        <div className={'gallery_wrapper'}>

            <div className={'gallery_top'}>

                <div data-aos="fade-right" className={'gallery_head'}>
                    <img src={Dt} alt={'page'}/>
                    <h1 data-aos="fade-right">Gallery</h1>
                </div>
                <div className="intro_content">


                </div>
            </div>

            <div className={'galliry_home'}>

                <div className={'gallery'}>
                    {products.map((product,id) => (
                        <div key={id} href={product.href} >
                            <img
                                src={product.photo}
                                alt={product.imageAlt}/>
                        </div>


                    ))}

                </div>
            </div>

        </div>
    );
};

export default Gallery;