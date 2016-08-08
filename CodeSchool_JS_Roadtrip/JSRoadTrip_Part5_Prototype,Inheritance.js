prototypes:
Object 

The below also inherit from Object
Array
String
Number
Function

Their properties:

------------
Object 
------------
myObject.valueOf
myObject.constructor
myObject.toLocaleString
myObject.toString
myObject.isPrototypeOf
myObject.propertyIsEnumerable
myObject.hasOwnProperty

------------
Array
------------
myArray.length
myArray.pop()
myArray.push()
myArray.shift()
myArray.reverse()
myArray.sort()
myArray.join()
myArray.reduce()
myArray.slice()

------------
String
------------
myString.length
myString.charAt()
myString.trim()
myString.concat()
myString.indexOf()
myString.replace()
myString.toUpperCase()
myString.toLowerCase()
myString.substring()

------------
Number
------------
myNumber.toFixed()
myNumber.toExponential()
myNumber.toPrecision()

------------
Function
------------
myfunction.name
myfunction.bind()
myfunction.call()
myfunction.apply()

------------
NOTES
------------
""" 
- Though properties are inherited, they are still 'owned' by prototypes, NOT the inheriting object. 
- Object is at the top of the prototype chain
"""

------------
EXAMPLES
------------
// counts all of a particular letter in the string object
String.prototype.countAll = function (letter) {
	var letterCount = 0;
  for(var i=0; i < this.length; i++) {
  	if(this.charAt(i).toUpperCase() == letter.toUpperCase()) {
    	letterCount++;
    }
  }
  return letterCount;
};

var s = "Hello my name is Miranda Myanmar...";
var numLetters = s.countAll("m");
console.log(numLetters);





