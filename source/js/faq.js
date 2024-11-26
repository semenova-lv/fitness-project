import { updateAccordeon } from './accordeon';

const tabsButtonsList = document.querySelector('.faq__tab-navigation');
const tabsContentLists = document.querySelectorAll('.faq__list');

const onTabButtonClick = (evt) => {
  const currentTabButton = evt.target.closest('.faq__tab-button');
  if(!currentTabButton) {
    return;
  }
  document.querySelector('.faq__tab-button--active').classList.remove('faq__tab-button--active');
  currentTabButton.classList.add('faq__tab-button--active');
  const id = currentTabButton.dataset.tab;
  tabsContentLists.forEach((elem) => {
    elem.classList.remove('faq__list--show');
    if(elem.dataset.id === id) {
      elem.classList.add('faq__list--show');
      updateAccordeon(elem);
    }
  });
};

tabsButtonsList.addEventListener('click', onTabButtonClick);
