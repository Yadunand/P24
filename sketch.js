const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,log1,pig2,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird (590,200)

    box1= new Box (400,20,20,90)
    box1.shapeColor=color(255,0,0);
  
box2=new Box(700,20,20,90)
box2.shapeColor=color(255,0,0);
   box3=new Box(550,63,270,15)
   box3.shapeColor=color(255,0,0);
	
	

    ground = new Ground(600,height,1200,20)

 
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    
    ground.display();
  
    bird.display();
}