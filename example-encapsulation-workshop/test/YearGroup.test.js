const chai = require('chai')
const expect = chai.expect;

const YearGroup = require('../classes/YearGroup.js');

describe('YearGroup', () => {
    it('should allow an object to be instantiated from the class', () => {
        let myYearGroup = new YearGroup()
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
    })

    it('should return the year passed into the constructor', () => {
        let myYearGroup = new YearGroup(2019)
        expect(myYearGroup._year).to.equal(2019);
    })

    it('should return headOfYear Initials', () => {
        let myYearGroup = new YearGroup(2019, "DH")
        expect(myYearGroup._headOfYear).to.equal("DH");
    })
})