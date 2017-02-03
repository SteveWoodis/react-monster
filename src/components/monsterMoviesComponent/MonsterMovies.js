import React from 'react';
import {Link} from 'react-router';

const MonsterMovies = () => (
  <div className="monster-movies">
    <Link to="/Movies"><img src="../assets/images/monster-mural.jpg" className="monster-mural" alt="monster mural"/></Link>
  </div>
);

export default MonsterMovies;