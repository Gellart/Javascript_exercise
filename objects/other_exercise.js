/*

// 1. Create an object called "mexico" with the following properties:
// - id -> 24
//     - name -> "Mexico"
//     - capital -> "Mexico City"
//     - neighbours -> ["USA", "Guatemala", "Belize"]

// 2. Print out "mexico" to the terminal

// 3. Change "id" to be 25

// 4. Add "Honduras" to the list of neighbours to "mexico"

// 5. Print out "mexico" to the terminal again


// mexico obj
const mexico = {

    id: 24,
    name: "Mexico",
    capital: "Mexico city",
    neighbours: ["USA", "Guatemala", "Belize"]

}
// let's see the obj
console.log( mexico.name );
// change the id of the obj
mexico.id = 25;
// add Honduras to the neighbours array
mexico.neighbours.push( "Honduras" );
// log and see the changes
console.log(mexico);

// cycle of mexico
for( const prop in mexico){
    const value = mexico[prop];

    console.log(prop, value);
}

*/


/*

// 1. Create an object called "myPet" with the following properties:
// - name -> "Sudo"
//     - type -> "Dog"
//     - breed -> "Poodle"
//     - age -> 7
//     - friends -> ["Bit", "Byte", "Data"]

// 2. Print out "myPet" to the terminal

// 3. Add a new property: colour -> "Black"

// 4. Change "breed" to be "Beagle"

// 5. Remove "Data" from the list of friends for "myPet"

// 6. Print out "myPet" to the terminal again

// 7. Add "Chip" to the list of friends for "myPet"

// 8. Print out "myPet" to the terminal again


// obj my pet
const myPet = {

    name: "Sudo",
    type: "dog",
    breed: "poodle",
    age: 7,
    friends: ["Bit", "Byte", "Data"]

}

// log the obj
console.log(myPet);
// add a new property
myPet.colour = "Black";
// change "breed" to be "Beagle"
myPet.breed = "beagle";
// remove "Data" from the list of friends for "myPet"
myPet.friends.pop();
// print out "myPet" to the terminal again
console.log(myPet);
// add "Chip" to the list of friends for "myPet"
myPet.friends.push("Chip");
// print out "myPet" to the terminal again
console.log(myPet);

*/




// 1. Create the following 3 objects:
// - const banana = { name: "banana", quantity: 1, price: 1.95 }
//     - const apple = { name: "apple", quantity: 1, price: 1.45 }
//         - const candy = { name: "candy", quantity: 1, price: 3.50 }

// 2. Create an object called "store" with the following properties:
// - storeNumber -> 5
//     - locationCity -> "Milan"
//     - locationCountry -> "Italy"
//     - products: [banana, apple, candy]

// 3. Print out "store" to the terminal

// 4. Only print out all the product objects in "store"

// 5. Only print out the 3rd product object in "store"

// 6. Change the price of the banana object through the store object
//        to be 1.75..

//     7. Print out both "store" and "banana"

// 8. Change the price of the candy object directly to be 4.99

// 9. Print out both "store" and "candy"




/*

// 1. Create the following 3 objects:
// - const banana = { name: "banana", quantity: 1, price: 1.95 }
//     - const apple = { name: "apple", quantity: 1, price: 1.45 }
//         - const candy = { name: "candy", quantity: 1, price: 3.50 }

// 2. Create an object called "store" with the following properties:
// - storeNumber -> 5
//     - locationCity -> "Milan"
//     - locationCountry -> "Italy"
//     - products: [banana, apple, candy]

// 3. Print out "store" to the terminal

// 4. Only print out all the product objects in "store"

// 5. Only print out the 3rd product object in "store"

// 6. Change the price of the banana object through the store object
//        to be 1.75..

//     7. Print out both "store" and "banana"

// 8. Change the price of the candy object directly to be 4.99

// 9. Print out both "store" and "candy"


// banana obj
const banana = {

    name: "banana",
    quantity: 1,
    price: 1.95

}

// apple obj
const apple = {

    name: "apple",
    quantity: 1,
    price: 1.45,

}

// candy obj
const candy = {

    name: "candy",
    quantity: 1,
    price: 3.50,

}

// store obj
const store = {

    storeNumber: 5,
    locationCity: "Milan",
    locationCountry: "Italy",
    products: [banana, apple, candy],

}
// Print out "store" to the terminal
console.log( store );
// Only print out all the product objects in "store"
console.log( store.products );
// Only print out the 3rd product object in "store"
console.log( store.products[2]);
// Change the price of the banana object through the store object to be 1.75..
store.products[0].price = 1.75;
// Print out both "store" and "banana"
console.log(store);
console.log(banana);
// Change the price of the candy object directly to be 4.99
candy.price = 4.99;
// Print out both "store" and "candy"
console.log(store);
console.log(candy);

*/


