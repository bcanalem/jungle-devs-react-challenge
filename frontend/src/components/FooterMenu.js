import React from 'react';

import '../styles/FooterMenu.css';

import Logo from '../images/Logo.svg';
import Instagram from '../images/Instagram.svg';
import Facebook from '../images/Facebook.svg';
import Twitter from '../images/Twitter.svg';

export default function FooterMenu() {
  return (
    <div className="footer-menu-section">
      <div className="lower-div">
        <img src={Logo} alt="Hapu Logo" className="logo" />
        <div className="footer-menu">
          <a href="" className="h5">
            Share Your Nanny
          </a>
          <a href="" className="h5">
            Our Story
          </a>
          <a href="" className="h5">
            Blog
          </a>
          <a href="" className="h5">
            Terms & Privacy
          </a>
        </div>
        <div className="social-buttons">
          <button>
            <img src={Facebook} alt="Facebook Button" />
          </button>
          <button>
            <img src={Twitter} alt="Twitter Button" />
          </button>
          <button>
            <img src={Instagram} alt="Instagram Button" />
          </button>
        </div>
      </div>
      <hr />
      <p className="x-small copyright">
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </p>
    </div>
  );
}
