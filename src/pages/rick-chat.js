import React from 'react';
import ReactDom from 'react-dom';

let ChatApp = React.createClass({
  getInitialState: function () {
    return{
      messages: [],
      socket: window.io('http://localhost:3000')
    }
  },
  componentDidMount: function (msg) {
    let self = this;
    this.state.socket.on("receive-message", function(msg){
      var messages = self.state.messages;
      messages.push(msg);
      self.setState({messages: messages})
      console.log(self.state.messages);
    });
  },
  submitMessage: function () {
    let message = document.getElementById("message").value;
    this.state.socket.emit("new-message", message);
    console.log(message);
  },
  render: function(){
    var i = 0;
    var messages = this.state.messages.map(function(msg) {
      return(
        <li key={i}>{msg}</li>
      );
    });

    let self = this;
    return(
      <div>
        <ul>
          {messages}
        </ul>
        <input id="message" type="text"/><button onclick={self.submitMessage()}>Submit Message</button>
      </div>
    )
  }
});
ReactDom.render(
  <ChatApp/>,
  document.getElementById('root')
);
