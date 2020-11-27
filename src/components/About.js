import React from 'react'

const About = () => {

    const [header] = React.useState({
        subHeader:'About Me',
        text : 'Who  am I'
    });

    const [state] = React.useState([
        {id:1, title:"Name",  text : "Hussein Alaa"},
        {id:2, title:"E-mail",  text : "hussein.alaa12199@gmail.com"},
        {id:3, title:"Phone",  text : "01150370370"},
        {id:4, title:"Linkedin",  text : "hussein-alaa-4511861b0"} 

    ])
    return (
        <div className="about" id="about">
            <div className="container   ">

                <div data-aos="fade-down" className="common">
                    <h1 className="mainHeader"> {header.subHeader} </h1>
                    <p className="mainContent">{header.text}</p>                        
                    <div className="commonBorder"></div>
                </div> 

                <div className="container">
                    <div className="row">
                    <div data-aos="flip-left" className="col-lg-6 col-md-6 about__img">
                            <img src ="/images/hussein.jpg" alt="me" />
                    </div>
                    <div data-aos="flip-right" className="col-lg-6 col-md-6 about__info mt-5">
                            <h1>Hi There</h1>
                            <div className="about__info-p1">
                            I’m Hussein a web developer I was graduated from Business information system ( BIS ) - Helwan Universty
Class of 2016 with GPA: 2.6 – Graduation project: A+    
                            </div>
                            <div className="about__info-p2">
                            Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed an ecommerce webapp                            </div>
                            <div className="info__contacts">
                                <div className="row">
                                    {state.map(info =>
                                    <div className="col-lg-6 col-md-6">
                                        <strong>{info.title}:</strong>
                                        <p>{info.text}</p>
                                   </div>
                                   )}
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>  
    )
}

export default About
