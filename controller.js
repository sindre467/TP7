
oversettTekst = () =>
 {
    for (var i = 0; i < skriveFelt.length; i++) {
        var lett = skriveFelt[i].toUpperCase();
        // console.log(lett);
        var x = tekstArray.indexOf(lett);
        // console.log(x);
        oversettMorse += morseArray[x];
   
    }
 updateView();
}
 settInTekst = () => {
skriveFelt = document.getElementById('txtData').value; 
}