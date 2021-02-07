import React from 'react';

import '../styles/HeaderTop.css';

import Badge from '../images/Badge.svg';

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="header-top-left">
        <img src={Badge} alt="Hapu Badge" id="badge" />
        <div className="top-menu desktop-only">
          <a href="" className="h5">
            Create Your Nanny Share
          </a>
          <a href="" className="h5">
            Browse Shares
          </a>
          <a href="" className="h5">
            Our Story
          </a>
        </div>
      </div>
      <div>
        <button>Become a Nanny Share Host</button>
        <a href="" className="desktop-only h5 sign-in-button">
          Sign In
        </a>
      </div>
    </div>
  );
}