/*

// 1. Create an object called "houseForSale" with the following properties:
// - area -> 940
//     - value -> 320000
//     - streetName -> "Fifth Street"
//     - built -> "2012"
//     - owner -> { name: "Blake", age: 29 }
//     - offers -> [290000, 295000, 315000, 312000]

// 2. Print out "houseForSale" to the terminal

// 3. Delete the property with the key "built"

// 4. Change the age of the owner to be 30 inside "houseForSale"

// 5. Print out the maximum offerPrice(use reduce)

// 6. Add a new property: "sale price" -> 312000

// 7. Print out "houseForSale" to the terminal

//     * This is a challenging exercise - take it slow and step by step


// houseForSale obj 
const houseForSale = {

    area: 940,
    value: 320000,
    streetName: "Fifth Street",
    built: "2012",
    owner: {name: "Blake", age: 29},
    offers: [290000, 295000, 315000, 312000],
 
}

// Print out "houseForSale" to the terminal
// for( const prop in houseForSale){
//     const value = houseForSale[prop];
//     console.log(value);
// }

// Delete the property with the key "built"
delete houseForSale.built;
// check if the property built was delete
// for( const prop in houseForSale){
//     const value = houseForSale[prop];
//     console.log(value);
// }

// Change the age of the owner to be 30 inside "houseForSale"
houseForSale.owner.age = 30;
// Print out the maximum offerPrice (use reduce)
const maxPrice = houseForSale.offers.reduce((previous, offer)=> {
    if (previous < offer) {
        return offer;
    } 
    return previous;
}, 0);

console.log(maxPrice);

// Add a new property: "sale price" -> 312000
houseForSale.salePrice = 312000;
// Print out "houseForSale" to the terminal
for(const prop in houseForSale){
    const value = houseForSale[prop];
    console.log( value );
};

*/


/*

// 1. Create an object called "myConsole"
    
//     2. Assign "myConsole" the key "log" with a value that is
//        an arrow function.

//        This arrow function will have one parameter called "message"

//        The function will just console.log out the "message"

//     3. How would you call this "log" function inside the object?

//     You should be able to do: myConsole.log("Hello, friend!");

//     BONUS: How might the built-in "console" work?


// myConsole obj
const myConsole = {

    log : (message)=> {
        console.log(message);
    }

}

myConsole.log("Hello world");

*/


/*

// 1. Create a class called "Animal"

//     2. Allow us to pass in 2 properties/fields to the
//        Animal constructor which get set to the instance:
//        - type (String)
//        - name (String)

//     3. Create two instances of the Animal class of your
//        choice passing in different "type" and "name" for each

//     4. Print out both animal instances

//     5. Change the "name" of one of your animals and print it
//        out again.

//     *HINT: "this" will refer to the instance inside the class


// animal obj
class Animal {
    constructor(type, name){

        this.type = type;
        this.name = name;

    }
}

let shark = new Animal("fish", "Greate withe shark");
for(const prop in shark){
    const value = shark[prop];
    console.log(value);
}

*/


