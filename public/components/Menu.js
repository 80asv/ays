export default function Menu(){
    const $menu = document.createElement('nav');

    $menu.classList.add('menu');
    $menu.innerHTML = `
        <div class="items">
            <a href="#/" class="item"><i class="fa-solid fa-house color"></i></a>
            <a href="#/recents" class="item"><i class="fa-solid fa-clock-rotate-left color"></i></a>
            <a href="#collaborators" class="item"><i class="fa-solid fa-users color"></i></a>            
            <a href="#about" class="item"><i class="fa-solid fa-book color"></i></a>
        </div>
    `;
    return $menu;
}