function getStorage() {
    /*let storageName = "";*/ //stringa vuota
    //if (document.getElementById("local").checked == true) {//controllo se l elemento contrassegnato con id local sia stato spuntato
    //    storageName = "localStorage";
    //} else {
    //    storageName = "sessionStorage";
    //}
    
    let storageName = (document.getElementById("local").checked == true) ? "localStorage" : "sessionStorage";

    if (storageName in window && window[storageName] != null) { //se nella pagina c'e un localstorage && session storage
        return window[storageName];
    } else {
        return nulla;
    }
}



function save() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value; //il testo che metto nell input lo metto nella key
    let value = document.getElementById("storageValue").value; //il testo che metto nell input lo metto nel value
    storage.setItem(key, value);
}

function readAll() {
    let storage = getStorage();
    let elements = "";
    for (let i = 0; i < storage.length; i++) { //SCORRO tutti gli elementi di storage
        let key = storage.key(i); //mi recupera la chiave in posizione i e lo metto in key
        let value = storage.getItem(key); //mi recupera i valori
        let item = "chiave:" + key + " valore: " + value + "\n"; //stringa dove ho chiave e valore
        elements += item;
    }
    alert(elements);
}

function deleteAll() {
    let storage = getStorage();
    storage.clear();
}

function remove() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value; //prendo il testo preso dall elemnto storagekey
    storage.removeItem(key);
    document.getElementById("result").innerHTML = "Eliminato item con chiave " + key;
}

function getElemento() {
    let storage = getStorage();
    let key = document.getElementById("storageKey").value;
    let value= storage.getItem();
    document.getElementById("result").innerHTML = "Il valore con chiave " + key + " è " + value;

}