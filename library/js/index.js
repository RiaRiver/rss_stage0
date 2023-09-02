/* eslint-disable import/extensions */
import initDropdown from './dropDownMenu.js';
import initModals from './modal.js';
import printSelfcheck from './selfcheck.js';

document.addEventListener('DOMContentLoaded', () => {
  // Burger menu
  const burgerBtn = document.querySelector('.burger-btn');
  const nav = document.querySelector('.header__nav');
  const navLinks = nav.getElementsByTagName('A');

  initDropdown(burgerBtn, nav, navLinks);

  // User dropdown
  const userBtn = document.querySelector('.user__btn');
  const userMenu = window['user-dropdown'];
  const userActions = userMenu.getElementsByTagName('BUTTON');

  initDropdown(userBtn, userMenu, userActions);

  // Modals actions
  initModals();

  // Selfcheck
  printSelfcheck();
});
