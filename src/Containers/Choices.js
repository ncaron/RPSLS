import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as constants from '../constants';
import { choiceClick } from '../actions';
import Choice from '../Components/Choice';

class Choices extends Component {
  constructor(props) {
    super(props);

    this.displayChoices = this.displayChoices.bind(this);
  }

  displayChoices() {
    return (
      constants.CHOICES.map(choice =>
        <Choice
          key={ choice }
          value={ choice }
          choice={ choice }
          onClick={ this.props.choiceClick } />
      )
    );
  }

  render() {
    return (
      <div>
        {this.displayChoices()}
      </div>
    );
  }
}

Choices.propTypes = {
  choiceClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({choiceClick}, dispatch);

export default connect(null, mapDispatchToProps)(Choices);
