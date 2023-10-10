// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
//  const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

//puesdocode
// create a function arrayMult10
// .map to iterate over entire array
// return value times 10

// const arrayMult10 = (array) => {
//     return array.map(value => value * 10)
// }
// console.log(arrayMult10(arr1))
// console.log(arrayMult10([6, 7, 9]))

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.

 // const arr1 = [3, 9, 15, 4, 10]
// // output: [1.5, 4.5, 7.5, 2, 5]

// psuedocode
// create a function called divideByTwo
// .map function to create a new array
// returns value divided by two

// const divideByTwo = (array) => {
//     return array.map(value => value / 2)
// }
// console.log(divideByTwo(arr1)) 
// console.log(divideByTwo([5, 6, 14]))

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]

// psuedo code
// create a function called onlyOdd
// .filter to create a new array
// use modulo to keep only odd numbers
// use a conditional to determine its odd

// const onlyOdd = (array) => {
//     return array.filter(value => { 
//         if (value % 2 === 1 || value % 2 === -1) {
//         return value
//         }
//     })
// }
// console.log(onlyOdd(arr2))

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

//  const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

// psuedocode
// create a function called oddNumbers
//.filter to create a new array
// use .split(" ") to create an array with the words
// use .length to measure the number of characters
// use a conditional to determine if the length is odd or even

// const oddNumbers = (string) => {
//     let array = string.split(" ")
//     return array.filter(value => {
//         if (value.length % 2 === 1) {
//             return value 
//         }
//     })
// }
// console.log(oddNumbers(pumbaa))

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
//  const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

//psuedocode
//create a function onlyLetters
// iterate using a string the type of operator 
// result should contain only the letters

// const onlyLetters = (array) => {
//     let newArray = array.filter(value => {
//         if (typeof value === "string") {
//             return value
//         }
//     })
//     return newArray.join("")
// }
// console.log(onlyLetters(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
//  const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

//psuedocode
// create a function arrayFilter
//use .filter to remove unwanted values
// use typeof to distingush datatypes
// output;
    // numers not equal to zero, 
    // want boolean values that are true
    // want strings not equal to ""
    // want undefined 
    // want symbols and arrays

// const arrayFilter = (array) => {
//     return array.filter(value => {
//         if (value !== 0 && typeof value === "number") {
//             return value
//         } else if (value === true) {
//             return value 
//         } else if (value !== "" && typeof value === "string") {
//             return value 
//         } 
//     })
// }
// console.log(arrayFilter(filterArrayValues))

// const array = filterArrayValues.filter((element) => element);
// console.log(array)

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
 const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

//psuedocode
// if index of letter is odd, toUppercase the letter

const makeWacky = (array.map)(word) => {
     return word.split("").map((letter, index) => {
        return index % 2 === 1 letter.toUpperCase() : letter;
     }).join("");
    }
    return makeWacky


console.log(makeWacky(makesWackyWords))
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"
// // output: [4, 5, 7, 4, 3, 2, 8]
// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
// const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"