/*

// 1. Create a class called "Student"

// 2. Allow us to pass in 3 properties / fields to the
//        Student constructor which get set to the instance:
// - name(String)
//     - major(String)
//     - grades(Array of Numbers)

// 3. Create a method on "Student" called "addGrade" that
//        has one paramater "grade".It will simply push the
// "grade" given on to the "grades" Array.

//     4. Create a method on "Student" called "gpa" that will
// return the AVERAGE grade of the student's "grades"

// 5. Create an instance of the Student class like so:
// const eva = new Student("Eva", "Arts", [95, 75, 83])

// 4. Print out the "eva" instance

// 6. Use the "gpa" method on "eva" to print out their average
// grade(Should be 84.33)


// student class
class Student {
    constructor(name, major, grades){

        this.name = name;
        this.major = major;
        this.grades = grades;

    };

    addGrade(grade){
        this.grades.push(grade);
    };

    gpa(){
        // let's create a variable for the count
        let averageGrade = 0;
        // the for...of statement executes a loop that operates on a sequence of values
        for(const prop of this.grades){
            // the for of loop cycle the array sequentially, after that let's do the matemathics operation
            averageGrade += prop;
        }
        return averageGrade / this.grades.length;
    }

}

const eva = new Student("Eva", "Arts", [95, 75, 83]);
for(const prop in eva){
    const value = eva[prop];
    console.log(value);
}

console.log(eva.gpa());
console.log(eva.addGrade(10));

*/


/*

// 1. Create a class called "Bookstore"

// 2. The "Bookstore" constructor has a single parameter
//        called "books" which is an Array of Book Objects.
//        Assign the argument passed in to the instance within
//        the constructor.

// 3. Create a "listBooks" method on the "Bookstore" class
//     that will loop through and print out all the Books
//         in the Store(assume they have a name and author)
//        so you can format each like this:
// `${book.name} by ${book.author}`

// 3. Create another class called "Book"

// 4. The "Book" constructor has 2 parameters:
// - name
//     - author
//        Assign these to the instance within the constructor

// 5. Create 2 Books:
// const nineteen84 = new Book("1984", "George Orwell")
// const hp = new Book("Harry Potter", "J.K. Rowling")

// 6. Create a Bookstore:
// const bookstore = new Bookstore([nineteen84, hp])

// 7. Call bookstore.listBooks() and make sure it works:
// 1984 by George Orwell
//        Harry Potter by J.K.Rowling



// Bookstore class
class Bookstore {
    constructor(books){
        this.books = books;
    };

    // listBooks method, that loop through and print out all the Books in the Store
    listBooks() {
        for(const prop of this.books){
            prop.displayBook();
        }
    }

}

// Book class
class Book {
    constructor(name, author){
        this.name = name;
        this.author = author;
    }

    displayBook(){
        console.log(`${this.name} by ${this.author}`);
    }
}

// let's create dome books using the constructor
let book1 = new Book("1984", "George Orwell");
let book2 = new Book("Harry Potter", "J.K. Rowling"); 

let bookStore = new Bookstore([book1, book2]);
bookStore.listBooks();

*/

/*

// **Esercizio 2**

// Definisci un oggetto **rubrica** che ha come proprietà gli **utenti**. Per ogni utente specificare altre proprietà: **nome**, **cognome**, **telefono** e **indirizzo**. Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).

// - Quindi popolare la rubrica con dei dati a piacere.
// - Crea un metodo all’interno dell’oggetto che restituisca nome cognome e telefono.
// - Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta.
// - Crea poi una funzione che scorra tutti gli utenti all’interno della rubrica.


// rubrica obj
const rubrica = {

    // property
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
            },
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
            },
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
            },
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
            },
        },
    ],

    nameSurname: function() {
        this.users.forEach(user => {
            console.log(`Name:${user.name}` + `\n` + `Surname: ${user.surname}` + `\n` + `Phone: ${user.phone}`)
        });
    }
};


rubrica.nameSurname();
// let's remove the last elements of the array
rubrica.users.pop();
// let's see the obj after pop
for(const prop in rubrica){
    const value = rubrica[prop];
    console.log(value);
}

*/



