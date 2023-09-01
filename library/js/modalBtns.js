const initModalBtns = (action) => {
  const data = action.toLowerCase();
  const selector = `[data-${data}]`;
  const modalActionBtns = document.querySelectorAll(selector);
  [...modalActionBtns].forEach((btn) => btn.addEventListener('click', (e) => {
    window[e.target.dataset[data]][action]();
  }));
};

export default initModalBtns;
