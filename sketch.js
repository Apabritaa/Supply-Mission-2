var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bar1,bar2,bar3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 70, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5,density:1.5, isStatic:true});
	World.add(world, packageBody);
	bar1=createSprite(400,650,170,20);
	bar2=createSprite(305,610,20,100);
	bar3=createSprite(495,610,20,100);
	bar2.shapeColor="red";
	bar3.shapeColor="red";
	bar1.shapeColor="red";
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 //World.add(world, ground);
	bar1body = Bodies.rectangle(400,650,170,20 , {isStatic:true} );
World.add(world,bar1body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(400,650,170,20)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y-5;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	packageBody.restitution=0.7;
	
  }
}



