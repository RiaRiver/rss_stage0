/* eslint-disable import/extensions */
import handleSubmit from './submit.js';
import { handleBtnClick } from './controls.js';
import { preventInputBlur } from './focus.js';
import { selectors, state } from './globals.js';
import startGame from './startGame.js';
import initModals from './modal.js';
import handleKeyPress from './keyControls.js';

const changeDifficulty = (event) => {
  const difficulty = event.target.value;
  state.gameMode = difficulty;

  startGame();
};

const start = () => {
  startGame();

  const difficultyBtns = document.querySelectorAll(selectors.difficultyBtns);
  const game = document.querySelector(selectors.game);

  // eslint-disable-next-line no-param-reassign
  difficultyBtns.forEach((btn) => { btn.disabled = false; });
  difficultyBtns.forEach((btn) => btn.addEventListener('change', changeDifficulty));

  game.addEventListener('click', handleBtnClick);
  game.addEventListener('mousedown', preventInputBlur);

  game.addEventListener('reset', () => {
    startGame();
  });

  game.addEventListener('submit', handleSubmit);

  initModals('.modal-win', startGame);

  document.addEventListener('keydown', handleKeyPress);
};

document.addEventListener('DOMContentLoaded', start);
