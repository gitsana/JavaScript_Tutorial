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

------------------------------------
THE valueOf() PROPERTY
------------------------------------
var person = {name:'pin', addy:'101 Hollow Rd'};
console.log(person.valueOf());

------------------------------------------------------------------------
THE valueOf() PROPERTY (of the Fencepost object created previously)
------------------------------------------------------------------------
Fencepost.prototype.valueOf = function() {
	return Math.sqrt(this.x*this.x + this.y*this.y);
};

------------------------------------------------------------------------
Override the toString method (see last part of this below)
------------------------------------------------------------------------
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
  sendRopeTo: function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function(x, y) {
    this.x = x;
    this.y = y;
  },
  valueOf: function() {
  return Math.sqrt(this.x * this.x +
                   this.y * this.y);
  }
};

// override the toString method below
Fencepost.prototype.toString = function() {
	var list = "";
	for(var i=0; i < this.connectionsTo.length; i++) {
		list += this.connectionsTo[i].postNum + "\n";
	}
	return "Fence post #" + this.postNum + "\nConnected to posts:\n" + list + "Distance from ranch: " + this.valueOf() + " yards";
};



























