/* eslint-disable import/extensions */
// import initGame from './initGame.js';
import { handleDigitInput } from './controls.js';
import { setFocusField } from './focus.js';
import { selectors, state } from './globals.js';

const isValidChar = (char) => state.game.validChars.includes(char);

const clearInputField = (focusedField) => {
  const isFieldEmpty = !focusedField.value;
  if (isFieldEmpty) setFocusField('prev');
  else {
    // eslint-disable-next-line no-param-reassign
    focusedField.value = '';
  }
};

const handleKeyPress = (event) => {
  if (isValidChar(event.key)) handleDigitInput(event);

  const { activeElement } = document;
  const isFieldFocused = activeElement.matches(selectors.field);

  if (event.key === 'ArrowLeft' && isFieldFocused) setFocusField('prev');
  if (event.key === 'ArrowRight' && isFieldFocused) setFocusField('next');
  if (event.key === 'Backspace' && isFieldFocused) clearInputField(event.target);
};

export default handleKeyPress;
