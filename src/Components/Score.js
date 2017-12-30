import React from 'react';
import PropTypes from 'prop-types';

const Score = ({header, choice, score}) => {
  return (
    <div>
      <p>{header}</p>
      <p>{choice}</p>
      <p>{score}</p>
    </div>
  );
};

Score.propTypes = {
  header: PropTypes.string.isRequired,
  choice: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Score;
