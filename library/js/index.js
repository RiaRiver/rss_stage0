/* eslint-disable import/extensions */
import initDropdowns from './dropDownMenu.js';
import initModals from './modal.js';
import printSelfcheck from './selfcheck.js';
import service from './service.js';
import { getFormData } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    user: service.getCurrentUser(),
  };

  initDropdowns();
  initModals();

  // Actions
  const register = (e) => {
    e.preventDefault();
    const form = e.target;
    const modal = form.closest('.modal');
    const formData = getFormData(form);

    state.user = service.register(formData);

    form.reset();
    modal.close();
  };

  const login = (e) => {
    e.preventDefault();
    const form = e.target;
    const modal = form.closest('.modal');

    const formData = getFormData(form);
    state.user = service.login(formData);

    form.reset();
    modal.close();
  };

  const logout = () => {
    state.user = service.logout();
  };

  // Set form listeners
  const {
    libraryCardForm, registerForm, loginForm, buyCardForm,
  } = window;

  registerForm.addEventListener('submit', register);
  loginForm.addEventListener('submit', login);

  // Set logout listener
  const logoutBtn = document.querySelector('[data-action=logout]');
  logoutBtn.addEventListener('click', logout);

  // Selfcheck
  printSelfcheck();
});
