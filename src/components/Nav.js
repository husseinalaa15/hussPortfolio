import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'

const Nav = () => {

  

    const changeBackground = () =>{
        if(window.scrollY >= 50){
            (".navbar").addClass("sticky");
        }else{
            (".navbar").removeClass("sticky");
        }
    };

    return (

    <nav className="navbar  navbar-expand-md  fixed-top ">
    
    <div className="container">
        <div  className="logo">  <img  src="/images/hussein.png" alt="logo" className="rounded-circle"  /></div>

        <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
            <FaBars className="text-white " /> 
            </button>
            <div className=" navbar-collapse collapse justify-content-between align-items-center w-100 navbar__right" id="collapsingNavbar2">
                <ul className="navbar-nav mx-auto text-center menu">
                    <li className="nav-item ">
                        <a className="nav-link" href="#home">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#work">Work </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
    </div>


    </div>
    </nav>


     )
 }

export default Nav
{/* //         <nav className="navbar  navbar-expand-md  fixed-top">
//             <div className="container">
//                 <div className="navbar__container">
//                     <ul className="navbar__left">
//                         <div className="navbar__left-logo">
//                             <img src="./Images/hussein.png" alt="logo"/>
//                         </div>
                        
                        
                    
//                     </ul>

//                     <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
//                             <i ><FaBars/></i>
//                     </button>
//                 <div className="navbar-collapse collapse justify-content-between align-items-center w-100 " id="collapsingNavbar2">
//                     <ul className="navbar-nav mx-auto    navbar__right">
//                     <li className="nav-item "><a className="nav-link" href="#">Home</a></li>
//                     <li className="nav-item "><a className="nav-link" href="#">About</a></li>
//                     <li className="nav-item "><a  className="nav-link" href="#">Services</a></li>
//                     <li className="nav-item "><a  className="nav-link" href="#">Skills</a></li>
//                     <li className="nav-item "><a  className="nav-link" href="#">Work</a></li>
//                     <li className="nav-item "><a className="nav-link"  href="#">Contact</a></li>
//                     </ul>
//                 </div>
//                 </div>
//             </div>
//         </nav> */}