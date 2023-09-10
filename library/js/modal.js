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
  modals.forEach((item) => item.addEventListener('mousedown', closeOnBackdrop));
};

// Setup alert
const modalAlert = window['modal-alert'];
const modalMsg = modalAlert.querySelector('.modal-alert__text');

export const viewAlert = (msg) => {
  modalMsg.textContent = msg;
  modalAlert.showModal();

  window.setTimeout(() => {
    modalMsg.textContent = modalMsg.dataset.initial;
    modalAlert.close();
  }, 3000);
};

export default initModals;
