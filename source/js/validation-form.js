const ErrorMessage = {
  ISREQUIRED: 'Поле обязательно для заполнения',
  ERROR_NAME: 'Поле может содержать только буквы и пробелы',
  ERROR_PHONE: 'Поле не должно содержать буквы'
};

const formAppointment = document.querySelector('.form-appointment form');
const fieldName = formAppointment.querySelector('#name');
const fieldPhone = formAppointment.querySelector('#phone');

formAppointment.addEventListener('submit', (evt) => {
  let isValid = true;

  function validateField (input, error) {
    const valueInput = input.value.trim();
    const errorElement = formAppointment.querySelector(`#${input.id}-error`);
    if (!valueInput || !input.checkValidity()) {
      isValid = false;
      input.classList.add('field-group__input--invalid');
    }
    if(!valueInput) {
      errorElement.textContent = ErrorMessage.ISREQUIRED;
    } else if(input.validity.patternMismatch) {
      errorElement.textContent = error;
    } else {
      errorElement.textContent = '';
      input.classList.remove('field-group__input--invalid');
    }
  }

  validateField(fieldName, ErrorMessage.ERROR_NAME);
  validateField(fieldPhone, ErrorMessage.ERROR_PHONE);

  if (!isValid) {
    evt.preventDefault();
  }
});
