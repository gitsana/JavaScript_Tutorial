'use strict';

var cat = {
  name: { first: 'Fluffy', last: 'LeBeouf' },
  color: 'white',
  owner: 'Sally Hansen',
  breed: 'Persian cat'
};

// configurable doesn't let certain property certain attributes from being changes
// prevents from being deleted
// Object.defineProperty(cat, 'name', {configurable: false});
// Object.defineProperty(cat, 'name', {enumerable: false}); // now we cannot configure the enumerable property
// we cannot even change configurable back
// however we can still change writable property
display(cat.name);
delete cat.name; // deletes a property
display(cat.name);

for ( var p in cat ) {
  display(p + "=" + cat[p]);
}


