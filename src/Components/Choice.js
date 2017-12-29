import React from 'react';
import PropTypes from 'prop-types';

const Choice = ({choice, value, onClick}) => {
  return (
    <button value={ value } onClick={ onClick }>{choice}</button>
  );
};

Choice.propTypes = {
  choice: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Choice;
