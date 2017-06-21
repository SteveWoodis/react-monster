import React from 'react';
import PropTypes from 'prop-types';
import * as Usernames from '../constants/Usernames';

import Conversation from '../components/Conversation';
import NewMessageInput from '../components/NewMessageInput';

const CHANNEL = 'channel';
const CONVERSATION_ID = '1';


function getOtherUser(user) {
  return user === Usernames.NAS
    ? Usernames.JAYZ
    : Usernames.NAS;
}

function getMessage(text, username, conversationId) {
  return {
    text,
    sender: username,
    conversationId,
  };
}

class ChatApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      currentText: '',
      messages: [],
      historyFetched: false,
    };

    this.handleMessageReceive = this.handleMessageReceive.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleMessageSend = this.handleMessageSend.bind(this);
    this.getHandleUserChoice = this.getHandleUserChoice.bind(this);
    this.renderLoadingHistory = this.renderLoadingHistory.bind(this);
  }

  componentWillMount() {
    const { pubNub } = this.props;
    pubNub.addListener({
      message: this.handleMessageReceive,
    });
    pubNub.subscribe({
      channels: [CHANNEL],
    });
  }

  componentWillReceiveProps(props) {
    const { pubNub } = props;
    pubNub.history(
      {
        channel: CHANNEL,
        count: 25,
      },
      (status, response) => {
        const messages = response.messages
          .filter(message => !!message.entry)
          .map(({ entry }) => (
            getMessage(entry.text, entry.sender, entry.conversationId)
          ));
        this.setState({ historyFetched: true, messages });
      },
    );
  }
  getHandleUserChoice(username) {
    return () => {
      this.props.pubNub.setUUID(username);
      this.setState({ user: username });
    };
  }
  handleTextChange(e) {
    const message = e.target.value;
    this.setState({ currentText: message });
  }
  handleMessageReceive(m) {
    this.setState(prevState => ({
      messages: prevState.messages.concat([m.message]),
    }));
  }
  handleMessageSend(e) {
    const { pubNub } = this.props;
    const { currentText, user } = this.state;
    e.preventDefault();
    pubNub.publish({
      channel: CHANNEL,
      message: getMessage(currentText, user, CONVERSATION_ID),
    });
    this.setState({ currentText: '' });
  }
  renderUserChoice() {
    return (
      <div>
        <h3>Choose your user</h3>
        <button onClick={this.getHandleUserChoice(Usernames.NAS)}>
          Nas
        </button>
        <button onClick={this.getHandleUserChoice(Usernames.JAYZ)}>
          Jay-Z
        </button>
      </div>
    );
  }

  renderLoadingHistory() {
    const { user } = this.state;
    return <div>Welcome back {user}. Fetching your chat history...</div>;
  }

  render() {
    const {
      user,
      currentText,
      historyFetched,
      messages,
    } = this.state;
    if (!user) {
      return this.renderUserChoice();
    }
    if (!historyFetched) {
      return this.renderLoadingHistory();
    }
    const otherUser = getOtherUser(user);
    return (
      <div>
        <h3>You are logged in as {user} in a conversation with {otherUser}.</h3>
        <NewMessageInput
          onSend={this.handleMessageSend}
          onTextChange={this.handleTextChange}
          currentText={currentText}
        />
        <Conversation messages={messages} user={user} />
      </div>
    );
  }
}

ChatApp.propTypes = {
  pubNub: PropTypes.object.isRequired,
};

export default ChatApp;
