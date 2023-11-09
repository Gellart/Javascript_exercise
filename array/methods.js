/*
    Reduce
*/

/*

// Exercise 1: Sum of Array Elements
// Calculate the sum of all elements in an array.

const numbers = [10, 55, 789, 56];

const calculateSum = (numbers)=> {

    const sum = numbers.reduce((accumulator, currentValue)=> {
        return accumulator + currentValue;
    }, 0)
    return sum;
}

console.log(calculateSum(numbers));

*/

/*

// Exercise 2: Product of Array Elements
// Calculate the product of all elements in an array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const calculateProduct = (array)=> {
    const product = array.reduce((accumulator, currentValue)=> {
        return accumulator += currentValue; 
    },0);
    return product;
};

console.log(calculateProduct(numbers));

*/

/*
// Exercise 3: Flatten Nested Arrays
// Flatten an array of nested arrays into a single-dimensional array.

const cars = [
    ["Toyota", "Camry", 2019],
    ["Honda", "Civic", 2020],
    ["Ford", "Mustang", 2018],
    ["Chevrolet", "Impala", 2017]
];

const flattTheArray = (array)=> {
    const flatten = array.reduce((accumulator, currentValue)=> {
        return accumulator.concat(currentValue);
    },[]);
    return flatten;
};

console.log(flattTheArray(cars));

*/



/*

// ### Challenge 1: Flatten Nested Arrays
// Given an array of nested arrays, use `reduce()` to flatten the array into a single-dimensional array.

const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const singleDimensionalArray = (array)=> {
    const singleArray = array.reduce((accumulator, currentvalue)=> {
        return accumulator.concat(currentvalue);
    },[]);
    return singleArray;
};

console.log(singleDimensionalArray(nestedArray));

*/


/*

// ### Challenge 2: Calculate Factorial
// Given a number, calculate its factorial using `reduce()`. 
// The factorial of a number is the product of all positive integers from 1 to the number itself.

const numbers = [10, 77, 46, 25, 48, 6, 94, 13, 17, 58];

const calculateFactorial = (array)=> {

    const evenNumbers = array.filter((number)=> number % 2 === 0);
    console.log(evenNumbers);
    const factorial = evenNumbers.reduce((accumulator, currentValue)=> {
        return accumulator += currentValue;
    }, 0);

    return factorial;
};

console.log(calculateFactorial(numbers));

*/




// ### Challenge 3: Grouping Objects by Property
// Given an array of objects, group the objects by a specific property using `reduce()`. 
// For example, group an array of objects by their age property.

const cars = [
    { make: "Toyota", model: "Camry", year: 2019 },
    { make: "Honda", model: "Civic", year: 2020 },
    { make: "Ford", model: "Mustang", year: 2018 },
    { make: "Chevrolet", model: "Impala", year: 2017 }
];

const groupByProperties = (array) => {
    const grouped = array.reduce((accumulator, currentValue) => {
        const make = currentValue.make;
        const model = currentValue.model;
        const year = currentValue.year;

        if (!accumulator[make]) {
            accumulator[make] = {};
        }
        if (!accumulator[make][model]) {
            accumulator[make][model] = {};
        }
        if (!accumulator[make][model][year]) {
            accumulator[make][model][year] = [];
        }

        accumulator[make][model][year].push(currentValue);
        return accumulator;
    }, {});

    return grouped;
};

console.log(groupByProperties(cars));




// ### Challenge 4: Calculate Average Grade
// Given an array of objects representing students with grades, calculate the average grade using `reduce()`.




// ### Challenge 5: Find Longest Word
// Given an array of words, find the longest word using `reduce()`.

// ### Challenge 6: Balance Parentheses
// Given a string of parentheses (e.g., `"((())())()"`), use `reduce()` to determine if the parentheses are balanced.
// A string of parentheses is balanced if every opening parenthesis has a corresponding closing parenthesis.

// ### Challenge 7: Remove Duplicate Characters
// Given a string, remove duplicate characters and return the resulting string using `reduce()`.

// ### Challenge 8: Palindrome Check
// Given a string, use `reduce()` to check if it's a palindrome (reads the same backward as forward).

// ### Challenge 9: Deep Object Merge
// Given two objects, merge them deeply (including nested properties) using `reduce()`.

// ### Challenge 10: Longest Increasing Subarray
// Given an array of numbers, find the longest increasing subarray using `reduce()`.

