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




// **Esercizio 3**

// Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili.
// Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

// Crea un metodo all’interno dell’oggetto che restituisca tutti i dati della macchina ad es: `“Renault - Twingo”`

// Scrivi poi una funzione che stampi in console tutti i modelli presenti nel garage.





// **Esercizio 4**

// Scrivi una funzione che, per il sito www.lamiasuperlibreria.aulab, prenda in input la lista “libri” ed una “categoria” passata dall’utente. Il programma dovrà ritornare una lista di tag anchor (naturalmente questi devono essere delle semplici stringhe da mostrare in console) con il relativo url e come contenuto il titolo del libro. Questa lista dovrà contenere  solo gli elementi appartenenti alla categoria espressa in input.

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