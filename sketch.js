

  var iss,issImg,bgImg,spaceCraft,spaceCraftImg;



function preload(){
  issImg=loadImage('iss.png');
  bgImg=loadImage('spacebg.jpg');
  spaceCraftImg=loadImage('spacecraft1.png');
  spaceCraftImg2=loadImage('spacecraft2.png')
  spaceCraftImg3=loadImage('spacecraft3.png')
  spaceCraftImg4=loadImage('spacecraft4.png')
}

function setup() {
  createCanvas(900,600);

  spaceCraft=createSprite(350,400,50,50)
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.scale=0.5

 iss=createSprite(450, 200, 50, 50);
 iss.addImage(issImg);

 
 
}

function draw() {
  background(bgImg); 
  background.scale=2 

  if(keyCode===54){
    spaceCraft.x=spaceCraft.x+2;
    spaceCraft.y=400;
    spaceCraft.addImage(spaceCraftImg3)
    spaceCraft.scale=0.5
  }
  
  if(keyCode===52){
    spaceCraft.y=400;
    spaceCraft.x=spaceCraft.x-2
    spaceCraft.addImage(spaceCraftImg4)
    spaceCraft.scale=0.5
  }

  if(keyCode===56){
    spaceCraft.y=spaceCraft.y-2
    spaceCraft.addImage(spaceCraftImg2)
    spaceCraft.scale=0.5
  }

   if(keyCode===50){
     spaceCraft.y=spaceCraft.y+2
     spaceCraft.addImage(spaceCraftImg)
     spaceCraft.scale=0.5
   }

   if('hasDocked(true)'){
     text('Docking Succesful',350,550)

   }

  drawSprites();
}