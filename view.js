updateView();
function updateView()
{
    document.getElementById('appDiv').innerHTML 
    +=`
    <input oninput="settInTekst()" id="tekst-m" type="text" >
    <br> <hr>
    <button onclick="oversettTekst()"> 
    Oversett til morse
    </button>
    <p>${oversettMorse}</p>
    `;
}
