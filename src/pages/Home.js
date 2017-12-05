import React, {Component} from 'react';
import '../styles/styles.css';

class Home extends Component {
render() {
  return (
  <div className="flex-container">
    <div>
      <img src={process.env.PUBLIC_URL + '/assets/img/scary-landscape-3.jpg'} alt="opening"/>
    </div>
    <div className="clearfix"></div>
    <div className="banner-zombie">
      <div className="one-half">
        <h3>Monster Points</h3>
        <p>Each week the MonsterFactions fan with the most Monster Points will
          win free prizes. This could be a free MonsterFactions T-Shirt or other
          fabulous prizes</p>
        <p>See who the leaders are this week ...</p>
      </div>
      <div className="one-half">
        <h3>Weekly Specials</h3>
        <p>MonsterFactions has weekly specials from all over to intrigue and
          interest monster fans everywhere. </p>
      </div>
    </div>
    <div className="clearfix"></div>
    <div className="parallax-1">
      <div className="parallax-inner">
        <div className="one-third">
          <h3>Zombie History</h3>
          <p>A zombie (Haitian French: zombi, Haitian Creole: zonbi) is a fictional undead being created through the
            reanimation of a human corpse. Zombies are most commonly found in horror and fantasy genre works. The term
            comes from Haitian folklore, where a zombie is a dead body reanimated through various methods, most
            commonly magic.</p>
        </div>
        <div className="one-third">
          <h3>Zombie's Today</h3>
          <p>The modern conception of the zombie owes itself almost entirely to George A. Romero's 1968 film Night of
            the Living Dead. In his films, Romero "bred the zombie with the vampire, and what he got was
            the hybrid vigour of a ghoulish plague monster". This entailed an apocalyptic vision of monsters that
            have come to be known as Romero zombies. </p>
        </div>
        <div className="one-third">
          <h3>Zombie Apocalypse</h3>
          <p>Intimately tied to the concept of the modern zombie is the "zombie apocalypse"; the breakdown of society
            as a result of an initial zombie outbreak that spreads. This archetype has emerged as a prolific subgenre
            of apocalyptic fiction and has been portrayed in many zombie-related media after Night of the Living Dead.
            In a zombie apocalypse, a widespread (usually global) rise of zombies hostile to human life engages in a
            general assault on civilization.</p>
        </div>
      </div>
    </div>
    <div className="clearfix"></div>
    <div className="banner-wolf">
      <div className="left-col">
        <h3>Upcoming Factions</h3>
        <p>We are always looking for new factions to add to our site. Everyone has a favorite mythical creature that
          fascinates them. We encourage you to submit new creatures for consideration. </p>
        <p>New factions will be added if there is sufficient demand. So get get your friends and family to join
          MonsterFactions and have them vote for your favorite faction.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. </p>
      </div>
      <div className="sidebar">
        <img src={process.env.PUBLIC_URL + '/assets/img/fairy-song.jpg'} alt="Fairy"/>
      </div>
    </div>
    <div className="clearfix"></div>
    <div className="parallax-2">
      <div className="parallax-inner">
        <div className="one-third">
          <h3>Werewolf History</h3>
          <p>A werewolf, also known as a lycanthrope is a mythological or folkloric human with the ability to shapeshift
            into a wolf (or, especially in modern film, a therianthropic hybrid wolflike creature), either
            purposely or after being placed under a curse or affliction (often a bite or scratch from another
            werewolf). </p>
        </div>
        <div className="one-third">
          <h3>Heading TItle</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. </p>
        </div>
        <div className="one-third">
          <h3>Heading TItle</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. </p>
        </div>
      </div>
    </div>
    <div className="clearfix"></div>
    <div className="banner-vampire">
      <div className="one-third">
        <h3>Monster Games</h3>
        <p>Click to play the fun new monster game with your neighbors.
          Start with your neighborhood. Then your zip code. And then ...</p>
      </div>
      <div className="one-third">
        <h3>Monster Gear</h3>
        <p>Click to shop our online store for all the latest MonsterFaction styles. </p>
      </div>
      <div className="one-third">
        <h3>Monster Gallery</h3>
        <p>Click to view all the latest Monster Art. Or even submit one of your own works of art! </p>
      </div>
    </div>
    <div className="clearfix"></div>

    <div className="parallax-3">
      <div className="parallax-inner">
        <div className="one-third">
          <h3>Vampire History</h3>
          <p>A vampire is a being from folklore that subsists by feeding on the life essence (generally in the form of
            blood) of the living. In European folklore, vampires were undead beings that often visited loved ones and
            caused mischief or deaths in the neighbourhoods they inhabited when they were alive.</p>
        </div>
        <div className="one-third">
          <h3>Heading TItle</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. </p>
        </div>
        <div className="one-third">
          <h3>Heading TItle</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. </p>
        </div>
      </div>
    </div>
  </div>
  )
};
}

export default Home;
