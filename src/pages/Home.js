import React from 'react';
import {Link} from 'react-router';
import Banner from '../components/bannerComponent/Banner';
import ShowAllBanner from '../components/showAllBannerComponent/ShowAllBanner';
import MonsterPoints from '../components/monsterPointsComponent/MonsterPoints';
import WeeklySpecials from '../components/weeklySpecialsComponent/WeeklySpecials';
import MonsterMovies from '../components/monsterMoviesComponent/MonsterMovies';

const Home = () => (
  <div className="flex-container">

    <Banner/>
    <ShowAllBanner/>
    <div style={{display:'flex',
                  flexWrap: "wrap"}}>

      <MonsterPoints/>
      <WeeklySpecials/>
    </div>
    <MonsterMovies/>
    <div>
      <div style={{
                width: '468px',
                height: '300px',
                backgroundColor: 'red',
                display: 'inline-block'
              }}>
              <ol>
              <li className="monster-game-text"><Link to="/game" className="spacer-font"><h3>Monster Game</h3></Link></li>
              <li className="monster-game-text-small">Click to play the fun new monster game with your neighbors.</li>
              <li className="monster-game-text-small">Start with your neighborhood. Then your zip code. And then ...</li>
              </ol>
      </div>
      <div style={{
                width: '468px',
                height: '300px',
                backgroundColor: 'green',
                display: 'inline-block'
              }}>
              <ol>
              <li className="monster-gear-text"><Link to="/store" className="spacer-font"><h3>Monster Gear</h3></Link></li>
              <li className="monster-gear-text-small">Click to shop our online store for all the latest MonsterFaction styles.</li>
              </ol>
      </div>
      <div style={{
                width: '468px',
                height: '300px',
                backgroundColor: 'yellow',
                display: 'inline-block'
                }}>
                <ol>
                <li className="monster-gallery-text"><Link to="/gallery" className="spacer-font"><h3>Monster Gallery</h3></Link></li>
                <li className="monster-gallery-text-small">Click to view all the latest Monster Art. Or even submit one of your own works of art!</li>
                </ol>
      </div>
    </div>
  </div>
);

export default Home;
