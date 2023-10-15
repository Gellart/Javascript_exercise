// **Esercizio 1**

// Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo queste regole:

// - v < 18: insufficiente
// - 18 >= v < 21: sufficiente
// - 21 >= v < 24: buono
// - 24 >= v < 27: distinto
// - 27 >= v <= 29: ottimo
// - v = 30: eccellente

// let testResult = parseInt(prompt('Write your test result here:'));


// if statement:

// if ( testResult < 18 ) {

//     console.log('insufficient');

// } else if (testResult >= 18 && testResult < 21 ) {

//     console.log('sufficient');

// } else if (testResult >= 21 && testResult < 24 ) {

//     console.log('good');

// } else if ( testResult >= 24 && testResult < 27 ) {

//     console.log( 'distinguished' );

// } else if ( testResult >= 27 && testResult <= 29 ) {

//     console.log( 'very good!!' );

// } else if ( testResult == 30 ) {

//     console.log( 'excellent' );

// } else {

//     console.log( `Have you done the test?`);

// }
    

// switch statement:

// switch (testResult) {

//     case testResult < 18 :
//         console.log( 'sufficient' );
//         break;
//     case testResult >= 18 || testResult < 21 :
//         console.log( 'sufficient' );
//         break;
    
//     case testResult >= 21 || testResult < 24:
//         console.log( 'good' );
//         break;

//     case testResult >= 24 || testResult < 27:
//         console.log( 'distinguished' );
//         break;

//     case testResult >= 27 || testResult <= 29:
//         console.log( 'very well' );
//         break;

//     case testResult == 30:
//         console.log( 'excellent' );
//         break;

//     default:
//         console.log( `Have you done the test?` )
//         break;
// }



/*

// **Esercizio 2**

// Scrivi un programma che dato un numero stampi la tabellina corrispondente fino a 10.

// Esempio di output: 

// - 10 x 1 = 10
// - 10 x 2 = 20
// - …

let multiplicationsTable = parseInt( prompt( 'Which multiplication tables do you wanna learn?' ) );

for (let i = 0; i < 11; i++) {
    
    console.log( i * multiplicationsTable );
    
}

*/






// **Esercizio 3**

// Validazione password

// Scrivi un programma che, data una stringa, da usare come ipotetica password, faccia i seguenti controlli

// - almeno 6 caratteri
// - non più di 20 caratteri
// - deve contenere almeno uno dei seguenti simboli; “!”, “_”, “-”
// - deve contenere almeno un numero

// > Per lo svolgimento di questo esercizio vedere `[.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes?retiredLocale=it)`
// > 

// > Utilizzare `/\d/.[test](https://www.w3schools.com/jsref/jsref_regexp_test.asp)(tuavariabile)` per verificare che nella stringa sia presente almeno un numero.
// > 

// ```jsx
// // && (and), || (or), ! (not) potrebbero fare al caso vostro! 
// ```


// let password = prompt( 'Write your password' );
// let pattern = /\d/;

// if ( password.length < 6 && password.length > 20 ) {
    
//     alert( 'min 6 character, max 20 character' );

// } else if( !password.includes( '!' ) && !password.includes( '_' ) && !password.includes( '-' ) ){

//     alert( `special character like : “!”, “_”, “-” are required ` );

// } else if( pattern.test( password ) == false  ){

//     alert( 'at least one number is required' )

// } else {

//     alert( 'perfect, your password is accepted' );

// }





