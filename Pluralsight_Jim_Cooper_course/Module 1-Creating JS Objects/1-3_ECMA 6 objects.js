'use strict';

// ECMA Script 6 classes
// looks more like a traditional class
class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  
  // add a method
  speak() {
    display('Meowww! says... ' + this.name )
  }
}

var cat = new Cat( 'Fluffy', 'polka-dotted pink' );
display(cat);
cat.speak();

var kittycat = new Cat( 'Mel', 'red-and-white' );
display(kittycat);
kittycat.speak();