var iss,spacecraft,hasdocked;

function preload() {
  spaceiss =loadImage("iss.png");
  spacec1 =loadImage("spacecraft1.png");
  spacec2 =loadImage("spacecraft2.png");
  spacec3 =loadImage("spacecraft3.png");
  spacec4 =loadImage("spacecraft4.png");
  spaceBG = loadImage("spacebg.jpg");

}

function setup() {
  createCanvas(800,400);
 spaceCraft= createSprite(290,240);
 spaceCraft.addImage(spacec1)
 spaceCraft.scale=0.5;

 iss= createSprite(350,210);
 iss.addImage(spaceiss)
 iss.scale=0.5;
}

function draw() {
  background(spaceBG);
  if(!hasdocked)  {
  spaceCraft.x=spaceCraft.x+random(-1,1)

 if (keyDown("UP_ARROW")){
   spaceCraft.y=spaceCraft.y-2;
 }
 if (keyDown("DOWN_ARROW")){
  spaceCraft.addImage(spacec1)
  
}
if (keyDown("LEFT_ARROW")){
spaceCraft.addImage(spacec3)
  spaceCraft.x=spaceCraft.x-2;
}
if (keyDown("RIGHT_ARROW")){
  spaceCraft.addImage(spacec2)
  spaceCraft.x=spaceCraft.x+2;
}
}
if(spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-10)){
hasdocked=true;
textSize(25);
fill("red");
text("Docking Sucessful", );

}
  drawSprites();

}

