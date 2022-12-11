var gameState = 0;
var level = 0;
var welcomeScreen, spaceImg,playerName, spacetravelerImg, keeperImg, gateImg;
var gate, centurioun, space_traveller;
var timer = 1000;

function preload() {
  spaceImg = loadImage("./assets/space.jpg");
  gateImg = loadImage("./assets/gate.jfif");
  spacetravelerImg = loadImage("./assets/spacetraveler.png");
  keeperImg = loadImage("./assets/keeperImg.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  welcomeScreen = new Welcome()
  gate = createSprite(width/2,height/2)
  centurioun = createSprite(width/2+300,height/2)
  space_traveller = createSprite(width/2-400,height/2)

  gate.addImage(gateImg)
  centurioun.addImage(keeperImg)
  space_traveller.addImage(spacetravelerImg)

  //gate.scale = 0.8
  gate.visible = false;
  centurioun.visible = false;
  space_traveller.visible = false; 

}

function draw() {
  background(spaceImg)
  if(gameState==0){
    welcomeScreen.display()
  }
  if(gameState==1){
    welcomeScreen.hide()
    gate.visible = true;
    centurioun.visible = true;
    space_traveller.visible = true; 
    
   
  
  }
  drawSprites()
  textOnScreen()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function textOnScreen(){
  if(level == 0 && gameState == 1){
    if(timer>0){
      timer-=1
    }
    console.log(timer)
    fill(255)
    strokeWeight(4)
    stroke(0)
    textSize(20)
    if(timer>=750){
      text("HALT, WHO GOES THERE!",650,190)
    }
    else if(timer<750 && timer>=500){
      text("FOR IM THE GARDIAN OF THIS GATE TO AN ETERNAL DOOM. ",650,190)
    }
    else if(timer<750 && timer>=500){
      text("IF YOU DARE STEP AHEAD AND ENTER THE GATE OR ELSE DIE.  ",650,190)
    }
    else if(timer<750 && timer>=500){
      text("YOU ARE WASTING MY TIME , I WONT HESITATE TO KILL YOU. ",650,190)
    }
  }
}