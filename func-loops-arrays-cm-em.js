// 1. Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

/* 
Pseudo Code:

Input: array
Output: array

    - Declare a ES6 arrow function with the const keyword
    - Declare a parameter -> array
    - Create an empty array to return -> new varialble
    - Iterate over each element of the parameter array and mulitply each element by 3 ...
    - And, push that new element into the array the will be returned
*/

// const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]
// // [ 9, 27, 45, 12, 30 ]

// const multiply = (array) => {
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i] * 3);
//     }
//     return newArray;

// }

// console.log(multiply(testArr1));

// array[3]
// array.length === 5

// 0, 1, 2, 3, 4
// i = 0
// 0 < 5

// 2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.

/*
 Pseudo Code:
    input: array
    output: array

    - Declare a ES6 arrow function with the key word const
    - Add a parameter -> represents an array of numbers
    - Create a new empty array variable
    - Iterate over the array parameter that represents the array that is being evaluated
    - Construct a conditional block -> calculate if the element is a even or odd number -> if, if/else
    - If the element is an odd number, push the element to the new empty array variable.
    - Return the new empty array that is holding the odd numbers -> output
*/

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]

// const odd = (array) => {
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             newArray.push(array[i]);
//         }
//     }

//     return newArray;
// }

// console.log(odd(testArr2));

// 3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

const findLetters = (array) => {
    let str = "";

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            str += array[i];
        }
    }

    return str;
}

const comboArr = [
    7,
    "n",
    true,
    "i",
    "c",
    10,
    "e",
    -388,
    "w",
    3,
    "o",
    0,
    "r",
    false,
    "k"
  ]
  // output: "nicework"

  console.log(findLetters(comboArr));





