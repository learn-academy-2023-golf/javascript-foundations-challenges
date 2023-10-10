// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.


const testArr1 = [3, 9, 15, 4, 10]

// output: [9, 27, 45, 12, 30]

//create a function newNumber w paramater = array
// Iterate over array using for loop
//create a for loop and saves the new number onto new variable
//create a variable that tracks the new array
// Use .push to store new array value to newNumber
//return newNumber

// const mult3 = (array) => {
//     let newNumber = []
//     for (let i =0; i < array.length ; i++){
//         newNumber.push(array[i] * 3)
//     }
//     return newNumber
// }
// console.log(mult3(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]
//create a function newArray
//iterate over array using for loop
//create a variable oddNumbers
//create a conditional that tests for odd
// Use .push to store only odd element onto oddNumbers
//Return oddNumbers

// const newArray = (array) => {
//     let oddNumbers = []
//     for (let i=0; i< array.length; i++){
//         if (!(array[i] % 2 === 0)){
//             oddNumbers.push(array[i])
//         }
//     }    
//     return oddNumbers   
// }
// console.log(newArray(testArr2))


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
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
// // output: "nicework"

//create a function newArray
//create a conditional that checks datatype
//if data type is string, then store in onlyLetters
//return onlyLetters
//.join to make it a string



// const newArray = (array) => {
//     let onlyLetters = []
//     for (let i = 0; i < array.length; i++){
//         if (typeof [] === "boolean"){
//         onlyLetters.push(array["i"])
//     }
// }
// return onlyLetters
// }
// console.log(newArray(comboArr))

// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// // output: 10

//Create function sumOf
//create variable to hold values of each index
//return sumOf

const sumOf = (array) => {
    let sum = []
    for (let i = 0; i < Array.length; i ++){
        sum.push(array[i] + sum)
    } 
    return sum  
}
console.log(sumOf(addThese1))
//testing
// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1
// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

// const addUp3 = 600
// // output: 180300