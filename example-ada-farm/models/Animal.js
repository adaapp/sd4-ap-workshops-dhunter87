class Animal {
    constructor(field, x, y, health, lifeSpan){
        this.field = field;
        this.x = x;
        this.y = y;
        this.health = health;
        this.lifeSpan = lifeSpan;
        this.hunger = 10; // hunger can go up to 10
        this.width = 1
        this.height = 1
        this.healthySize = 30
        // this.birthstamp = millis() / 1000;

        try {
            this.birthstamp = millis() / 1000;
        } catch (error) {
            this.birthstamp;
        }
    }

    getAge() {
        // return the amount of time it's been alive
        return millis() / 1000 - this.birthstamp;
    }


    draw() {
        // set a width for the image based on its age
        if (this.getAge() < this.healthySize ) {
            var width = this.width * this.getAge()
            var height = this.height * this.getAge()
        } else {
            var width = this.healthySize ;
            var height = this.healthySize ;
        }

        image(
            this.image,
            this.x,
            this.y,
            width,
            height
        )
    }
}


// module.exports = Animal;