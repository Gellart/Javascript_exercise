/*

// **Esercizio 1**

// Scrivi una funzione che accetti come parametri in ingresso:

// - 2 array di 5 elementi interi casuali compresi tra 1 e 10,
// - il tipo di operazione aritmetica da effettuare tra una delle seguenti:
//     - addizione
//     - sottrazione
//     - moltiplicazione
//     - divisione

// Esegui il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

// - Esempio:
//     - Input: a= [3, 7, 2, 5, 8], b= [9, 3, 1, 4, 7], operazione = "addizione”
//     - Output: c = [12, 10, 3, 9, 15]

// *Es:*

// `function calculate(array1, array2, “operazione”);`


// varieables with array
let userOperation = prompt( `what type of mathematical operation you wanna do??` );
let firstArray = [1, 2, 3, 4, 5];
let secondArray = [6, 7, 8, 9, 10];


// function that calculate 
const calculate = ( array1, array2, operation ) => {
    // variable that contain an empty array
    let result = []

    // condition for each operation
    if ( operation == `addition` ) {
        // cycle of the array
        for (let i = 0; i < array1.length; i++) {
            // the variable of the operation
            let addition = array1[i] + array2[i];
            // push the result of the addition on the empty array
            result.push(addition)
        }

    } else if( operation == `subtraction` ){
        // cycle of the array
        for (let i = 0; i < array1.length; i++) {
            // variable of the operation
            let subtraction = array1[i] - array2[i];
            // push the result of the subtraction on the empty array
            result.push(subtraction);
            
        }

    } else if( operation == `multiplication` ){
        // cycle of the array
        for (let i = 0; i < array1.length; i++) {
            // variable of the operation
            let multiplication = array1[i] * array2[i];
            // push the result of the operation on the empty array
            result.push(multiplication);
        }
    } else if( operation == `division` ){
        // cycle of the array
        for (let i = 0; i < array1.length; i++) {
            // variable of the operation
            let division = array1[i] / array2[i];
            // push the result on the empty array
            result.push(division);
            
        }
    } else {
        alert( `sorry I don't understand` );
    }

    return result;

}

let finalResult = calculate( firstArray, secondArray, userOperation );
console.log( finalResult );

*/


/*

// **Esercizio 2**

// Dato un array **x** e un valore **y**. Tutto ciò che dovete fare, tramite la funzione, è verificare se l'array fornito contiene il valore.
// L'array può contenere numeri o stringhe. Y può essere uno dei due.

// *Es:*
// `check([66, 101], 66) // true
// check(['what', 'a', 'great', 'kata'], 'kat') // false`

// variable that contain the array
let array1 = [1 , 2, 55, `food`];

// constant that contain a function
const checkArray = (array) => {
    // variable
    let check;

    // condition: if the array includes the number or string, give me a alert 
    if ( array.includes( `food` ) ) {
        for (let i = 0; i < array.length; i++) {
            
            alert (`the value is present on the array`); 
            return;
        }
    } else{
        alert( `the value is not present on the array` )
    }

}

const finalCheck = checkArray( array1 );
console.log( finalCheck );

*/



/*

// **Esercizio 3**

// Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri positivi.
// Nota: se non c'è nulla da sommare, la somma è predefinita a 0.

// *Es:*

// `sumPositives([1,-4,7,12]) ---> 1 + 7 + 12 = 20
// sumPositives([-1,-4,-7,-12]) ---> = 0`


// variable that contain the array
let array1 = [ 22, 99, 69, 44, 2, 5, 78];

// constant that contain a function
const calculate = ( array ) => {
    // variable for the sum
    let sum = 0;

    // cycle the array
    for (let i = 0; i < array.length; i++) {
        
        sum += array[i]
        
    }

    return sum
}

const result = calculate( array1 );
console.log( result );

*/



/*

// **Esercizio 4**

// Dato un array di prodotti:

// - `[”Smartphone”, “Auricolari Bluetooth”, “Motorino”, “Auto”, “T-shirt”, “Felpa con cappuccio”, “Nano da giardino”, "Videogioco Super Nintendo"]`
// - Tramite un prompt che chieda all’utente di cercare il prodotto in archivio:
//     - se il prodotto è stato trovato fare un **alert** del prodotto trovato
//     - in caso in cui il prodotto non sia stato trovato fare un **alert** adeguato, e far ripetere la ricerca facendo ripartire il prompt. (BONUS)
//     - tenere presente il *caseSensitive*, quindi far si che che non ci sia differenza tra maiuscole e minuscole.

// TIP: Fare una funzione `find()` che accetti come parametri in ingresso i prodotti.

// Es:

// `function find(prodotti) { … }`

// variable with array products
let arrayProducts = [`Smartphone`, `Auricolari Bluetooth`, `Motorino`, `Auto`, `T-shirt`, `Felpa con cappuccio`, `Nano da giardino`, "Videogioco Super Nintendo"];
let userInput = input();


// function for the user iput by the prompt
function input() {
    let input = prompt(`write the product that you wanna find!!`);
    return input;
}

const findProduct = (array, product) => {
    // if the user input is present in the array, return right or wrong if is not
    if (array.includes(product)) {
        // cycle of the array
        for (let i = 0; i < array.length; i++) {
            alert(`Poduct find`);
            return;
        }
    } else {
        // if the producis not find , return a message error and a new prompt for a new search
        alert(`Sorry but the product is not found`);
        product = input();
        // if the user input is present in the array, return right or wrong if is not
        if (array.includes(product)) {
            // cycle of the array
            for (let i = 0; i < array.length; i++) {
                alert(`Poduct find`);
                return;
            }
        } else {
            alert(`Sorry but the product is not found`);
        }
    }

}

const result = findProduct(arrayProducts, userInput);
console.log(result);

*/





/*

// **Esercizio 5**

// La nostra squadra di calcio ha concluso il campionato. Il risultato di ogni partita ha l'aspetto di "x:y". I risultati di tutte le partite sono registrati nell’array.
// Esempio :
// `['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']`
// Scrivere una funzione che prenda quest’array e conti i punti della nostra squadra nel campionato.
// Regole per il conteggio dei punti per ogni partita:
// se x > y: 3 punti
// se x < y: 0 punti
// se x = y: 1 punto

// Es:
// `calculatePoints(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) ---> 30
// calculatePoints(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) ---> 10
// calculatePoints(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) ---> 0
// calculatePoints(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) ---> 15`


// variables
let points = ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'];

// function that calculate the points
const calculatePoints = ( list ) => {
    // variable for count
    let count = 0;
    // cycle the array
    for (let i = 0; i < list.length; i++) {
        // divide the element into 2 part and convert in an array
        let data = list[i].split(":");
        // let's compare the data to understand wich is the higher
        if (data[0] > data[1]) {
            count += 1;
        }
    }

    return `the score is ${count}`
}

const result = calculatePoints( points );
console.log( result );

*/