import { noConflict, noop } from 'jquery';
import React from 'react'

import {
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaJs,
    FaPlay
  } from "react-icons/fa";
const Work = () => {
    const [header] = React.useState({
        subHeader:'Projects',
        text : 'Latest Work'
    });
    const [work] = React.useState([
        {
            id: 1,
            skill:"Images/skills1.png " ,  
            image:"Images/projectimgs/shop-basketball.png"  , 
            // download:"/download/Al-Nady-GP.rar",
            desc: " Dynamic webapp - A+",
            title:"El-Nady",
            
            iframe:"Images/GP2/korahome.html"



        },

        {
            id: 2,
            skill:"Images/skill3.png " ,  
            image:"Images/projectimgs/hotel-page.jpeg"  , 
            download:"/download/wedding.rar",
            desc: " Dynamic webapp - 'A+'  ",
            grad:"Graduation Project",
            title:"Bride & Groom",
            
            iframe:"Images/weddingproject/home.html"



        },  

        {
            id: 3,
            skill:"Images/skills1.png " ,  
            image:"Images/projectimgs/homee.png"  , 
            download:"/download/hiphop.rar",
            desc: " unfinished Project  ",
            grad: "unfinished",
            title: "Heezy",
            iframe:"Images/rap/home.html"

        },  

        {
            id: 4,
            skill:"Images/skills1.png " ,  
            image:"Images/projectimgs/homepage.png"  , 
            download:"/download/asnan.rar",
            desc: "   Practicing     ",
            title:"Asnan",

            iframe:"Images/asnan/home.html"

        },
        {
            id: 5,
            skill:"Images/skills2.png " ,  
            image:"Images/projectimgs/products.png"  , 
            download:"/download/Gym.rar",
            desc: " Practicing ",
            title:"Gym",

            iframe:    "Images/pr/home.html"

        },

        {
            id: 6,
            skill:"Images/skills2.png " ,  
            image:"Images/projectimgs/home.png"  , 
            download:"/download/watchesclub.rar",
            
            desc: " Practicing ",
            title:"Watches Club",
            iframe:" Images/TEST/logiin.html"
        }

        

    ]);

   

    return (
        <div className="work" id="work">
            <div className="container">
            <div data-aos="fade-down"  className="common">
                        <h1 className="mainHeader"> {header.subHeader} </h1>
                        <p className="mainContent">{header.text}</p>                        
                        <div className="commonBorder"></div>
                    </div>
                <div className="row">
                    {work.map(work =>

                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                        <div data-aos="flip-left" className="card text-center">
                        <span className="projecttitle text-center" > {work.grad}  </span>

                            <img className="card-img-top" src={work.image} />

                            <div className="card-img-overlay pt-5 text-center">
                            

                            <img className="card-title col-lg-12 pt-3" src={work.skill}  />
                            <p className="card-text pt-3">{work.desc}</p>

                            
                                <a  data-toggle="modal" data-target={"#my1"+work.id} className="btn col-lg-12 mt-1">View Website</a>
                            </div>
                        </div>

                        <div  className="modal fade" id={"my1"+work.id}>
                       
                            <div className="modal-dialog modal-xl " data-lity-close role="document">
                            <div className="modal-content">

                                    <div className="modalheader">

                                        <div className="modaltitle text-center">
                                            <p className="text-center ip"> {work.title} </p>
                                            <li data-dismiss="modal" className="ione"></li>
                                            <li className="itwo"></li>
                                            <li className="ithree"></li>
                                        </div>

                                    </div>

                                    <div className="lity-content">
                                        
                                        <div className="lity-iframe-container">

                                            <iframe className="iframe" src={work.iframe}></iframe>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                

                            </div>
                        
                        </div>
                        


                        </div>
                    )}
                   
                </div>
            </div>
        </div>

        
    )
}

export default Work
