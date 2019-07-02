const chai = require('chai')
const expect = chai.expect;

const Teacher = require('../classes/Teacher.js');

describe('Teacher', () => {
    let myTeacher;

    beforeEach(() => {
        myTeacher = new Teacher("John Doe", "JD", "English");
    });

    it('should allow an object to be instantiated from the class', () => {
        expect(myTeacher).to.be.an.instanceOf(Teacher);
    })

    it('should return the name of the Teacher', () => {
        expect(myTeacher.getName()).to.equal("John Doe");
    })

    it('should return initials of the Teacher', () => {
        expect(myTeacher.getInitials()).to.equal("JD");
    })

    it('should return subject of the Teacher', () => {
        expect(myTeacher.getSubject()).to.equal("English");
    })

    it('should return YearsOfService of the Teacher', () => {
        expect(myTeacher.getYearsOfService()).to.equal(0);
    })
    
    it('should return YearsOfService of the Teacher after updating yearsOfService', () => {
        myTeacher.setYearsOfService(12);
        expect(myTeacher.getYearsOfService()).to.equal(12);
    })
})