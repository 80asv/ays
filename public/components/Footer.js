import Collaborators from "./Collaborators.js";
import About from "./About.js";

export default function Footer(){
    const $footer = document.createElement('footer');
    const $infoGroup = document.createElement('div');
    const $linkAuthor = document.createElement('div');

    $infoGroup.classList.add('group-info');
    $linkAuthor.classList.add('author');
    $footer.id = 'footer';
    $footer.classList.add('section');

    $infoGroup.innerHTML = `
        <p>Group W</p>
        <p>English III NRC 22461</p>
        <p>software development technology</p>
        <p>third semester</p>
    `;

    $linkAuthor.innerHTML = `
        <a href="https://github.com/80asv" target="_blank"><i class="fa-brands fa-github"></i></a>
    `

    $footer.appendChild(About());
    $footer.appendChild(Collaborators());
    $footer.appendChild($linkAuthor);
    $footer.appendChild($infoGroup);
    return $footer;
}