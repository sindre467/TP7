
  updateView = () => {
    document.getElementById('appDiv').innerHTML 
     =`
    <input id="txtData" type="text" oninput="settInTekst()">
    <br> <hr>
    <button onclick="oversettTekst()"> 
    Oversett til morse
    </button>
    <p>${oversettMorse}</p>
    `;
   
} 
 updateView();
