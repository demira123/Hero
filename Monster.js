class Monster extends BaseClass{
    constructor(x,y,width, height){
var options={
    super(x,y,width,height);
    
}
this.image=loadImage("killthemonsterFILE-main/Monster-01.png")
this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
World.add(world,this.body)
}
}