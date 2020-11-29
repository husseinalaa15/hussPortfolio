import React from 'react';
import  {FaFacebook , FaLinkedin , FaWhatsapp , FaInbox , FaPhoneAlt} from 'react-icons/fa'

const Banner = () => {

    const[state] = React.useState({
        title : "Hey, I'm Hussein." ,
        text : 'and i am '
    });


    return (
        <header className="header"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="header__content">
                         <div className="header__section">
                         <ul className="header__ul">
                            <a data-aos="fade-up-right" target="_blank" href="https://www.facebook.com/hussein.alaa.1272/">
                                <li className="fb">
                                  <FaFacebook  />
                                </li>
                            </a> 
                            <a data-aos="fade-down" target="_blank" href="https://www.linkedin.com/in/hussein-alaa-4511861b0/">
                                <li className="linkedin"> 
                                    <FaLinkedin />
                                </li>
                            </a>

                            <a data-aos="fade-up" target="_blank" href="https://wa.me/201150370370">
                                <li className="wap">
                                    <FaWhatsapp />
                                </li>
                            </a>

                            <a data-aos="fade-down" target="_blank" href="mailto:hussein.alaa12199@gmail.com">
                                <li className="mail">
                                    <FaInbox />
                                </li>
                            </a>

                            <a data-aos="fade-up-left"  target="_blank" href="tel:01150370370">
                                <li className="phone">
                                    <FaPhoneAlt />
                                </li>
                            </a>

                            </ul>

                            <h1 data-aos="fade-right">  {state.title} </h1>
                            <p data-aos="fade-right"> {state.text} <span className="typing"></span> </p>
                            <div className="header__buttons">
                                <a data-aos="fade-up" id="scroll-Dwn-btn" className="btn mt-3  btn-outline">My Portofolio</a>
                                &nbsp;&nbsp;&nbsp;
                                <a  data-aos="fade-up" href="download/cv.pdf" className="btn mt-3 btn-smart" download>Download CV.</a>

                            </div>
                         </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        
        </header>
    )
}

export default Banner;
