import React, {Component} from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Auth from '../Auth/Auth';
import history from '../routeHistory';
const auth = new Auth();

class Login extends Component {
  goTo(route) {
    history.replace('/$(route)')
  }
  login() {
    auth.login();
  }
  logout() {
    auth.logout();
  }
  render() {
    const { isAuthenticated } = auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                >
                  Log In
                </Button>
              )
            }
            {
              isAuthenticated() && (
                <Button
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </Button>
              )
            }
          </Navbar.Header>
        </Navbar>
        <div>
          <p>This is a test from the Login page </p>
          <p> </p>
          <p> </p>
          <p> </p>
          <p> </p>
          <p> </p>
          <p> </p>
        </div>
      </div>
    );
  }
};

export default Login;
