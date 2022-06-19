const { averageExams, isStudentPassExam } = require("../gradeCalculations");


// // simple syntax to write testing
    /**
     * Unit testing
     */
// test('it should return exact average', () => {
//     const listValueOfExams = [80, 100, 100, 80];
//     expect(averageExams(listValueOfExams)).toEqual(90);
// });


// This is integration test
describe('grade calculations', () => {

    /**
     * Integration testing
     */

    test('it should return exact average', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });

    test('it should handle non-number ', () => {
        const listValueOfExams = [80, 'a', '100', 80];
        expect(() => averageExams(listValueOfExams)).toThrow();
    });


    test('it should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
    });


    test('it should return exam failed status', () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
    });
});

// if there is too many testing, you can use npm run test -- --coverage
