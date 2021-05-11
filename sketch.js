    var gameState = "start";
    var obstacleGroup,obs;
    var ruby;
    var r;

    //bars
    var bar_1 
    var bar_2 
    var bar_3 
    var bar_4 
    var bar_5 
    var bar_6 
    var bar_7 
    var bar_8 
    var bar_9 
    var bar_10 
    var bar_11 
    var avt = 1;


function preload(){
    bgimage1 = loadImage("7.jpg");
    bgimage2 = loadImage("for.jpg");
    avatar1Image = loadImage("boy 1.png");
    avatar2Image = loadImage("girl 1.png");

    boy1leftrunImage = loadImage("boy 2 reversed.png");
    girl1leftrunImage = loadImage("girl 2 reversed.png");

    boy1leftImage = loadImage("boy 1 reversed.png");
    girl1leftImage = loadImage("girl 1 reversed.png");

    boy1rightrunImage=loadImage("boy 2.png");
    girl1rightrunImage = loadImage("girl 2.png")

    boy1leftrunImage = loadImage("boy 2 reversed.png");
    girl1leftruntImage = loadImage("girl 2 reversed.png");

    objImage = loadImage("obstacle.png");

    rubyImg = loadImage("ruby.png");
  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
    obstacleGroup = createGroup();
  
    avatar1 = createSprite(width/2-200,height/2-200,100,100);
    avatar1.addImage(avatar1Image)
    avatar1.scale=0.4      
    avatar1.visible = false;

    avatar2 = createSprite(width/2+200,height/2-200,100,100);
    avatar2.addImage(avatar2Image)
    avatar2.scale= 0.7
    avatar2.visible=false;

    player = createSprite(200,100,100,100);
    player.visible = false;

    player.setCollider("rectangle",0,0,40,290);

    bar_1 = createSprite(1,300,30,1000);
    bar_1.shapeColor="red";
    bar_2 = createSprite(8,1,8000,15);
    bar_2.shapeColor="black";
    bar_3 = createSprite(300,450,15,640);
    bar_3.shapeColor="black"
    bar_4 = createSprite(150,280,15,600);
    bar_4.shapeColor="black"
    bar_5 = createSprite(4,715,8000,10);
    bar_5.shapeColor="black";
    bar_6 = createSprite(1055,485,1055,10); 
    bar_6.shapeColor="black"
    bar_7 = createSprite(792,124,1000,10);
    bar_7.shapeColor="black"
    bar_8 = createSprite(792,599,1000,10);
    bar_8.shapeColor="black";
    bar_9 = createSprite(1055,243,1055,10);
    bar_9.shapeColor="black"
    bar_10 = createSprite(1512,264,15,1000);
    bar_10.shapeColor="black"
    bar_11 = createSprite(792,365,1000,10);
    bar_11.shapeColor="black"

    bar_1.visible = false;
    bar_2.visible = false;
    bar_3.visible = false;
    bar_4.visible = false;
    bar_5.visible = false;
    bar_6.visible = false;
    bar_7.visible = false;
    bar_8.visible = false;
    bar_9.visible = false;
    bar_10.visible = false;
    bar_11.visible = false;

}

function draw(){
  avatar1.bounceOff(bar_1);
 if(gameState === "start"){
  obstacle();
  
  background(bgimage1);
 
  textSize(30);
  textFont("MV Boli");
  fill("black")
  text("Once upon a time there is a kingdom named Mayan where an evil guy Sam Tailor comes to visit them and ",width/2-750,height/2-300)
  text("promises to make Mayan a better place.He betrays them and stole the sacred stone of Mayan and drops it",width/2-750,height/2-250)
  text("in the ocean as he was attacked by stone. Being a player, you found the stone while fishing next to the river ",width/2-750,height/2-200)
  text("and got to know about the Mayan kingdom, and you have to place the stone in the Mayan kingdom.",width/2-750,height/2-150)
  text("Sam Tailor will create obstacles to you to achieve your mission.",width/2-500,height/2-100)
  
  text("                          You get only 4 lives to achieve this. ",width/2-700,height/2-50)
  text("                         Help the people in Mayan Kingdom!!!!",width/2-700,height/2)
  text("                             They are waiting for you!!",width/2-700,height/2+100)
  textFont("Goudy Stout");
  fill ("white");
  textSize(27)
  text("Press SPACE BAR to START the GAME!",width/2-500,height/2+200)
 }

 

 if(keyDown("space")&&gameState==="start"){
    gameState = "play";
    avatar1.visible=true;
    avatar2.visible=true;
    background(bgimage2);
 }  
  if(gameState=="play"){
  //  text("CHOOSE YOUR AVATAR!",width2/700,height2/600);
    background(bgimage2);
 
    if(mousePressedOver(avatar1)){
     
    bar_1.visible = true;
    bar_2.visible = true;
    bar_3.visible = true;
    bar_4.visible = true;
    bar_5.visible = true;
    bar_6.visible = true;
    bar_7.visible = true;
    bar_8.visible = true;
    bar_9.visible = true;
    bar_10.visible = true;
    bar_11.visible = true;

    avatar1.destroy();
    avatar2.destroy();
    player.addImage(avatar1Image)
    player.x=100;
    player.y=100;
    player.scale = 0.4
    player.visible = true;
    avt = 1;

  }

 
if(mousePressedOver(avatar2)){

    bar_1.visible = true;
    bar_2.visible = true;
    bar_3.visible = true;
    bar_4.visible = true;
    bar_5.visible = true;
    bar_6.visible = true;
    bar_7.visible = true;
    bar_8.visible = true;
    bar_9.visible = true;
    bar_10.visible = true;
    bar_11.visible = true;
  
    avatar1.destroy();
    avatar2.destroy();
    player.addImage(avatar2Image)
    player.x=100;
    player.y=100;
    player.visible = true;
    player.scale = 0.7;
    avt = 2;
  
}
// up arrow
if(keyDown("UP_ARROW")){
  player.y =player.y-6
}

// down arrow
if(keyDown("DOWN_ARROW")){
  player.y =player.y+6
}

// avatar 1 boy
//left arrow
if(keyDown("LEFT_ARROW")){
  player.x =player.x-6
  if(avt === 1){
    player.addImage(boy1leftrunImage)
  }
  else {
    player.addImage(girl1leftrunImage)
  }
}
// left arrow
if(keyWentUp("LEFT_ARROW")){
  if(avt === 1){
    player.addImage(boy1leftImage)
  }
  else {
    player.addImage(girl1leftImage)
  }
}

if(keyDown("RIGHT_ARROW")){
  player.x =player.x+6
  if(avt === 1){
    player.addImage(boy1rightrunImage)
  }
  else {
    player.addImage(girl1rightrunImage)
  }
}
// left arrow
if(keyWentUp("RIGHT_ARROW")){
  if(avt === 1){
    player.addImage(avatar1Image)
  }
  else {
    player.addImage(avatar2Image)
  }
}

  }
 
 drawSprites();
}

function obstacle(){
  if(World.frameCount%200===0){
    obs=createSprite(400,200,20,20);
    obs.y=Math.round(random(100,200));
    obs.setLifetime=50;
    obs.velocityX=-(8+(score/10)); 
    obstacleGroup.add(obs);
  }
}