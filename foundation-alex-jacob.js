// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// Psuedo Code: Iterate an array
// create a function called mult3
// input: array 
// output: array
// create variable to hold updates within forloop.

// const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]
// const mult3 = (array) => {
// let newArray = []
// for (let i = 0; i < array.length; i++) {
//     newArray.push (array[i] * 3)
// }
// return newArray
// }
// console.log (mult3(testArr1))


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]
// Psuedo Code:

// const oddnum = (array) => {
//     let arr = [] 
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 1 ) {
//             arr.push(array[i])
//         }
//     }
//     return arr
// }
// console.log(oddnum(testArr2))

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
const letters = (array) => {
    let newArr = []
    for (let i = 0; i < (array).length; i ++) {
        if (typeof array[i] === "string") {
            newArr.push(array[i])
        }
    }
}
console.log(letters(comboArr))

// const letters = (array) => {
//     // let arr = []
//     for (let i = 0; i < (array).length; i ++) {
//         if (typeof array[i] === "string") {
//             return array[i]
//         }
//     }
// }
// console.log(letters(comboArr))

// // output: "nicework"


// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1
