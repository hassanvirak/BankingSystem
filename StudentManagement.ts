// StudentManagement.ts - NO .repeat() VERSION

interface Student {
    ID: number;
    Name: string;
    Age: number;
    Department: string;
    CGPA: number;
}

const students: Student[] = [
    { ID: 101, Name: "Ali Khan", Age: 20, Department: "Computer Science", CGPA: 3.8 },
    { ID: 102, Name: "Sara Ahmed", Age: 21, Department: "Mathematics", CGPA: 3.9 },
    { ID: 103, Name: "Usman Ali", Age: 19, Department: "Physics", CGPA: 3.5 },
    { ID: 104, Name: "Fatima Noor", Age: 22, Department: "Chemistry", CGPA: 3.2 },
    { ID: 105, Name: "Hassan Raza", Age: 20, Department: "Computer Science", CGPA: 3.7 }
];

function displayAllStudents(): void {
    console.log("============================================================");
    console.log("STUDENT RECORDS");
    console.log("============================================================");
    console.log("ID\tName\t\tAge\tDepartment\t\tCGPA");
    console.log("------------------------------------------------------------");
    
    students.forEach(student => {
        console.log(`${student.ID}\t${student.Name}\t\t${student.Age}\t${student.Department}\t\t${student.CGPA}`);
    });
    console.log("============================================================");
}

function displayHighestCGPAStudent(): void {
    let highestCGPAStudent = students[0];
    
    for (let i = 1; i < students.length; i++) {
        if (students[i].CGPA > highestCGPAStudent.CGPA) {
            highestCGPAStudent = students[i];
        }
    }
    
    console.log("\n STUDENT WITH HIGHEST CGPA ");
    console.log("========================================");
    console.log(`Name: ${highestCGPAStudent.Name}`);
    console.log(`ID: ${highestCGPAStudent.ID}`);
    console.log(`Department: ${highestCGPAStudent.Department}`);
    console.log(`CGPA: ${highestCGPAStudent.CGPA}`);
    console.log("========================================");
}

displayAllStudents();
displayHighestCGPAStudent();