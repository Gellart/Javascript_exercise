/*

// ** Esercizio 1 **

//     Scrivi un programma che dati i seguenti numeri: `10, 20, 35, 50, 70` restituisca 
    //    in output la somma e la media.

let num1 = 10;
let num2 = 20;
let num3 = 35;
let num4 = 50;
let num5 = 70;

let sum = num1 + num2 + num3 + num4 + num5;
let average = sum/5;

console.log( `Sum: ${sum}` );
console.log( `Average: ${average}` );

*/




/*

// **Esercizio 2**

// Riscrivi un programma come l’esercizio precedente ma che utilizzi 5 
// numeri inseriti manualmente dall’utente tramite il comando prompt.

let num1 = parseInt(prompt(`write a number:`));
let num2 = parseInt(prompt(`write a number:`));
let num3 = parseInt(prompt(`write a number:`));
let num4 = parseInt(prompt(`write a number:`));
let num5 = parseInt(prompt(`write a number:`));

let sum = num1 + num2 + num3 + num4 + num5;
let average = sum/5;

console.log( sum );
console.log( average );

*/




/*

// **Esercizio 3**

// creare 4 variabili temperature con valore numerico: **`tempBari**, **tempNaples**, **tempRome**, **tempMilan**`.
// stampare a console: *`la temperatura più alta è ...`*
// stampare a console: *`la temperatura più bassa è ...`*

let tempBari = 35;
let tempNaples = 30;
let tempRome = 28;
let tempMilan = 25;

console.log(`The higher temperature is ` +  Math.max( tempBari , tempNaples , tempRome , tempMilan )  );
console.log(`The lower temperature is ` + Math.min( tempBari , tempNaples , tempRome , tempMilan ))

*/




/*

// **Esercizio 4**

// Scrivi un programma che dato l'anno corrente e un anno di nascita determini:

// - l'età della persona
// - quanti anni sono necessari per raggiungere i 100
// - restituisca in output (`console.log` o `alert`) entrambi i risultati.

let currentYear = 2023;
let userYearBorn = parseInt( prompt( 'Write the year of your born' ) );

let userAge = currentYear - userYearBorn;
let roadTo100Years = 100 - userAge;


alert( ` You have ${userAge} years old` );
alert( `You need ${roadTo100Years} for the 100 years` );

console.log( ` You have ${userAge} years old` );
console.log( `You need ${roadTo100Years} to achieve the 100 years` );

*/


/* 

// **Esercizio 5**

// Tramite il prompt memorizzare il nome di “utente 1” e di “utente 2” in 
// delle rispettive variabili. Creare una variabile per il risultato finale 
// che contenga il check sulla condizione se il nome dell’utente 1 è uguale 
// al nome dell’utente 2 e restituisca in **`console.log`** un booleano (`true/false`).

let name_user1 = prompt('Write your name:');
let name_user2 = prompt('Write your name:');

if (name_user1 == name_user2) {
    console.log( true );
} else {
    console.log( false );
}

*/






/*

// **Esercizio 7 - BONUS**

// Scrivi un programma che dato:

// - Un numero totale di gatti
// - Il numero dei gatti presenti in ogni fila

// Restituisca in output:

// - Il numero totale delle file
// - il numero di gatti mancanti per completare una nuova fila


let total_cats = parseInt( prompt( `Write how many cats there are:` ));
let cats_for_column =  4;

let cats_column =  Math.round(total_cats / cats_for_column);
let cats_miss_for_column = Math.round(cats_column - cats_for_column);

console.log( `Total cats: ${total_cats}` + `\n` + `Cats for column: ${cats_for_column}` + `\n` + `Total column: ${cats_column}` + `\n` + `Cats for another column: ${cats_miss_for_column}` );

*/




/*

// **Esercizio 8 - BONUS**

// Scrivi un programma che generi un numero intero randomico da 1 a 6.

let number = Math.floor( Math.random() *6 );

alert( number );

*/