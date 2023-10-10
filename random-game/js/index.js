/* eslint-disable import/extensions */
import CodeGame from './codeGame.js';

const start = () => {
  const newGame = new CodeGame(4);
  newGame.generateCode();
};

document.addEventListener('DOMContentLoaded', start);
