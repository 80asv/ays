const answers = [
    // sin concatenacion
    [
        "💀",
        "AHAHAHAHAHHA no",
        "I mean, why would you even do that?",
        "First of all let me talk to an expert",
        "😏 It could be a good idea ",
        "Why did that thought cross your mind?",
        "Are you seriously asking me that?",
        "you should do this right now!",
        "it's crazy!",
        "Oh no... 🥲",
        "Don't you realize it's a mistake?",
        "I'm sorry to tell you that... 😔",
        "What are you waiting for? 😎",
        "SIUUUUUUUUUUUUU",
        "Nope.",
        "don't go doing that 🤡"
    ],
    
    // Con concatenacion
    [
        "I don't suggest you",
        "Hopefully you won't",
        "I hope you're not going to",
        "🤔 I think you have not been given permission to",
        "First of all, I would never suggest you",
        "It's a great idea that you",
        "😥 It could hurt you",
        "👀 It is not the question that I expected, but it seems correct to me that you",
        "How bad could it be for you to",
        "I suggest you do something other than",
        "Think about it, it's a wonderful idea",
        "NOO!!!, YOU CAN NOOOOOOOT",
        "😉 obviously if you can",
        "it must be a joke that",
        "maybe it will bring you good luck"
    ]
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


    let answerModes = Math.round(Math.random());


    if(answerModes === 0){
        response = `${answers[0][getRamdomNumber(answers[0])]}`;
    } else {
        response = `${answers[1][getRamdomNumber(answers[1])]} ${phrase.value.toLowerCase()}`;
    }

    //response = `${answers[getRamdomNumber(answers)]}`;
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
}

function getRamdomNumber(arr){
    return Math.floor(Math.random() * arr.length);
}
