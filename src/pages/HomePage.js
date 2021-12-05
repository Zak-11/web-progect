import React from 'react';
import './home.scss'
import {NavLink} from "react-router-dom";
import PowersLap from '../Videos/pexels-kampus-production-8037388.mp4'


function HomePage() {
    return (
        <>

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

            <section className={'sec1'}/>

            <div className={'secText'}>
                <div className={'secBlock'}>


                    <NavLink style={{textDecoration: 'none'}} to="/about">
                        <h3 className={'secTextTitle'}>ABUT</h3>
                    </NavLink>
                    <p className={'secTextDsc'}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged.</p>
                </div>


            </div>


            <section className={'sec2'}/>
            <div className={'secText'}>
                <div className={'secBlock'}>

                    <img src={'https://cdn1.savepice.ru/uploads/2021/11/10/00db4fb5f3ac73439025a8dd25ac4a84-full.jpg'}
                         alt='mySelf'/>
                    <NavLink style={{textDecoration: 'none'}} to="gallery">
                        <h3 className={'secTextTitle'}>GALLERIA</h3>
                    </NavLink>
                    <p className={'secTextDsc'}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged.</p>
                </div>

            </div>


            <section className={'sec3'}/>
            <div className={'secText'}>

                <div className={'secBlock'}>

                    <img src={'https://cdn1.savepice.ru/uploads/2021/11/10/47926a741c3f96b2fed00fdeaae6ebc8-full.jpg'}
                         alt='mySelf'/>
                    <NavLink style={{textDecoration: 'none'}} to="/blog">
                        <h3 className={'secTextTitle'}>TRAVEL BLOG</h3>
                    </NavLink>
                    <p className={'secTextDsc'}>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged.</p>
                </div>
            </div>


            <section className={'sec4'}/>
            <div className={'secText'}>
                <div className={'secBlock'}>

                    <img src={'https://cdn1.savepice.ru/uploads/2021/11/10/82cfdc415bdc0b49124263a0f5976fd9-full.jpg'}
                         alt='mySelf'/>
                    <NavLink style={{textDecoration: 'none'}} to="/contact">
                        <h3 className={'secTextTitle'}>CONTACT</h3>
                    </NavLink>
                    <p className={'secTextDsc'}>We have many new exciting events and adventures ahead of us!
                        Subscribe to receive exclusive information about upcoming trips, new blog posts about amazing
                        places on our planet.
                        You will become a participant in the process of creating incredible paintings and presenting my
                        vision of art.
                        Don't miss the opportunity to receive email notifications about new paintings, photos, travels
                        and much more!</p>

                </div>


            </div>


        </>
    );
};

export default HomePage;