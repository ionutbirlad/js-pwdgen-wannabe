// Versione ORIGINALE

// var nome;
// var cognome;
// var colore;
// nome = prompt("Inserisci il tuo nome");
// cognome = prompt("Inserisci il tuo cognome");
// colore = prompt("Inserisci il tuo colore preferito");
// // console.log(nome);
// // console.log(cognome);
// // console.log(colore);
// document.getElementById("pass").innerHTML = " " + nome + cognome + colore + "20";

// Fine versione ORIGINALE

// Versione con la DATA CORRENTE

var nome = prompt("Inserisci il tuo nome");
var cognome = prompt("Inserisci il tuo cognome");
var colore = prompt("Inserisci il tuo colore preferito");
var data = new Date()
// console.log(data);
var annoCorrente = data.getFullYear()
// console.log(annoCorrente);
document.getElementById('pass').innerHTML = " " + nome + ";" + cognome + ";" + colore + ";" + annoCorrente;

// fine versione con la DATA CORRENTE
