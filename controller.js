
oversettTekst = () =>
 {
    for (let i = 0; i < skriveFelt.length; i++) {
        var let = skriveFelt[i];
        var x = tekstArray.indexOf(let);
        var morseLet = morseArray[x];
        this.oversettMorse += morseLet, + '';  
    }
 updateView();
}
 settInTekst = () => {
ovsersettMorse = document.getElementById('tekst-m').value; 
}