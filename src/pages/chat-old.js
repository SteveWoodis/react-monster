import React, {Component} from 'react';
import moment from 'react-moment';

const Message = (props) => {
  const formatTime = (time) => moment(time).format('h:mm A');
  return <li>{formatTime(props.message.time)} - {props.message.text}</li>;
};

class MessageList extends Component {
  constructor() {
    super();
  }

  renderMessages() {
    const getMessages = () => {
      return [
        {_id: 1, time: new Date(), text: "A wonderful message. "},
        {_id: 2, time: new Date(), text: "The next wonderful message "}
      ]
    };
    return getMessages().map((message) => {
      return <Message key={message._id} message={message}/>;
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h2>Messages</h2>
        </header>
        <ul>
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
}


export default MessageList;