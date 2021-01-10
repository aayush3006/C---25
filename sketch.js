const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let paperObject, dustbin, ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(70, 600);

	dustbin = new Dustbin(650, 645);

	ground = new Ground(width / 2, height - 30);

	Engine.run(engine);

}

function draw() {
	background(0,150,225);

	paperObject.display();
	ground.display();
	dustbin.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		console.log("keyCode");
		Body.applyForce(paperObject.body, paperObject.body.position, { x: 100, y: -130 });
	}
}
