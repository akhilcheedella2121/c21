var a,b;


function setup() {
  createCanvas(1200,1200);
   a = createSprite(400,200,50,50);
   a.shapeColor = (rgb(0,0,255));
   a.debug = true;
   b = createSprite(200,300,70,30);
   b.shapeColor = (rgb(100,17,45));
   b.debug = true;

  }

function draw() {
  background(0);
  a.x = World.mouseX;
  a.y = World.mouseY;

  if(a.x-b.x < a.width/2 + b.width/2 &&
    b.x-a.x < a.width/2 + b.width/2 &&
    a.y-b.y < a.height/2 + b.height/2 &&
    b.y-a.y < a.height/2 + b.height/2 ){
    a.shapeColor = 'green';
    b.shapeColor = 'green';
    }
    else{
      a.shapeColor = (rgb(0,0,255));
      b.shapeColor = (rgb(100,17,45));
    }
  drawSprites();
}