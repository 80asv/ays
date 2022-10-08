export default function ColorChanger(){
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const $rootStyles = document.documentElement.style;
    
    const $brush = document.createElement('div');
    
    $brush.classList.add('color-changer');
    $brush.innerHTML = `<i class="fa-solid fa-brush"></i>`;

    $brush.addEventListener('click', e => {
        let hexColor = "#";
        for(let i = 0; i<6; i++){
            hexColor += hex[getRamdomNumber()];
        }
        $rootStyles.setProperty('--main-color', hexColor)
    })

    function getRamdomNumber(){
        return Math.floor(Math.random() * hex.length);
    }

    return $brush;
}

