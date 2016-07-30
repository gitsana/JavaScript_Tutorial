'use strict';

var cat = {
  name: { first: 'Fluffy', last: 'LeBeouf' },
  color: 'white',
  owner: 'Sally Hansen',
  breed: 'Persian cat'
};

// enumerable means property's objects can or cannot be looped through, as above
// Object.defineProperty(cat, 'name', {enumerable: false});

// loop through object's property names
display("------For loop------");
for ( var propertyName in cat ) {
  display( propertyName + "=" + cat[propertyName] );
};

display( "------Object keys:------\n" + Object.keys(cat) );

display( "------JSON String:------\n" + JSON.stringify(cat) );

display("------Old fashioned way------" + cat);