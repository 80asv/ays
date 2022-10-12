//const adverbs = ['maybe', 'perhaps', 'I believe that', 'maybe', 'definitely'];
// const phraseBody = ["it's a good option", "it's a big mistake", 
//                     "it is not a good option", "it's crazy!", 
//                    'takes you to the right path', "it can give you bad luck", "it's a blunder", 'will bring luck in your life'];

const answers = [
    // sin concatenacion
    "💀",
    "AHAHAHAHAHHA no",
    "I mean, why would you even do that?",
    "First of all let me talk to an expert",
    "😏 It could be a good idea ",
    "Why did that thought cross your mind?",
    "Are you seriously asking me that?",
    "you should do this right now!",
    "it's crazy!",
    // Con concatenacion
    "I don't suggest you",
    "Hopefully you won't",
    "I hope you're not going to",
    "🤔 I think you have not been given permission to",
    "First of all, I would never suggest you",
    "it's a great idea that you",
    "😥 It could hurt you",
    "👀 It is not the question that I expected, but it seems correct to me that you"

]


export const recentPhrases = [];

export default function formResponse(){
    
    let response = "";
    const $form = document.getElementById('form');
    let { btn_submit } = $form;
    const $containerForm = document.querySelector('.form-container');
    const $loader = document.querySelector('.loader');
    const $message = document.querySelector('.message-form');
    
    
    
    // recolleccion de los datos
    //response = `${adverbs[getRamdomNumber(adverbs)]} ${phrase.value} ${phraseBody[getRamdomNumber(phraseBody)]}`;
    const dataPhrase = {
        phrase: phrase.value,
        response: response
    }
    recentPhrases.push(dataPhrase);
    
    $loader.style.display = 'block';
    $message.style.display = 'block';
    btn_submit.disabled = true;
    $containerForm.style.display = 'none';

    

    //* show info in html
    const $response = document.createElement('div');
    $response.classList.add('response');
    //
    $response.innerHTML = `
        <h2>${dataPhrase.phrase}</h2>
        <p><i>${dataPhrase.response}</i></p>
        <button id="btn-back" class="btn-back">Ask again</button>
    `;
    
    $response.style.display = 'none'
    $form.appendChild($response);
    
    setTimeout(() => {  
        $loader.style.display = 'none';
        $message.style.display = 'none';
        $response.style.display = 'flex'
        btn_submit.disabled = false;
    }, 4500);
    
    document.addEventListener('click', e => {
        if(e.target.matches('#btn-back')){
            $form.removeChild($response);
            $containerForm.style.display = 'flex';
        }
    });

    console.log(recentPhrases);
}

function getRamdomNumber(arr){
    return Math.floor(Math.random() * arr.length);
}