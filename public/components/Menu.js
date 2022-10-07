export default function Menu(){
    const $menu = document.createElement('nav');

    $menu.classList.add('menu');
    $menu.innerHTML = `
        <div class="items">
            <a href="#/" class="item"><i class="fa-solid fa-clock-rotate-left"></i></a>
            <a href="#/search" class="item"><i class="fa-solid fa-users"></i></a>            
            <a href="#/contacto" class="item"><i class="fa-solid fa-book"></i></a>
        </div>
    `
    return $menu;
}