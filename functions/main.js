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