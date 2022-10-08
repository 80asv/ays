import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Router from "./components/Router.js";
import ColorChanger from "./components/ColorChanger.js";


export default function App(){
    const $root = document.getElementById('root');
    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Footer());
    $root.appendChild(ColorChanger());
    Router();
}