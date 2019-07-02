const chai = require('chai')
const expect = chai.expect;

const Teacher = require('../classes/Teacher.js');

describe('Teacher', () => {
    it('should allow an object to be instantiated from the class', () => {
        let myTeacher = new Teacher()
        expect(myTeacher).to.be.an.instanceOf(Teacher);
    })

    it('should return the name of the Teacher', () => {
        let myTeacher = new Teacher("John Doe", "JD", "English");
        expect(myTeacher.getName()).to.equal("John Doe");
    })

    it('should return initials of the Teacher', () => {
        let myTeacher = new Teacher("John Doe", "JD", "English");
        expect(myTeacher.getInitials()).to.equal("JD");
    })

    it('should return subject of the Teacher', () => {
        let myTeacher = new Teacher("John Doe", "JD", "English");
        expect(myTeacher.getSubject()).to.equal("English");
    })

    it('should return YearsOfService of the Teacher', () => {
        let myTeacher = new Teacher("John Doe", "JD", "English");
        expect(myTeacher.getYearsOfService()).to.equal(0);
    })
    
    it('should return YearsOfService of the Teacher after updating yearsOfService', () => {
        let myTeacher = new Teacher("John Doe", "JD", "English");
        myTeacher.setYearsOfService(12);
        expect(myTeacher.getYearsOfService()).to.equal(12);
    })
})