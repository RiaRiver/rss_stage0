/* eslint-disable import/extensions */
import { selectors, state } from './globals.js';
import { renderResults } from './render.js';
import service from './service.js';

/* eslint-disable import/prefer-default-export */
export const saveResult = (opt) => {
  const result = {
    date: Date.now(),
    code: state.game.code,
    mode: state.gameMode,
    attempts: opt || state.game.attempts.length,
  };

  service.saveResult(result);
};

export const viewResults = () => {
  const results = service.getResults();
  const modal = document.querySelector(selectors.modalResults);

  if (results.length) {
    renderResults(results);
  }

  modal.showModal();
};
