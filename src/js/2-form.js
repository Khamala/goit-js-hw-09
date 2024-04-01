const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;

form.addEventListener('input', handlerEmailAndMessage);

function handlerEmailAndMessage() {

  const objectForm = {
    email: email.value.trim(),
    message: textarea.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(objectForm));
};

function updateFormContent() {

    const formUpdate = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    
    if (formUpdate.email) {
        email.value = formUpdate.email;
    } else {
        email.value = "";
    }

    if (formUpdate.message) {
        textarea.value = formUpdate.message
    } else {
        textarea.value = "";
    }
}

updateFormContent();


form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