/*

// **Esercizio 4**

// Scrivi un programma che per il seguente testo conti 
// quante occorrenze ci sono per ogni vocale e quante vocali ci sono in tutto:

const text = 
    `**Il passaggio standard del Lorem Ipsum, utilizzato sin dal sedicesimo secolo**

    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    **La sezione 1.10.32 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC**
    
    “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    
    **Traduzione del 1914 di H. Rackham**
    
    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain 
    was born and I will give you a complete account of the system, and expound the actual teachings 
    of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, 
    or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue 
    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone 
    who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally 
    circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, 
    which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who 
    has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, 
    or one who avoids a pain that produces no resultant pleasure?"
    
    **La sezione 1.10.33 del "de Finibus Bonorum et Malorum", scritto da Cicerone nel 45 AC**
    
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
    similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
    eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, 
    omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis 
    debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias 
    consequatur aut perferendis doloribus asperiores repellat."
    
    **Traduzione del 1914 di H. Rackham**
    
    "On the other hand, we denounce with righteous indignation and dislike men 
    who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, 
    that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to 
    those who fail in their duty through weakness of will, which is the same as saying through shrinking 
    from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our 
    power of choice is untrammelled and when nothing prevents our being able to do what we like best, 
    every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to 
    the claims of duty or the obligations of business it will frequently occur that pleasures have to 
    be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this 
    principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures 
    pains to avoid worse pains.”`
;

// .match is used for find all a vowel
// i use regex to get vowel, that is used  to locate or validate specific strings or patterns of text in a sentence, document, or any other character input 
let vowel_A = text.match( /(a)/gi );
// console.log of the number of a
console.log( `a: ${vowel_A.length} ` );


// regex for the e vowel
let vowel_E = text.match( /(e)/gi );
// console.log of the number of e
console.log( `e: ${ vowel_E.length }` );


// regex for the i vowel
let vowel_I = text.match( /(i)/gi );
// console.log of the number of i 
console.log( `i: ${ vowel_I.length }` );


// regex for the o vowel
let vowel_O = text.match( /(o)/gi );
// console.log of the number of o
console.log( `u: ${ vowel_O.length }` );


// regex for the u vowel
let vowel_U = text.match( /(U)/gi );
// console.log of the number of u
console.log( `u: ${ vowel_U.length }` );


// total vowels
let total_vowels = vowel_A.length + vowel_E.length + vowel_I.length + vowel_O.length + vowel_U.length;
console.log( `total: ${ total_vowels }` );

*/



/*

// **Esercizio 5 - BONUS**

// Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N), simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti. Supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.

// ```jsx
// // N sarà ugugale al numero massimo di tiri che voi sceglierete di far eseguire ai giocatori.
// // Aiuto per max e min: "pensate al dado".

// // Usiamo questa formula per generare un numero random*
// Math.floor(Math.random() * (max - min + 1) + min);
// ```

// ```jsx
// // Expected Outputs

// // Il punteggio del giocatore 1 è: ...
// // Il punteggio del giocatore 2 è: ...

// // Il giocatore 1 ha vinto con un punteggio di ...!
// // Il giocatore 2 ha vinto con un punteggio di ...!
// // Pareggio con un punteggio di ... !
// ```


// try for every player
let tryForPlayer = 3;

// players
let playerOne;
let playerTwo;

// result players
let resultPlayerOne = [];
let resultPlayerTwo= [];

// final result players
let finalResultPlayerOne;
let finalResultPlayerTwo;

// total score playesr
let playerOneScore = 0;
let playerTwoScore = 0;


for (let i = 0; i < tryForPlayer; i++) {
    
    // the player do his first try, the number of the try is generate with the Math.random
    playerOne = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    // push the result in the variable with the array
    resultPlayerOne.push( playerOne );
    
     // the player do his first try, the number of the try is generate with the Math.random
    playerTwo = Math.floor( Math.random() * ( 6 - 1 + 1) + 1 );
    // push the result in the variable with the array
    resultPlayerTwo.push( playerTwo );
     
}

console.log( `Player one: ${resultPlayerOne}` );
console.log( `Player two: ${resultPlayerTwo}` );


// total score players

// player one total score 
for (let i = 0; i < resultPlayerOne.length; i++) {
    
    playerOneScore += resultPlayerOne[i];
    
}

// player two total score 
for (let i = 0; i < resultPlayerTwo.length; i++) {
    
    playerTwoScore += resultPlayerTwo[i];
    
}

console.log( `total score player one: ${playerOneScore}` );
console.log( `total score player two: ${playerTwoScore}` );


if ( playerOneScore > playerTwoScore ) {
    
    console.log( `The player one win with a score of ${ playerOneScore } points` );

} else if( playerTwoScore > playerOneScore  ){

    console.log( `The player two win with a score of ${ playerTwoScore } points` )

} else if( playerOneScore == playerTwoScore || playerTwoScore == playerOneScore ){

    console.log( `Icredibel the players have the same score!!` )

} else{

    console.log( `Let's play!!` );

}

*/