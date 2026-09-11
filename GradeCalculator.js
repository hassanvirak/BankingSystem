function calculateGrade(percentage) {
    if (percentage >= 90)
        return "A+";
    else if (percentage >= 80)
        return "A";
    else if (percentage >= 70)
        return "B";
    else if (percentage >= 60)
        return "C";
    else if (percentage >= 50)
        return "D";
    else
        return "F";
}
function displayStudentInfo(student) {
    var marks = student.Marks;
    var totalMarks = marks.Subject1 + marks.Subject2 + marks.Subject3 + marks.Subject4 + marks.Subject5;
    var percentage = (totalMarks / 500) * 100;
    var grade = calculateGrade(percentage);
    console.log("============================================================");
    console.log("STUDENT GRADE REPORT");
    console.log("============================================================");
    console.log("Student ID: ".concat(student.StudentID));
    console.log("Name: ".concat(student.Name));
    console.log("------------------------------------------------------------");
    console.log("Subject Marks:");
    console.log("  Subject 1: ".concat(marks.Subject1));
    console.log("  Subject 2: ".concat(marks.Subject2));
    console.log("  Subject 3: ".concat(marks.Subject3));
    console.log("  Subject 4: ".concat(marks.Subject4));
    console.log("  Subject 5: ".concat(marks.Subject5));
    console.log("------------------------------------------------------------");
    console.log("Total Marks: ".concat(totalMarks, " / 500"));
    console.log("Percentage: ".concat(percentage.toFixed(2), "%"));
    console.log("Grade: ".concat(grade));
    console.log("============================================================");
}
var student = {
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
