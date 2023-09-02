const initDropdown = (button, dropdown, menuItems) => {
  const isDropdownOpen = () => dropdown.hasAttribute('open');

  const dropdownShow = () => {
    button.setAttribute('active', '');
    if (dropdown.show) dropdown.show(); else dropdown.setAttribute('open', '');
  };

  const dropdownClose = () => {
    button.removeAttribute('active');
    if (dropdown.close) dropdown.close(); else dropdown.removeAttribute('open');
  };

  const toggleDropdown = () => {
    if (isDropdownOpen()) dropdownClose(); else dropdownShow();
  };

  button.addEventListener('click', () => {
    toggleDropdown();
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.hasAttribute('open') || e.target === button) return;
    const isClickOutsideDropdown = !dropdown.contains(e.target);
    const isClickOnMenuItem = [...menuItems].includes(e.target);

    const shouldClose = isClickOutsideDropdown || isClickOnMenuItem;

    if (shouldClose) dropdownClose();
  });
};

// Dropdowns Initiation
const initDropdowns = () => {
  // Burger menu
  const burgerBtn = document.querySelector('.burger-btn');
  const nav = document.querySelector('.header__nav');
  const navLinks = nav.getElementsByTagName('A');

  initDropdown(burgerBtn, nav, navLinks);

  // User dropdown
  const userBtn = document.querySelector('.user__btn');
  const userMenu = window['user-dropdown'];
  const userActions = userMenu.getElementsByTagName('BUTTON');

  initDropdown(userBtn, userMenu, userActions);
};

export default initDropdowns;
