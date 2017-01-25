/* global process */

import React from 'react';
import {Link} from 'react-router';

const ShowAllBanner = () => (
  <div style={{backgroundColor:'#f5e79e',display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
    <p style={{marginLeft: '40px',fontSize: '44px', textAlign:'center', display:'block'}}><strong>FACTIONS</strong></p>
  <div>

    <div style={{
                width: '330px',
                height: '300px',
               display: 'inline-block'
              }}>
      <Link to="/factions/werewolves" className="spacer-font"><img src={process.env.PUBLIC_URL + '/assets/images/werewolf-artwork1a.jpg'} alt="werewolf" className="imageBorder"/></Link>
    </div>
    <div style={{
                width: '342px',
                height: '300px',
                display: 'inline-block'
              }}>
      <Link to="/factions/vampires" className="spacer-font"><img src={process.env.PUBLIC_URL + '/assets/images/vampire-pic.jpg'} alt="vampire" className="imageBorder"/></Link>
    </div>
    <div style={{
                width: '320px',
                height: '300px',
                display: 'inline-block'
              }}>
      <Link to="/factions/zombies" className="spacer-font"><img src={process.env.PUBLIC_URL + '/assets/images/zombie-pic2a.jpg'} alt="zombie" className="imageBorder"/></Link>
    </div>
    <div  style={{
                width: '342px',
                height: '300px',
                display: 'inline-block'
              }}>
      <Link  to="/factions/fairies" className="spacer-font"><img src={process.env.PUBLIC_URL + '/assets/images/fairy.jpg'} alt="fairy symbol" className="imageBorder"/></Link>
    </div>
    </div>
  </div>
);

export default ShowAllBanner;
