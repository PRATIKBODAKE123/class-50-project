var bg,bgImg;
var zombie,player,playerImg,zombieImg;
var gameState=1;
Play=1;
End=0;

function preload(){
bgImg= loadImage("bgImg.jpg");

playerImg = loadImage("player.png");
zombieImg = loadImage("zombie.png");

}

function setup() {
  
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.2

  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(playerImg)
  player.scale = 0.3
  
  randomY = random(1,600)
  randomX = random(300,800)
  zombie = createSprite(randomX,randomY,20,20);
  zombie.addImage(zombieImg);
  zombie.velocityX = -3;
  zombie.scale = 0.4

  
}

function draw() {
  background(255,255,255);  

  if(zombie.isTouching(player)){
    gameState = 2
    
  }

  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   player.y = player.y+30
  }

  if(keyWentDown("space")){
    //player shoots bullet
 }

 drawSprites();

 if(gameState === 2){
  player.destroy();
  console.log("gameOver")
  
  textSize(40)
  fill("red")
  text("gameOver. You were killed!",windowWidth/2-240, windowHeight/2)
 
  zombie.velocityX =0;
 }
 

}