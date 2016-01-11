'use strict';

var cat = {
  name: 'Fluffy',
  color: 'white'
};

// sets this property read-only
Object.defineProperty( cat, 'name', {writable: false} );
//cat.name = 'scratchy'; // error shown in console
// however if name is itself an object, the property's objects CAN be changed bc name is just a pointer to them
// to NOT be able to change them, use: 
// Object.freeze(cat.name)
display(Object.getOwnPropertyDescriptor(cat, 'name'));
// has value, plus writable, enumerable, and configurable attributes of properties

var dog = { // the name property is an object itself
  name: {first: 'Barky', last: 'Jones'},
  owner: 'Jo Jones'
};

display(dog.name);
dog.name.last = 'Michaelson-Hench';
display(dog.name);