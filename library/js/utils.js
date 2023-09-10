export const getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
};

export const capitalize = (str) => (str === '' ? '' : str[0].toUpperCase() + str.toLowerCase().slice(1));

export const getFormData = (form) => Object.fromEntries(new FormData(form).entries());
