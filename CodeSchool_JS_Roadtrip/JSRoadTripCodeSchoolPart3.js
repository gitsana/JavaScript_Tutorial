var numbers = [16, 4, 12];

// anonymous function
var results = numbers.map( function (arrayCell) {
  return arrayCell * 2;
} ); 

console.log(results);	// [32, 8, 24]

// another method
function doubleNumber(number) {
	return number * 2;
}

var results = numbers.map(doubleNumber);
console.log(results);	// [32, 8, 24]

-----------------------------------------------------------------------------------

var passengers = [ ["Thomas", "Meeks"],
					["Gregg", "Pollack"],
					["Christine", "Wong"],
					["Dan", "McGaw"] ];

var modifiedNames = passengers.map( function (arrayCell) {
	return arrayCell[0] + " " + arrayCell[1];
} );

console.log(modifiedNames);

modifiedNames.map(function (arrayCell) {
	alert("Yo, " + arrayCell + "!");
});

-----------------------------------------------------------------------------------
// an array of functions
var puzzlers = [
	function(input) {
  	return (3 * input - 8);
  },
  function(input) {
  	return Math.pow((input + 2),3);
  },
  function(input) {
  	return Math.pow(input,2) - 9;
  },
  function(input) {
  	return input % 4;
  }
];
console.log(puzzlers[1]);
-----------------------------------------------------------------------------------
array.push(item);	// adds to END of array
array.shift();	// removes (and returns) the FIRST item of the array
array.pop();    // removes (and returns) the LAST item of the array
-----------------------------------------------------------------------------------
var sweetAnnouncement = function () {alert("Sweet announcement")};
sweetAnnouncement();

// mapping things
var fruits = ["apple", "orange", "banana", "apricot"];
var fruitJuice = fruits.map(
  function(fruit) {
    return "\n" + fruit + " juice";
    }
);
alert(fruitJuice);
fruits.pop();
console.log("after pop: " + fruits);
fruits.shift();
console.log("after shift: " + fruits);
fruits.push("eggnog");
console.log("after push: " + fruits);
fruitJuice.push("caloria");
console.log(fruitJuice);
-----------------------------------------------------------------------------------
// rides and wait times
var parkRides = [ ["Roller coaster", 40] , ["Swing set", 55] , 
                  ["Freefall", 20], ["Roaring rapids", 90] ];
var fastPassQueue = ["Roller coaster" , "Swing set", "Freefall", "Roaring rapids"];
var rideWanted = "Freefall"; // change to first item on fastpass queue for the if part
// method 1 to do this - store into a variable and call the var as a function
var ticket = buildTicket(parkRides, fastPassQueue, rideWanted);
ticket(); 
// method 2 to do this - immediately invoking function itself w/ 2 parenthesis, no var needed
buildTicket(parkRides, fastPassQueue, rideWanted)();


function buildTicket( allRides, fastPassRides, customerPick ) {

  if (fastPassRides[0] == customerPick) {
    var pass = fastPassRides.shift();
    return function () {
      alert("Quick! You've got a Fast Pass to " + pass + "!");
    };
  }
  else {
    // loop through all rides available for wait times
    for (var i=0; i < allRides.length; i++) {
      if (allRides[i][0] == customerPick) {
        return function() {
          alert("A ticket is printing for " + customerPick + "!\n" +
            "Your wait time is about " + allRides[i][1] + " minutes!");
        }
      }
    }
  } // else
} // function
-----------------------------------------------------------------------------------
// Closures
function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

// build your warning message here
var icebergAlert = warningMaker("iceberg");
icebergAlert();
-----------------------------------------------------------------------------------
// Closures
function warningMaker(obstacle) {
  return function(number, location) { // set parameters, closure comes from obstacle
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
number + " have been spotted at the " + location + "!");
  };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");

// call the two functions here
killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard Beach");
-----------------------------------------------------------------------------------
























