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


// Exercise 2: Product of Array Elements
// Calculate the product of all elements in an array.




// Exercise 3: Flatten Nested Arrays
// Flatten an array of nested arrays into a single-dimensional array.

// Exercise 4: Count Occurrences
// Count the occurrences of each element in an array and return an object with element counts.

// Exercise 5: Concatenate Strings
// Concatenate an array of strings into a single string.

// Exercise 6: Average of Array Elements
// Calculate the average of all elements in an array.

// Exercise 7: Maximum Num




/*

// ### Challenge 1: Flatten Nested Arrays
// Given an array of nested arrays, use `reduce()` to flatten the array into a single-dimensional array.

const nestedArray = [[1, 2], [3, 4, [5, 6]], [7, 8]];
const normalArray = nestedArray.reduce((accumulator, currentValue)=> {
    return accumulator.concat(currentValue);
}, []);

console.log(normalArray);

*/

/*

// ### Challenge 2: Calculate Factorial
// Given a number, calculate its factorial using `reduce()`. 
// The factorial of a number is the product of all positive integers from 1 to the number itself.

const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10];

const calculateFactorial = (numbers)=> {

    const factorialNumber = numbers.reduce((accumulator, currentValue)=> {
        return accumulator * currentValue;
    }, 1);
    return factorialNumber;
};

// Example usage
numbers.forEach(number => {
    const factorial = calculateFactorial(number);
    console.log(`Factorial of ${number} is: ${factorial}`);
});

*/


// ### Challenge 3: Grouping Objects by Property
// Given an array of objects, group the objects by a specific property using `reduce()`. 
// For example, group an array of objects by their age property.




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

