/* eslint-disable import/extensions */
import { viewImages } from './actions.js';
import Gallery from './gallery.js';

const start = () => {
  const gallery = new Gallery('.gallery');

  const searchForm = document.getElementById('searchForm');
  const radios = document.querySelectorAll('[type="radio"]');

  searchForm.addEventListener('submit', viewImages.bind(null, gallery));

  radios.forEach((radio) => radio.addEventListener('change', viewImages.bind(null, gallery)));

  viewImages(gallery);
};

document.addEventListener('DOMContentLoaded', start);
