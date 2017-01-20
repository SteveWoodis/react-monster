import React from 'react';

const MonsterPoints = () => (
  <div style={{width:'700px', display: 'inline-block'}}>
    <ol>
      <li style={{paddingLeft:'30px', display:'flex', flexWrap:'wrap'}}><h3>Monster Points</h3></li>
      <li className="monster-points-text-heading">The Leaders for the week are ...</li>
      <div className="monster-points-text-small ng-scope">
        <div className="monster-points-text-small ng-binding">Steve Woodis</div>
        <div className="monster-points-text-small ng-binding">70</div>
      </div>
      <div className="monster-points-text-small ng-scope">
        <div className="monster-points-text-small ng-binding">Joe Barnes</div>
        <div className="monster-points-text-small ng-binding">67</div>
      </div>
      <div className="monster-points-text-small ng-scope">
        <div className="monster-points-text-small ng-binding">Jesse</div>
        <div className="monster-points-text-small ng-binding">63</div>
      </div>
    </ol>
  </div>
);

export default MonsterPoints;
