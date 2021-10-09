class Board {
    constructor(x, y, width, height, options) {
        var options={
           isStatic = true 
        }
        this.body = Bodies.rectangle(x, y, width, height, options)

        this.height = height;
        this.width = width;
        this.image = loadImage("./assets/board.png");

        World.add(world, this.body);
    
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(pos.x, pos.y, this.width, this.height, this.image)
        pop();
    }
}

