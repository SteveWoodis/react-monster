import React,{Component} from 'react';

class ChatApp extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      socket: window.io('http://localhost:3000')
    };
  }
  componentDidMount(msg) {
  let self = this;
  this.state.socket.on("receive-message", function(msg){
    var messages = self.state.messages;
    messages.push(msg);
    self.setState({messages: messages})
    console.log(self.state.messages);
  });
}
  submitMessage() {
  let message = document.getElementById("message").value;
  this.state.socket.emit("new-message", message);
  console.log(message);
}
  render() {
    var i = 0;
    var messages = this.state.messages.map(function (msg) {
      return (
        <li key={i}>{msg}</li>
      );
    });
    return (
      <div>
        <ul>
          {messages}
        </ul>
        <input id="message" type="text"/>
        <button onclick={this.submitMessage()}>Submit Message</button>
      </div>
    );
  }

};

export default ChatApp;