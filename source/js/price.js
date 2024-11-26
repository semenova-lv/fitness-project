const tabsButtonsList = document.querySelector('.price__filter-list');
const tabsContentsLists = document.querySelectorAll('.price__product-list');

const onTabButtonClick = (evt) => {
  const currentTabButton = evt.target.closest('.price__filter-button');
  if(!currentTabButton) {
    return;
  }
  document.querySelector('.price__filter-button--current').classList.remove('price__filter-button--current');
  currentTabButton.classList.add('price__filter-button--current');
  const id = currentTabButton.dataset.tab;
  tabsContentsLists.forEach((elem) => {
    elem.classList.remove('price__product-list--show');
    if(elem.dataset.id === id) {
      elem.classList.add('price__product-list--show');
    }
  });
};

tabsButtonsList.addEventListener('click', onTabButtonClick);
