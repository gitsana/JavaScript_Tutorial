'use strict';

var arr = ['red', 'blue', 'green'];
var arr1 = new Array('red', 'blue', 'green', 'purple'); // same as above declaration

var last = arr[arr.length-1];
display(last);

for (var i in arr) {
  display(i + "=" + arr[i]);
}

// putting in a property into JUST in the array "arr"
// Object.defineProperty(arr, 'last', {
//   get: function() {
//     return this[this.length-1];
//   }
// });

// putting in a property into the array prototype versus JUST in the array
Object.defineProperty(Array.prototype, 'last', {
  get: function() {
    return this[this.length-1];
  }
});

display("The last one is (arr): " + arr.last);
display("The last one is (arr1): " + arr1.last);