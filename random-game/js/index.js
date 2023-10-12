/* eslint-disable import/extensions */
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

  // eslint-disable-next-line no-param-reassign
  difficultyBtns.forEach((btn) => { btn.disabled = false; });
  difficultyBtns.forEach((btn) => btn.addEventListener('change', changeDifficulty));
};

document.addEventListener('DOMContentLoaded', start);
