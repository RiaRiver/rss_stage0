export default class Gallery {
  constructor(containerSelector) {
    this.containerSelector = containerSelector;
    this.gallery = document.querySelector(containerSelector);
  }

  renderImages(images) {
    const items = images.map((image) => {
      const template = document.createElement('template');
      template.innerHTML = `
<li class="gallery__item">
  <img src="${image.urls.regular}" alt="${image.alt_description}" class="gallery__item-img">
</li>
      `;
      return template.content;
    });
    this.gallery.replaceChildren(...items);
  }
}
