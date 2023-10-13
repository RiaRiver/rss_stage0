/* eslint-disable import/extensions */
import { hideError } from './error.js';
import { getFocusedField, setFocusField } from './focus.js';
import { selectors } from './globals.js';

export const handleDigitInput = (event) => {
  hideError();

  const field = getFocusedField();
  field.value = event.key;

  setFocusField('next');
};

export const handleBtnClick = (event) => {
  hideError();

  const { target } = event;

  const isControlBtn = target.matches(selectors.controlBtn);
  if (isControlBtn) {
    const focusedField = getFocusedField();

    focusedField.value = target.value;
    setFocusField('next');
  }
};
