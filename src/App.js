import React, {useEffect} from'react';
import './App.css';
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/services";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/work";

import Scroll from "./components/Scroll";
import {Button , Modal } from 'react-bootstrap';


import Aos from 'aos';
import "aos/dist/aos.css";



function App() {

  useEffect(()=> {
    Aos.init({duration :900});
  },[]);

  return (
  <div>
    <Load/>
    <Banner />
    <Nav />
    <About />
    <Services />
    <Skills />
    <Work />
    <Contact />
    <Scroll/>
  </div>
  
  );
}

export default App;

