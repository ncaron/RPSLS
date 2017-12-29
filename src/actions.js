import * as types from './actionTypes';
import * as constants from './constants';

export function choiceClick(e) {
  const humanChoice = e.target.value;
  const computerChoice = constants.CHOICES[Math.floor(Math.random() * constants.CHOICES.length)];

  return {
    type: types.CHOICE_CLICK,
    humanChoice,
    computerChoice
  };
}
