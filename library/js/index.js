/* eslint-disable import/extensions */
import initDropdowns from './dropDownMenu.js';
import initModals, { viewAlert } from './modal.js';
import msg from './msg.js';
import render from './render.js';
import printSelfcheck from './selfcheck.js';
import service from './service.js';
import initSlider from './slider.js';
import initTabs from './tab.js';
import { getFormData } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    user: service.getCurrentUser(),
  };

  const prepareUser = (user) => ({
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
    initials: `${user.firstName[0]}${user.lastName[0]}`,
    cardNumber: user.cardNumber.toUpperCase(),
    booksCount: user.booksCount === undefined ? user.books.length : user.booksCount,
  });

  if (state.user) render.all(prepareUser(state.user));

  initDropdowns();
  initModals();
  initTabs('.tabBtn', '.tabContent');
  initSlider();

  // Actions
  const register = (e) => {
    e.preventDefault();
    const form = e.target;
    const modal = form.closest('.modal');
    const formData = getFormData(form);

    state.user = service.register(formData);

    if (!state.user) { viewAlert('This email is already registered.'); return; }

    render.all(prepareUser(state.user));

    form.reset();
    modal.close();
  };

  const login = (e) => {
    e.preventDefault();
    const form = e.target;
    const modal = form.closest('.modal');

    const formData = getFormData(form);
    state.user = service.login(formData);

    if (!state.user) { viewAlert('Wrong login or password. Please try again.'); return; }

    render.all(prepareUser(state.user));

    form.reset();
    modal.close();
  };

  const logout = () => {
    state.user = service.logout();
    document.location.reload();
  };

  const buyCard = (e) => {
    e.preventDefault();
    const form = e.target;
    const modal = form.closest('.modal');

    state.user = service.buyCard();

    render.changed(prepareUser(state.user));

    form.reset();
    modal.close();
  };

  const checkCard = (e) => {
    e.preventDefault();
    const form = e.target;
    const viewTime = 10000;

    const formData = getFormData(form);

    const userData = service.checkCard(formData);
    if (!userData) return;

    render.stats(prepareUser(userData));
    window.setTimeout(render.statsInitial, viewTime);
  };

  // Set form listeners
  const {
    libraryCardForm, registerForm, loginForm, buyCardForm,
  } = window;

  registerForm.addEventListener('submit', register);
  loginForm.addEventListener('submit', login);
  buyCardForm.addEventListener('submit', buyCard);
  libraryCardForm.addEventListener('submit', checkCard);

  // Set logout listener
  const logoutBtn = document.querySelector('[data-action=logout]');
  logoutBtn.addEventListener('click', logout);

  // Setup buyCard empty validation
  const checkEmpty = (e) => {
    const { form } = e.target;
    const inputs = form.querySelectorAll('input');
    const isEmpty = [...inputs].some((input) => input.validity.valueMissing);

    form.querySelector('button').disabled = isEmpty;
  };

  buyCardForm.addEventListener('input', checkEmpty);

  // Setup buyBook
  const buyBook = (e) => {
    if (!state.user) { window['modal-login'].showModal(); return; }
    if (!state.user.hasCard) { window['modal-card'].showModal(); return; }

    const bookId = e.target.closest('[data-bookid]').dataset.bookid;

    state.user = service.buyBook(bookId);
    render.changed(prepareUser(state.user));
  };

  const bookBtns = document.querySelectorAll('.book__button');
  bookBtns.forEach((btn) => btn.addEventListener('click', buyBook));

  // Setup copy cardNumber button
  const profileCopyBtn = document.querySelector('.modal-profile__copy-btn');
  profileCopyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(state.user.cardNumber.toUpperCase());
  });

  // Message for reviewer
  msg();
  // Selfcheck
  printSelfcheck();
});
