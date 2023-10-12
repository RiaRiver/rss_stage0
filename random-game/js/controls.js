/* eslint-disable import/extensions */
import { getFocusedField, setFocusField } from './focus.js';
import { selectors } from './globals.js';

export const handleBtnClick = (event) => {
  const { target } = event;

  const isControlBtn = target.matches(selectors.controlBtn);
  if (isControlBtn) {
    const focusedField = getFocusedField();

    focusedField.value = target.value;
    setFocusField('next');
  }
};
