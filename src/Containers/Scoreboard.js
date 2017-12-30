import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from '../Components/Message';
import Score from '../Components/Score';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Message message={ this.props.message } />
        <Score
          header="Your Score"
          choice={ this.props.humanChoice }
          score={ this.props.humanScore } />
        <Score
          header="Computer Score"
          choice={ this.props.computerChoice }
          score={ this.props.computerScore } />
      </section>
    );
  }
}

Scoreboard.propTypes = {
  humanChoice: PropTypes.string.isRequired,
  computerChoice: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  humanScore: PropTypes.number.isRequired,
  computerScore: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Scoreboard);
