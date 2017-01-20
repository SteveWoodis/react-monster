import React from 'react';
import '../../styles/styles.css';
import carouselData from './carouselData';

const WeeklySpecials = () => (
  <div style={{width:'700px', display: 'inline-block'}}>
    <div style={{paddingLeft:'20px', display:'flex', flexWrap:'wrap'}}>
      <h3>
        Weekly Specials
      </h3>
    </div>
    <div>
        <div style={{width: '300px', height: '300px',display: 'inline-block'}}>
          <a href="/#/store"><img src={process.env.PUBLIC_URL + carouselData[slide1].image} alt="Cookie Monster Earrings" className="imageBorder"/></a>
        </div>
        <div style={{width:'300px', height:'300px', display:'inline-block', position:'absolute'}}>
          <p style={{fontSize:'16px', paddingLeft:'30px', color:'aqua'}}>Cookie Monster Earrings</p>
          <p style={{textWrap:'wrap', fontSize:'14px', paddingLeft:'30px'}}>Get these new Cookie Monster Earrings and your friends will want some too!</p>
          <p style={{fontSize:'12px', paddingLeft:'30px', color:'red'}}>$17.99</p>
        </div>
    </div>
  </div>
);

export default WeeklySpecials;
