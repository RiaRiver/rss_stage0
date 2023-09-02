const initModalBtns = (action) => {
  const dataAttrName = action.toLowerCase();
  const selector = `[data-${dataAttrName}]`;
  const modalActionBtns = document.querySelectorAll(selector);
  [...modalActionBtns].forEach((btn) => btn.addEventListener('click', (e) => {
    const modalId = e.target.dataset[dataAttrName];
    window[modalId][action]();
  }));
};

const closeOnBackdrop = (e) => {
  const modal = e.target;
  const isClickOnBackdrop = modal === e.currentTarget;
  if (isClickOnBackdrop) modal.close();
};

const initModals = () => {
  // Modal buttons
  initModalBtns('close');
  initModalBtns('showModal');

  // Click on backdrop
  const modals = document.querySelectorAll('.modal');
  modals.forEach((item) => item.addEventListener('click', closeOnBackdrop));
};

export default initModals;
