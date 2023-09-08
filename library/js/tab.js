const initTabs = (tabBtnSelector, tabContentSelector) => {
  const tabBtns = document.querySelectorAll(tabBtnSelector);
  const tabs = document.querySelectorAll(tabContentSelector);

  const handleTabs = (e) => {
    const nextName = e.target.id;

    const currentTab = document.querySelector(`${tabContentSelector}.active`);
    const nextTab = document.querySelector(`${tabContentSelector}.${nextName}`);

    currentTab.classList.remove('active');
    nextTab.classList.add('active');

    tabs.forEach((tab) => {
      tab.classList.remove('fade-in', 'fade-out');
      if (tab === currentTab) tab.removeAttribute('hidden');
      else tab.setAttribute('hidden', '');
    });

    currentTab.classList.add('fade-out');

    const deleteAnimationClasses = () => {
      currentTab.classList.remove('fade-out');
      nextTab.classList.remove('fade-in');
    };

    currentTab.onanimationend = () => {
      currentTab.setAttribute('hidden', '');
      nextTab.removeAttribute('hidden');
      nextTab.classList.add('fade-in');
    };

    nextTab.onanimationend = deleteAnimationClasses;
  };

  tabBtns.forEach((btn) => btn.addEventListener('change', handleTabs));
};

export default initTabs;
