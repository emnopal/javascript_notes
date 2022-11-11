const averageExams = (valuesExam) => {

    // check if valuesExam is number
    const numberValidation = valuesExam.every(exam => typeof exam === 'number');
    if (!numberValidation) throw Error('please input number');

    // sum valuesExam if number, with reduce function
    const sumValues = valuesExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumValues / valuesExam.length;
};

const isStudentPassExam = (valuesExam, name) => {
    const minValues = 75;
    const average = averageExams(valuesExam);

    if (average > minValues) {
        console.log(`${name} pass the exams`);
        return true;
    } else {
        console.log(`${name} fail the exams`);
        return false;
    }
};

module.exports = { averageExams, isStudentPassExam };
