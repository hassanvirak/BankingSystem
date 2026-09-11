interface Patient {
    PatientID: number;
    Name: string;
    Disease: string;
    Age: number;
    Admitted: boolean;
}
const patients: Patient[] = [
    { PatientID: 1, Name: "Muhammad Usman", Disease: "Fever", Age: 45, Admitted: true },
    { PatientID: 2, Name: "Ayesha Bibi", Disease: "Diabetes", Age: 55, Admitted: true },
    { PatientID: 3, Name: "Rizwan Ali", Disease: "Headache", Age: 30, Admitted: false },
    { PatientID: 4, Name: "Zainab Fatima", Disease: "Asthma", Age: 25, Admitted: true },
    { PatientID: 5, Name: "Abdul Rehman", Disease: "Flu", Age: 60, Admitted: false }
];
function displayAllPatients(): void {
    console.log("================================================================================");
    console.log("ALL PATIENTS");
    console.log("================================================================================");
    console.log("ID\tName\t\t\tDisease\t\tAge\tAdmitted");
    console.log("--------------------------------------------------------------------------------");
    patients.forEach(patient => {
        console.log(`${patient.PatientID}\t${patient.Name}\t\t${patient.Disease}\t\t${patient.Age}\t${patient.Admitted}`);
    });
    console.log("================================================================================");
}
function displayAdmittedPatients(): void {
    const admittedPatients = patients.filter(patient => patient.Admitted === true);
    console.log("\nADMITTED PATIENTS");
    console.log("================================================================================");
    console.log("ID\tName\t\t\tDisease\t\tAge");
    console.log("--------------------------------------------------------------------------------");
    admittedPatients.forEach(patient => {
        console.log(`${patient.PatientID}\t${patient.Name}\t\t${patient.Disease}\t\t${patient.Age}`);
    });
    console.log("================================================================================");
}
displayAllPatients();
displayAdmittedPatients();