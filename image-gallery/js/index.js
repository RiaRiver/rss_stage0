/* eslint-disable import/extensions */
import { handleSearch, viewStartImages } from './actions.js';
import Gallery from './gallery.js';

const start = () => {
  const gallery = new Gallery('.gallery');

  const preset = [
    'spring',
    'summer',
    'winter',
    'autumn',
    'sun',
    'moon',
    'cats',
    'dogs',
    'flowers',
    'sea',
  ];

  const searchForm = document.getElementById('searchForm');

  searchForm.addEventListener('submit', handleSearch.bind(null, gallery));

  viewStartImages(gallery, preset);
};

document.addEventListener('DOMContentLoaded', start);
