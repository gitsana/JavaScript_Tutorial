'use strict';
/*
object's prototype and function's prototype are used differently

definitions:

A function's prototype: the OBJECT INSTANCE that will become the prototype
for all objects created using this function as a constructor.

An object's prototype: the OBJECT INSTANCE from which the object is inherited.
*/

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

var fluffy = new Cat('Fluffy', 'white');

// both are pointing to the same thing, same instance
display(Cat.prototype);
display(fluffy.__proto__);
display(Cat.prototype == fluffy.__proto__)

Cat.prototype.age = 3;

var sugarmuffin = new Cat('Sugarmuffin', 'ginger');

display(Cat.prototype);
display(fluffy.__proto__);
display(sugarmuffin.__proto__);