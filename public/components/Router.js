import Home from "./Home.js";
import Recents from "./Recents.js";

export default function Router(){
    let { hash } = location;
    const $root = document.getElementById('root');
    const $main = document.getElementById('main');
    const $footer = document.getElementById('footer');
    const $brush = document.querySelector('.color-changer i');
    const $mainContainer = document.querySelector('.container');

    if(!hash || hash === "#/"){
        $main.appendChild(Home());
    } else if (hash.includes("#/recents")) {
        $main.appendChild(Recents());
        $root.removeChild($footer);
        $brush.style.color = "var(--main-color)";
    }
}