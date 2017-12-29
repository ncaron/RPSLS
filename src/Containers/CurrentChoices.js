import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CurrentChoice from '../Components/CurrentChoice';

class CurrentChoices extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CurrentChoice header="Your Choice" choice={ this.props.humanChoice } />
        <CurrentChoice header="Computer Choice" choice={ this.props.computerChoice } />
      </div>
    );
  }
}

CurrentChoices.propTypes = {
  humanChoice: PropTypes.string.isRequired,
  computerChoice: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    humanChoice: state.humanChoice,
    computerChoice: state.computerChoice,
  };
};

export default connect(mapStateToProps)(CurrentChoices);
