import React from 'react';
import '../../styles/styles.css';


const WeeklySpecials = () => (
  <div style={{width:'700px', display: 'inline-block'}}>
    <div style={{textAlign:'center'}}>
      <h3>
        Weekly Specials
      </h3>
    </div>
    <div style={{marginLeft:'15px'}}>
      <div style={{width: '300px', height: '300px',display: 'inline-block'}}>
        <a href="/#/store"><img src={process.env.PUBLIC_URL + '/assets/images/monster_jewelry/cookie_monster_earrings.jpg'} alt="Cookie Monster Earrings" className="imageBorder"/></a>
      </div>
      <div style={{width:'300px', height:'300px', display:'inline-block', position:'absolute'}}>
        <p style={{fontSize:'16px', textAlign:'center', color:'#000'}}>Cookie Monster Earrings</p>
        <p style={{textWrap:'wrap', fontSize:'14px', paddingLeft:'30px'}}>Get these new Cookie Monster Earrings and your friends will want some too!</p>
        <p style={{fontSize:'16px', paddingRight:'20px', color:'red', textAlign:'right'}}>$17.99</p>
      </div>
    </div>
  </div>
);

export default WeeklySpecials;
