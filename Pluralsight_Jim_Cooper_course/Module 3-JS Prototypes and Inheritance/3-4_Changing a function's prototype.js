'use strict';

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.age = 7;

var fluffy = new Cat('Fluffy', 'gray');
var sugarmuffin = new Cat('Sugarmuffin', 'ginger');

Cat.prototype = { age: 5 };

var snowball = new Cat('snowball', 'white');

display("Fluffy's age=" + fluffy.age);  // still pointing to old prototype in memory
display("Sugarmuffin's age=" + sugarmuffin.age); // still pointing to old prototype in memory
display("Snowball's age=" + snowball.age); // pointing to NEW prototype in memory

