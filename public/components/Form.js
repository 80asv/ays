import Loader from "./Loader.js";

export default function Form(){
    const $form = document.createElement('form');
    const $message = document.createElement('p');


    $form.id = 'form';
    $form.classList.add('form');

    $message.classList.add('message-form');
    $message.style.display = 'none';
    $message.innerHTML = 'We are processing your question...';

    $form.innerHTML = `
        <div class="form-container">
            <div class="container-inputs">
                <input type="text" class="phrase" name="phrase" id="phrase" placeholder="Type your phrase" autocomplete="off" required>
            </div>
            <input type="submit" class="btn-form" name="btn_submit" id="btn-submit" value="Send my question" required>
        </div>
    `;

    $form.appendChild($message);
    $form.appendChild(Loader());

    return $form;
}