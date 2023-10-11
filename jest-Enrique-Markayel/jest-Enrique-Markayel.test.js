// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// describe("greeter", () => {
//     it("returns a generic greeting", () => {
//       expect(greeter()).toEqual("Hello, LEARN student!")
//     })
//   })

  // Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

  describe("feeling", () => {
        it("'drink coffee' if you are tired or 'keep working' if you are not tired", () => {
          expect(feeling("yes")).toEqual("drink coffee")
          expect(feeling("no")).toEqual("keep working")
        })
      })
//create function called feeling
//input: yes, no
//output: drink coffee, Keep working
//conditional to evaluate yes or no
//return drink coffee or keep working

// Create the function that will make the test pass.
const feeling = (string) => {
    if (string === "yes"){
        return "drink coffee"
    } else if (string === "no"){
        return "keep working"
    }
}


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("feelingStressed", () => {
    it("'relax' if you are stressed and 'keep going' if you are not stressed", () => {
      expect(feelingStressed("yes")).toEqual("relax")
      expect(feelingStressed("no")).toEqual("keep going")
    })
  })

//create function called feelingStressed  
//input: yes, no
//output: relax, Keep going
//conditional to evaluate yes or no
//return relax or keep going

// Create the function that will make the test pass.
  const feelingStressed = (string) => {
    if (string === "yes"){
        return "relax"
    } else if (string === "no"){
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("inBudget", () => {
    it("in budget", () => {
      expect(inBudget(10)).toEqual("in budget")
    })
  })

//pseudo code
//create a function called inBudget
//input: 10
//output: "in budget" if lower than 300
//conditional to evaluate if number within 0 to 300

// Create the function that will make the test pass.

const inBudget = (number) => {
  if (number > 0 && number < 300){
    return "in budget" 
  }
}

    // return string.filter(budget => 
    //   {return budget1 > 0 && budget2 <300
    //     })

// Write the test for a function that takes in two numbers and returns the smaller number.
describe("smallerNumber", () => {
  it("takes in two numbers and returns the smaller number", () => {
  expect(smallerNumber(7, 3)).toEqual(3)
  expect(smallerNumber(17, 20)).toEqual(17)
})
})

// pseudocode
// create a function named smallerNumber
//input: 7, 3
//output: 3

// Create the function that will make the test pass.

const smallerNumber = (num1, num2) => {
  if (num1 > num2){ 
    return num2 
  } else if( num1 < num2){
    return num1 
  }
  }

// Write the test for a function that takes in one number and returns whether the number is odd.
describe("oddNumber", () => {
  it("takes in one number and returns whether the number is odd", () => {
  expect(oddNumber(3)).toEqual("odd")
})
})
// pseudocode 
// create funtion named oddNumber that will determine if number is odd.
// input: 3
// output: "odd"

// Create the function that will make the test pass.

const oddNumber = (number) => {
  if (number % 2 !== 0 )
  return "odd"
}


// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruitColor", () => {
  it("takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape.", () => {
  expect(fruitColor("banana")).toEqual("yellow")
  expect(fruitColor("apple")).toEqual("red")
  expect(fruitColor("grape")).toEqual("purple")
})
})
// pseudocode 
// create a function fruitColor that will return "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// input: "banana", "apple", "grape"
// output: "yellow", "red", "purple"
// return result 

// Create the function that will make the test pass.

const fruitColor = (string) => {
  if(string === "banana"){
    return "yellow"
  } else if(string === "apple"){
    return "red"
    } else if(string === "grape"){
      return "purple"
    }
  }

// Write the test for a function called rick that returns "Morty".


describe("rick", () => {
  it("a function called rick that returns 'Morty'", () => {
    expect(rick()).toEqual("Morty")
  })
})
// pseudocode
// create a function named rick
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