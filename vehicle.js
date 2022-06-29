class Vehicle {
  constructor(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passenger = 0;
    this.speed = 0;
    this.mileage = mileage;
    this.started = false;
    this.numberOfWheels = 0;
    this.fuel = 100;
  }

  accelerate() {
    if (this.started) {
      if (this.fuel > 0) {
        console.log((this.speed += 1));
        this.fuel = this.fuel - 1;
      } else {
        console.log("Out of fuel.");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  }

  decelerate() {
    if (this.started) {
      if (this.fuel > 0) {
        console.log((this.speed -= 1));
        this.fuel = this.fuel - 1;
      } else {
        console.log("Out of fuel.");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  }

  stop() {
    console.log("Engine off");
    this.started = false;
  }

  typeOfVehicle() {
    switch (this.numberOfWheels) {
      case 8:
        console.log(this.model + " " + this.make + " is a Truck");
        break;
      case 4:
        console.log(this.model + " " + this.make + " is a Car");
        break;
      case 2:
        console.log(this.model + " " + this.make + " is a Bike");
        break;
    }
  }
}

//This exports things you want to use from this "module", more info in readme
module.exports = { Vehicle };
