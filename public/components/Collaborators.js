import Collaborator from "./Collaborator.js";

export default function Collaborators(){
    const $collabs = document.createElement('div');
    const $containerCollabs = document.createElement('div');
    $containerCollabs.classList.add('container-collabs');

    $collabs.classList.add('collaborators');
    $collabs.innerHTML = `
        <h2>Collaborators</h2>
    `;

    $collabs.appendChild($containerCollabs);
    $containerCollabs.appendChild(Collaborator("andresSn.png", "Andres Sanabria"));
    $containerCollabs.appendChild(Collaborator("juanB.png", "Juan Bernal"));
    $containerCollabs.appendChild(Collaborator("lauraG.png", "Laura Goyes"));
    $containerCollabs.appendChild(Collaborator("andresR.png", "Andres Rodriguez"));
    return $collabs;
}