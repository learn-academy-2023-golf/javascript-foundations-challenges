// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

// 
// describe("functionName", () => {
//     it("description of function from prompt", () => {
//         expect(functionName("argument")).toEqual("Expect Output")
//     })
// })

// describe("prompt", () => {
//     it("returns a functions that says drink coffee if tired, and keep working if not", () => {
//         expect(prompt("yes")).toEqual("drink coffee")
//         expect(prompt("no")).toEqual("keep working")
//     })
// })

// // Psudo code
// // Create a function called prompt
// // One parameter called string
// // Write a conditional to evaluate if string = yes and return "drink cofee" and if string returns no return "keep working" 

// const prompt = (string) => {
//         if(string === "yes") {
//         return "drink coffee" 
//          } else if(string === "no") {
//         return "keep working"
// }
// }
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// describe("dontBeLazy", () => {
//          it("returns a functions that says relax if stressed, and keep going if not", () => {
//              expect(dontBeLazy("yes")).toEqual("relax")
//              expect(dontBeLazy("no")).toEqual("keep going")
//          })
//      })

// // Psudo code
// // Create a function called dontBeLazy
// // One parameter called string
// // Write a conditional to evaluate if string = yes and return "relax" and if string returns no return "keep going" 

// const dontBeLazy = (string) => {
//     if(string === "yes") {
//     return "relax" 
//      } else if(string === "no") {
//     return "keep going"
// }
// }
// Create the function that will make the test pass.

// Write the test for a function that returns "in budget" if a price is lower than $300.

// describe("amIInBudget", () => {
//     it("return in budget", () => {
//         expect(amIInBudget(299)).toEqual("in budget")
//         expect(amIInBudget(301)).toEqual("not in budget")
//     })
// })

// Psudo code
// function name - amIInBudget
// input - thought I could use a string then realized because I was using a relational operator it had to be a number
// output -string that states "in budget"
// process - using a conditional to determine if were in budget

// const amIInBudget = (number) => {
//     if (number < 300) {
//         return "in budget"    
//     }   else if (number > 300)
//         return "not in budget"
// }
// Create the function that will make the test pass.

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

describe("smallerNumber", () => {
    it("return the smaller number", () => {
        expect(smallerNumber(5)).toEqual("5")
    })
})
// Psudo code
// Function name - smallerNumber
// Input - 2 numbers 5, 25
// Ouput - 5
// Process - use a conditional to determine which number is the smaller number 

const smallerNumber = (number) => {
    if(5 < 25) {
        return "5"
    } else if(5 > 25) {
        return "error"
    }
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.