updateView();
function updateView()
{
    document.getElementById('appDiv').innerHTML=`
    <input id="tekst-m" type="text" oninput="settInTekst()">
   <br> <hr><button onclick="oversettTekst()"> 
    Oversett til morse
    </button>
    <p>${oversettMorse}</p>
    `;
}
