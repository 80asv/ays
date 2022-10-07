export default function Form(){
    const $form = document.createElement('form');

    $form.id = 'form';
    $form.classList.add('form');

    $form.innerHTML = `
        <select name="complement" id="complement">
            <option value=""> - - - </option>
            <option value="Should"> Should </option>
            <option value="Could"> Could </option>
            <option value="Maybe"> Maybe </option>
            <option value="What if"> What if </option>
        </select>
        <input type="text" name="phrase" id="phrase" placeholder="Complete your phrase" value="hola">
        <input type="submit" value="Send my question">
    `;

    return $form;
}