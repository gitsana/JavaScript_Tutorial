function multiplyTrio(p1, p2, p3) {
	return p1 * p2 * p3;
}

function maxOfTwo(n1, n2) {
	return Math.max(n1,n2);
}

/* 
Counts the "e"'s in a given phrase (phrase is prompted from user)
*/
function countEs() {
	var phrase = prompt("Which phrase would you like to examine?");
	if (typeof(phrase) != "string") {
		alert("That's not a valid entry");
		return false;
	}
	else {
		var eCount = 0;
		for(var i=0; i < phrase.length; i++) {
			if(phrase.charAt(i) == 'e' || phrase.charAt(i) == 'E') {
				eCount++;
			}
		} // for

		alert("There are " + eCount + " E's in '" + phrase + "'.");

	} // else
}

/* 
totPowerGen: number
genId: number
genStatus: string, "on" or "off"
amountPower: number
*/
function changePowerTotal(totPowerGen, genId, genStatus, amountPower) {

	if (genStatus == "on") {
		totPowerGen += amountPower;
		alert("Generator #" + genId + " is now on, adding " + amountPower + " MW, for a total of " + totPowerGen + " MW!");
	}
	else if (genStatus == "off") {
		totPowerGen -= amountPower;
		alert("Generator #" + genId + " is now off, removing " + amountPower + " MW, for a total of " + totPowerGen + " MW!");
	}
	
	return totPowerGen;
}

/* example of a combo array */
var comboArray = ["one", "fish", 2, "fish"];
comboArray.push("three");	// adds to the list
var lastItemInArray = comboArray.pop(); // removes last item, puts it into "lastItemInArray"

/* remove the odds, count the evens in this list */
var numbersList = [2, 5, 8, 4, 7, 12, 6];

console.log("BEFORE: " + numbersList);

var evenCount = 0;
for (var i=0; i < numbersList.length; i++) {
	if (numbersList[i] % 2 == 0) {
		evenCount++;
	}
	else {
		numbersList[i] = undefined;
	}
}

console.log("AFTER: " + numbersList);
console.log("evenCount:" + evenCount);

/* Building a passenger list 
name: name of new passenger
passengerList: array of passengers
*/

function addPassenger(name, passengerList) {
	if (passengerList.length == 0) {
		passengerList.push(name);	// add new
	}
	else {	// loop through array to check empty spots
		for (var i=0; i < passengerList.length; i++) {
			if (passengerList[i] == undefined) {
				passengerList[i] = name;	// empty spot, another passenger left
				return passengerList;
			}
			passengerList.push(name);
			return passengerList;
		}
	}
}

function deletePassenger(name, passengerList) {
	if (passengerList.length == 0) 
		console.log("Passenger list is empty!");
	else {
		for (var i=0; i < passengerList.length; i++) {
			if (passengerList[i] == name) {
				passengerList[i] = undefined;
				return passengerList;
			}
		}
	}
	console.log("Passenger " + name + " not found! Returning the same list.")
	return passengerList;
}












