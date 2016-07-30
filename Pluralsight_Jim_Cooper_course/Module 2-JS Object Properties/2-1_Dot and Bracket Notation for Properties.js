'use strict';

var cat = {
  name: 'Fluffy',
  color: 'white'
};

// bracket notation and dot notation of properties
// produce identical results, but bracket notation is good for times when need to use a string or not valid identified (like has space)
display( cat.color );
display( cat['color'] );

cat['Eye color'] = 'green';
display( cat['Eye color'] ); // case sensitive

// can use string variables for this also
var eyeColor = 'Eye color';
cat[eyeColor] = 'blue';
display( cat[eyeColor] );