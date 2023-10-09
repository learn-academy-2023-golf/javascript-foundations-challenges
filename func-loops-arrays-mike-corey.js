// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// const testArr1 = [3, 9, 15, 4, 10];
// // output: [9, 27, 45, 12, 30]

// create a function to perform the following
// input: array of numbers
// output: array of numbers
// create an array to store the output
// loop: incremenent through index of array
// return new array

// const triple = (array) => {
//   const multipliedArray = [];
//   for (i = 0; i < array.length; i++) {
//     multipliedArray.push(array[i] * 3);
//   }
//   return multipliedArray;
// };
// console.log(triple(testArr1));

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13];
// // output: [-7, 3, 5, 13]

// create a function to perform the following
// input: array of numbers
// output: array of numbers
// create an array to store the output
// loop: increment through index of array
// conditional: use if() to check if number is odd and add odd numbers to new array
// return new array

// const oddNumbers = (array) => {
//   let oddArray = [];
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       oddArray.push(array[i]);
//     }
//   }
//   return oddArray;
// };
// console.log(oddNumbers(testArr2));

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// const comboArr = [
//   7,
//   "n",
//   true,
//   "i",
//   "c",
//   10,
//   "e",
//   -388,
//   "w",
//   3,
//   "o",
//   0,
//   "r",
//   false,
//   "k",
// ];
// // output: "nicework"

// create a function to perform the following
// input: array of strings and numbers
// output: string
// create an variable to store the string
// loop: increment through the index of the array
// conditional: use if() to check if data at index is string or number and add strings to variable
// return new string

// const filter = (array) => {
//   let string = "";
//   for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//       string = string.concat(`${array[i]}`);
//     }
//   }
//   return string;
// };
// console.log(filter(comboArr));

// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4];
// // output: 10
// const addThese2 = [];
// // output: 0

// create a function to perform the following
// input: array of numbers
// outuput: sum of numbers
// create a variable to store the sum
// loop: increment throught the index of the array and add the numbers
// return the sum

// const sumArray = (array) => {
//   let sum = 0;
//   if (array.length !== 0) {
//     for (i = 0; i < array.length; i++) {
//       sum = sum + array[i];
//     }
//   }
//   return sum;
// };
// console.log(sumArray(addThese2));

// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3];
// // output: 1

// create a function to perform the following
// input: array of numbers
// output: index of largest number
// create a variable to store the largest number
// loop: increment through the index of the array
// conditional: if() compare index to largest variable and replace if larger
// return largerst index

// const larger = (array) => {
//   console.log(array);
//   let largest = 0;
//   console.log(largest);
//   for (i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     if (array[i] > largest) {
//       let largest = i;
//       console.log(largest);
//     }
//   }
//   return largest;
// };
// console.log(larger(indexHighestNumber));

// const larger = (array) => {
//   let larger = array[0];
//   let largerIndex = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] > larger) {
//       larger = array[i];
//       largerIndex = i;
//     }
//   }
//   return largerIndex;
// }
// console.log(larger(indexHighestNumber))
// 🏔 Stretch Goals

// Create a function that takes in two arrays and returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

//create function that takes two arrays as input
//combine the two arrays using set method
//return mergedArray as output

// const removeDuplicates = (array1, array2) => {
//   let mergeArray = [...new Set([...array1,...array2])];
//   return mergeArray;
// }
// console.log(removeDuplicates(arr1, arr2))

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]

//create a function that takes two numbers as arguments
//use for loop to fill the array
//return the results as the output

// const array = (length, value) => {
//   let results = [];
//   for(i = 0; i < length; i++) {
//     results.push(value);
//   }
//   return results;
// }
// console.log(array(arrayLength, arrayValue))


// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.

// const addUp1 = 4
// 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

// const addUp3 = 600
// // output: 180300

// create a function that takes a number as a argument
// sum = 0
//use for loop to iterate
// add each number by 1
//return the sum output 

const factorial = (num) => {
  let sum = 0;
  for(i = 0; i <= num; i++) {
     sum = sum + i;
  }
  return sum;
}
console.log(factorial(addUp3))


// 🏔 Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
