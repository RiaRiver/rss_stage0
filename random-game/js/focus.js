/* eslint-disable import/extensions */
import { selectors } from './globals.js';

export const getFocusedField = () => {
  const focused = document.activeElement;

  const focusedField = focused.matches(selectors.field)
    ? focused
    : document.querySelector(selectors.field);

  return focusedField;
};

export const setFocusField = (order) => {
  const focusedField = getFocusedField();

  let fieldToFocus;
  switch (order) {
    case 'first':
    {
      fieldToFocus = document.querySelector(selectors.field);
      break;
    }

    case 'prev': {
      fieldToFocus = focusedField.previousElementSibling
      || document.querySelector(`${selectors.field}:last-of-type`);
      break;
    }

    case 'next':
    default: {
      fieldToFocus = focusedField.nextElementSibling
      || document.querySelector(selectors.field);
    }
  }

  fieldToFocus.focus();
};

export const preventInputBlur = (event) => {
  const { target } = event;
  const { activeElement } = document;

  const isField = (elem) => elem.matches(selectors.field);
  if (!isField(target)) {
    event.preventDefault();
  }

  if (!isField(activeElement)) {
    setFocusField('first');
  }
};
