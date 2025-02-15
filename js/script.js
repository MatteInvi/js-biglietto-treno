//Richiesta informazioni al cliente
const nKmStr = prompt("Inserisci il numero di chilometri da percorrere");
const etaStr = prompt("In inserisci la tua età");

//Elaborazione delle informazioni ricevute
const nKm = parseInt(nKmStr);
const eta = parseInt(etaStr);

if (isNaN(nKm) || isNaN(eta)) {
    alert("Inserire un valore numerico");
    location.reload();
} else {
    let ticketPrice;
    let ticketPriceReal;
    let discount;
    let finalPrice;
    let finalPriceReal;
    let message;
    ticketPrice = nKm * 0.21;

    if (eta <= 18) {
        discount = ticketPrice * 20 / 100;
    } else if (eta > 65) {
        discount = ticketPrice * 40 / 100;
    }
    else {
        discount = 0;
    }
    finalPrice = ticketPrice - discount;
    ticketPriceReal = ticketPrice.toFixed(2);
    finalPriceReal = finalPrice.toFixed(2);

    //Stampa messaggio a schermo
    message = `Il prezzo intero è ${ticketPriceReal}€ meno lo sconto di ${discount}€, il totale da pagare è ${finalPriceReal}€`;
    console.log(message);
};



