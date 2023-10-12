// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth"
//  }
    //  console.log(person.firstName) // output: Authur
    //  console.log(person.lastName) // output: Dent
    //  console.log(person.homePlanet) // output: Authur , Dent ,Earth


// Write the code that accesses the first name of the person object.
// Write the code that accesses the last name of the person object.
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
//pseudo code: create a function calle getData that uses string interpolation 
//use keyword this to access the value of firstName
//return 

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   getData: function (){
//   return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//  } 
// }
//  console.log(person.getData())

 

// Consider this variable:

 const product = {
 name: "chair",
 price: 24.99 ,


// // Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// //pseudo code: make a function called describe product
//return this chair costs $24.99
getData: function (){
return `this ${this.name} costs $${this.price * .07 + this.price}`
}
 }
 console.log(product.getData())


//pseudo code: we are going to create a function called totalWithTax
//7% tax is equal to price multiplied .07
//total price is equal to price + price multiplied by .07
//output: $26.73

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// Consider this variable:


//  const lunch = {
//   name: "PB and Banana",
//  type: "sandwich",
//    ingredients: ["bread", "peanut butter", "banana"]
// }
// Write the code that accesses the ingredients property.
// Write the code that access the third ingredient of the lunch object.
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// Consider this variable:

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// Write the code that destructures the author object so that the following code snippet will run successfully:
// console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"
// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"
// Consider this variable:

// const triangleDimensions = {
//   base: 2,
//   height: 5
// }
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// Write the code that will update the base to be the value of 6.
// 🏔 Stretch Goals
// Consider this variable:

// const learn = {
//   cohorts: {
//     2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"],
//     2023: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet"]
//   }
// }
// Write the code that logs the name of your cohort.
// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// // output: ["2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf", "2022 Hotel", "2023 Alpha", "2023 Bravo", "2023 Charlie", "2023 Delta", "2023 Echo", "2023 Foxtrot", "2023 Golf", "2023 Hotel", "2023 India", "2023 Juliet"]
