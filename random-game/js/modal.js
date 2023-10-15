/* eslint-disable import/extensions */
import { selectors } from './globals.js';

// CloseOnBackdrop
const handleMouseDown = (callback, event) => {
  const modal = event.target;
  const isClickOnBackdrop = modal === event.currentTarget;
  if (isClickOnBackdrop) modal.close();

  if (callback) callback();
};

// CloseOnButton
const handleClick = (callback, event) => {
  const { target, currentTarget: modal } = event;

  if (target.matches(selectors.modalClose)) {
    modal.close();

    if (callback) callback();
  }
};

// CallbackOnCLose by Esc
const handleKeyDown = (callback, event) => {
  if (event.key === 'Escape') {
    callback();
  }
};

const initModals = (selector, closeCallback) => {
  const modals = document.querySelectorAll(selector);

  modals.forEach((item) => {
    item.addEventListener('mousedown', handleMouseDown.bind(this, closeCallback));

    item.addEventListener('click', handleClick.bind(this, closeCallback));

    if (closeCallback) item.addEventListener('keydown', handleKeyDown.bind(this, closeCallback));
  });
};

export default initModals;
