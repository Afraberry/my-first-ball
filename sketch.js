//namespaceing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var myGround;
var myBall;

function setup() {
  createCanvas(400, 400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    isStatic: true,
  }

  var ball_options = {
    restitution: 1.4,
  }
  
  myGround = Bodies.rectangle(200, 390, 400, 30, options);
  myBall = Bodies.circle(200,40,25, ball_options);
  World.add(myWorld, myGround);
  World.add(myWorld,myBall);

}

function draw() {
  background(0);
  Engine.update(myEngine);

  ellipseMode(RADIUS);
  fill("pink");
  ellipse(myBall.position.x, myBall.position.y,25,25);
  rectMode(CENTER);
  fill("green");
  rect(myGround.position.x, myGround.position.y, 400, 30);

  // console.log(myRect);


  drawSprites();
}
