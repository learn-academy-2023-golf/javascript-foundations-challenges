// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("areYouTired", () => {
    it("returns drink coffee if you are tired and keep working if you are not tired.", () => {
      expect(areYouTired("yes")).toEqual("drink coffee")
      expect(areYouTired("no")).toEqual("keep working")
    })
  })
// Create the function that will make the test pass.
//create a fucntion called are you tired
// one parameter string
// conditional statemnt if string equals yes = drink coffee 
// if string equals no = keep wotking 

const areYouTired = (string) => {
    if (string === "yes") {
        return "drink coffee"
    } else if (string === "no") {
        return "keep working"
    }
}
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("areYouStressed", () => {
    it("returns relax if you are stressed and keep going if you are not stressed.", () => {
      expect(areYouStressed("yes")).toEqual("relax")
      expect(areYouStressed("no")).toEqual("keep going")
    })
  })

// Create the function that will make the test pass.
//created a function called areYouStressed
//one parameter string
//conditional statement if string equals yes = relax
//if string equals no = keep going 

const areYouStressed = (string) => {
    if (string === "yes") {
        return "relax"
    } else if (string === "no") {
        return "keep going"
    }
}
// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("price", () => {
    it("returns in budget if a price is lower than $300.", () => {
      expect(price(1)).toEqual("in budget")
    })
  })
// Create the function that will make the test pass.
//create a function called price
//one parameter number
//conditional statement if number is < 300 = "in budget"

const price = (number) => {
    if (number < 300) {
        return "in budget"
    }
}
// Write the test for a function that takes in two numbers and returns the smaller number.
describe("smallerNumber", () => {
    it("takes in two numbers and returns the smaller number.", () => {
        let num1 = 25
        let num2 = 17
      expect(smallerNumber(num1, num2)).toEqual(17)
    })
  })
// Create the function that will make the test pass.
// create a function called smallerNumber
// two parameters num1, num2
// condiotnal statemnt if num1 > num2 return num2
// if num1 < num2 return num1

const smallerNumber = (num1, num2) => {
    if (num1 > num2) {
        return num2
    } else if (num1 < num2) {
        return num1
    }
}
// Write the test for a function that takes in one numbers and returns whether the number is odd.
describe("oddNumber", () => {
    it("returns whether the number is odd.", () => {
        let num1 = 27
      expect(oddNumber(num1)).toEqual("odd")
    })
  })
// Create the function that will make the test pass.
//create a function called oddNumber
// one parameter num1
// conditional statement if num1 is odd return odd

const oddNumber = (num1) => {
    if (num1 % 2 === 1) {
        return "odd"
    }
}
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruitColor", () => {
    it("returns color of fruit based on input", () => {
      expect(fruitColor("banana")).toEqual("yellow")
      expect(fruitColor("apple")).toEqual("red")
      expect(fruitColor("grape")).toEqual("purple")
    })
  })
// Create the function that will make the test pass.

const fruitColor = (fruit) => {
    if (fruit === "banana") {
        return "yellow"
    } else if (fruit === "apple") {
        return "red"
    }else if (fruit === "grape") {
        return "purple"
    }
}
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