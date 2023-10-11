// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// describe("functionName", () => {
//     it("description of function from prompt", () => {
//         expect(functionName("argument")).toEqual("expect output")
//     })
// })

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// pseudocode: 
// input: yes
    // output: "drink coffee"
// input: no
    // output: "keep working"

describe("areYouTired", () => {
    it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired.", () => {
        expect(areYouTired("yes")).toEqual("drink coffee")
        expect(areYouTired("no")).toEqual("keep working")
    })
})

// Create the function that will make the test pass.

//pseaudo code:
    // create function name areYouTired
    //parameter: String
    //write up conditional to evaluate if string = "yes"
        //return "drink coffee"
    //write up conditional to evaluate if string = "no"
        //return "keep working"
    
const areYouTired = (string) => {
    if(string === "yes") {
        return "drink coffee"
    } else if(string === "no") {
        return "keep working"
    }
}


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// Pseudocode
// input: "yes"
    // output: "relax"
// input: "no"
    // output: "keep going"

describe("areYouStressed", () => {
    it("returns 'relax' if you are stressed and 'keep going' if you are not stressed", () => {
        expect(areYouStressed("yes")).toEqual("relax")
        expect(areYouStressed("no")).toEqual("keep going")
    })
})

// Create the function that will make the test pass.

// Pseuodocode
// Create a function named areYouStressed
// Create a conditional
    // "yes" => "relax"
    // "no" => "keep going"

