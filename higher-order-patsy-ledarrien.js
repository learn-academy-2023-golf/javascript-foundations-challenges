// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
//pseudo code:create a function called multTen
//Input: an array 
//Output: an array with the elements multiplied by ten 
// iterate over an array using .forEach
//value * 10 

 //const arr1 = [3, 9, 15, 4, 10]
 //output: [30, 90, 150, 40, 100]

 //const mult10 = arr1.map(value => value * 10) 
//console.log (mult10)

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
//const arr1 = [3, 9, 15, 4, 10]
// // output: [1.5, 4.5, 7.5, 2, 5]

//Pseudo code: create a map function and name it divide array 
//Input: Array
//Output: use .map method to divide each element by two 

//const divideArray = arr1.map(value => value / 2)
//console.log(divideArray)

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
 //const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]
//Pseudo code: create a function with the filter method called odd numbers
// use the filter method 
// - use the modulo to check for odd numbers
// Output:return a odd array

//const onlyOdd =(array) => { 
//return array.filter(value => value % 2 !== 0)
//}
//console.log(onlyOdd(arr2))



// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

//Pseudo code: 
    //name a function called odd characters
    //input/parameter : string
    //output/return : array only consists of words odd num of characters
        //convert the string to an array using .split("")
        //use the filter method 
            //use a conditional statement 
            //each word should be in its own index in the array
            // possible methods: indexOf(), 

    // const oddCharacters = (string) => {
    //    const strArray = string.split(" ")
    //    return strArray.filter((value, index) => {
    //     return value.length % 2 !== 0
    //    })
    // }        

    // console.log(oddCharacters(pumbaa))


// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// Psuedocode
 // - create a function named onlyLetters
 // input: array
 // - use the typeof operator to identify letters/nums in array
 // - use if statement to isolate the letters and place into a new array
 // - convert array to string using .join("")
 // output: string only contains letters

 const onlyLetters = (array) => {
    let strArray = []
     for(let i = 0; i < array.length; i++){
        if(array[i] === typeof "string"){
            strArray.push(array[i])
        }
     }
     return strArray.join("")
 }

 console.log(onlyLetters(comboArr))

 


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
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
// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
// const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"