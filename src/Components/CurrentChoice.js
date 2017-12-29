import React from 'react';
import PropTypes from 'prop-types';

const CurrentChoice = ({header, choice}) => {
  return (
    <div>
      <p>{header}</p>
      <p>{choice}</p>
    </div>
  );
};

CurrentChoice.propTypes = {
  header: PropTypes.string.isRequired,
  choice: PropTypes.string.isRequired,
};

export default CurrentChoice;
