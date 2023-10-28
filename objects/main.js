/*

// **Esercizio 1**

// Definisci un oggetto **playlist** che contiene una proprietà **canzoni**. La prorietà canzoni dovrà essere un array.

// Inserisci una o 2 canzoni in maniera dinamica e ciascuna deve avere le seguenti proprietà:

// - titolo
// - nomeCantante
// - anno

// Ad ogni canzone inserita stampa in console tutte le canzoni.


// create a playlist object
const playlist = {
    // playlist property with an array
    songs : [

        `Past lives`,
        `Sapientdreamer`,
        2020

    ]

}

console.log( playlist.songs );

*/


/*

// **Esercizio 2**

// Definisci un oggetto **rubrica** che ha come proprietà gli **utenti**. Per ogni utente specificare altre proprietà: **nome**, **cognome**, **telefono** e **indirizzo**. Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).

// - Quindi popolare la rubrica con dei dati a piacere.
// - Crea un metodo all’interno dell’oggetto che restituisca nome cognome e telefono.
// - Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta.
// - Crea poi una funzione che scorra tutti gli utenti all’interno della rubrica.

// rubrica object
const rubrica = {
    // rubrica property
    users: [

        user1 = {
            // property
            name: "gino",
            surname: "blue",
            phone: "5654116513",
            // address is a property but also an obj
            address: {
                // property of address
                streeet: "via roma",
                number: "44",
                city: "Turin"
            }
        },

        user2 = {
            // property
            name: "pluto",
            surname: "blue",
            phone: "5654116513",
            // address is a property but also an obj
            address: {
                // property of address
                streeet: "via roma",
                number: "44",
                city: "Turin"
            }
        },

        user3 = {
            // property
            name: "jhon",
            surname: "blue",
            phone: "5654116513",
            // address is a property but also an obj
            address: {
                // property of address
                streeet: "via roma",
                number: "44",
                city: "Turin"
            }
        },

        user4 = {
            // property
            name: "megamind",
            surname: "blue",
            phone: "5654116513",
            // address is a property but also an obj
            address: {
                // property of address
                streeet: "via roma",
                number: "44",
                city: "Turin"
            }
        },

    ],
    // method of the obj
    call : function() {
        this.users.forEach( user => console.log( `Name : ${user.name} - Surname : ${user.surname}` + `\n` + `Phone : ${user.phone}` ) );
    }

}

// call the obj method
// rubrica.call();

// remove the last user form the users array
rubrica.users.pop();

// stamp the rubrica after the pop 
// rubrica.call();

// return all the users in the obj
let allUser = (rubrica) => {
    console.log( `all the user in the rubrica` );
    rubrica.forEach(user => {
        console.log(user.name)
    })
}

allUser(rubrica.users);

*/

/*

// **Esercizio 3**

// Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili.
// Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

// Crea un metodo all’interno dell’oggetto che restituisca tutti i dati della macchina ad es: `“Renault - Twingo”`

// Scrivi poi una funzione che stampi in console tutti i modelli presenti nel garage.


// garage obj
const garage = {
    cars : [
        {
            house : "Ford",
            model : "Mustang Dark horse",
            hp : "500"
        },
        {
            house : "Nissan",
            model : "GTR R35 Nismo",
            hp : "600"
        },
        {
            house : "Porche",
            model : "911 GT3 RS",
            hp : "520"
        },
        {
            house : "BMW",
            model : "M4 Competition",
            hp : "510"
        },
        {
            house : "Lamborghini",
            model : "Huracan",
            hp : "620"
        }
        
    ],
    carsObj : function (){
        this.cars.forEach( car => console.log(`House : ${car.house}` + `\n` + `Model : ${car.model}` + `\n` + `Horsepower : ${car.hp}`) );
    }
};
// call of the garage obj methods
garage.carsObj();

// create a function that stamp all the model of the garage
let allModelS = (garage) => {
    garage.cars.forEach(model => {
        console.log( `All models : ${model.model}` )
    });
};

allModelS(garage);

*/

