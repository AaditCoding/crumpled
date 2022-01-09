
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_option)
	World.add(world,ball)


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display()
  leftSide.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW	){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.08,y:0})
	}
}



