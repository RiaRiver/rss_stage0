/* eslint-disable import/extensions */
import createBooksDB from './books.js';
import { capitalize, getRandomIntInclusive } from './utils.js';

const usersDB = 'libraryUsers(riariver)';
const currentUser = 'libraryAuthorized(riariver)';
const booksDB = 'libraryBooks(riariver)';

const generateCardNumber = (base = 16, charCount = 9) => {
  const min = base ** (charCount - 1);
  const max = (base ** charCount) - 1;
  return getRandomIntInclusive(min, max).toString(base);
};

// LocalStorage Interface
const lsUtils = {
  getData: (key) => JSON.parse(localStorage.getItem(key)),
  setData: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
  deleteData: (key) => localStorage.removeItem(key),
};

// Imitation of Books DB
(() => lsUtils.setData(booksDB, createBooksDB()))();
const getBooks = (booksIds) => {
  const booksData = lsUtils.getData(booksDB);
  return booksData.filter((book) => booksIds.includes(book.id));
};

// Imitation of Users DB
const getUsers = () => lsUtils.getData(usersDB) || [];
// eslint-disable-next-line max-len
const findUser = (users, { email, cardNumber }) => users.find((user) => user.email === email || user.cardNumber === cardNumber);
const isUserExist = (users, user) => !!findUser(users, { email: user.email });

const userUtils = {
  create: (userData) => ({
    firstName: capitalize(userData.firstName.trim()),
    lastName: capitalize(userData.lastName.trim()),
    email: userData.email.trim().toLowerCase(),
    password: userData.password,
    cardNumber: generateCardNumber(),
    hasCard: false,
    visits: 1,
    bonuses: 1240,
    books: [],
  }),

  // eslint-disable-next-line no-param-reassign
  increaseVisits: (user) => { user.visits += 1; return user; },

  getData(user) {
    const data = { ...user };
    const secureProps = ['password', 'email'];

    data.books = getBooks(data.books);
    secureProps.forEach((prop) => delete data[prop]);
    return data;
  },
};

// Interface
const service = {
  setCurrentUser(user) { lsUtils.setData(currentUser, user.cardNumber); },

  getCurrentUser() {
    const userId = lsUtils.getData(currentUser);
    if (!userId) return null;

    const user = findUser(getUsers(), { cardNumber: userId });
    return userUtils.getData(user);
  },

  register(data) {
    const isDataCorrect = (data.firstName && data.lastName && data.email && data.password);
    if (!isDataCorrect) return null;

    const newUser = userUtils.create(data);
    const users = getUsers();
    if (isUserExist(users, newUser)) return null;

    users.push(newUser);
    this.setCurrentUser(newUser);

    lsUtils.setData(usersDB, users);
    return userUtils.getData(newUser);
  },

  login({ login, password }) {
    const users = getUsers();
    const user = findUser(users, { email: login.toLowerCase(), cardNumber: login.toLowerCase() });
    if (!user || user.password !== password) return null;

    userUtils.increaseVisits(user);
    this.setCurrentUser(user);

    lsUtils.setData(usersDB, users);
    return userUtils.getData(user);
  },

  logout() { lsUtils.deleteData(currentUser); return null; },

  buyCard() {
    const userId = lsUtils.getData(currentUser);
    if (!userId) return null;

    const users = getUsers();
    const user = findUser(users, { cardNumber: userId });
    user.hasCard = true;

    lsUtils.setData(usersDB, users);
    return userUtils.getData(user);
  },

  buyBook(bookId) {
    const users = getUsers();
    const userId = lsUtils.getData(currentUser);

    const user = findUser(users, { cardNumber: userId });
    const { books } = user;
    if (!books.includes(bookId)) {
      books.push(bookId);
      lsUtils.setData(usersDB, users);
    }

    return userUtils.getData(user);
  },

};

export default service;
