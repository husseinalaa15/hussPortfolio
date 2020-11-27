import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaGoogle,
  FaPlay,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-lg-12">
              <div className="contactSection-logo">
                <img src="/images/hussein.png" alt="" />
              </div>
              <p className="col-lg-12 text-center">
              <strong className="thanku text-center text-white">Thank You</strong> <br/>
              If you have any questions, or just want to say hello, feel free to contact me. Below are my social pages and my email.</p>
              <ul className="contactCircles">
              
              
              <a data-aos="fade-up" target="_blank" href="https://www.facebook.com/hussein.alaa.1272/">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                </a>

                <a data-aos="fade-up" target="_blank" href="https://twitter.com/Heezy_98">
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                </a>

                <a data-aos="fade-up" target="_blank" href="mailto:hussein.alaa12199@gmail.com">
                <li>
                  <FaGoogle className="contactIcon" />
                </li>
                </a>

                <a data-aos="fade-up" target="_blank" href="https://www.instagram.com/heezyf/">
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
                </a>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;