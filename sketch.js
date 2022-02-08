var personagem
var speed = 5;


function setup() {
  createCanvas(400,400);
  personagem = createSprite(200,200,30,30);
}

function draw() 
{
  background(0);
  drawSprites();
  if (keyDown("LEFT_ARROW")) {
    personagem.velocityX = 0 - speed;
    personagem.velocityY = 0;
  } else if (keyDown("RIGHT_ARROW")) {
    personagem.velocityX = speed;
    personagem.velocityY = 0;
  } else if (keyDown("UP_ARROW")) {
    personagem.velocityY = 0 - speed;
    personagem.velocityX = 0;
  } else if (keyDown("DOWN_ARROW")) {
    personagem.velocityY = speed;
    personagem.velocityX = 0;
  } else {
    personagem.velocityX = 0;
    personagem.velocityY = 0;
  }


}






