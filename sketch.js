//Global Variables
var monkey, monkey_image, ground, ground_image, bananaGroup;
var bg, background_image, invisibleground, obstacleG, foodG, bananaimage, stoneimage;
var gameOver_image, restart_image;
var score = 0;
var survivaltime = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
monkey_image = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png",
 "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
bananaimage = loadImage("Banana.png");
stoneimage = loadImage("stone.png");
//ground_image = loadImage("ground.jpg");
background_image = loadImage("jungle.png");
}

function setup() {
  createCanvas(600,300);
bg = createSprite(300,50,600,300);
bg.addImage("background", background_image);
bg.velocityX = -3;
  
monkey = createSprite(70,250,20,20);
monkey.addAnimation("running", monkey_image);
monkey.scale = 0.13;
  
ground = createSprite(300,259,600,5);
ground.visible = false;
  
obstacleG = new Group();
foodG = new Group();
}


function draw(){
background(255); 
  
  monkey.collide(ground);
  
if(bg.x<100){
bg.x = 300;
}
 
if(keyDown("space") && monkey.y>215){
monkey.velocityY = -7;
 }
  
if(foodG.isTouching(monkey)){
 foodG.destroyEach(); 
 score = score + 2;
}
 monkey.velocityY = monkey.velocityY + 0.3;
 food();
 drawSprites();
textSize(18);
text("Score: " + score,50,50);
  
}


function food(){
if(frameCount %110 == 0){
var banana;
banana = createSprite(620,100,20,20);
banana.addImage(bananaimage);
banana.velocityX = -4;
banana.lifetime = 150;
banana.scale = 0.05;
foodG.add(banana);
}
}