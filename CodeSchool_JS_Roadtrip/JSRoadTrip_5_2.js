

var shoe = {size: 6, gender: "women", construction:"slipper"};
var magicShoe = Object.create(shoe);

magicShoe.jewels = "ruby";
magicShoe.travelAction = "click heels";
magicShoe.actionsRequired = 3;

console.log(magicShoe);

console.log(shoe.isPrototypeOf(magicShoe));	//true
console.log(Object.prototype.isPrototypeOf(shoe)); //true
console.log(Object.prototype.isPrototypeOf(magicShoe)); //true

// build constructor for a class
// capitalizing function name means it's a constructor for a class
function Shoe(shoeSize, shoeColor, forGender, constructStyle) {
	this.size = shoeSize;
	this.color = shoeColor;
	this.gender = forGender;
	this.construction = constructStyle;

	this.putOn = function () {alert("Shoe's on!"); };
	this.takeOff = function () {alert("Uh, what's that smell?"); };
}

var beachShoe = new Shoe(10, "blue", "women", "flipflop");
console.log(beachShoe);
beachShoe.straps = 2;	// add in