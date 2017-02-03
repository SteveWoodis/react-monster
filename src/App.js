import React, {Component} from 'react';
import { Router, IndexRoute, Route} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux';
import CSSModules from 'react-css-modules';

import {grid, navbar} from 'bootstrap-css';
import './App.css';
/* RESET Style sheet */
import './styles/reset.css';
import routeHistory from './routeHistory';
import store from './store';

import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import Home from './pages/Home';
import Factions from './pages/Factions';
import Game from './pages/Game';
import Store from './pages/MonsterGear';
import Gallery from './pages/MonsterGallery/MonsterGallery';
import Movies from './components/monsterMoviesComponent/moviesList';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

const history = syncHistoryWithStore(routeHistory, store);
const styles = {...grid, ...navbar};

const MainWrapper = (props) => (
  <div className="App flex-container">
    <Header />
    {props.children}
    <Footer />
  </div>
);
const Specials = (props) => (
    <div>
      {props.route.specials}
        <h1>Welcome to the Weekly Specials</h1>
    </div>
)

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={MainWrapper}>
          <IndexRoute component={Home}/>
          <Route path="/factions/:faction" components={Factions}/>
          <Route path="/game" components={Game}/>
          <Route path="/store" components={Store}/>
          <Route path="/gallery" components={Gallery}/>
          <Route path="/contact" components={Contact}/>
          <Route path="/Movies" components={Movies}/>
          <Route path="/login" components={Login}/>
          <Route path="/register" components={Register}/>
          <Route path='/specials' specials="Weekly Specials" component={Specials}/>
        </Route>
      </Router>
    );
  }
}

export default CSSModules(App, styles);
