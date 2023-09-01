const initDropdown = (button, dropdown, dropdownItems) => {
  const isDropdownOpen = () => dropdown.hasAttribute('open');

  const dropdownShow = () => {
    button.toggleAttribute('active');
    if (dropdown.show) dropdown.show(); else dropdown.toggleAttribute('open');
  };

  const dropdownClose = () => {
    button.toggleAttribute('active');
    if (dropdown.close) dropdown.close(); else dropdown.toggleAttribute('open');
  };

  const toggleDropdown = () => {
    if (isDropdownOpen()) dropdownClose(); else dropdownShow();
  };

  button.addEventListener('click', () => {
    toggleDropdown();
  });

  document.addEventListener('click', (e) => {
    if (!isDropdownOpen() || e.target === button) return;

    const shouldClose = !dropdown.contains(e.target) || [...dropdownItems].includes(e.target);

    if (shouldClose) dropdownClose();
  });
};

export default initDropdown;
