import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others.
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request early access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Cretcherwoord K12 182 DK Allknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Get in touch</h4>
          <p>Cretcherwoord K12 182 DK Allknjkcb</p>
          <p>085-132567</p>
          <p>info@pa299.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>©2021 GPT-3. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
