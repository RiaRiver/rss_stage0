/* eslint-disable import/extensions */
import getImages from './fetchData.js';

export default class Gallery {
  constructor(containerSelector) {
    this.galleryClass = 'gallery';
    this.containerSelector = containerSelector;
    this.gallery = document.querySelector(containerSelector);
  }

  renderInfo(type, text) {
    const info = document.createElement('strong');
    info.classList.add(`${this.galleryClass}__${type}`);

    info.textContent = text;
    this.gallery.replaceChildren(info);
  }

  renderImages(images) {
    const isEmpty = !images.length;
    if (isEmpty) {
      this.renderInfo('empty', 'No images for this query.');
      return;
    }

    const items = images.map((image) => {
      const template = document.createElement('template');
      template.innerHTML = `
<li class="gallery__item">
  <img src="${image.urls.regular}" alt="${image.alt_description}" class="${this.galleryClass}__item-img">
</li>
      `;
      return template.content;
    });
    this.gallery.replaceChildren(...items);
  }

  renderGallery(query) {
    if (query) {
      getImages({ query }).then((images) => {
        this.renderImages(images);
      }).catch((error) => {
        this.renderInfo('error', error);
      });
    }
  }
}
