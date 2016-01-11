'use strict';

function Animal(voice) {
  this.voice = voice || 'grunt'; // not sure how this works?
}

Animal.prototype.speak = function () {
  display(this.voice);
}

function Cat(name, color) {
  Animal.call(this,'meow'); // not sure how this works?
  this.name = name;
  this.color = color;
}

Cat.prototype.age = 7;

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

var fluffy = new Cat('Fluffy', 'gray');
display(fluffy instanceof Cat)
display(fluffy instanceof Animal)
display(fluffy)
display(fluffy.__proto__);
display(fluffy.__proto__.__proto__);

fluffy.speak();

function Dog(name, owner) {
  Animal.call(this,'woof!');
  this.name = name;
  this.owner = owner;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var spot = new Dog('Spot', 'Melanie Homebrooks');
display("Dog speaking:");
spot.speak();

