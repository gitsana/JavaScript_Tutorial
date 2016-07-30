'use strict';

class Animal {
  constructor(voice) {
    this.voice = voice || 'grunt'; // defaults voice to 'grunt' if no voice passed in
  }
  
  speak() {
    display(this.voice);
  }
}

// Animal.prototype.speak = function () {
//   display(this.voice);
// }

class Cat extends Animal {
  constructor(name, color) {
    super('meow!');
    this.name = name;
    this.color = color;
  }
}

// function Cat(name, color) {
//   Animal.call(this,'meow'); // not sure how this works?
//   this.name = name;
//   this.color = color;
// }

var fluffy = new Cat('Fluffy', 'gray-white');
display(fluffy);
fluffy.speak();