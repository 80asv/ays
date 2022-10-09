export default function Collaborator(img, name){
    const $collab = document.createElement('div');

    $collab.classList.add('collaborator');
    $collab.innerHTML = `
        <img src="./public/assets/icons/${img}" alt="${name}" class="img-collab">
        <p class="name-collab">${name}</p>
    `;

    return $collab;
}