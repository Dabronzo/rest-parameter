/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
//Imagine we want a function that sum 3 elements

const sum = (a, b, c) => a + b + c;

console.log(sum(1, 2, 3));


// Extra arguments are ignored
//Now if we want to sum more number than 3 will nto work

console.log(sum(1, 2, 3, 4, 5));
//still six


// Function using ...rest

const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest){
        sum += i;
    }
    return sum;
}

console.log(sumRest(1, 2, 3, 4, 5, 6));
