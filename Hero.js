class Hero{
    constructor(x,y,r){
        var options={
        density=1,
        frictionAir=1
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.y=y;
    this.x=x;
    this.r=r;
    this.image=loadImage("killthemonsterFILE-main/Superhero-01")
    this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
    World.add(world, this.body)
}
  display()
    push()
    translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    pop()
  }}


