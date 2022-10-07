import Form from "./Form.js";
import { sendQuestion } from "../helpers/send-question.js";

export default function Home(){
    const $home = document.createElement('div');
    $home.classList.add('container');

    $home.innerHTML = `
        <h1>AYS</h1>
        <h3>An application ready to choose for you</h3>
        <p>Choose an adverb and then write the question<br>you want AYS to help you solve</p>
    `;

    $home.appendChild(Form());
    setTimeout(() => sendQuestion(), 100);

    return $home;
}