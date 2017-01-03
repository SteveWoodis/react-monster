/* global process */

import React from 'react';
const Nav = (props) => {

  return (
    <ul className={props.className + ' nav navbar-nav'}>
      <li>
        <img
          src={process.env.PUBLIC_URL + '/assets/images/monsterfactions-symbol-mini.jpg'}
          alt="monster factions symbol" style={{width: '62px'}}/>
      </li>
      {props.navItems.map((item,index)=><li className="spacer" key={index}>{item}</li>)}
      <li>
        <img src={process.env.PUBLIC_URL + '/assets/images/monsterfactions-banner-mini.jpg'}
             alt="monster factions banner"/>
      </li>
    </ul>
  );
};

export default Nav;
