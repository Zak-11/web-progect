import React, {useRef} from 'react';
import emailjs from 'emailjs-com'
import ContPhoto from '../../image/contact.jpeg'
import ContFloren from '../../image/contactFlor.jpg'
import './Contact.scss'
const Contact = () => {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_6r21bzq', 'template_y4mbqsx', e.target, 'user_7fdrdAgJSGYSdvUh1dWK5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }


    return (

        <div className={'abutContact'}>

            <div className={'imageAbut'}>
                <img src={ContFloren}
                     alt='mySelf'/>
                <h1>CONTACT </h1>
            </div>


            <div className={'contactContent'}>
                <div className={'imgContact'}>
                    <img src={ContPhoto} alt={'contact'}/>
                </div>
                <div>
                    <section id={'contact'}>


                        <div className={'contactWrapper'}>

                            <form className={'formHorizontal'} ref={form} onSubmit={sendEmail}>

                                <input className={'formControl'} placeholder="NAME"
                                       type="text"
                                       name="name"
                                       required/>


                                <input className={'formControl'}
                                       type="email"
                                       placeholder="EMAIL"
                                       name="user_email"/>


                                <textarea className={'formControl'} rows="10"
                                          name="message"
                                          placeholder="MESSAGE"
                                          required/>
                                <button className={'sendButton'}
                                        type="submit" value="SEND">
                                    <div className={'altSendButton'}>
                                        <i className="fa fa-envelope"/><span className={'sendText'}>SEND</span>
                                    </div>
                                </button>

                            </form>
                        </div>
                    </section>


                </div>
            </div>
        </div>


    );
};

export default Contact;