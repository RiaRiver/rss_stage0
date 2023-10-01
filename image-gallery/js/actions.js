/* eslint-disable import/extensions */
import { getFormData, getRandomArrayItem } from './utils.js';

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

// eslint-disable-next-line import/prefer-default-export
export const viewImages = (gallery, event) => {
  if (event) event.preventDefault();

  const form = document.getElementById('searchForm');
  const params = getFormData(form);

  if (!params.query) params.query = getRandomArrayItem(preset);
  if (!params.color) delete params.color;

  gallery.renderGallery(params);
};
