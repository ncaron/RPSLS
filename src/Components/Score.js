import React from 'react';
import PropTypes from 'prop-types';

const Score = ({header, choice, score}) => {
  return (
    <section className="score-container">
      <header className="score-header">{header}</header>
      <p className="score-choice">{choice || <code>&nbsp;</code>}</p>
      <p className="score-total">{score}</p>
    </section>
  );
};

Score.propTypes = {
  header: PropTypes.string.isRequired,
  choice: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Score;
