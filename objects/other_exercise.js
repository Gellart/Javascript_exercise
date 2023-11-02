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

// **Esercizio 1**

// Definisci un oggetto **playlist** che contiene una proprietà **canzoni**. La prorietà canzoni dovrà essere un array.

// Inserisci una o 2 canzoni in maniera dinamica e ciascuna deve avere le seguenti proprietà:

// - titolo
// - nomeCantante
// - anno

// Ad ogni canzone inserita stampa in console tutte le canzoni.


// playlist obj
const playlist = {
    // obj property
    songs: [],
    // create a method that push the songs inside the songs array
    addSongs(song){
        this.songs.push(song);
    }

};

// constructor song
class Song {
    constructor(title, author, year){

        this.title = title;
        this.author = author;
        this.year = year;

    };
};

let song1 = new Song("past lives", "sapientdream", 2015);
let song2 = new Song("glimpse of us", "Joji", 2022);

playlist.addSongs(song1);
playlist.addSongs(song2);

playlist.songs.forEach(song => {
    console.log(song.title);
});

*/


/*

// **Esercizio 2**

// Definisci un oggetto **rubrica** che ha come proprietà gli **utenti**. 
// Per ogni utente specificare altre proprietà: **nome**, **cognome**, **telefono** e **indirizzo**. 
// Dove indirizzo è a sua volta un altro oggetto contenente altre proprietà (via, città, ecc).

// - Quindi popolare la rubrica con dei dati a piacere.
// - Crea un metodo all’interno dell’oggetto che restituisca nome cognome e telefono.
// - Dopo eliminare un elemento e visualizzare nuovamente la rubrica così ottenuta.
// - Crea poi una funzione che scorra tutti gli utenti all’interno della rubrica.

// rubrica obj 
const rubrica = {
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

    // return name surname and phone
    returnUserInfo(){
        this.users.forEach(user => {
            console.log(`Name:${user.name}` + `\n` + `Surname:${user.surname}` + `\n` + `Name:${user.phone}`)
        });
    }
}

rubrica.returnUserInfo();

// let's remove the last element
rubrica.users.pop();
// function that see all the element inside the array
const checkArray = ()=> {
    for( const prop in rubrica.users){
        const value = rubrica.users[prop];
        console.log(value);
    };
};

checkArray();

*/




// **Esercizio 3**

// Definisci un oggetto che rappresenti un garage. Dovrà contenere una lista di automobili.
// Per ciascuna automobile dovrà essere definito un attributo marca e modello  (es {brand : ‘renault’ , model : ‘twingo’}).

// Crea un metodo all’interno dell’oggetto che restituisca tutti i dati della macchina ad es: `“Renault - Twingo”`

// Scrivi poi una funzione che stampi in console tutti i modelli presenti nel garage.


// garage obj
const garage = {
    cars: [],
    // create a method that push the car inside the array
    addCars(car){
        this.cars.push(car);
    },
    returnCarDetails(){
        this.cars.forEach(car => {
            console.log(`Brand: ${car.brand}` + `\n` + `Model: ${car.model}` + `\n` + `Hp: ${car.hp}`);
        });
    },
    returnCarBrand(){
        this.cars.forEach(model=> {
            console.log(`Model: ${model.model}`);
        });
    }
};

// car constructor
class Car {
    constructor(brand, model, hp){

        this.brand = brand;
        this.model = model;
        this.hp = hp;

    };
};

let car1 = new Car("Ford", "Mustang Dark horse", 500);
let car2 = new Car("Nissan", "GTR R35 Nismo", 600);
let car3 = new Car("Porche", "911 GT3 RS", 520);
let car4 = new Car("BMW", "M4 Competition", 510);
let car5 = new Car("Lamborghini", "Huracan", 620);

garage.addCars(car1);
garage.addCars(car2);
garage.addCars(car3);
garage.addCars(car4);
garage.addCars(car5);

garage.returnCarDetails();
garage.returnCarBrand();