import Main from "../components/Main.js";

export function sendQuestion(){
    const $form = document.getElementById('form');
    const $recentPhrases = [];
    
    $form.addEventListener('submit', e => {
        e.preventDefault();
        let { phrase, complement } = $form;
        
        let savedPhrase = {
            "phrase": phrase.value,
            "complement": complement.value
        }

        $form.classList.add('hidden');

        $recentPhrases.push(savedPhrase);

        console.log($recentPhrases);

    })


}


