var bg, bgImg;
var jerry, jerryImg, jerryTeases, jerryCelebrates;
var tom, tomImg, tomWalks, tomCelebrates;
var catWalk;
var gameState;

function preload() {
    bgImg = loadImage("images/garden.png");
    jerryImg = loadAnimation("images/mouse1.png");
    jerryTeases = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerryCelebrates = loadAnimation("images/mouse4.png");

    tomImg = loadAnimation("images/cat1.png");
    tomWalks = loadAnimation("images/cat2.png","images/cat3.png");
    tomCelebrates = loadAnimation("images/cat4.png");

    gameState = 1;
    
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500, 400);
    bg.addImage(bgImg);

    tom = createSprite(800,600);
    tom.addAnimation("sitting", tomImg);
    tom.scale = 0.3;

    jerry = createSprite(200,600);
    jerry.addAnimation("cheese", jerryImg);
    jerry.scale = 0.3;

    catWalk = createSprite(1000, 800);
    catWalk.visible = false;
    
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown(LEFT_ARROW)&&gameState===1) {
        tom.addAnimation("Struts", tomWalks);
        tom.changeAnimation("Struts");
        tom.velocityX= -10;
        gameState =0;
      }
      if(keyDown(RIGHT_ARROW)&&gameState===1) {
        jerry.addAnimation("Teases", jerryTeases);
        jerry.changeAnimation("Teases");
        gameState = 0;
      }
      if(tom.x-jerry.x<jerry.width/2+tom.width/2&&
        jerry.x-tom.x<jerry.width/2+tom.width/2){
        tom.velocityX= 0;
        tom.addAnimation("TCelebrates", tomCelebrates);
        tom.changeAnimation("TCelebrates");

        jerry.addAnimation("JCelebrates",jerryCelebrates);
        jerry.changeAnimation("JCelebrates");
      }
      if(gameState===0){
        jerry.changeAnimation("cheese")
        tom.changeAnimation("sitting")
        gameState =1;;}


    drawSprites();
}


