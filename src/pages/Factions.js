import React from 'react';
import factionData from './factionsData';
import Chat from './../components/chatComponent/chat';

const Factions = ({routeParams}) => (
    <div className="content">

      <div style={{width:'490px',
      height: '480px',
      border: '2px solid black',
      borderRadius: '10px',
      marginLeft:'20px',
      display:'inline-block',
      paddingLeft:'10px',
      verticalAlign:'top'
      }}><h4>{factionData[routeParams.faction].title}</h4></div>


        <div style={{width:'840px',
        height: '480px',
        border: '2px solid black',
        borderRadius: '10px',
        display: 'inline-block',
        backgroundColor: factionData[routeParams.faction].color,
        marginLeft:'10px',
        paddingLeft:'10px'}}>
          <Chat/>
        </div>

    </div>
);
export default Factions;
