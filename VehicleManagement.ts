class Vehicle {
    private vehicleNumber: string;
    private brand: string;
    private model: string;
    private fuelType: string;
    private isEngineStarted: boolean = false;
    constructor(vehicleNumber: string, brand: string, model: string, fuelType: string) {
        this.vehicleNumber = vehicleNumber;
        this.brand = brand;
        this.model = model;
        this.fuelType = fuelType;
    }
    displayDetails(): void {
        console.log("==================================================");
        console.log("VEHICLE DETAILS");
        console.log("==================================================");
        console.log(`Vehicle Number: ${this.vehicleNumber}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Fuel Type: ${this.fuelType}`);
        console.log(`Engine Status: ${this.isEngineStarted ? "Running" : "Stopped"}`);
        console.log("==================================================");
    }
    startEngine(): void {
        if (!this.isEngineStarted) {
            this.isEngineStarted = true;
            console.log(`${this.brand} ${this.model} engine started.`);
        } else {
            console.log(`Engine is already running.`);
        }
    }
    stopEngine(): void {
        if (this.isEngineStarted) {
            this.isEngineStarted = false;
            console.log(`${this.brand} ${this.model} engine stopped.`);
        } else {
            console.log(`Engine is already stopped.`);
        }
    }
}
const vehicle1 = new Vehicle("ABC-123", "Toyota", "Corolla", "Petrol");
const vehicle2 = new Vehicle("DEF-456", "Honda", "Civic", "Diesel");
const vehicle3 = new Vehicle("GHI-789", "Suzuki", "Swift", "Petrol");
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