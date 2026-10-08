// Global variable
let totalFeeCollected = 0;


// Function Declaration
function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else {
        return "F";
    }
}


// Function Expression
const calculateLateFee = function(daysLate = 0) {
    return daysLate * 10;
};


// Arrow Function
const processStudent = (name, marks, daysLate = 0) => {

    let grade = calculateGrade(marks);
    let fee = calculateLateFee(daysLate);

    totalFeeCollected = totalFeeCollected + fee;

    console.log(
        "Student: " + name +
        ", Grade: " + grade +
        ", Late Fee: Rs." + fee
    );
};


// Process students
processStudent("Aditi", 92, 0);
processStudent("Rohit", 68, 3);
processStudent("Meera", 55, 5);


// Final total
console.log("Final totalFeeCollected:", totalFeeCollected);