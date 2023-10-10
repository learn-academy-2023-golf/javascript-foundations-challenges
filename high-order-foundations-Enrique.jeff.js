// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.

// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

//Psudo Code
// Create a function multBy10
// Takes in an array
// return value * 10
// call on multBy10

// const multBy10 = arr1.map((value) => {
//     return value * 10 
// })
// console.log(multBy10)


// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.

// const arr1 = [3, 9, 15, 4, 10]
// // output: [1.5, 4.5, 7.5, 2, 5]

//pseudo code
//create a function called divTwo
//Takes in an array
//use .map to iterate the elements in arr1
//return value of elements divided by 2

// const divTwo = arr1.map((value) => value / 2)
// console.log(divTwo)


// Create a function that takes in an array of numbers and returns an array with only odd numbers.

//const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]

//Pseudo Code
//Create a function oddNumbers
//takes in arr2
//use .filter to look for value % 2 !== 0
//call on oddNumbers

// const oddNNumbers = (array) => {
//     return array.filter((value) => value % 2 !== 0)
// }
// console.log(oddNNumbers(arr2))

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

// const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"

// // // output: ["a", "wonderful", "ain't", "passing", "craze"]
// //Pseudo Code
// //create function oddWords
// //input: string of words
// //output array with only words containing odd number of characters
// //call on oddwords

// const oddWords = (string) => { // (string is the input data type)
//     let array = string.split(" ") // converts string pumbaa into array
//     return array.filter(array => array.length % 2 !== 0) //(looking at => looking for)
// }
// console.log(oddWords(pumbaa)) //envoke function oddWords with values of pumbaa

//-------------------------------------------------------

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

//psudoCode


// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"
// // output: [4, 5, 7, 4, 3, 2, 8]