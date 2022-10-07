export default function Cards(){
    
    const $cards = document.createElement('div');
    let html = "";
    arr.forEach(el => {
        html += `
            <div class="card-container">
                <h2 class="card-question">${el.complement} ${el.phrase}</h2>
                <p class="card-phrase">${el.response}</p>
            </div>
        `;    
    });

    return $cards;
}