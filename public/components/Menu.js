export default function Menu(){
    const $menu = document.createElement('nav');

    $menu.classList.add('menu');
    $menu.innerHTML = `
        <div class="items">
            <a href="#/" class="item"><i class="fa-solid fa-house"></i></a>
            <a href="#/recents" class="item"><i class="fa-solid fa-clock-rotate-left"></i></a>
            <a href="#collaborators" class="item"><i class="fa-solid fa-users"></i></a>            
            <a href="#about" class="item"><i class="fa-solid fa-book"></i></a>
        </div>
    `;
    return $menu;
}