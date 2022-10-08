export default function Footer(){
    const $footer = document.createElement('footer');
    //$footer.innerHTML = `Esto es el footer`;
    $footer.id = 'footer';
    $footer.classList.add('color');
    return $footer;
}