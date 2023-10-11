// Prompt: Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// input: yes
// output:"drink coffee"
// input: no
// output: "keep working"

describe("areYouTired", () => {
    // Write a funtion for areYoutired
    it("returns drink coffee if you are tired and keep working if you are not tired.", () => {
    // The it statement is essentially what you want it to do.    
      expect(areYouTired("yes")).toEqual("drink coffee!")
    // The expect is the direct result of what you want it to spit out.
      expect(areYouTired("no")).toEqual("keep working!")
    })
  })

const areYouTired = (string) => {
if (string === "yes") {
    return "drink coffee!"
} else if (string === "no") {
    return "keep working!"
}

}
// Passed
//______________________________
// Create the function that will make the test pass.
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("areYouStressed", () => {
    it("returns relax if you are stressed and keep going if you are not stressed.", () => {
      expect(areYouStressed("yes")).toEqual("relax!")
      expect(areYouStressed("no")).toEqual("keep going!")
    })
  })

const areYouStressed = (string) => {
if (string === "yes") {
    return "relax!"
} else if (string === "no") {
    return "keep going!"
}

}




// Create the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("priceFilter", () => {
    it("returns in budget if a price is lower than $300.", () => {
      expect(priceFilter(10)).toEqual("In budget!")
    })
  })

  const priceFilter = (number) => {
    if (number < 300) {
    return "In budget!"   
    }
  }

// Create the function that will make the test pass.
// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.
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
