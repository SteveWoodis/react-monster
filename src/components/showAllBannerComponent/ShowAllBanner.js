/* global process */

import React from 'react';

const ShowAllBanner = () => (
  <div style={{backgroundColor:'#f5e79e',display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
    <p style={{marginLeft: '40px',fontSize: '44px', textAlign:'center', display:'block'}}><strong>ALL FACTIONS</strong></p>
  <div>

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

export default ShowAllBanner;
