/* eslint-disable import/extensions */
import Player from './player.js';
import data from './tracks.js';

document.addEventListener('DOMContentLoaded', () => {
  const player = new Player('.player1', data);
  player.init();
});
