import React from 'react';
import PropTypes from 'prop-types';

import * as MessagePositions from '../constants/MessagePositions';

function UserMessage({ text, side }) {
  const style = { textAlign: side, fontSize: '24px',fontFamily: 'Arial'};
  return <div style={style}>{text}</div>;
}

UserMessage.propTypes = {
  text: PropTypes.string.isRequired,
  side: PropTypes.oneOf([
    MessagePositions.LEFT,
    MessagePositions.RIGHT
  ]).isRequired
};

export default UserMessage;
