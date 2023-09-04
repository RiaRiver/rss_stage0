// eslint-disable-next-line import/extensions
import { capitalize } from './utils.js';

// Creation of Books DB
const createBooksDB = () => {
  const books = document.querySelectorAll('[data-bookid]');
  const booksDB = [...books].map((book) => {
    const id = book.dataset.bookid;
    const author = book.querySelector('.book__author').innerText.trim();
    const title = book.querySelector('.book__title').innerText.trim();
    return { id, author, title: capitalize(title) };
  });

  return booksDB;
};

export default createBooksDB;
