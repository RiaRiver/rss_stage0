/* eslint-disable import/extensions */
import { selectors } from './globals.js';

export const viewError = (msg) => {
  const error = document.querySelector(selectors.error);
  error.textContent = msg;
  error.hidden = false;
};

export const hideError = () => {
  const error = document.querySelector(selectors.error);
  error.textContent = '';
  error.hidden = true;
};
