const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input')
const textarea = form.querySelector('textarea'); 

// console.log(form);
// console.log(email);
// console.log(textarea);

form.addEventListener("input", handlerForm);
form.addEventListener("submit", handlerSubmitForm);

function handlerForm() {
    const objectDateForm = {
        email: email.value.trim(),
        message: textarea.value.trim(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objectDateForm));
}

// Проверяю состояние хранилища при загрузке страницы

function updateFormContent() {
    const formUpdate = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    
    email.value = formUpdate.email ?? '';
    textarea.value = formUpdate.message ?? '';
}

updateFormContent();

function handlerSubmitForm(event) {
    event.preventDefault();
    const formSubmit = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    // проверяю оба ли поля заполнены, если да, то консолю
    if (formSubmit.email && formSubmit.message) {
    console.log(formSubmit);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }
}
