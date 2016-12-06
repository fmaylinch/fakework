console.log("start!");

class Car {

	// properties (state)
	// in js you don't define them

	// constructor
	constructor(model) {
		this.model = model;
		this.speed = 0;
	}

	// methods (actions)
	accelerate(amount) {
		this.speed += amount;
	}

	brake(amount) {
		this.speed -= amount;
		if (this.speed < 0) {
			this.speed = 0;
		}
	}

	// implicityly called every time the object has to be
	// converted into a string
	toString() {
		return this.model + " at " + this.speed + "km/h";
	}
}

// This is like a unit test
class Mechanic {

	constructor(car) {
		this.car = car;
	}

    // return true if the car works ok, false otherwise
    // this is like a test
	testCar() {

		this.car.accelerate(100);
		if (this.car.speed !== 100) return false;

		this.car.brake(60);
		if (this.car.speed !== 40) return false;

		this.car.brake(200);
		if (this.car.speed !== 0) return false;

		return true;
	}
}

let ford = new Car("Ford");
let ferrari = new Car("Ferrari");
let toyota = new Car("Toyota");

let mec = new Mechanic(ford);
let carIsOk = mec.testCar();
console.log("The car " + ford.model + " is ok? " + carIsOk);











