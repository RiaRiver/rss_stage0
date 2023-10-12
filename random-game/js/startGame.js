/* eslint-disable import/extensions */
import CodeGame from './codeGame.js';
import { state } from './globals.js';

const startGame = () => {
  state.game = new CodeGame(state.gameModes[state.gameMode]);

  state.game.generateCode();
};

export default startGame;
