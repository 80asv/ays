import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";


export default function App(){
    const $root = document.getElementById('root');
    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Footer());
}