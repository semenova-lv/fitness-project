const tabsList = document.querySelectorAll('.faq__list');
const tabsContent = document.querySelector('.faq__tab-content');
const showTabContent = document.querySelector('.faq__list--show');
const accordeonsItems = document.querySelectorAll('.faq__item');

//первоначальная настройка, добавляем атрибуты
accordeonsItems.forEach((item, index) => {
  const buttonToggle = item.querySelector('.faq__button-toggle');
  const accordeonContent = item.querySelector('div');
  buttonToggle.setAttribute('aria-expanded', false);
  buttonToggle.setAttribute('data-accordeon', index);
  accordeonContent.setAttribute('data-id', index);
});

//значения по умолчанию
tabsList.forEach((list) => {
  const activeItem = list.querySelector('.faq__item');
  const activeButton = activeItem.querySelector('.faq__button-toggle');
  activeButton.setAttribute('aria-expanded', true);
  activeButton.classList.add('faq__button-toggle--open');
});

const updateAccordeon = (showTabsList) => {
  const listContent = showTabsList.querySelectorAll('.faq__item');
  listContent.forEach((item) => {
    const buttonToggle = item.querySelector('.faq__button-toggle');
    const currentContent = item.querySelector('div');
    const isExpanded = buttonToggle.getAttribute('aria-expanded') === 'true';
    if(isExpanded) {
      currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
    } else {
      currentContent.style.maxHeight = '0';
    }
  });
};

const onClickButtonToggle = (evt) => {
  const contentList = Array.from(tabsContent.querySelectorAll('div'));
  const currentButton = evt.target.closest('.faq__button-toggle');
  if(currentButton) {
    const isExpanded = currentButton.getAttribute('aria-expanded') === 'true';
    const id = currentButton.getAttribute('data-accordeon');
    const currentContent = contentList[contentList.findIndex((elem) => elem.dataset.id === id)];
    if (isExpanded) {
      currentButton.setAttribute('aria-expanded', 'false');
      currentButton.classList.remove('faq__button-toggle--open');
      currentContent.style.maxHeight = '0';
    } else {
      currentButton.setAttribute('aria-expanded', 'true');
      currentButton.classList.add('faq__button-toggle--open');
      currentContent.style.maxHeight = `${currentContent.scrollHeight}px`;
    }
  }
};

updateAccordeon(showTabContent);
tabsContent.addEventListener('click', onClickButtonToggle);

export {updateAccordeon};
