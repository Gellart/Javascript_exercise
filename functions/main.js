/*

// **Esercizio 1**

// Scrivere una funzione che accetti come parametro in ingresso "num" 
// e che controlli se questo parametro sia un numero positivo, negativo, o zero.




// function for check if the number is positive - negative or 0
function checkNumber( number ){

    let numberAnswer;

    if ( number > 0 ) {

        numberAnswer = `the number is positive`;

    } else if( number < 0 ){

        numberAnswer = ` the number is negative`;

    } else if( number == 0 ){

        numberAnswer = ` the number is 0`;

    }

    return numberAnswer
}


let typeNumber = checkNumber(-20);
console.log( typeNumber );

*/



/*

// **Esercizio 2**

// Scrivi una funzione che prenda in input due argomenti e restituisca TRUE se i 
// due argomenti sono IDENTICI, FALSE altrimenti.

// - Esempi:
// - Input: n = 2, m = 3
// - Output: FALSE
// - Input: n = 2, m = '2'
// - Output: FALSE
// - Input: n = 2, m = 2
// - Output: TRUE

// the user write the value
let input_1 = parseInt( prompt( `write a number` ) );
let input_2 = parseInt( prompt( `write a number` ) );

// this function check if the number are identical or not
function checkNumbers( num_1, num_2 ){

    let output;

    // conditional
    if (num_1 == num_2) {
        // if the numbers are identical , return true
        output = alert( `the numbers are identical ?`+ '\n' + true );
    } else{
        // if the numbers are several, return false
        output = alert( `the numbers are still identical ?` + '\n' + false );
    }

    // return the variable output, which contain the outputs
    return output;

}

// variable that contain the function checknumbers
let finalOutput = checkNumbers( input_1, input_2 );

*/



/*

// **Esercizio 3**

// Scrivi una funzione che accetti come parametri di ingresso due stringhe. 
// Il primo parametro è la “frase”, il secondo la “lettera” da controllare quante volte 
// è presente nelle frase. In output deve restituire il conteggio finale.

// Il primo parametro relativo alla frase deve essere inserito tramite prompt.

// variables 
let textFromUser = prompt( `write something` );
let characterFromUser = prompt( `write the character that you wanna count` );

// function that count the character that we want
function countCharacter( text,  character ){

    let count = 0;

    // cycle of the text write by the user
    for (let i = 0; i < text.length; i++) {
        // switch case for control the condition
        switch (text.charAt(i)) {
            case character:
                count++;
        }
        
    }

    return count;

}

// variable that contain the call of the function
let countResult = countCharacter( textFromUser, characterFromUser );
console.log( ` there are  ${countResult} character of ${characterFromUser}` );

*/


/*

// **Esercizio 4**

// Scrivi una funzione chiamata **calculateArea** che calcoli l'area di un cerchio, 
// dato il suo raggio. La funzione dovrebbe accettare un parametro **radius**, 
// che rappresenta il raggio del cerchio. 
// Inoltre, la funzione dovrebbe accettare un parametro opzionale **precision**, 
// che rappresenta il numero di cifre decimali dopo la virgola da arrotondare.
// La funzione dovrebbe restituire l'area del cerchio calcolata, arrotondata al numero 
// di cifre decimali specificato dal parametro **precision**.
// TIPS

Math.PI // è un dato statico che ci mette a disposizione Javascript del valore di circa 3.14159
Math.pow() // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

// variables
let userRadius = parseInt( prompt( `write a number of radius` ) );
let userPrecision = parseInt( prompt( `write the number that you want after the comma` ) );

// function that calculate the area of the circle
function calculateArea( radius , precision = 3 ){

    // calculate the circle area
    let circleArea = Math.PI * Math.pow( radius, 2 );

    // too many numbers after the comme, let's fix that
    let result = circleArea.toFixed( precision );

    return `the area of the circle is ${result}`;

}

// variable that contain the function 
let result = calculateArea( userRadius, userPrecision );
console.log( result );

*/




// **Esercizio 5**

// Calcola il voto del giocatore a fantacalcio.

// Scrivi una funzione che prende in input i seguenti parametri numerici:

// - baseVoto
// - golFatti
// - assistEffettuati
// - autogol
// - ammonizione
// - espulsione

// Calcola il voto finale di un giocatore tenendo conto delle seguenti regole:

// - **+ 3 punti**: per ogni gol fatto
// - **+ 1 punto**: per ogni assist effettuato
// - - **2 punti**: per ogni autogol fatto
// - - **0.5 punti**: per ammonizione
// - - **1 punto**: per espulsione

// Esempio:

// - Gino Van Der Gini:
//     - baseVoto: 8
//     - golFatti: 2
//     - assistEffettuati: 1
//     - autogol: 0
//     - ammonizione: true (boolean)
//     - espulsione: false (boolean)

// - Risultato: 14.5





// **Esercizio 6 - BONUS**

// Sulla traccia dell’*esercizio 5 dell’Esercitazione 3*, incapsulare 
// tutto in una funzione che accetti come parametro in ingresso il numero 
// di volte che vengono lanciati i dadi.





// **Esercizio 7 - BONUS**

// Minigame

// Il giocatore dovrà indovinare se il numero generato casualmente è pari o dispari. 
// Il gioco fornirà il risultato corretto e mostrerà se il giocatore ha indovinato o meno. 
// Usando le funzioni.
// TIP
// per sapere se il numero generato è pari: numeroCasuale % 2 === 0;

// usare prompt("Inserisci 'Pari' o 'Dispari':"); come richiesta all'utente






// **Esercizio 8 - BONUS**

// Creiamo la nostra console stilosa!!!

// - (hint: [https://www.codingem.com/javascript-consolecolors/](https://www.codingem.com/javascript-console-colors/))

// Scrivi un programma chiamato “myLog” che ci permetta di loggare dei messaggi di testo con uno stile dinamico in base alla categoria specificata.

// Le categorie disponibili dovranno essere le seguenti con le relative caratteristiche:

// - **titolo**:
    
//     background-color: blue;
    
//     font-size: 30px;
    
//     color: white
    
// - **sottotitolo**:
    
//     font-size: 20px;
    
//     color: blue;
    
// - **highlight**:
    
//     background-color: orange;
    
// - **disastro**:
    
//     background-color: red;
    
//     font-size: 50px;
    
//     color: white