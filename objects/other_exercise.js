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