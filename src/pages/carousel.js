import React from 'react';
import carouselData from './carouselData';
import factionsData from './factionsData';


const Carousel = ({routeParams}) => (
  <div className="content">

    <div style={{width:'300px',
      height: '80px',
      border: '2px solid black',
      borderRadius: '10',
      marginLeft:'20px',
      display:'inline-block',
      paddingLeft:'10px'
      }}>{carouselData[slide1].image}</div>


    <div style={{width:'300px',
        height: '80px',
        border: '2px solid black',
        borderRadius: '10',
        display: 'inline-block',
        backgroundColor: factionsData[routeParams.faction].color,
        marginLeft:'10px',
        paddingLeft:'10px'}}>
      {carouselData[slide1].title}<br/>
      {carouselData[slide1].text}<br/>
      {carouselData[slide1].price}<br/>
    
    </div>

  </div>
);
export default Carousel;
