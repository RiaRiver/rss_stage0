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
