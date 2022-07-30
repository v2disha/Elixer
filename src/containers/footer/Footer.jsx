import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import Feature from '../../components/feature/Feature';
import './footer.css';

const Footer = () => (
  <div className="elx__footer section__padding">
    <div className="elx__footer-heading">
      <h1 className="gradient__text">Join Our Community</h1>
    </div>
    <div className="elx__whatelx-container">
      <Feature title="Discord" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Reddit" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Twitter" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
    

    <div className="elx__footer-links">
      <div className="elx__footer-links_logo">
        <img src={gpt3Logo} alt="elx_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="elx__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="elx__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="elx__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="elx__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
