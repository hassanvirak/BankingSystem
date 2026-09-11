var Vehicle = /** @class */ (function () {
    function Vehicle(vehicleNumber, brand, model, fuelType) {
        this.isEngineStarted = false;
        this.vehicleNumber = vehicleNumber;
        this.brand = brand;
        this.model = model;
        this.fuelType = fuelType;
    }
    Vehicle.prototype.displayDetails = function () {
        console.log("==================================================");
        console.log("VEHICLE DETAILS");
        console.log("==================================================");
        console.log("Vehicle Number: ".concat(this.vehicleNumber));
        console.log("Brand: ".concat(this.brand));
        console.log("Model: ".concat(this.model));
        console.log("Fuel Type: ".concat(this.fuelType));
        console.log("Engine Status: ".concat(this.isEngineStarted ? "Running" : "Stopped"));
        console.log("==================================================");
    };
    Vehicle.prototype.startEngine = function () {
        if (!this.isEngineStarted) {
            this.isEngineStarted = true;
            console.log("".concat(this.brand, " ").concat(this.model, " engine started."));
        }
        else {
            console.log("Engine is already running.");
        }
    };
    Vehicle.prototype.stopEngine = function () {
        if (this.isEngineStarted) {
            this.isEngineStarted = false;
            console.log("".concat(this.brand, " ").concat(this.model, " engine stopped."));
        }
        else {
            console.log("Engine is already stopped.");
        }
    };
    return Vehicle;
}());
var vehicle1 = new Vehicle("ABC-123", "Toyota", "Corolla", "Petrol");
var vehicle2 = new Vehicle("DEF-456", "Honda", "Civic", "Diesel");
var vehicle3 = new Vehicle("GHI-789", "Suzuki", "Swift", "Petrol");
console.log("VEHICLE MANAGEMENT SYSTEM\n");
vehicle1.displayDetails();
vehicle1.startEngine();
vehicle1.displayDetails();
vehicle1.stopEngine();
vehicle1.displayDetails();
console.log("\n");
vehicle2.displayDetails();
vehicle2.startEngine();
vehicle2.stopEngine();
console.log("\n");
vehicle3.displayDetails();
vehicle3.startEngine();
