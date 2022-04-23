class Stone{
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 0.2,
            friction: 1,
            density: 1.2  
        }
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("stoneIMG.png");
        this.body = Bodies.circle(this.x, this.y, this.r/2, options)

        World.add(world,this.body)
    }

display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r*2, this.r*2);
    pop();

}
}   
