const chai = require('chai')
const expect = chai.expect;

const Student = require('../classes/Student.js');

describe('Student', () => {

    let myStudent;

    beforeEach(() => {
        myStudent = new Student("Daniel Hunter", "11c")
      });

    it('should allow an object to be instantiated from the class', () => {
        expect(myStudent).to.be.an.instanceOf(Student);
    })

    it('should return the name of the student', () => {
        expect(myStudent._name).to.equal("Daniel Hunter");
    })

    it('should return yearGroup of the student (where yearGroup is two digits)', () => {
        expect(myStudent.getYearGroup()).to.equal("11");
    })
    
    it('should return yearGroup of the student (where yearGroup is single digit)', () => {
        myStudent = new Student("Daniel Hunter", "1c")
        expect(myStudent.getYearGroup()).to.equal("01");
    })

    it('should return formGroup of the student', () => {
        expect(myStudent.getFormGroup()).to.equal("c");
    })
})