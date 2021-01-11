var ground;

var package;

var helicopter; 

var side1, side2, side3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {

	createCanvas(800, 700);

	//to create all objects
	engine = Engine.create();

	world = engine.world;

	ground0 = new Ground(width/2, height-35, width,10);
	
  package = new Package(width/2, 100, 25,25);
  
	helicopter = new Helicopter(width/2, 100, 300,100);
	
	side1 = new Side(310,610,20,100);
	side2 = new Side(490,610,20,100);
	side3 = new Side(400, 650,200,20); 

	//run engine
	Engine.run(engine);
  
}

function draw() {

  //update engine
  Engine.update(engine);	

  //background colour
  background(0); 

  //display objects
  ground0.display();

  package.display();
  package.keyPressed();
  
  helicopter.display();
  
  side1.display();
  side2.display();
  side3.display();
 
}



