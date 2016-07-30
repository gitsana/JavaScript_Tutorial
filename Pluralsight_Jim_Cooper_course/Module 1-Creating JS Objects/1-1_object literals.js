'use strict';

//object literals
var cat = { 
	name: 'Fluffy', 
	color: 'white' 
};

// add property dynamically to object
cat.age = 14;
// add function dynamically to object
cat.speak = function() {
  display("Meow! says the cat")
};

display( "Name: " + cat.name );
display( "Age: " + cat.age );



cat.speak();