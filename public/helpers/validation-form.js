export default function validationForm(){
    const $form = document.getElementById('form');
    let { phrase, complement, btn_submit } = $form;
    
    if(phrase.value === "" || complement.value === ""){
        btn_submit.disabled = true;
    } else {
        btn_submit.disabled = false;
    }
}