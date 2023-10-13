/* eslint-disable import/extensions */
import CodeGame from './codeGame.js';
import { setFocusField } from './focus.js';
import { state } from './globals.js';
import { renderFields, clearAttempts } from './render.js';

const startGame = () => {
  clearAttempts();
  renderFields();
  setFocusField('first');

  state.game = new CodeGame(state.gameModes[state.gameMode]);

  state.game.generateCode();
};

export default startGame;
