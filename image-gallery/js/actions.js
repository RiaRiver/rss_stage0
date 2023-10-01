/* eslint-disable import/extensions */
import getImages from './fetchData.js';
import { getFormData, getRandomArrayItem } from './utils.js';

export const viewStartImages = (gallery, queries) => {
  const query = getRandomArrayItem(queries);
  getImages({ query }).then((images) => {
    gallery.renderImages(images);
  });
};

export const handleSearch = (gallery, event) => {
  event.preventDefault();
  const form = event.target;
  const query = getFormData(form).search;
  if (query) {
    getImages({ query }).then((images) => {
      gallery.renderImages(images);
    });
  }
};
