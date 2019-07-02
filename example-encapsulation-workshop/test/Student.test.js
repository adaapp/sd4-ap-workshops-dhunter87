const chai = require('chai')
const expect = chai.expect;

const Student = require('../classes/Student.js');

describe('Student', () => {
    it('should allow an object to be instantiated from the class', () => {
        let myStudent = new Student()
        expect(myStudent).to.be.an.instanceOf(Student);
    })

    it('should return the name of the student', () => {
        let myStudent = new Student("Daniel Hunter", "11c")
        expect(myStudent._name).to.equal("Daniel Hunter");
    })

    it('should return yearGroup of the student', () => {
        let myStudent = new Student("Daniel Hunter", "1c")
        expect(myStudent.getYearGroup()).to.equal("01");
    })

    it('should return formGroup of the student', () => {
        let myStudent = new Student("Daniel Hunter", "11c")
        expect(myStudent.getFormGroup()).to.equal("c");
    })
})