const areYouStressed = (string) => {
    if (string === "yes") {
        return "relax"
    } else if (string === "no") {
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.

//Pseudocode
// input: 1
    // output: "in budget"
// input: 300
    // output "not in budget"

describe("budget", () => {
    it("returns 'in budget' if a price is lower than $300", () => {
        expect(budget(1)).toEqual("in budget")
        expect(budget(300)).toEqual("not in budget")
    })
})

// Create the function that will make the test pass.

// Pseudocode
// Create a function named budget
// Parameter: price
// Create a conditional
    // price < 300 => "in budget"
    // price >= 300 => "not in budget"

const budget = (price) => {
    if (price < 300) {
        return "in budget"
    } else if (price >= 300) {
        return "not in budget"
    }
}
    
// Write the test for a function that takes in two numbers and returns the smaller number.

// Pseudocode
// input: 1, 5
    // output: 1
// input: 8, 2
    // output: 2
// input: 4, 4
    // output: "the numbers are the same"

describe("smallerNumber", () => {
    it("takes in two numbers and returns the smaller number", () => {
        expect(smallerNumber(1, 5)).toEqual(1)
        expect(smallerNumber(8, 2)).toEqual(2)
        expect(smallerNumber(4, 4)).toEqual("the numbers are the same")
    })
})

// Create the function that will make the test pass.

// Pseudocode
// Create a function named smallerNumber
// Two parameters: number1, number2
// Create a conditional
    // number1 > number2 => number2
    // number1 < number2 => number1
    // number1 === number2 => "the numbers are the same"

const smallerNumber = (number1, number2) => {
    if (number1 > number2) {
        return number2
    } else if (number1 < number2) {
        return number1
    } else if (number1 === number2) {
        return "the numbers are the same"
    } else {
        return "error"
    }
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.

// Pseudocode
// input: 2
    // output: "no"
// input: 5
    // output: "yes"
// input: -7
    // output: "yes"

describe("isNumberOdd", () => {
    it("takes in one numbers and returns whether the number is odd", () => {
        expect(isNumberOdd(2)).toEqual("no")
        expect(isNumberOdd(5)).toEqual("yes")
        expect(isNumberOdd(-7)).toEqual("yes")
    })
})

// Create the function that will make the test pass.

// Pseudocode
// Create function names isNumberOdd
// One parameter: number
// Create a conditional
    // even number => "no"
    // odd number => "yes"

const isNumberOdd = (number) => {
    if (number%2 === 0) {
        return "no"
    } else if (number%2 === 1 || number%2 === -1) {
        return "yes"
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

// Pseudocode
// input: "banana"
    // output: "yellow"
// input: "apple"
    // output: "red"
// input: "grape"
    // output: "purple"

describe("fruitColor", () => {
    it("takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape", () => {
        expect(fruitColor("banana")).toEqual("yellow")
        expect(fruitColor("apple")).toEqual("red")
        expect(fruitColor("grape")).toEqual("purple")
    })
})

// Create the function that will make the test pass.

// Pseudocode
// Create function named fruitColor
// One Parameter: fruit
// Create a conditional
    // banana => yellow
    // apple => red
    // grape => purple

const fruitColor = (fruit) => {
    if (fruit === "banana") {
        return "yellow"
    } else if (fruit === "apple") {
        return "red"
    } else if (fruit === "grape") {
        return "purple"
    } else {
        return "that fruit is not supported"
    }
}

// Write the test for a function called rick that returns "Morty".

// Pseudocode
// no input
// output: "Morty"

describe("rick", () => {
    it("returns 'Morty'", () => {
        expect(rick()).toEqual("Morty")
    })
})

// Create the function that will make the test pass.

// Pseudocode
// Create a function named rick
// no input
// returns "Morty"

const rick = () => {
    return "Morty"
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that naume to the screen.

// Pseuodocode
// input: "Sean"
    // output: "Hello Sean!"

describe("greeter", () => {
    it("takes a name as an argument and returns a greeting with that name to the screen", () => {
        expect(greeter("Sean")).toEqual("Hello Sean!")
    })
})

// Create the function that will make the test pass.

// Pseudocode
// Create a function named greeter
// One Parameter: name
// use string interpolation to include the name in the output
// name => "Hello name!"

const greeter = (name) => {
    return `Hello ${name}!`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

// Pseudocode
// input:  3
    // output: odd
// input: 2
    // output: even
// input: -5
    // output: odd

describe("oddOrEven", () => {
    it("ddOrEven that takes a number as an argument and logs whether the number is odd or even", () => {
        expect(oddOrEven(3)).toEqual("odd")
        expect(oddOrEven(2)).toEqual("even")
        expect(oddOrEven(-5)).toEqual("odd")
    })
})
        
// Create the function that will make the test pass.

// Pseudo Code
// Create a function name oddOrEven
// One Parameter: number
// Create a conditional
    // even number => "even"
    // odd number => "odd"

const oddOrEven = (number) => {
    if (number%2 === 0) {
        return "even" 
    } else if (number%2 === 1 || number%2 === -1) {
        return "odd"
    } else {
        return "error"
    }
}



// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

// Pseaudo code:
    //input: 4
    //output: 8

describe("doubler", () => {
    it("takes a number and returns the result of the number multiplied by 2.", () => {
        expect(doubler(4)).toEqual(8)
    })
})

// Create the function that will make the test pass.

//Pseudo code: 
// Create a function name doubler
// 1 parameter: number
//returns number *2

const doubler =(number) => {
    return number*2
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

//Pseudo code:
    //input: 3, 2
    //output: 6

describe("multiply", () => {
    it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.", () => {
        expect(multiply(3, 2)).toEqual(6)
    })
})

// Create the function that will make the test pass.

//pseudo code: 
//Create a function name multiply
//2 paramater: num1, num2
//return num1*num2

const multiply = (num1, num2) => {
    return num1*num2
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

//pseudo code: 
    //input: 10, 5
    //output: "10 is evenly divisible by 5"
    //input: 11, 5
    //output: "11 is not evenly divisible by 5"

describe("divisibleBy", () => {
    it("takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs '10 is evenly divisible by 5'", () => {
        expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
        expect(divisibleBy(11, 5)).toEqual("11 is not evenly divisible by 5")
    })
})

// Create the function that will make the test pass.

//Pseudo code:
// Create a function name divisibleBy
//2 parameter: div1, div2
//Create a conditional - use string interpolation
    //if evenly divisible, return ("div1 is evenly divisible by div2")
    // else if no evenly divisible, return ("div1 is not evenly divisible by div2")

const divis

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.