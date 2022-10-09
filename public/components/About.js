export default function About(){
    const $about = document.createElement('div');
    $about.classList.add('about');

    $about.innerHTML = `
        <h2>About this app</h2>
        <p>A.Y.S. it's an application that provides the user with the best option for a specific situation from gathered information about the users themselves.</p>
        <br>
        <p>AYS works by reading and analyzing the user's data through a Machine Learning model to compute the user's possibilities.</p>
        <br>
        <p>AYS helps people make better decisions in life by providing them the best options avalable. It can make people feel better about not making a bad decision. AYS is an easy to use app for anyone!</p>
    `;

    return $about;
}