'use strict';

var cat = {
  name: { first: 'Fluffy', last: 'LeBeouf' },
  color: 'white',
  owner: 'Sally Hansen',
  breed: 'Persian cat'
};

// setters and getters
Object.defineProperty(cat, 'fullName', {
  get: function() {
    return this.name.first + ' ' + this.name.last
  },
  set: function(catFullName) {
    var nameParts = catFullName.split(' ');
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];
  }
});

display(cat.fullName);

cat.fullName = 'Marigold Wabber';
display(cat.fullName);
display(cat.name.first);
display(cat.name.last);
