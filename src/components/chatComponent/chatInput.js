import React, {Component} from 'react';
import './chat.css';
import PubNub from 'pubnub';

export default class ChatInput extends Component {
  render() {
    return (
      <div className="teal">
      <form>
        <div className="row">
          <div className="input-field col s10">

        <span className="chip left">
          <img src="//robohash.org/503483?set=set2&bgset=bg2&size=70x70" alt="robot icon"/>
          <span>Anonymous robot #503483</span>
        </span>

            <input type="text" placeholder="Type your message" />
          </div>
          <div className="input-field col s2">
            <button type="submit" className="waves-effect waves-light btn-floating btn-large">
              <i className="mdi-content-send" />
            </button>
          </div>
        </div>
      </form>
    </div>);
  }
}
/* <i className="prefix mdi-communication-chat" /> */