/*

// **Esercizio 4**

// Scrivi una funzione che, per il sito www.lamiasuperlibreria.aulab, prenda in input la lista 
//“libri” ed una “categoria” passata dall’utente. 
//Il programma dovrà ritornare una lista di tag anchor 
// (naturalmente questi devono essere delle semplici stringhe da mostrare in console) 
// con il relativo url e come contenuto il titolo del libro. 
// Questa lista dovrà contenere  solo gli elementi appartenenti alla categoria espressa in input.

// La creazione della url dovrà rispettare queste regole:

// - tutte le lettere devono essere minuscole
// - gli spazi devono essere sostituiti con il simbolo “-”
// - la prima parte della url sarà il nome dell’autore e l’ultima il nome del libro unito a “.html”

// esempio lista libri:

// ```jsx
// const LIBRI = [
//   {
//     titolo: "Il Signore degli Anelli",
//     autore: "Tolkien",
//     categoria: "fantasy"
//   },
//   {
//     titolo: "Harry Potter",
//     autore: "Rowling",
//     categoria: "fantasy",
//   },
//   {
//     titolo: "Il Conte di Montecristo",
//     autore: "Dumas",
//     categoria: "narrativa classica"
//   },
//   {
//     titolo: "Dune",
//     autore: "Herbert",
//     categoria: "fantascienza"
//   },
//   {
//     titolo: "Fight Club",
//     autore: "Palahniuk",
//     categoria: "narrativa moderna"
//   }
// ]
// ```

// esempio url:

// `www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html`

// esempio tag anchor:

// `<a href=”www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html”>Il signore degli anelli</a>`

// esempio output finale:
// [
// 	'<a href=”www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html”>Il signore degli anelli</a>',
// 	'<a href=”www.lamiasuperlibreria.aulab/herbert/dune.html”>Dune</a>'
// ]

// array books
const BOOKS = [
    {
        title: "Il Signore degli Anelli",
        author: "Tolkien",
        category: "fantasy"
    },
    {
        title: "Harry Potter",
        author: "Rowling",
        category: "fantasy",
    },
    {
        title: "Il Conte di Montecristo",
        author: "Dumas",
        category: "narrativa classica"
    },
    {
        title: "Dune",
        author: "Herbert",
        category: "fantascienza"
    },
    {
        title: "Fight Club",
        author: "Palahniuk",
        category: "narrativa moderna"
    }
]

// function for user input
const userInput = ()=> {
    // this variable contain a propmt for the user input
    let userInput = prompt(`write the category that you want`);
    // return the variable userInput
    return userInput;

};
// save the function on a variable
let userCategory = userInput();

// function that find the category
const findCategory = (userCategory)=> {
    // this variable contain the filter method 
    let resultFind = BOOKS.filter(book => book.category.toLocaleLowerCase().includes(userCategory.toLocaleLowerCase()));
    // foreach
    resultFind.forEach(book => {
        console.log(`<a href="www.lamiasuperlibreria.aulab/${book.author.toLowerCase()}/${book.title.toLowerCase().replace(/ /g, "-")}.html">${book.title.toLowerCase().replace(/ /g, "-")}</a>`);
    });
}

console.log(findCategory(userCategory));

*/


/*

// **Esercizio 1**

// Scrivi una funzione Javascript che stampi in console se un libro è stato letto o meno 
// controllando la proprietà dell’oggetto `readingStatus`

// const library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];

// - Se la proprietà è true allora stampare a console:
// `${titolo del libro} di ${autore del libro} è stato letto!`
// - Se la proprietà è false allora stampare a console:
    
//     `${titolo del libro} di ${autore del libro} non è ancora stato letto!`


const library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

// with this function see all the title of books in the array of obj
const checkLibrary = ()=> {
    // cycle all the library array
    library.forEach(book => {
        console.log( `Title : ${book.title}` );
    });

}

// function that check if the book has been read or not
const readingStatus = (library)=> {
    // cycle all the library
    library.forEach(book => {
        // condition, if is true or false return something
        if (book.readingStatus == true) {
            console.log( `${book.title} of ${book.author} it was read!` )
        } else {
            console.log( `${book.title} of ${book.author} it was read!` )
        };
    });
}

console.log(checkLibrary());
console.log( readingStatus(library) );

*/


