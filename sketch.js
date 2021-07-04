
var box 

function setup() {
  createCanvas(400,400);
  box = createSprite(200,150,40,40);
  box.shapeColor = "yellow";
}


function draw() 
{
 background(30);
 if (keyDown(RIGHT_ARROW)) {
   box.position.x = box.position.x + 2
 }
 if (keyIsDown(LEFT_ARROW)) {
  box.position.x = box.position.x - 2
}
if (keyDown(UP_ARROW)) {
  box.position.y = box.position.y - 2
}
if (keyDown(DOWN_ARROW)) {
  box.position.y = box.position.y + 2
}
 drawSprites();
}




