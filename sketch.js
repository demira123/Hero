const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1, box2, box3, box4, box5, box6, box7, box8
var hero
var ground
var fly
function preload() {
//preload the images here
//backgroundImg = loadImage("");

}

function setup() {

  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  box1=new Block(390,550,80,80)
  box2=new Block(390,520,80,80)
  box3=new Block(390,490,80,80)
  box4=new Block(390,460,80,80)
  box5=new Block(490,550,80,80)
  box6=new Block(490,520,80,80)
  box7=new Block(490,490,80,80)
  box8=new Block(490,460,80,80)

  ground = new Ground(600,height,1200,20);
  hero =  new Hero(810,180,300, PI/2);
  fly = new Fly(hero.body,{x:200, y:50});
}

function draw() {
  background(0);
  Engine.update(engine);
  hero.display()
  ground.display()

      box1.display()
      
      
      box2.display()
      
      box3.display()
      box4.display()
      box5.display()
      box6.display()
      box7.display()
      box8.display()
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