/*

// **Esercizio 2**

// Definisci un oggetto che rappresenti una sala da bowling, 
// dovrà contenere un’array di giocatori che saranno formati dalle proprietà, nome e punteggi.

// Creare una funzione che calcoli il totale di ogni giocatore 
// e estragga il vincitore della partita.

// const bowling = {
//     players: [
//         { name: "Giocatore 1", scores: [10, 7, 9, 7, 6, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 8, 10] },
//         { name: "Giocatore 2", scores: [9, 8, 10, 10, 7, 10, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 10] },
//         { name: "Giocatore 3", scores: [10, 10, 7, 8, 10, 7, 9, 8, 10, 10, 10, 9, 8, 10, 10, 10, 7] }
//     ]
// };

// Expected output: Il Vincitore è il Giocatore 2 con 157 punti totali

// **TIP**: LAVORATE CON LE FUNZIONI.

// Ad es: `checkWinner(bowling)`

// **TIP**: Aggiungete una proprietà `total` per ogni oggetto Player `{ name: “xxx”, scores: [7, 9, 10], total: 123 }`


const bowling = {
    players: [
        { name: "Giocatore 1", scores: [10, 7, 9, 7, 6, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 8, 10] },
        { name: "Giocatore 2", scores: [9, 8, 10, 10, 7, 10, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 10] },
        { name: "Giocatore 3", scores: [10, 10, 7, 8, 10, 7, 9, 8, 10, 10, 10, 9, 8, 10, 10, 10, 7] }
    ]
};


// function for calculate the players points
const calculatePlayersPoints = (bowling)=> {

    // cycle the players array
    bowling.players.forEach(player => {
        console.log(player.name);
        // save the scores array in this variable
        let points = player.scores;
        // create a counter variable for calculate the number inside the scores array
        let counter = 0;
        // cycle the scores array
        points.forEach(point => {
            // calculate the number on the array 
            counter += parseInt(point);
        });
        console.log(counter) ;
        player.total = counter;
        
    });
}


// function for check the winner
const checkWinner = (bowling)=> {
    // variable for the player
    let players = bowling.player;
    // variable for the total points
    let total = players.map(player => player.total);
    // variable for the best score
    let bestScore = Math.max(total);
    console.log(bestScore);
    // cycle of player array
    players.forEach(player => {
        // condition, if the total point is the same of best score, return something
        if (player.total === bestScore) {
            console.log( `Name: ${player.name}` + `\n` + `Score: ${player.scores}` + `\n` + `Total: ${player.total}` );
        };
    });
}

console.log( calculatePlayersPoints(bowling) );
console.log( checkWinner(bowling) );

*/



// **Esercizio 3**

// Il Calendario Settimanale

// - Scrivi un oggetto contenente i giorni della settimana.
// - Ogni giorno sarà un array al quale gli si potrà aggiungere un evento.

// L’evento sarà un oggetto contenente le chiavi

// - nomeEvento
// - inizioEvento (formato “08:00”)

// {
// 	nomeEvento: "Lezione",
// 	inizioEvento: "18:30"
// }

// Il programma dovrà permettere di:

// - aggiungere singoli eventi per un determinato giorno.

// ricordate che potete accedere alle proprietà di un oggetto:
// object["key"];

// BONUS: all’inserimento di questi bisognerà ordinare l’array in modo 
// che l’orario di inizio sia una successione ordinata

/*

Il metodo sort() itera sull'array, passando ogni volta due valori adiacenti alla funzione di confronto. 
La funzione di confronto valuta quindi la differenza tra il primo valore e il secondo. Questo determinerà se la funzione 
restituisce un valore positivo, negativo o neutro.
Se il valore restituito è positivo, significa che il primo valore è maggiore del secondo. 
Ad esempio, se confronti 7 e 4, ottieni 3. 
Pertanto, il primo valore viene posizionato dopo il secondo nell'ordine crescente.
Se il valore restituito è negativo, significa che il primo valore è minore del secondo. 
Ad esempio, se confronti 2 e 7, ottieni -5. 
Pertanto, il primo valore viene posizionato prima del secondo nell'ordine crescente.
Un valore neutro, o zero, indica che i due valori sono uguali, quindi l'ordine non ha bisogno di essere modificato.

*/

// .sort(function(a, b) {
//     return a.inizioEvento - b.inizioEvento;
// });

// - filtrare gli eventi di una specifica giornata.
// - cercare gli eventi per nome: questa funzione mi ritornerà le eventuali occorrenze, 
// dell’evento, divise per giornata.

// ricordate che potete ciclare un oggetto
// for(let key in object) {
// 	// ...
// }

// potrebbe tornarvi utile
// .filter(evento => {
// 	// ...
// });

// TIP: lavorate con le funzioni, per esempio per aggiungere un evento fate una funzione 
// aggiungiEvento() o addEvent()  


// days of the week obj
const week = {

    Monday : [],
    Tuesday : [],
    Wednesday : [],
    Thursday : [],
    Friday : [],
    Saturday : [],
    Sunday : []

}

// user input variables
let dayOfEvent = prompt( `write the day of the event` );
let userEvent = prompt( `write the name of the event` );
let userEventTime = prompt( `write the event time` );

// obj event
class Event  {
    constructor (nameEvent, startEvent) {
        this.nameEvent = nameEvent;
        this.startEvent = startEvent;
    }
};

// function for pushing the obj event in the days array
const pushEvents = (event, daysOfTheWeek) =>{
    week[daysOfTheWeek].push(event);
};

// function that order the events
const orderEvents = (week, day) =>{
 week[day].sort(function(a,b){
    return a["startEvent"].replace(/:/g, '') - b["startEvent"].replace(/:/g, '');
 });
 console.log(week);
};

// create obj using the constructor event
let event1 = new Event( userEvent, userEventTime );
let event2 = new Event( userEvent, userEventTime );

console.log(pushEvents(event1, dayOfEvent));
console.log(pushEvents(event2, dayOfEvent));