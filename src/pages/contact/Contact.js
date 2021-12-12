import React, {useRef} from 'react';
import emailjs from 'emailjs-com'
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

        <div className={'contact_wrapper'}>


            <div className={'container'}>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="fname">First Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lname">Last Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="fname">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="Email" placeholder="Your Email.."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="Continent">Continent</label>
                        </div>
                        <div className="col-75">
                            <select id="country" name="Continent">
                                <option value="Asia">Asia</option>
                                <option value="Africa">Africa</option>
                                <option value="Europe">Europe</option>
                                <option value="North America">North America</option>
                                <option value="South America">South America</option>
                                <option value="Australia">Australia</option>
                                <option value="Antarctica">Antarctica</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="subject">Subject</label>
                        </div>
                        <div className="col-75">
                        <textarea type="submit"
                                  name="subject"
                                  placeholder="Write something.."
                                  style={{height: 150, margin: 0}}/>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default Contact;