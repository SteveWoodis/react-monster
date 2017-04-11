/* global process */

import React from 'react';
import {Link} from 'react-router';
import '../../styles/styles.css';

const ShowAllBanner = () => (
  <div style={{backgroundColor:'#f5e79e',display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
    <p style={{marginLeft: '40px',fontSize: '44px', textAlign:'center', display:'block'}}><strong>FACTIONS</strong></p>
  <div>
    <div className="bannerWrapper">
        <div style={{
                    width: '330px',
                    height: '300px',
                   display: 'inline-block',
                   margin: '0 10px 0 1px'
                  }}>
          <Link to="/factions/werewolves" className="spacer-font"><img src={process.env.PUBLIC_URL + '/assets/images/werewolf-artwork1a.jpg'} alt="werewolf" className="imageBorder"/></Link>
        </div>
        <div style={{
                    width: '342px',
                    height: '300px',
                    display: 'inline-block',
                    margin: '0 10px 0 1px'
                  }}>
          <Link to="/factions/vampires" className="spacer-font"><img src={process.env.PUBLIC_URL + '/assets/images/vampire-pic.jpg'} alt="vampire" className="imageBorder"/></Link>
        </div>
        <div style={{
                    width: '320px',
                    height: '300px',
                    display: 'inline-block',
                    margin: '0 10px 0 1px'
                  }}>
          <Link to="/factions/zombies" className="spacer-font"><img src={process.env.PUBLIC_URL + '/assets/images/zombie-pic2a.jpg'} alt="zombie" className="imageBorder"/></Link>
        </div>
        <div  style={{
                    width: '342px',
                    height: '300px',
                    display: 'inline-block',
                    margin: '0 10px 0 1px'
                  }}>
          <img src={process.env.PUBLIC_URL + '/assets/images/monsterfactions-symbol.jpg'} alt="monster symbol" className="imageBorder"/>
        </div>
      </div>
    </div>
  </div>
);

export default ShowAllBanner;
