export default function Menu(){
    const $menu = document.createElement('nav');

    $menu.classList.add('menu');
    $menu.innerHTML = `
        <a href="#/">Recents</a>
        <span>-</span>
        <a href="#/search">collaborators</a>
        <span>-</span>
        <a href="#/contacto">About this app</a>
    `
    return $menu;
}