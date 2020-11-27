import React from 'react'
import { FaHtml5, FaPercentage ,FaCss3Alt, FaPhp, FaBootstrap,FaJs, FaReact , FaAngular} from 'react-icons/fa';
import { GrMysql } from "react-icons/gr";

const Skills = () => {
    const [header] = React.useState({
        subHeader:'Skills',
        text : 'What Can I do'
    });

    const [skills] = React.useState([
        {id:1, skill:"Html",  Percentege : "90" , icon: <FaHtml5 /> },
        {id:2, skill:"Css",  Percentege : "90", icon : <FaCss3Alt /> },
        {id:3, skill:"Bootstrap",  Percentege : "90" , icon : <FaBootstrap />} ,
        {id:4, skill:"Javascript",  Percentege : "85" , icon : <FaJs />},
        {id:5, skill:"Jquery",  Percentege : "85" , icon : <FaJs /> } ,
        {id:6, skill:"Php",  Percentege : "75" , icon : <FaPhp />} ,
        {id:7, skill:"Mysql",  Percentege : "75" , icon : <GrMysql />} ,
        {id:7, skill:"React.Js",  Percentege : "65" , icon : <FaReact />} ,
        {id:8, skill:"Angular.Js",  Percentege : "55" , icon : <FaAngular /> } 


    ]);

    // const Progress=({done}) => (<div className="progress">
    // <div className="progress-bar bg-info html active"  > </div>
    // </div>);


    return (
        
            <div className="skills"id="skills">
                <div className="container ">
                    <div data-aos="fade-down" className="common mb-5">
                        <h1 className="mainHeader"> {header.subHeader} </h1>
                        <p className="mainContent">{header.text}</p>                        
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row h-650 alignCenter ">
                    <div className="col-lg-6 mt-5">
                        <div data-aos="zoom-out" className="texttt">
                        <h1 className="mainHeader"> My skills & experiences </h1>
                        <p className="mainContent">I’m experienced at these and I’m very ambitious and I work hard on myself to keep progressing nd developing myself to be better</p>                           
                        <p className="mainContent pt-3"> I  also worked as a web developer for indian company  for 3 months</p>                           

                        </div>
                    </div>
                    <div className="col-lg-6 mt-5">
                    {skills.map(skills =>
                        <div data-aos="fade-up" className="text">
                            <strong> {skills.icon}  {skills.skill}</strong>
                            <strong  className="percentage">  {skills.Percentege} <FaPercentage /> </strong>
                            <div  className="progress">
                            <div  data-aos="fade-right" data-aos-duration="1500" className="progress-bar  html active" style={{width : skills.Percentege +"%"}} ></div>
                            </div>
                        </div>
                    )}
                    </div>
                    </div>

                </div>
            </div>
        
    )
}

export default Skills
