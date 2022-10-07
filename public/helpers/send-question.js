import formResponse from "./form-response.js";
import validationForm from "./validation-form.js";

export function sendQuestion(){
    const $form = document.getElementById('form');
    let { phrase, complement } = $form;

    phrase.addEventListener('keyup', validationForm);
    complement.addEventListener('change', validationForm);
    
    $form.addEventListener('submit', e => {
        formResponse();
        e.preventDefault();
    });
}


