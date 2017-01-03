/* global process */

import React, {Component} from 'react';
import Nav from './../navComponent/Nav';
import AppBar from 'material-ui/AppBar';
import './Header.css';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {Link} from 'react-router';
import {Popover, Menu, MenuItem} from 'material-ui';


class Header extends Component {
  constructor() {
    super();

    this.state = {
      factionsDropdownOpen: false,
      factionsAnchorElement: null
    };
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      factionsDropdownOpen: true,
      factionsAnchorElement: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      factionsDropdownOpen: false
    });
  }

  render() {
    const navItems = [
      <Link to="/" className="spacer-font">Home</Link>,
      <div className="factionsTab">
        <a className="spacer-font" onTouchTap={this.handleTouchTap.bind(this)}>Factions</a>
        <Popover
          open={this.state.factionsDropdownOpen}
          anchorEl={this.state.factionsAnchorElement}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this)}>
          <Menu>
            <MenuItem><Link to="/factions/werewolves" className="spacer-font">Werewolves</Link></MenuItem>
            <MenuItem><Link to="/factions/vampires" className="spacer-font">Vampires</Link></MenuItem>
            <MenuItem><Link to="/factions/zombies" className="spacer-font">Zombies</Link></MenuItem>
          </Menu>
        </Popover>
      </div>,
      <Link to="/store" className="spacer-font">Monster Gear</Link>,
      <Link to="/chat" className="spacer-font">Monster Chat</Link>,
      <Link to="/gallery" className="spacer-font">Monster Gallery</Link>,
      <Link to="/contact" className="spacer-font">Contact</Link>,
      <Link to="/login" className="spacer-font">Login</Link>,
      <Link to="/specials" className="spacer-font">Specials</Link>

    ];

    return (
      <nav className="flex-row space-around" style={{width: '100%'}}>
        <div className="container-fluid">
          <div className="col-xs-12">
            <AppBar className="Navbar-phone"
                    iconElementLeft={
                  <IconMenu
              iconButtonElement={
                <IconButton><MenuIcon/></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              {navItems.map((item,index) => <MenuItem key={index}>{item}</MenuItem>)}

            </IconMenu>
        }
            />
            <Nav className="Navbar-standard" navItems={navItems}/>
          </div>
        </div>
      </nav>
    );
  };
}

export default Header;
