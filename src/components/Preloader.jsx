import React from 'react';
import logo from '../assets/images/logo1.png';

const Preloader = () => {
  return (
    <div id="preloader">
    <img className="logo" src={logo} alt="" width="119" height="58" />
    <div id="status">
        <span></span>
        <span></span>
    </div>
</div>
  );
};

export default Preloader;
