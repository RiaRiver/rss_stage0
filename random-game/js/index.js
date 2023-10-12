/* eslint-disable import/extensions */
import { handleBtnClick } from './controls.js';
import { preventInputBlur } from './focus.js';
import { selectors, state } from './globals.js';
import startGame from './startGame.js';

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
};

document.addEventListener('DOMContentLoaded', start);
