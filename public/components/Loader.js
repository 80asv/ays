export default function Loader(){
    const $loader = document.createElement('img');

    $loader.src = 'public/assets/loader-dots.svg';
    $loader.alt = 'Cargando...';
    $loader.classList.add('loader');
    $loader.style.display = 'none';

    return $loader;
}
