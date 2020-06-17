var fixedRect, movingRect;
var a,b;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  a = createSprite(600,200,50,50);
  a.shapeColor = ("red");
  b = createSprite(600,400,50,50);
  b.shapeColor = ("yellow");
  a.velocityY = 7
  b.velocityY = -7
}

function draw() {
  background(0,0,0);  
bounceOff(a,b);
bounceOff(movingRect,fixedRect);

  drawSprites();
  
}