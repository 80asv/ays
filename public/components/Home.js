import Form from "./Form.js";
import { sendQuestion } from "../helpers/send-question.js";

export default function Home(){
    const $home = document.createElement('div');
    $home.classList.add('container', 'section');
    $home.dataset.scroll = 'scroll';

    $home.innerHTML = `
        <h1 class="color">AYS</h1>
        <h3>An application ready to choose for you</h3>
        <p>Enter a question in the text field so<br>that AYS can help you make a decision</p>
    `;

    $home.appendChild(Form());
    setTimeout(() => sendQuestion(), 100);

    return $home;
}