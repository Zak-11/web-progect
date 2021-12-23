import React, {useEffect, useState} from "react";
import {classNamesUtils} from "../../utils/classNamesUtils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import './Scroll.scss'


export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)


    const toggleVisibility=() => {
        if (window.pageYOffset > 100){
            setIsVisible(true)
        }else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() =>{
        window.addEventListener('scroll', toggleVisibility)

        return() =>{
            window.removeEventListener('scroll', toggleVisibility)
        }

    }, [])


    return (


            <div className={'scrollBlock'}>
                 <div
                onClick={scrollToTop}
                 className={classNamesUtils(
                isVisible ? 'opacity-100' : 'opacity-100',

            )}>
                     <FontAwesomeIcon icon={faArrowUp}/>
                 </div>
        </div>
    )

}