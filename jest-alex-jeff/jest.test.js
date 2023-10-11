// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Template : describe("greeter", () => {
//   it("returns a generic greeting", () => {
//     expect(greeter()).toEqual("Hello, LEARN student!")
//   })
// })

// pseudo code: 
// input: 
// Output: 
//Create function called: 
// Parameter will be labeled 
// write a function to decide 
// If 


// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("areYouTired", () => {
    it("drink coffee if you are tired and keep working if you are not tired", () => {
      expect(areYouTired("yes")).toEqual("drink coffee")
      expect(areYouTired("no")).toEqual("keep working")
    })
  })
  
// pseudo code: 
// input: "Are you tired? " 
// Output: "Drink Coffee" or "Keep working
//Create function called: "Are you tired?""
// Parameter will be string 
// write a conditional to evaluate to say yes or no 
// if they say yes return=drink coffee// if they say no return=keep working

// Create the function that will make the test pass.
const areYouTired = (string) => {
    if (string === "yes") {
        return "drink coffee"
    } else if (string === "no") {
        return "keep working"
    }
}


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("areYouStressed", () => {
    it("returns relax if you are stressed and keep going if you are not stressed", () => {
      expect(areYouStressed("yes")).toEqual("relax")
      expect(areYouStressed("no")).toEqual("keep going")
    })
  })
// pseudo code: 
// input: "Are you Stressed? " 
// Output: "relax" or "Keep going"
//Create function called: "Are you Stressed?""
// Parameter will be string 
// write a conditional to evaluate to say yes or no 
// if they say yes return=relax // if they say no return=keep going

// Create the function that will make the test pass.

const areYouStressed = (string) => {
    if (string === "yes") {
        return "relax"
    } else if (string === "no") {
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("shopping", () => {
    it("returns in budget if a price is lower than $300", () => {
        let prices = [5,299,123,300,450,720,555,87,225]
      expect(shopping(prices,0,300)).toEqual([5,299,123,87,225])
    })
  })
// pseudo code: 
// input: array of # 
// Output: filtered array of #'s [5,299,123,87,225]
//Create function called: "shopping"
// Parameters will be an array// using minimum price"0", and max price "300"
// write a function to filter through the array and return the specified range.
// if the numbers are between 0 and 300; those number will be returned!

// Create the function that will make the test pass.

const shopping = (array,lowprice,maxprice) => {
    return array.filter(value => value > lowprice && value < maxprice)
}


// Write the test for a function that takes in two numbers and returns the smaller number.

describe("smaller", () => {
    it("takes in two numbers and returns the smaller number", () => {
        let num = [10,100]
      expect(smaller(num)).toEqual(num[0])
    })
  })

  // pseudo code: 
// input: array of 2 #'s 
// Output: array containing the lower #
//Create function called: "smaller"
// Parameters will be an array containing two numbers who's value will be compared
// write a function to decide which number in the array is the lowest and return the lower valued number.
// The lower valued number will be returned. 

// Create the function that will make the test pass.

const smaller = (num) => {
    if (num[0] < num[1]) {
        return num[0]
    }
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.

describe("evenOrOdd", () => {
    it("takes in one numbers and returns whether the number is odd", () => {
        let odd = [7]
      expect(evenOrOdd(odd)).toEqual("ODD")
    })
  })

  // pseudo code: 
// input: a # (7)
// Output: a string ("odd")
//Create function called: "evenOrOdd"
// Parameter will be labeled "odd"
// write a function to decide which number in the array is even or odd. 
// If so, "odd" will be returned// If not "even" will be returned. 

// Create the function that will make the test pass.

const evenOrOdd = (odd) => {
    if (odd % 2 !== 0) {
        return "ODD"
    }
}


// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("typeOfFruit", () => {
    it("takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape", () => {
      expect(typeOfFruit("banana")).toEqual("yellow")
      expect(typeOfFruit("apple")).toEqual("red")
      expect(typeOfFruit("grape")).toEqual("purple")
    })
  })
// pseudo code: 
// input: fruit// "banana", "apple", grape
// Output: color// yellow, red, or purple
//Create function called: typesOfFruit
// Parameter will be labeled typesOfFruit
// write a function to decide which color to return based on the fruit input. 
// If f the argument is banana yellow is reutrned, apple red is returned, grape purple is returned.


// Create the function that will make the test pass.
const typeOfFruit = (string) => {
    if (string === "banana") {
        return "yellow"
    } else if (string === "apple") {
        return "red"
    } else if (string === "grape") {
        return "purple"
}
}

// Write the test for a function called rick that returns "Morty".

describe("rick", () => {
    it("that returns Morty", () => {
      expect(rick()).toEqual("Morty")
   })
  })

  // pseudo code: 
// input: None 
// Output: "Morty"
//Create function called: rick
// write a function to return "Morty"

// Create the function that will make the test pass.
const rick = () => {
    return "Morty"
}

// ******** Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe("helloName", () => {
    it("takes a name as an argument and returns a greeting with that name to the screen", () => {
        let name = ("Mike")
        expect(helloName(name)).toEqual(`Hello ${name}`)
     })
    })

    // describe("helloName", () => {
    //     it("takes a name as an argument and returns a greeting with that name to the screen", () => {
    //         let name = `Hello ("string")`
    //         expect(helloName()).toEqual(name)
    //      })
    //     })


// pseudo code: 
// input: Name as an argument 
// Output: Greeting : "hello (name)"
//Create function called: helloName
// write a function to return the greeting with given input (name)

// Create the function that will make the test pass.

const helloName = (name) => {
    return `Hello ${name}`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe("oddOrEven", () => {
    it("takes a number as an argument and logs whether the number is odd or even", () => {
        let nums = [10]
      expect(oddOrEven(nums)).toEqual("Even" || "Odd")
    }) 
  })

// pseudo code: 
// input: a #
// Output: a string (Even or Odd)
//Create function called: oddOrEven
// Parameter will be labeled : nums 
// write a function to evaluate if the number is odd or even

// Create the function that will make the test pass.

const oddOrEven = (nums) => {
    if (nums % 2 === 0) { 
    return "Even" 
} else if (nums % 2 !== 0) { 
    return "Odd"  
}
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () => {
    it("takes a number and returns the result of the number multiplied by 2", () => {
        let dubs = 50
      expect(doubler(dubs)).toEqual(100)
    })
  })
  

// pseudo code: 
// input: a # (50)
// Output: input # doubled (100)
//Create function called: Doubler
// Parameter will be labeled "dubs"
// write a function to multpily the given number by 2 (*2)

// Create the function that will make the test pass.

const doubler = (dubs) => {
    return dubs * 2
}


// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe("mult", () => {
    it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other", () => {
      expect(mult()).toEqual()
    })
  })


// pseudo code: 
// input: 
// Output: 
//Create function called: 
// Parameter will be labeled 
// write a function to decide 
// If 

// Create the function that will make the test pass.

const mult = (numbers, numbers) => {
    return (numbers, numbers)
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// pseudo code: 
// input: 
// Output: 
//Create function called: 
// Parameter will be labeled 
// write a function to decide 
// If 

// Create the function that will make the test pass.


// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

// pseudo code: 
// input: 
// Output: 
//Create function called: 
// Parameter will be labeled 
// write a function to decide 
// If 

// Create the function that will make the test pass.
