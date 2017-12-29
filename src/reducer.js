import * as types from './actionTypes';
import * as constants from './constants';
import initialState from './initialState';

const getWinner = (humanChoice, computerChoice, currentCombo) => {
  if (humanChoice === computerChoice) {
    return 'draw';
  }

  let combos = Object.keys(constants.COMBOS);

  if (combos.includes(currentCombo)) {
    return 'human';
  } else {
    return 'computer';
  }
};

const getMessage = (currentCombo) => {
  return constants.COMBOS[currentCombo];
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.CHOICE_CLICK: {
      let newState = Object.assign({}, state);
      const currentCombo = `${action.humanChoice} ${action.computerChoice}`;
      const winner = getWinner(action.humanChoice, action.computerChoice, currentCombo);

      newState.humanChoice = action.humanChoice;
      newState.computerChoice = action.computerChoice;

      if (winner === 'draw') {
        newState.message = 'Draw!';
      } else if (winner === 'human') {
        newState.humanScore++;
        newState.message = getMessage(currentCombo);
      } else {
        newState.computerScore++;
        newState.message = getMessage(currentCombo.split(' ').reverse().join(' '));
      }

      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
