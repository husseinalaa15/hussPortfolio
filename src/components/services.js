import React from 'react'
import {FaCode,FaRegLightbulb, FaLaptopCode,FaColumns , FaMarker ,FaHandsHelping , FaPaintBrush , FaMobileAlt} from  'react-icons/fa';
import { FiSettings } from "react-icons/fi";


const Services = () => {

    const[header]= React.useState({
        mainHeader: " SERVICES ",
        subHeading : "My Services",
        text : 'What i provide '
    });

    const[state]= React.useState([
    {
        id:1 ,
        icon:<FaLaptopCode />,
        heading : 'Web Development',
        text : 'Modern and Responsive website for You '
    },
    {
        id:2, 
        icon:<FaColumns/>,
        heading : 'Responsive Web Sites',
        text : 'make ur website Responsive on all devices easilly'
    },
    {
        id:3, 
        icon: <FaCode/>,
        heading : 'Clean Code ',
        text : ' organize and  Write  clean , readable code  '
    },
    {
        id1:4 , 
        icon:<FaRegLightbulb/>,
        heading : ' Develop Your Idea ',
        text : 'I can turn your ideas to real projects with high quality and give you more ideas. '
    },
    {
        id:5, 
        icon:<FiSettings/>,
        heading : 'Dynamic Websites    ',
        text : "Websites don't have to be static, I love making pages come to life. "
    },
    {
        id:6 , 
        icon:<FaHandsHelping />,
        heading : 'Support ',
        text : 'Support is availble if you want any changes in your website you can ask for it anytime. '
    },
    
    
]);

    return (
        <div className="services" id="services">
            <div className="container">
                    <div  className="services__header">
                        <div data-aos="fade-down" className="common">
                            <h3 className="heading">{header.mainHeader}</h3>
                            <h1 className="mainHeader"> {header.subHeading} </h1>
                            <p className="maincontent">{header.text}</p>
                            <div className="commonBorder"></div>
                        </div>

                        <div className="row ">
                                {state.map( (info)   => (
                                    <div className="col-lg-4 col-md-6 bgMain">
                                    <div  data-aos="flip-up" className="services__box">
                                        <div  className="commonIcons" >{info.icon}</div>
                                        <div className="services__box-header">
                                            {info.heading}
                                        </div>
                                        <div className="services__box-p">
                                            {info.text}
                                        </div>
                                    </div>
                                    </div>
                                ))}
                           

                        </div>
                </div>
            </div>
        </div>
    );
};

export default Services
