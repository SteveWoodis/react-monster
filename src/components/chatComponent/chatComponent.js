import React from 'react';
import PubNub from 'pubnub';

import ChatApp from './containers/ChatApp';
import {PUBNUB_PUBLISH, PUBNUB_SUBSCRIBE} from './ApiKeys';

const pubNub = new PubNub({
  publish_key: PUBNUB_PUBLISH,
  subscribe_key: PUBNUB_SUBSCRIBE,
  ssl: true,
});

const Chat = () => (
  <ChatApp pubNub={pubNub}/>
);

export default Chat;