/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
import getData from './getData.js';
import Player from './player.js';

document.addEventListener('DOMContentLoaded', () => {
  const url = 'tracks.json';

  getData(url).then((data) => {
    const player = new Player('.player1', data);
    player.init();
  });
});
