/* eslint-disable import/extensions */
import CodeGame from './codeGame.js';
import { setFocusField } from './focus.js';
import { state } from './globals.js';
import { renderFields, clearAttempts } from './render.js';
import { saveResult } from './results.js';

export const startGame = () => {
  clearAttempts();
  renderFields();
  setFocusField('first');

  state.game = new CodeGame(state.gameModes[state.gameMode]);

  state.game.generateCode();
};

export const resetGame = () => {
  if (state.game.attempts.length) saveResult('reset');
  startGame();
};