/*

// **Esercizio 3**

// Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili.
// Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

// Crea un metodo all’interno dell’oggetto che restituisca tutti i dati della macchina ad es: `“Renault - Twingo”`

// Scrivi poi una funzione che stampi in console tutti i modelli presenti nel garage.

// garage obj
const garage = {
    cars: [

        {
            house: "Ford",
            model: "Mustang Dark horse",
            hp: "500"
        },
        {
            house: "Nissan",
            model: "GTR R35 Nismo",
            hp: "600"
        },
        {
            house: "Porche",
            model: "911 GT3 RS",
            hp: "520"
        },
        {
            house: "BMW",
            model: "M4 Competition",
            hp: "510"
        },
        {
            house: "Lamborghini",
            model: "Huracan",
            hp: "620"
        }

    ],
    // method that return house - model and hp
    returnCarDetails(){
        for(const car of this.cars){
            const details = `House: ${car.house}` + `\n` + `${car.model}` + `\n` + `${car.hp}`;
            console.log(details);
        }
    },
    // method that return all the car model
    returnCarModel() {
        this.cars.forEach(model => {
            const carModel = model.model;
            console.log(carModel);
        });
    }
}

garage.returnCarDetails();
garage.returnCarModel();

*/



/*

// **Esercizio 4**

// Scrivi una funzione che, per il sito www.lamiasuperlibreria.aulab, prenda in input la lista “libri” ed una “categoria” passata dall’utente. Il programma dovrà ritornare una lista di tag anchor (naturalmente questi devono essere delle semplici stringhe da mostrare in console) con il relativo url e come contenuto il titolo del libro. Questa lista dovrà contenere  solo gli elementi appartenenti alla categoria espressa in input.

// La creazione della url dovrà rispettare queste regole:

// - tutte le lettere devono essere minuscole
// - gli spazi devono essere sostituiti con il simbolo “-”
// - la prima parte della url sarà il nome dell’autore e l’ultima il nome del libro unito a “.html”

// esempio lista libri:

// const LIBRI = [
//     {
//       titolo: "Il Signore degli Anelli",
//       autore: "Tolkien",
//       categoria: "fantasy"
//     },
//     {
//       titolo: "Harry Potter",
//       autore: "Rowling",
//       categoria: "fantasy",
//     },
//     {
//       titolo: "Il Conte di Montecristo",
//       autore: "Dumas",
//       categoria: "narrativa classica"
//     },
//     {
//       titolo: "Dune",
//       autore: "Herbert",
//       categoria: "fantascienza"
//     },
//     {
//       titolo: "Fight Club",
//       autore: "Palahniuk",
//       categoria: "narrativa moderna"
//     }
//   ]


//   esempio url:

//   `www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html`

//   esempio tag anchor:

//   `<a href=”www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html”>Il signore degli anelli</a>`

//   esempio output finale:

// [ 
// 	'<a href=”www.lamiasuperlibreria.aulab/tolkien/il-signore-degli-anelli.html”>Il signore degli anelli</a>', 
// 	'<a href=”www.lamiasuperlibreria.aulab/herbert/dune.html”>Dune</a>' 
// ]


// user category
let userCategory = prompt(`write the category`);


// array of obj
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


// function that create the links
const createLinks = (category, listBooks)=> {
    // let's create an empty array
    const result = [];
    // cycle all the books array
    listBooks.forEach(book => {
        // if the user category is the same as books category return something
        if(book.category.toLowerCase() === category.toLowerCase()){
            // variable of the books author
            const bookAuthor = book.author.toLowerCase();
            // variable for the book title
            const bookTitle = book.title.toLowerCase().replace(`/\s+g`, `-`);
            // variable for the url
            const url = `www.lamiasuperlibreria.aulab/${bookAuthor}/${bookTitle}.html`;
            // variable for the anchor tag
            const tagAnchor = `<a href=”${url}”>${book.title}</a>`
            // let's push the tagAnchor inside the result array
            result.push(tagAnchor);
        } else {
            console.log(`sorry the category was not found`);
        };
    });

    return result;
};


let book1 = createLinks(userCategory,BOOKS);
console.log(book1);

*/


