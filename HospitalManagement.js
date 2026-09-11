var patients = [
    { PatientID: 1, Name: "Muhammad Usman", Disease: "Fever", Age: 45, Admitted: true },
    { PatientID: 2, Name: "Ayesha Bibi", Disease: "Diabetes", Age: 55, Admitted: true },
    { PatientID: 3, Name: "Rizwan Ali", Disease: "Headache", Age: 30, Admitted: false },
    { PatientID: 4, Name: "Zainab Fatima", Disease: "Asthma", Age: 25, Admitted: true },
    { PatientID: 5, Name: "Abdul Rehman", Disease: "Flu", Age: 60, Admitted: false }
];
function displayAllPatients() {
    console.log("================================================================================");
    console.log("ALL PATIENTS");
    console.log("================================================================================");
    console.log("ID\tName\t\t\tDisease\t\tAge\tAdmitted");
    console.log("--------------------------------------------------------------------------------");
    patients.forEach(function (patient) {
        console.log("".concat(patient.PatientID, "\t").concat(patient.Name, "\t\t").concat(patient.Disease, "\t\t").concat(patient.Age, "\t").concat(patient.Admitted));
    });
    console.log("================================================================================");
}
function displayAdmittedPatients() {
    var admittedPatients = patients.filter(function (patient) { return patient.Admitted === true; });
    console.log("\nADMITTED PATIENTS");
    console.log("================================================================================");
    console.log("ID\tName\t\t\tDisease\t\tAge");
    console.log("--------------------------------------------------------------------------------");
    admittedPatients.forEach(function (patient) {
        console.log("".concat(patient.PatientID, "\t").concat(patient.Name, "\t\t").concat(patient.Disease, "\t\t").concat(patient.Age));
    });
    console.log("================================================================================");
}
displayAllPatients();
displayAdmittedPatients();
