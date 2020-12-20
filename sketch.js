
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, box1,box2,box3, paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,670,1600,10)
	box1 = new Box(1000,660,140,10)
	box2 = new Box(935,655,10,60)
	box3 = new Box(1075,635,10,60)
	paperObject = new Paper(20,650,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display()
  box1.display()
  box2.display()
  box3.display()
  paperObject.display()
  
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0.001,y:-0.0027})
	}
}


