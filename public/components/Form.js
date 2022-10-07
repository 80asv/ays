import Loader from "./Loader.js";

export default function Form(){
    const $form = document.createElement('form');
    const $message = document.createElement('p');


    $form.id = 'form';
    $form.classList.add('form');

    $message.classList.add('message-form');
    $message.style.display = 'none';
    $message.innerHTML = 'Estamos procesando tu pregunta...';

    $form.innerHTML = `
        <div class="form-container">
            <select name="complement" id="complement">
                <option value=""> - - - </option>
                <option value="Should"> Should </option>
                <option value="Could"> Could </option>
                <option value="Maybe"> Maybe </option>
                <option value="What if"> What if </option>
            </select>
            <input type="text" name="phrase" id="phrase" placeholder="Complete your phrase" required>
            <input type="submit" name="btn_submit" id="btn-submit" value="Send my question" required>
        </div>
    `;

    $form.appendChild($message);
    $form.appendChild(Loader());

    return $form;
}