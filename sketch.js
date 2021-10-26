
var ball,blower,blowermouth

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ball = new Ball(400,200,50,10)
  blower = new Blower(430,200,50,50)
  blowermouth = new Blowermouth(430,180,40,20)

  button = createButton("Click to Blow")
  button.position(width/2,height -100)
  button.class("blowButton")
  button.mousePressed(blow)
}

function draw() {
  background(255,255,255); 
  
  ball.display()
  blower.display()
  blowermouth.display()

  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
}