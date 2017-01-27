import React, {Component} from 'react';
import PubNub from 'pubnub';

class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: [],
      currentMessage: "This is a new message",
      username:"Steve",
      users: []
    };
    this.pubnub = new PubNub({
      PublishKey: 'pub-c-e1b98bf1-918e-4ca1-ad09-63c63f86f74a',
      SubscribeKey: 'sub-c-8173fffa-e36c-11e6-8d2d-02ee2ddab7fe'
    });
  }
  changedMessage(){
    this.setState({currentMessage:this.refs.input.value});
  }
  sendMessage(){
    console.log(this.refs.input.value);
    this.setState({currentMessage: this.refs.input.value});
    this.state.message.push(this.refs.input.value);
    

   /*this.setState({currentMessage:""});*/
  }

  render() {
    let messages = this.state.message;
    return <div className="vbox fill">
      <h4>Welcome to the MonsterFactions Chatroom</h4>

      <div className="hbox">
        <input className="grow" ref="input" type="text"
               value={this.state.currentMessage}
               onChange={this.changedMessage.bind(this)}
        />
        <button onClick={this.sendMessage.bind(this)}>Send</button><br/>
        {messages.map((message,index) => <li key={index}>{message}</li>)}
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
 });
 */