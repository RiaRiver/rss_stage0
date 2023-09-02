/* eslint-disable import/extensions */
import initDropdowns from './dropDownMenu.js';
import initModals from './modal.js';
import printSelfcheck from './selfcheck.js';

document.addEventListener('DOMContentLoaded', () => {
  initDropdowns();
  initModals();

  // Selfcheck
  printSelfcheck();
});
