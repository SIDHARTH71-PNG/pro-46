const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var forestImg;
var player1;
var playerSprite;
var playerSpriteImg;
var ground;
var zombieImg,zombieGroup,

function  preload() {
    forestImg = loadImage("WallpaperDog-17001210.jpg");  
    playerSpriteImg = loadImage("player.jpeg");
}

function setup()
{
createCanvas(1200,600); 
engine = Engine.create();
world = engine.world;
player1 = new Player(50, 200);
playerSprite= createSprite(50,180,20,50); 
ground = new Ground(600,height,1200,20);

}


function draw()
{
 background(forestImg);
 Engine.update(engine);
 player1.display();
 playerSprite.display();
 if(keyDown("space") && playerSprite.y >= 159) {
    playerSprite.velocityY = -14;
  }
  playerSprite.velocityY =  playerSprite.velocityY + 0.8
 ground.display();
 spawnZombie();

 drawSprites();
}

function keyPressed()
{
    if(keyCode === 37)
    {
     player1.left();
    }
    if(keyCode === 39)
    {
    player1.right();
    }
    
}


function spawnZombie()
{
    if(frameCount % 60===0)
    {
        var zombie=createSprite(1200,575,50,50);
       // zombie.addImage(zombieImg);
        zombie.velocityX=-3;
        zombie.lifetime=400;
        zombie = playerSprite.depth;
    playerSprite.depth = playerSprite.depth + 1;
    }
}