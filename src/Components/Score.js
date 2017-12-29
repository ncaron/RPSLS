import React from 'react';
import PropTypes from 'prop-types';

const Score = ({header, score}) => {
  return (
    <div>
      <p>{header}</p>
      <p>{score}</p>
    </div>
  );
};

Score.propTypes = {
  header: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Score;
