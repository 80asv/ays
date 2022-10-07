
import { sendQuestion } from "../helpers/send-question.js";
import Form from "./Form.js";

export default function Main(){
    const $mainContainer = document.createElement('div');
    const $main = document.createElement('main');
    $mainContainer.classList.add('container');
    $main.id = 'main';

    $mainContainer.innerHTML = `
        <h1>AYS</h1>
        <h3>An application ready to choose for you</h3>
        <p>Choose an adverb and then write the question<br>you want AYS to help you solve</p>
    `;

    $mainContainer.appendChild(Form());
    $main.appendChild($mainContainer);

    setTimeout(() => sendQuestion(), 100);

    return $main;
}