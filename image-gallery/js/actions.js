/* eslint-disable import/extensions */
import { getFormData, getRandomArrayItem } from './utils.js';

export const viewStartImages = (gallery, queries) => {
  const query = getRandomArrayItem(queries);

  gallery.renderGallery(query);
};

export const handleSearch = (gallery, event) => {
  event.preventDefault();
  const form = event.target;
  const query = getFormData(form).search;

  gallery.renderGallery(query);
};
