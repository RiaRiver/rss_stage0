/* eslint-disable no-param-reassign */
const hide = (elem) => elem.setAttribute('hidden', '');
const view = (elem) => elem.removeAttribute('hidden');
const setDisabled = (elem) => elem.setAttribute('disabled', '');
const unsetDisabled = (elem) => elem.removeAttribute('disabled');
const setAuthorized = (elem) => elem.classList.add('authorized');
const unsetAuthorized = (elem) => elem.classList.remove('authorized');

const statedElements = {
  initial: document.querySelectorAll('[data-state="initial"]'),
  authorized: document.querySelectorAll('[data-state="authorized"]'),
};

const userBtn = document.querySelector('.user__btn');
const infoElements = document.querySelectorAll('[data-info]');
const countElements = document.querySelectorAll('[data-count]');
const bookBtns = document.querySelectorAll('.book__button');
const checkCardInputs = document.forms.libraryCardForm.querySelectorAll('input');
const checkCardBtn = document.querySelector('.library-card__form-button');
const checkCardStat = document.querySelector('.library-card__stat');
const profileBookList = document.querySelector('.modal-profile__books');

const render = {
  initial() {
    this.statsInitial();

    userBtn.removeAttribute('title');

    statedElements.initial.forEach(view);
    statedElements.authorized.forEach(hide);

    infoElements.forEach((elem) => {
      elem.textContent = elem.dataset.initial;
      unsetAuthorized(elem);
    });

    bookBtns.forEach((bookBtn) => {
      bookBtn.textContent = 'Buy';
      unsetDisabled(bookBtn);
    });

    profileBookList.innerHTML = '';
  },

  statsInitial() {
    checkCardInputs.forEach((input) => {
      input.value = '';
      unsetDisabled(input);
    });

    countElements.forEach((elem) => {
      elem.textContent = elem.dataset.initial;
      unsetAuthorized(elem);
    });

    hide(checkCardStat);
    view(checkCardBtn);
  },

  stats(data) {
    checkCardInputs.forEach((input) => {
      input.value = data[input.name];
      setDisabled(input);
    });

    countElements.forEach((elem) => {
      elem.textContent = data[elem.dataset.count];
      setAuthorized(elem);
    });

    hide(checkCardBtn);
    view(checkCardStat);
  },

  changed(data) {
    this.stats(data);

    const bookList = document.createElement('ul');

    data.books.forEach((book) => {
      const bookEl = document.querySelector(`[data-bookid="${book.id}"]`);
      const bookBtn = bookEl.querySelector('.book__button');

      bookBtn.textContent = 'Own';
      setDisabled(bookBtn);

      bookList.insertAdjacentHTML('beforeend', `
      <li class="modal-profile__book">
        <span class="modal-profile__book-title">${book.title}</span>,
        <span class="modal-profile__book-author">${book.author}</span>
      </li>
    `);
    });

    profileBookList.replaceChildren(...bookList.children);
  },

  all(data) {
    this.changed(data);

    userBtn.title = data.fullName;

    statedElements.initial.forEach(hide);
    statedElements.authorized.forEach(view);

    infoElements.forEach((elem) => {
      elem.textContent = data[elem.dataset.info];
      setAuthorized(elem);
    });
  },
};

export default render;
