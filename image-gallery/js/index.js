/* eslint-disable import/extensions */
import { viewImages } from './actions.js';
import Gallery from './gallery.js';
import printSelfcheck from './selfcheck.js';

const start = () => {
  const gallery = new Gallery('.gallery');

  const searchForm = document.getElementById('searchForm');
  const radios = document.querySelectorAll('[type="radio"]');

  searchForm.addEventListener('submit', viewImages.bind(null, gallery));

  radios.forEach((radio) => radio.addEventListener('change', viewImages.bind(null, gallery)));

  viewImages(gallery);

  printSelfcheck();
};

document.addEventListener('DOMContentLoaded', start);
