// const chai = require('chai')
// const expect = chai.expect;

// const Animal = require('../models/Animal.js');

// describe('Animal Constructor', () => {

//     let myAnimal,
//      field = 'Tiger',
//      x = 425,
//      y = 100,
//      health = 10,
//      lifeSpan = 5000;

//     beforeEach(() => {
//         myAnimal = new Animal(field, x, y, health, lifeSpan)
//     });

//     it('should allow an object called "myAnimal" to be instantiated from the class', () => {
//         expect(myAnimal).to.be.an.instanceOf(Animal);
//     })
    
//     it('"myAnimal" should have a field property equal to the value Tiger', () => {
//         expect(myAnimal.field).to.equal("Tiger");
//     })

//     it('"myAnimal" should have an "x" property equal to the value of 425', () => {
//         expect(myAnimal.x).to.equal(425);
//     })

//     it('"myAnimal" should have an "y" property equal to the value of 100', () => {
//         expect(myAnimal.y).to.equal(100);
//     })

//     it('"myAnimal" should have a health property equal to the value of 10', () => {
//         expect(myAnimal.health).to.equal(10);
//     })

//     it('"myAnimal" should have a lifeSpan property equal to the value of 5000', () => {
//         expect(myAnimal.lifeSpan).to.equal(5000);
//     })

//     it('"myAnimal" should have a hunger property equal to the value of 10', () => {
//         expect(myAnimal.hunger).to.equal(10);
//     })
    
//     it('"myAnimal" should have a width property equal to the value of 1', () => {
//         expect(myAnimal.width).to.equal(1);
//     })

//     it('"myAnimal" should have a height property equal to the value of 1', () => {
//         expect(myAnimal.height).to.equal(1);
//     })

//     it('"myAnimal" should have a birthstamp property equal to the value of undefined', () => {
//         expect(myAnimal.birthstamp).to.equal(undefined);
//     })
// })