export const getFormData = (form) => Object.fromEntries(new FormData(form).entries());

export const getRandomArrayItem = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
