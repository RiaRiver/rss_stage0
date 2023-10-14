export const getFormData = (form, name) => (name
  ? new FormData(form).getAll(name)
  : Object.fromEntries(new FormData(form).entries()));

export const getRandomInt = (max) => {
  const randomInt = Math.floor(Math.random() * max);
  return randomInt;
};

export const hasDuplicateChars = (str) => {
  const strSet = new Set(str);
  return str.length !== strSet.size;
};

export const getDateFormatted = (date) => new Intl.DateTimeFormat('ru-RU', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
}).format(new Date(date));
