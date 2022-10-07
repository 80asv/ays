//import formResponse from "../helpers/form-response.js";
import Cards from "./Card.js";
import { recentPhrases } from "../helpers/form-response.js";

export default function Recents(){
    const $recents = document.createElement('div');
    let html = "";
    $recents.id = 'recents';
    $recents.classList.add('recents');
    $recents.classList.add('container');

    if(recentPhrases.length === 0){
        html = `<p class="empty-card">Aqui apareceran las respuesta que AYS ha generado por ti</p>`;
    }

    recentPhrases.forEach(el => {
        html += `
            <div class="card-container">
                <h2 class="card-question">${el.complement} ${el.phrase}</h2>
                <p class="card-phrase">${el.response}</p>
            </div>
            <br>
        `;    
    });

    $recents.innerHTML = html;

    return $recents;
}