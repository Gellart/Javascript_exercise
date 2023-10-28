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