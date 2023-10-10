

// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
    // Pseudocode: 
    // input: array
    // output: array with all elements within array multiplied by 10
    // create a function  => and declare it with a const variable
    // take in a parameter to represent an array
    // use the .map on the parameter that is representing array
    // iterate through each element and multiply by 10 // // output: [30, 90, 150, 40, 100]
    // return the new array constructed by .map

// const arr1 = [3, 9, 15, 4, 10]

const multiplyByTen = (array) => {
    return array.map(number => number * 10)
}
// console.log(multiplyByTen(arr1))


// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.

    //Pseudocode: 
    //input: array
    //output: array with all elements divided by 2
    //create function = () => {} and declare it with a const
    // take in a parameter to represent the array
    // use .map on the parameter representing array
    // iterate through each element divided by 2 // // output: [1.5, 4.5, 7.5, 2, 5]
    // return new array from .map

// const arr2 = [3, 9, 15, 4, 10]

const dividedByTwo = (array) => {
    return array.map(number => number / 2)
}
// console.log(dividedByTwo(arr2))

// Create a function that takes in an array of numbers and returns an array with only odd numbers.

    //Pseudocode:
    //input: array
    //output: array with odd numbers // // output: [7, 3, 5, 13, -9]
    //create a function = () => {} and declare with a const
    //take in a parameter to represent array
    //use .filter on parameter representing array
    //iterate through each element and calculate whether it  is an odd or even number
    //return new array from .filter 


// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]

const oddNumbers = (array) => {
    return array.filter(number => number % 2 !== 0) 
}
// console.log(oddNumbers(arr2))

const evenNumbers = (array) => {
    return array.filter(number => number % 2 === 0)
}
// console.log(evenNumbers(arr2))


// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
// const pumbaa = 
// "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

//  Pseudocode:
    // input: string 
    // output: array where length of the word is an odd number of characters
    // create a function () => {} const
    // taking a parameter that represents a string
    // use .split to convert string into an array
    // use .filter method on that string parameter 
    // evaluate the length of each element of the string parameter
    // calculate if the length of each element of string parameter  is odd or even using an if statement
    // create a conditional to find all the words that has the odd number of characters
    // return an array provided by the .filter that contains all the words in which the length of characters are odd

const pumbaaa = (string) => {
    return string.split(" ").filter(word => {
        if(word.length % 2 !== 0) {
            return word 
        }
    } )

}
// console.log(pumbaaa(pumbaa))

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

//  Pseudocode:
//  input: array of numbers and letters
// // output: string that says "nicework"
// create a function () => {} const
// taking in a parameter that represents an array
// use .filter method on the parameter 
// within the .filter method declare a new empty string variable and use let keyword
// write a new conditional statement using if statement and we will evaluate the type of each element
// if the element is type of string, add that to the empty string variable
// return a new array of strings with 

const findLetters = (array) => {
    return array.filter(character => {
        let word = "" 
        if(typeof character === "string") {
            word += character.join
            return word
        }
            
    })
}
console.log(findLetters(comboArr))






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