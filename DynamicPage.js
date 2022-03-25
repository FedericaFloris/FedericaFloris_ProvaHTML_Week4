function welcomeMessage() {
    alert("Benvenuto!");
}

function cambiaImmagine() {
    let immagine = document.getElementById("foto"); //prendo l elemento con quel id
    let srcImmagine = immagine.getAttribute("src"); //dall attributo immagine mi prendo src
    if (srcImmagine == "immagini/piscina.jpg") {
        immagine.setAttribute("src", "immagini/polonord.jpg"); //prende quello che ha preso e lo setta(scambia/sovrascrive) con questa nuova immagine
    } else {
        immagine.setAttribute("src", "immagini/piscina.jpg");
    }
}


function cambiaFont() {
    let paragrafi = document.getElementsByTagName("p"); //mi recupera ogni elemento del paragrafo
    for (let i = 0; i < paragrafi.length; i++) {
        paragrafi[i].style.fontFamily = "Arial"; // imposto lo style per tutti
        paragrafi[i].innerHTML += "<br /> <br />"; //prendo il testo(innerHtml) che c'è nell i-esimo paragrafo e li aggiungo due a capo
    }
}


function nascondi() {
    let tabella = document.getElementById("TabellaNomi");
    tabella.style.visibility = "hidden"; //se premo il pulsante mi nasconde la tabella
}

function scopre() {
    let tabella = document.getElementById("TabellaNomi");
    tabella.style.visibility = "visible"; //se premo il pulsante mi riappare la tabella
}

function cambiaTesto(){
    let celle = document.getElementsByTagName("td"); //oppure document.querySelectorAll
    for (let i = 0; i < celle.length; i++) {
        celle[i].innerText += "ni";
    }
}

function cambioSingolo() {
    let cella = document.querySelector("td"); //prende solo la prima cella
    cella.align = "center"; //lo centra nella cella il nome
}

function verificaCheck() {
    let checkBoxes = document.querySelectorAll("input.selection");  //tutti i seletori di tipo input di classe selection
    for (let i = 0; i < checkBoxes.length; i++) {
        console.log(checkBoxes[i].checked)  //sto controllando se l'utente spunta una delle caselle e ti stampa console vero e falso a seconda che sia spuntata o meno
    }
}
