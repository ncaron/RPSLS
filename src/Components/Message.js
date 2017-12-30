import React from 'react';
import PropTypes from 'prop-types';

const Message = ({message}) => {
  return (
    <p>{message || 'Good Luck!'}</p>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
