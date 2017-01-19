/* global process */

import React from 'react';

const Banner = () => (
  <div className="showall-banner">
    <p className="showall"><strong>ALL FACTIONS</strong></p>
    <div style={{display:'flex',
                  justifyContent:'space-around',
                  flexWrap:'wrap'}}>
      <div style={{
                width: '300px',
                height: '300px',
               display: 'inline-block'
              }}>
        <a href="/#/werewolf-landing"><img src={process.env.PUBLIC_URL + '/assets/images/werewolf-artwork1a.jpg'} alt="werewolf" className="imageBorder"/></a>
      </div>
      <div style={{
                width: '300px',
                height: '300px',
                display: 'inline-block'
              }}>
        <a href="/#/vampire-landing"><img src={process.env.PUBLIC_URL + '/assets/images/vampire-pic.jpg'} alt="vampire" className="imageBorder"/></a>
      </div>
      <div style={{
                width: '300px',
                height: '300px',
                display: 'inline-block'
              }}>
        <a href="/#/zombie-landing"><img src={process.env.PUBLIC_URL + '/assets/images/zombie-pic2a.jpg'} alt="zombie" className="imageBorder"/></a>
      </div>
      <div  style={{
                width: '300px',
                height: '300px',
                display: 'inline-block'
              }}>
        <a href=""><img src={process.env.PUBLIC_URL + '/assets/images/monsterfactions-symbol.jpg'} alt="monster factions symbol" className="imageBorder"/></a>
      </div>
    </div>
  </div>
);

export default Banner;
