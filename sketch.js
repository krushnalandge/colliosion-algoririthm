var movingrect,fixedrect;
function setup() {
  createCanvas(1200,800);
  movingrect=createSprite(400, 200, 80, 50);
  movingrect.shapeColor="red";
  fixedrect=createSprite(600, 400, 50, 80);
  fixedrect.shapeColor="red";
  

  
}

function draw() {
  background(255,255,255);  
  movingrect.x= World.mouseX;
  movingrect.y= World.mouseY;

  console.log(movingrect.width/2)

  if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
    &&movingrect.y - fixedrect.y < fixedrect.width/2 + movingrect.width/2
    && fixedrect.y - movingrect.y < fixedrect.width/2 + movingrect.width/2)
{
    movingrect.shapeColor="yellow";
    fixedrect.shapeColor="yellow";

  }
  else{
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";

  }
  drawSprites();
}