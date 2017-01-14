import React from 'react';
import factionData from './factionsData';


const Factions = ({routeParams}) => (
    <div className="content">

      <div style={{width:'490px',
      height: '800px',
      border: '2px solid black',
      borderRadius: '10',
      marginLeft:'20px',
      display:'inline-block',
      paddingLeft:'10px'
      }}><h4>{factionData[routeParams.faction].title}</h4></div>


        <div style={{width:'840px',
        height: '800px',
        border: '2px solid black',
        borderRadius: '10',
        display: 'inline-block',
        backgroundColor: factionData[routeParams.faction].color,
        marginLeft:'10px',
        paddingLeft:'10px'}} id="chat">Chat</div>

    </div>
);
export default Factions;
