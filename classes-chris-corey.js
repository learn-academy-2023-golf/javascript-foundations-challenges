class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase();
    this.cream = cream;
    this.sugar = sugar;
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`;
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`;
    } else {
      return `${this.cream} cream`;
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`;
    } else {
      return `${this.sugar} sugar`;
    }
  }
}

//   Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
const blackCoffee = new Coffee("black", 0, 0);
// Write the code that outputs the black coffee's profile
console.log(blackCoffee.coffeeProfile());
// Write the code that makes a coffee object with 1 cream and 2 sugars
const creamCoffee = new Coffee("black", 1, 2);
// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(creamCoffee.coffeeProfile());

//______________________________________
/*
Latte Maker: create a class for Latte
Write a Latte class that takes a flavor, a milk type, and a number of shots
Write a method for your Latte class that outputs the latte's profile
Write the code that makes a regular, single shot latte
Log the regular, single shot latte's profile
Write the code that makes a double shot, hazelnut latte with almond milk.
Log the double shot, hazelnut latte with almond milk's profile.
*/

class Latte {
  constructor(flavor, milk, shot) {
    this.flavor = flavor
    this.milk = milk
    this.shot = shot
  } 

  latteProfile() {
    return `A ${this.flavor} coffee with ${this.milk}, ${this.shots()}`
  }
  shots() {
    if (this.shot > 1) {
      return `${this.shot} shots`;
    } else {
      return `${this.shot} shot`;
    }
  }
}

