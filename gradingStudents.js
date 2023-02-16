//https://www.hackerrank.com/contests/microverse-fast-track/challenges/grading/problem

function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++){
        let nextMultipleOfFive = Math.ceil(grades[i] / 5) * 5;
        if (grades[i] >= 38 && ((nextMultipleOfFive - grades[i]) < 3)) {
        grades[i] = nextMultipleOfFive;
    }
    }       
    return grades;
}
