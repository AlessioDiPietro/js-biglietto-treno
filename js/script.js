console.log("prova generale")

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).



// richeista km
var kmDaFare = parseFloat(prompt("Prego inserire i KM in Totale :")) ;
console.log("Km inseriti:", kmDaFare );


// richeista età
var anniUtente = parseInt(prompt("Prego inserire la propria età :")) ;
console.log("anni inseriti:", anniUtente );


// tariffa base
var prezzoBasic = kmDaFare * 0.21;
document.getElementById("tariffaBase").innerHTML = "Costo totale del viaggio : " +  prezzoBasic + "€";


// sconto young
var scontoUnder = prezzoBasic * 0.2;

// sconto over
var scontoOver = prezzoBasic * 0.4;



// sconto applicazione
var prezzoUltimo;
document.getElementById("prezzoUltimo").innerHTML = "PREZZO FINALE : " + prezzoBasic + "€";

if (anniUtente < 18) {
    prezzoUltimo = prezzoBasic - scontoUnder;
    document.getElementById("prezzoUltimo").innerHTML = "PREZZO FINALE SCONTO-UNDER18 : " + prezzoUltimo + "€";
} else if (anniUtente >= 65) {
    prezzoUltimo = prezzoBasic - scontoOver;
    document.getElementById("prezzoUltimo").innerHTML = "PREZZO FINALE SCONTO-OVER65 : " + prezzoUltimo + "€";
}
