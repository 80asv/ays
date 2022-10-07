//import formResponse from "../helpers/form-response.js";
import Cards from "./Card.js";

export default function Recents(){
    const $recents = document.createElement('div')
    $recents.id = 'recents';
    $recents.classList.add('recents');
    $recents.classList.add('container');

    $recents.innerHTML = `
        <p>Aqui aparaceran tus recientes</p>
    `;

    return $recents;
}