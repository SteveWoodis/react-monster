import React from 'react';
import factionData from './factionsData';

const Factions = ({routeParams}) => (
    <div className="content">
        <h1>Factions: {factionData[routeParams.faction].test}</h1>

    </div>
);

export default Factions;
