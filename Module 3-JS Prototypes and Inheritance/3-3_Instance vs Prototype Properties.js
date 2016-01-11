'use strict';

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

var fluffy = new Cat('Fluffy', 'white');
var sugarmuffin = new Cat('Sugarmuffin', 'ginger');

Cat.prototype.age = 3; // changes for all cat derived from above function

display(fluffy.age); // checks object INSTANCE for age first, if doesn't have it, THEN check prototype of that object
display(sugarmuffin.age);

display( fluffy.hasOwnProperty('age') ); // age is not actually a property
display( fluffy.hasOwnProperty('name') );
display( fluffy.hasOwnProperty('color') );

fluffy.age = 5;

display( fluffy.hasOwnProperty('age') ); // age is NOW actually a property
display( fluffy.hasOwnProperty('name') );
display( fluffy.hasOwnProperty('color') );