/*

// ** Esercizio 1 **

//     Scrivi una funzione Javascript che stampi in console se un libro è stato letto o meno 
// controllando la proprietà dell’oggetto`readingStatus`

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
// `${titolo del libro} di ${autore del libro } è stato letto!`
// - Se la proprietà è false allora stampare a console:
    
//     `${titolo del libro } di ${autore del libro } non è ancora stato letto!`


// library array
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

// function that check if the book has been reading or not
const bookStatus = (library)=> {
    const bookStatus = [];

    library.forEach(book => {
        if(book.readingStatus == true){
            let checkTrue = `${book.title} of ${book.author} has been read`;
            bookStatus.push(checkTrue);
        } else {
            let checkFalse = `${book.title} of ${book.author} hasn't been read`;
            bookStatus.push(checkFalse);
        }
    });
    return bookStatus;
}

let result = bookStatus(library);
console.log(result);

*/


/*

// **Esercizio 2**

// Definisci un oggetto che rappresenti una sala da bowling, dovrà contenere 
// un’array di giocatori che saranno formati dalle proprietà, nome e punteggi.

// Creare una funzione che calcoli il totale di ogni giocatore 
// e estragga il vincitore della partita.

// const bowling = {
//     players: [
//       { name: "Giocatore 1", scores: [10, 7, 9, 7, 6, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 8, 10] },
//       { name: "Giocatore 2", scores: [9, 8, 10, 10, 7, 10, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 10] },
//       { name: "Giocatore 3", scores: [10, 10, 7, 8, 10, 7, 9, 8, 10, 10, 10, 9, 8, 10, 10, 10, 7] }
//     ]
//   };

//   // Expected output: Il Vincitore è il Giocatore 2 con 157 punti totali

//   **TIP**: LAVORATE CON LE FUNZIONI.

// Ad es: `checkWinner(bowling)`

// **TIP**: Aggiungete una proprietà `total` per ogni oggetto Player 
// `{ name: “xxx”, scores: [7, 9, 10], total: 123 }`

const bowling = {
    players: [
        { name: "Giocatore 1", scores: [10, 7, 9, 7, 6, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 8, 10] },
        { name: "Giocatore 2", scores: [9, 8, 10, 10, 7, 10, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 10] },
        { name: "Giocatore 3", scores: [10, 10, 7, 8, 10, 7, 9, 8, 10, 10, 10, 9, 8, 10, 10, 10, 7] }
    ]
};

// function for calculate the tola score
const calculateScore = (bowling)=> {
    // array where that i use to push the score result
    const scoreResult = [];

    bowling.players.forEach(player => {
        const sum = player.scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const result = `Name: ${player.name}, Score: ${sum}`;
        scoreResult.push(result);
    });

    return scoreResult;  
};

// function that find the best score
const bestScore = (bowling)=> {
    const scores = bowling.players.map(player => player.scores.reduce((accumulator, currentValue)=> accumulator + currentValue,0));
    const bestScore = Math.max(...scores);
    const bestPlayer = bowling.players.find(player => player.scores.reduce((accumulator, currentValue)=> accumulator + currentValue,0) === bestScore);
    console.log(`The best player is: ${bestPlayer.name}, with a score of ${bestScore}`)
};

let playerScore = calculateScore(bowling);
console.log(playerScore);

let bestPlayer = bestScore(bowling);
console.log(bestPlayer);

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

// // ricordate che potete accedere alle proprietà di un oggetto:
// object["key"];

// BONUS: all’inserimento di questi bisognerà ordinare l’array 
// in modo che l’orario di inizio sia una successione ordinata

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

// // ricordate che potete ciclare un oggetto
// for(let key in object) {
// 	// ...
// }

// // potrebbe tornarvi utile
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

};

// contructor for create the vent
class Event {
    constructor(nameEvent, startEvent){

        this.nameEvent = nameEvent;
        this.startEvent = startEvent;

    };
    // add event mehod
    addEvent(day){
        if(week.hasOwnProperty(day)){
            week[day].push(this);
            console.log(`${this.nameEvent} has been added to ${day}`);
        } else {
            console.log(`please try again`)
        }
    }
};

// let's create the events
let event1 = new Event("lesson","18.30");
event1.addEvent("Monday");

// let's see if there are some events
for(const prop in week){
    const value = week[prop];
    console.log(value);
};