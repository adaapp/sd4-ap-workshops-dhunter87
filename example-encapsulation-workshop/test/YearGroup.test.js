const chai = require('chai')
const expect = chai.expect;

const YearGroup = require('../classes/YearGroup.js');

describe('YearGroup', () => {

    let myYearGroup;

    beforeEach(() => {
        myYearGroup = new YearGroup(2019, "DH")
    });

    it('should allow an object to be instantiated from the class', () => {
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
    })

    it('should return the year passed into the constructor', () => {
        expect(myYearGroup._year).to.equal(2019);
    })

    it('should return headOfYear Initials', () => {
        expect(myYearGroup._headOfYear).to.equal("DH");
    })
})