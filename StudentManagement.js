// StudentManagement.ts - NO .repeat() VERSION
var students = [
    { ID: 101, Name: "Ali Khan", Age: 20, Department: "Computer Science", CGPA: 3.8 },
    { ID: 102, Name: "Sara Ahmed", Age: 21, Department: "Mathematics", CGPA: 3.9 },
    { ID: 103, Name: "Usman Ali", Age: 19, Department: "Physics", CGPA: 3.5 },
    { ID: 104, Name: "Fatima Noor", Age: 22, Department: "Chemistry", CGPA: 3.2 },
    { ID: 105, Name: "Hassan Raza", Age: 20, Department: "Computer Science", CGPA: 3.7 }
];
function displayAllStudents() {
    console.log("============================================================");
    console.log("STUDENT RECORDS");
    console.log("============================================================");
    console.log("ID\tName\t\tAge\tDepartment\t\tCGPA");
    console.log("------------------------------------------------------------");
    students.forEach(function (student) {
        console.log("".concat(student.ID, "\t").concat(student.Name, "\t\t").concat(student.Age, "\t").concat(student.Department, "\t\t").concat(student.CGPA));
    });
    console.log("============================================================");
}
function displayHighestCGPAStudent() {
    var highestCGPAStudent = students[0];
    for (var i = 1; i < students.length; i++) {
        if (students[i].CGPA > highestCGPAStudent.CGPA) {
            highestCGPAStudent = students[i];
        }
    }
    console.log("\n STUDENT WITH HIGHEST CGPA ");
    console.log("========================================");
    console.log("Name: ".concat(highestCGPAStudent.Name));
    console.log("ID: ".concat(highestCGPAStudent.ID));
    console.log("Department: ".concat(highestCGPAStudent.Department));
    console.log("CGPA: ".concat(highestCGPAStudent.CGPA));
    console.log("========================================");
}
displayAllStudents();
displayHighestCGPAStudent();
