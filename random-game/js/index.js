/* eslint-disable import/extensions */
import handleSubmit from './submit.js';
import { handleBtnClick } from './controls.js';
import { preventInputBlur } from './focus.js';
import { selectors, state } from './globals.js';
import { resetGame, startGame } from './game.js';
import initModals from './modal.js';
import handleKeyPress from './keyControls.js';
import { viewResults } from './results.js';
import printSelfcheck from './selfcheck.js';

const changeDifficulty = (event) => {
  const difficulty = event.target.value;
  state.gameMode = difficulty;

  resetGame();
};

const viewInfo = () => {
  const modal = document.querySelector(selectors.modalInfo);
  modal.showModal();
};

const start = () => {
  startGame();

  const difficultyBtns = document.querySelectorAll(selectors.difficultyBtns);
  const game = document.querySelector(selectors.game);
  const resultsBtn = document.querySelector(selectors.resultsBtn);
  const infoBtn = document.querySelector(selectors.infoBtn);

  // eslint-disable-next-line no-param-reassign
  difficultyBtns.forEach((btn) => { btn.disabled = false; });
  difficultyBtns.forEach((btn) => btn.addEventListener('change', changeDifficulty));

  game.addEventListener('click', handleBtnClick);
  game.addEventListener('mousedown', preventInputBlur);

  game.addEventListener('reset', resetGame);

  game.addEventListener('submit', handleSubmit);

  initModals('.modal-win', startGame);
  initModals('.modal-results');
  initModals('.modal-info');

  document.addEventListener('keydown', handleKeyPress);

  resultsBtn.addEventListener('click', viewResults);
  infoBtn.addEventListener('click', viewInfo);
};

document.addEventListener('DOMContentLoaded', start);

printSelfcheck();
