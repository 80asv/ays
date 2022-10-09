import App from './App.js';
import validationForm from './helpers/validation-form.js';

document.addEventListener('DOMContentLoaded', () => {
    App();
    validationForm();
});

window.addEventListener('hashchange', e =>{
    App();
});

