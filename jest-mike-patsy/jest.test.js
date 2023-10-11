// 💻 Challenges
// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Template
// describe("functionName", () => {
//   it("description of function from prompt", () => {
//     expect(functionName("argument")).toEqual("Expected Output")
//   })
// })

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("action", () => {
    it("returns `drink coffee` if you are tired and `keep working` if you are not tired.", () => {
      expect(action("yes")).toEqual("drink coffee")
      expect(action("no")).toEqual("keep working")
    })
  })

//   ReferenceError: greeter is not defined

// Create the function that will make the test pass.

//psuedocode:
//create a function called action
//one parameter: string
//use conditional to evaluate 
//return `drink coffee` if you are tired and `keep working` if you are not tired. 

const action = (string) => {
    if (string === "yes") {
    return "drink coffee"
    } else if (string === "no"){
    return "keep working"
    }
  }

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("areYouStressed", () => {
    it(`returns "relax" if you are stressed and "keep going" if you are not stressed`, () => {
      expect(areYouStressed("yes")).toEqual("relax")
      expect(areYouStressed("no")).toEqual("keep going" )
    })
  })
// ReferenceError: areYouStressed is not defined

// Create the function that will make the test pass.

//psuedocode
//create a fucntion named areYouStressed
//one parameter for string
//use conditonal to evaluate
//returns "relax" if you are stressed and "keep going" if you are not stressed.

const areYouStressed = (string) => {
    if(string === "yes") {
        return "relax"
       } else if (string === "no"){
        return "keep going"
       }
}
  
  


// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("price check", () => {
    it("returns `in budget` if a price is lower than $300.", () => {
      expect(isInBudget(250)).toEqual("in budget") 
    })
        it("returns `out of budget` if a price is $300 or higher", () => { 
            expect(isInBudget(350)).toEqual("out of budget")   
      })
    })
// ReferenceError: brokeBoy is not defined

// Create the function that will make the test pass.

//pseudocode
//create a function named brokeBoy
//one parameter: number
//use conditional 
// return "in budget" if a price is lower than $300.

const isInBudget = (price) => {
    if(price < 300) {
    return "in budget" 
    } else if(price > 300) {
        return "out of budget"
    }
  }

// Write the test for a function that takes in two numbers and returns the smaller number.

describe("smallNumber", () => {
  it("takes in two numbers and returns the smaller number.", () => {
    expect(smallNumber(9, 20)).toEqual(9)
  })
})

// ReferenceError: smallNumber is not defined

// Create the function that will make the test pass.
// Psuedocode
// - create function named smallNumber
// - two parameters: 9, 20
// - conditional
// - returns the smaller number

const smallNumber = (num1,num2) => {
  if(num1 < num2) {
    return num1
  } else {
    return num2
  }
}


// Write the test for a function that takes in one number and returns whether the number is odd.

describe("isOdd", () => {
  it("takes in one number and returns whether the number is odd", () => {
    expect(isOdd(7)).toEqual("Yes")
  })
})

// Create the function that will make the test pass.
//Psuedocode
// - Create a function named isOdd
// - One parameter: number
// - Condtional - use modulo 
// - Return - whether the number is odd

const isOdd = (num) => {
  if(num % 2 !== 0) {
    return "Yes" 
  } 
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruitColor", () => {
  it(`takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape`, () => {
    expect(fruitColor("banana")).toEqual("yellow")
    expect(fruitColor("apple")).toEqual("red")
    expect(fruitColor("grape")).toEqual("purple")
  })
})

// ReferenceError: fruitColor is not defined

// Create the function that will make the test pass.
// Psuedocode: 
// - Create a function named fruitColor
// - One parameter: string
// - Condtional 
// - returns "yellow" if the argument is banana

const fruitColor = (string) => {
  if(string === "banana"){
    return "yellow"
  } else if(string === "apple"){
    return "red"
  } else if(string === "grape"){
    return "purple"
  } else {
    return "unknown"
  }
}

// Write the test for a function called rick that returns "Morty".

describe("rick", () => {
  it(`function called rick that returns "Morty"`, () => {
    expect(rick()).toEqual("Morty")
  })
})

// ReferenceError: rick is not defined

// Create the function that will make the test pass.
// Pseudocode: 
// - Create function called rick
// - Parameter: none
// - Return "Morty"

const rick = () => {
  return "Morty"
}


// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe("greeter", () => {
  it(`that takes a name as an argument and returns a greeting with that name to the screen`, () => {
    expect(greeter("Patsy")).toEqual("Hello, Patsy")
  })
})

// Create the function that will make the test pass.
// Pseudocode:
// - Create a function named greeter
// - One parameter: name
// - Return string interp
    // Hello, ${name}

const greeter = (name) => {
  return `Hello, ${name}` 
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
describe("oddOrEven", () => {
  it(`takes a number as an argument and logs whether the number is odd or even`, () => {
    expect(oddOrEven(10)).toEqual("Even")
    expect(oddOrEven(15)).toEqual("Odd")
  })
})
// ReferenceError: oddOrEven is not defined

// Create the function that will make the test pass.
// Psuedocode: 
// - Create a function named oddOrEven
// - Parameter: number
// - Condtional using the modulo
// - Return whether the number is odd or even

const oddOrEven = (num) => {
  if(num % 2 !== 0){
    return "Odd"
  } else {
    return "Even"
  }
}


// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () => {
  it(`takes a number and returns the result of the number multiplied by 2`, () => {
    expect(doubler(10)).toEqual(20)
  })
})

// ReferenceError: doubler is not defined

// Create the function that will make the test pass.
// Psuedocode:
// - Create a function named doubler
// - Parameter: number
// - Return number * 2 


// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.