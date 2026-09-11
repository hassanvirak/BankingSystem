interface StudentMarks {
    StudentID: number;
    Name: string;
    Marks: {
        Subject1: number;
        Subject2: number;
        Subject3: number;
        Subject4: number;
        Subject5: number;
    };
}
function calculateGrade(percentage: number): string {
    if (percentage >= 90) return "A+";
    else if (percentage >= 80) return "A";
    else if (percentage >= 70) return "B";
    else if (percentage >= 60) return "C";
    else if (percentage >= 50) return "D";
    else return "F";
}
function displayStudentInfo(student: StudentMarks): void {
    const marks = student.Marks;
    const totalMarks = marks.Subject1 + marks.Subject2 + marks.Subject3 + marks.Subject4 + marks.Subject5;
    const percentage = (totalMarks / 500) * 100;
    const grade = calculateGrade(percentage);
    console.log("============================================================");
    console.log("STUDENT GRADE REPORT");
    console.log("============================================================");
    console.log(`Student ID: ${student.StudentID}`);
    console.log(`Name: ${student.Name}`);
    console.log("------------------------------------------------------------");
    console.log("Subject Marks:");
    console.log(`  Subject 1: ${marks.Subject1}`);
    console.log(`  Subject 2: ${marks.Subject2}`);
    console.log(`  Subject 3: ${marks.Subject3}`);
    console.log(`  Subject 4: ${marks.Subject4}`);
    console.log(`  Subject 5: ${marks.Subject5}`);
    console.log("------------------------------------------------------------");
    console.log(`Total Marks: ${totalMarks} / 500`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
    console.log(`Grade: ${grade}`);
    console.log("============================================================");
}
const student: StudentMarks = {
    StudentID: 101,
    Name: "Ali Hassan",
    Marks: {
        Subject1: 85,
        Subject2: 90,
        Subject3: 75,
        Subject4: 88,
        Subject5: 92
    }
};
displayStudentInfo(student);