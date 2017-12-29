import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentChoices from './CurrentChoices';
import Message from '../Components/Message';
import Score from '../Components/Score';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <CurrentChoices />
        <Message message={ this.props.message } />
        <Score header="Your Score" score={ this.props.humanScore } />
        <Score header="Computer Score" score={ this.props.computerScore } />
      </section>
    );
  }
}

Scoreboard.propTypes = {
  message: PropTypes.string.isRequired,
  humanScore: PropTypes.number.isRequired,
  computerScore: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Scoreboard);
