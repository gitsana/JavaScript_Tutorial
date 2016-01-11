'use strict';

// constructor functions
function Cat(name, color) {
  this.name = name;
  this.color = color;
}

// use the new keyword
// constructor function
var cat = new Cat('Fluffy', 'brown');
var kitty = new Cat('Lilz', 'spotted orange');

display(cat);
display(kitty);