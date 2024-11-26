const juriList = document.querySelector('.juri__list');

juriList.addEventListener('click', (evt) => {
  const currentCardPerson = evt.target.closest('.juri-person');
  if(currentCardPerson) {
    currentCardPerson.focus();
  } else {
    currentCardPerson.blur();
  }
});
