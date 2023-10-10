export const getFormData = (form) => Object.fromEntries(new FormData(form).entries());

export const getRandomInt = (max) => {
  const randomInt = Math.floor(Math.random() * max);
  return randomInt;
};
