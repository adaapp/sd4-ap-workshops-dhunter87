class Cow extends Animal{
    constructor(field,x , y, health = 10, lifespan = 350){
        super(field,x , y, health, lifespan)
        this.image = loadImage('./images/cow.png');

        setInterval(() => {
            this.graze()
        }, 1000)

        setInterval(() => {
            this.hunger++
        }, 5000)
    }

    graze = () => {
        console.log('Cow grazing');
        
        if(this.hunger > 5) {
            let random = Math.floor(Math.random() * this.field._crops.length) + 0
            let possibleCrop = this.field._crops[random]
            console.log(possibleCrop)
            
            if(possibleCrop){
                this.hunger = 0;
                this.field._crops[random] = null
            }else {
                this.hunger++;
            }
        }
    }
 
    draw() {
        // set a width for the image based on its age
        if (this.getAge() < this.healthySize ) {
            var width = this.width * this.getAge()
            var height = this.height * this.getAge()
        } else {
            var width = 30;
            var height = 30;
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
 
// module.exports = Cow;
// module.exports = Animal;