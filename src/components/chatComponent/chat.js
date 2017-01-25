import React, {Component} from 'react';
import PubNub from 'pubnub';

class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: [
        {text: "Hello World"}
      ],
      currentMessage: "This is a new message",
      username:"Steve",
      users: []
    };
    this.pubnub = new PubNub({
      PublishKey: 'pub-c-b3f76d0b-2a61-490d-acd4-dae96f7acfe3',
      SubscribeKey: 'sub-c-43bc55aa-de4f-11e4-bb6f-0619f8945a4f'
    });
  }
  sendMessage(){
    console.log(this.refs.input.value);

    this.setState({currentMessage:""});
  }

  changedMessage(){
    this.setState({currentMessage:this.refs.input.value});
  }
  render() {

    return <div className="vbox fill">
      <h4>Welcome to the MonsterFactions Chatroom</h4>

      <div className="hbox">
        <input className="grow" ref="input" type="text"
               value={this.state.currentMessage}
               onChange={this.changedMessage.bind(this)}
        />
        <button onClick={this.sendMessage.bind(this)}>Send</button>

        </div>
      </div>
  }
}
export default Chat;
/*   this.pubnub.addListener({
 message: (evt) => {
 console.log("got a message", evt);
 this.state.messages.push({
 text: evt.message.txt,
 });
 this.setState({
 messages: this.state.messages
 })
 }
 })*/
/*this.pubnub.subscribe({
 channels:[this.channel],
 withPresence:true
 });*/
/* this.pubnub.publish({
 channel:"monster-chat",
 message:{
 text:this.refs.input.value,
 sender: this.pubnub.getUUID()
 }
 });*/