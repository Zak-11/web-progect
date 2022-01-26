import React, {useEffect, useState} from 'react';
import './Scrolling.scss'


const Scrolling = () => {
    const [showButton, setShowButton] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    return (
        <>
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    &#8679;
                    <span className="pulse-button__rings"/>
                    <span className="pulse-button__rings"/>
                    <span className="pulse-button__rings"/>

                </button>
            )}
        </>
    );
};

export default Scrolling;