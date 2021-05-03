var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0b42e300-1261-4bb7-9880-33d344f0812a","c0d63e17-edcb-42ca-b5cf-c773b4052cbe","65f29bd6-a9d2-4acf-a9db-933c032c6d27","4890aab5-097b-4302-942f-f00431c3aaf0","c4323bc1-f465-49c1-bd96-89865d21afcd","2ef529a3-6b3b-4092-9300-d6d2475749e1","36860a3e-ae10-446e-ab69-4cf4431ae618","a06f8ed2-7cf2-42ad-81f6-9ea190d295d4","bf4d4817-0afe-473d-91bc-3f83dc5b06fe"],"propsByKey":{"0b42e300-1261-4bb7-9880-33d344f0812a":{"name":"d1r","sourceUrl":null,"frameSize":{"x":81,"y":86},"frameCount":2,"looping":true,"frameDelay":12,"version":"yDayq9KqvVLx_wyGrYREuhiWcplQgNtu","loadedFromSource":true,"saved":true,"sourceSize":{"x":81,"y":172},"rootRelativePath":"assets/0b42e300-1261-4bb7-9880-33d344f0812a.png"},"c0d63e17-edcb-42ca-b5cf-c773b4052cbe":{"name":"c1.jpg_1","sourceUrl":null,"frameSize":{"x":55,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":".YGILBJ.rUr.RuMSrgXLm15StfvRn2Mn","loadedFromSource":true,"saved":true,"sourceSize":{"x":55,"y":90},"rootRelativePath":"assets/c0d63e17-edcb-42ca-b5cf-c773b4052cbe.png"},"65f29bd6-a9d2-4acf-a9db-933c032c6d27":{"name":"c2.jpg_1","sourceUrl":null,"frameSize":{"x":97,"y":87},"frameCount":1,"looping":true,"frameDelay":12,"version":"ubCA8DQqZ086xw2UuAVk3Ycf5chl9VME","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":87},"rootRelativePath":"assets/65f29bd6-a9d2-4acf-a9db-933c032c6d27.png"},"4890aab5-097b-4302-942f-f00431c3aaf0":{"name":"ufo_.png_1","sourceUrl":"assets/v3/animations/COi6Ek5BdixkN7xZUiK56n54C6taF5KO9018OkU9bA0/4890aab5-097b-4302-942f-f00431c3aaf0.png","frameSize":{"x":44,"y":40},"frameCount":1,"looping":true,"frameDelay":4,"version":"XHaFHdwmFI5W3SAdynWDNVZkCFlGqhi1","loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":40},"rootRelativePath":"assets/v3/animations/COi6Ek5BdixkN7xZUiK56n54C6taF5KO9018OkU9bA0/4890aab5-097b-4302-942f-f00431c3aaf0.png"},"c4323bc1-f465-49c1-bd96-89865d21afcd":{"name":"fuel1","sourceUrl":"assets/v3/animations/COi6Ek5BdixkN7xZUiK56n54C6taF5KO9018OkU9bA0/c4323bc1-f465-49c1-bd96-89865d21afcd.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"KQ.HjWfNOAp2HnEuxu8fwg4t0YLg9ur_","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/COi6Ek5BdixkN7xZUiK56n54C6taF5KO9018OkU9bA0/c4323bc1-f465-49c1-bd96-89865d21afcd.png"},"2ef529a3-6b3b-4092-9300-d6d2475749e1":{"name":"car4","sourceUrl":"assets/v3/animations/COi6Ek5BdixkN7xZUiK56n54C6taF5KO9018OkU9bA0/2ef529a3-6b3b-4092-9300-d6d2475749e1.png","frameSize":{"x":225,"y":454},"frameCount":1,"looping":true,"frameDelay":4,"version":"TCoKh7KiMcexQS45Zq3kj9Mel_8S93Bu","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":454},"rootRelativePath":"assets/v3/animations/COi6Ek5BdixkN7xZUiK56n54C6taF5KO9018OkU9bA0/2ef529a3-6b3b-4092-9300-d6d2475749e1.png"},"36860a3e-ae10-446e-ab69-4cf4431ae618":{"name":"car2","sourceUrl":"assets/v3/animations/COi6Ek5BdixkN7xZUiK56n54C6taF5KO9018OkU9bA0/36860a3e-ae10-446e-ab69-4cf4431ae618.png","frameSize":{"x":225,"y":454},"frameCount":1,"looping":true,"frameDelay":4,"version":"IaYCbu2CaysDF4QQ.VFGZAY_vyuzezY7","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":454},"rootRelativePath":"assets/v3/animations/COi6Ek5BdixkN7xZUiK56n54C6taF5KO9018OkU9bA0/36860a3e-ae10-446e-ab69-4cf4431ae618.png"},"a06f8ed2-7cf2-42ad-81f6-9ea190d295d4":{"name":"car1","sourceUrl":"assets/v3/animations/COi6Ek5BdixkN7xZUiK56n54C6taF5KO9018OkU9bA0/a06f8ed2-7cf2-42ad-81f6-9ea190d295d4.png","frameSize":{"x":190,"y":365},"frameCount":1,"looping":true,"frameDelay":4,"version":"zuRo.K3ShiaBGgGhjTEeLn.1.NT26aN.","loadedFromSource":true,"saved":true,"sourceSize":{"x":190,"y":365},"rootRelativePath":"assets/v3/animations/COi6Ek5BdixkN7xZUiK56n54C6taF5KO9018OkU9bA0/a06f8ed2-7cf2-42ad-81f6-9ea190d295d4.png"},"bf4d4817-0afe-473d-91bc-3f83dc5b06fe":{"name":"d1","sourceUrl":"assets/v3/animations/COi6Ek5BdixkN7xZUiK56n54C6taF5KO9018OkU9bA0/bf4d4817-0afe-473d-91bc-3f83dc5b06fe.png","frameSize":{"x":87,"y":94},"frameCount":1,"looping":true,"frameDelay":4,"version":"KsCMT_ZtpmbvqE7.LoCmN3hfNPjRP0yE","loadedFromSource":true,"saved":true,"sourceSize":{"x":87,"y":94},"rootRelativePath":"assets/v3/animations/COi6Ek5BdixkN7xZUiK56n54C6taF5KO9018OkU9bA0/bf4d4817-0afe-473d-91bc-3f83dc5b06fe.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//need for speed game
var ab = randomNumber(50,350);
var ac = randomNumber(50,350);
var ae = randomNumber(20,380);

var car1 =createSprite(150,350);
car1.setAnimation("car1");
car1.scale=0.27;

var car2=createSprite(ac,-400);
car2.setAnimation("car2");
car2.scale=0.2;
car2.velocityY=0;

var car4=createSprite(ab,-700);
car4.setAnimation("car4");
car4.scale=0.2;
car4.velocityY=0;

var fuel1 = createSprite(ae,-1600);
fuel1.setAnimation("fuel1");
fuel1.scale=0.2;

car1.visible=false;
car2.visible=false;
car4.visible=false;
fuel1.visible=false;

var score = 0;
var carstate = "start";

//city destroyer game solutions
playSound("assets/Coffin-Dance-TikTok-Viral-Ringtone.mp3",true);
var a =randomNumber(100,500);
var b =randomNumber(100,500);
var c =randomNumber(100,500);
var d =randomNumber(100,500);
var e =randomNumber(100,500);
var f =randomNumber(100,500);
var ufo = createSprite(200,30,20,20);
ufo.setAnimation("ufo_.png_1");
var bullet = createSprite(1000,3000,5,20);
bullet.shapeColor='black';
var build1 = createSprite(40,400,32,a);
build1.shapeColor='green';
var build2 = createSprite(100,400,32,b);
build2.shapeColor='red';
var build3 = createSprite(160,400,32,c);
build3.shapeColor='pink';
var build4 = createSprite(220,400,32,d);
build4.shapeColor='cyan'
var build5 = createSprite(280,400,32,e);
build5.shapeColor='blue';
var build6 = createSprite(340,400,32,f);
build6.shapeColor='brown'
var bullet1 ="pro";
var gamestate = "started";
ufo.visible=false;
build1.visible=false;
build2.visible=false;
build3.visible=false;
build4.visible=false;
build5.visible=false;
build6.visible=false;
//trex game solutions
var r = randomNumber(700,850);
var a = randomNumber(1100,1300);

var trex = createSprite(45,275);
trex.visible=false;
trex.scale = 0.7;
trex.setAnimation("d1");

var cactus1 = createSprite(r,270);
cactus1.setAnimation("c1.jpg_1");
cactus1.scale=0.6;

var cactus2 = createSprite(a,270);
cactus2.setAnimation("c2.jpg_1");
cactus2.scale=0.6;

var jumpstate = "standing";

var screen = "home";

var slot1 = createSprite(200,50,200,40);
slot1.tint="yellow";
   
var slot2 = createSprite(200,180,200,40); 
slot2.tint="red";

var slot3 = createSprite(200,300,200,40);
slot3.tint="blue";

var score = 0;

function draw() {

 if(screen==='home'){

  if(mousePressedOver(slot1)){
    screen="trex game";
    slot3.x=1000;
    slot2.x=1000;
    slot1.x=1000;
   }
  if(mousePressedOver(slot2)){
    screen="cd";
    slot3.y=1000;
    slot2.y=1000;
    slot1.y=1000;
  }
  if(mousePressedOver(slot3)){
    screen="need for speed";
    slot3.x=1000;
    slot2.x=1000;
    slot1.x=1000;    
  }
   drawSprites();
   fill("black");
   textSize(25);
   text("Trex game",130,60);
   
   text("City Detroyer",125,190);
 
   text("Need For Speed",110,310);
 }
 if(screen==="trex game"){  
  background("white");
  textSize(20);
  text("score :"+score,300,40);
  text("press space to jump and start the game",10,60);
  trex.visible=true;
  if(keyWentUp("space")&&jumpstate==="standing"){
    trex.velocityY=-17;
    cactus1.velocityX=-10;
    cactus2.velocityX=-10;
    jumpstate="jumping";
    trex.setAnimation("d1r");
  }
  if(trex.y===275&&jumpstate==="jumping"){
    jumpstate= "standing";
  }
  if(trex.y<=100){
    trex.velocityY=16;
  }
  if(trex.y>275){
    trex.velocityY=0;
    trex.y=275;
  }
  if(cactus1.x<0){
    cactus1.x=randomNumber(850,950);
    score=score+1;
  }
  if(cactus2.x<0){
    cactus2.x=randomNumber(800,900);
    score=score+1;
  }
  if(trex.isTouching(cactus1)||trex.isTouching(cactus2)){
    cactus1.velocityX=0;
    cactus2.velocityX=0;
    trex.setAnimation("d1");
    trex.velocityY=0;
    if(mousePressedOver(trex)){
      reload();
    }
    fill("red");
    textSize(20);
    text("click on Trex to restart",50,100);
  }
  line(0,300,400,300); 
  drawSprites();
   
 }
  if(screen==="need for speed"){
  background("white");
  textSize(25);
  text("score :"+score,10,34);
  car2.velocityY=4;
  car4.velocityY=4;
  fuel1.velocityY=5;
  car1.visible=true;
  car2.visible=true;
  car4.visible=true;
  fuel1.visible=true;
  if(keyWentUp("left")&&carstate==="start"){
    car1.x=car1.x-100;
  }
  if(keyWentUp("right")&&carstate==="start"){
    car1.x=car1.x+100;
  }
  if(keyDown("up")&&carstate==="start"){
    car1.y=car1.y-10;
  }
  if(keyDown("down")&&carstate==="start"){
    car1.y=car1.y+10;
  }
  
  if(fuel1.y>400){
    fuel1 .y=-1600;
  }
  
  if(car1.x<50){
    car1.x=50;
  }
  if(car1.x>350){
    car1.x=350;
    
  }
  if(car2.x<=100){
    car2.x=50;
    
  }
  if(car4.x<=100){
    car4.x=50;
    
  }
  if(car2.x>=300){
    car2.x=350;
  }
  if(car4.x>=300){
    car4.x=350;
  }
  if(car2.x<300&&car2.x>200){
    car2.x=250;
  }
  if(car4.x<300&&car4.x>200){
    car4.x=250;
  }
  if(car2.x<200&&car2.x>100){
    car2.x=150;
  }
  if(car4.x<200&&car4.x>100){
    car4.x=150;
  }
  if(car2.y>450){
    car2.y=0;
    car2.x=randomNumber(50,350);
    score=score+1;
  
}
  
  if(car4.y>450){
    car4.y=0;
    car4.x=randomNumber(50,350);
    score=score+1;
  }
  
  if(car1.isTouching(car2)){
    gameover();
    if(keyDown("space")){
      re();
    }
  }
  if(car1.isTouching(car4)){
    gameover();
    if(keyDown("space")){
      re();
    }
  }
  if(car1.y<-50||car1.y>450){
    gameover();
    if(keyDown("space")){
      re();
    }
  }
  if(fuel1.x<=100){
    fuel1.x=50
  }
  if(fuel1.x>=300){
    fuel1.x=350
  }
  if(fuel1.x<=300&&fuel1.x>200){
    fuel1.x=250
  }
  if(fuel1.x<=200&&fuel1.x>100){
    fuel1.x=150
  }
  if(score>10){
    car2.velocityY=5;
    car4.velocityY=5;
    
    fuel1.velocityY=7;
    
    playSound("f1_race.mp3");
  }
  if(score>20){
    car2.velocityY=7;
    car4.velocityY=7;
    
    fuel1.velocityY=9;
    
    playSound("f1_race.mp3");
  }
  if(score>30){
    car2.velocityY=10;
    car4.velocityY=10;
    
    fuel1.velocityY=12;
    
    playSound("f1_race.mp3");
  }
  if(score>40){
    car2.velocityY=12;
    car4.velocityY=12;
    fuel1.velocityY=13;
    playSound("f1_race.mp3");
  }
  if(score>50){
    car2.velocityY=14;
    car4.velocityY=14;
    fuel1.velocityY=15;
    playSound("f1_race.mp3");
  }
  if(score>60){
    car2.velocityY=15;
    car4.velocityY=15;
    playSound("f1_race.mp3");
  }
  
  if(car1.isTouching(fuel1)){
    score=score+5;
    fuel1.y=-1600;
    fuel1.velocityY=0;
    playSound("energy_bar_recharge_4.mp3");
  }
  
  line(100,0,100,400);
  line(200,0,200,400);
  line(300,0,300,400);
  drawSprites();
}
 
 if(screen==="cd"){
  ufo.visible=true;
  build1.visible=true;
  build2.visible=true;
  build3.visible=true;
  build4.visible=true;
  build5.visible=true;
  build6.visible=true;
  background("white");
  textSize(25);
  text('press enter to start',10,70);
  text('press space to shoot a bullet',10,100);
  text('1 bullet can be shooted at a time',10,150);
  if(keyDown('enter')&&gamestate==="started"){
    ufo.velocityX=3;
    ufo.velocityY=0;
    gamestate="playing";
  }
  if(keyDown("space")&&bullet1==="process"){
    bullet.x=ufo.x;
    bullet.y=ufo.y+20;
    bullet1 = "pr"
    bullet.setVelocity(0,3);
    playSound("assets/category_explosion/destruction_5.mp3")
  }
  if(bullet.y>400||bullet.y===3000){
    bullet1="process";
  }
  if(ufo.x===200&&ufo.y===30){
    bullet1="pro";
  }
  createEdgeSprites();
  if(ufo.bounceOff(edges)){
    ufo.y=ufo.y+30;
  }
  if(bullet.isTouching(build1)){
    bullet.x=1000;
    bullet.y=3000;
    bullet.velocityY=0;
    build1.height=build1.height-60;
    playSound("assets/category_explosion/8bit_explosion.mp3")
  }
  if(bullet.isTouching(build2)){
    bullet.x=1000;
    bullet.y=3000;
    bullet.velocityY=0;
    build2.height=build2.height-60;
    playSound("assets/category_explosion/8bit_explosion.mp3")
  }
  if(bullet.isTouching(build3)){
    bullet.x=1000;
    bullet.y=3000;
    bullet.velocityY=0;
    build3.height=build3.height-60;
    playSound("assets/category_explosion/8bit_explosion.mp3")
  }
  if(bullet.isTouching(build4)){
    bullet.x=1000;
    bullet.y=3000;
    bullet.velocityY=0;
    build4.height=build4.height-60;
    playSound("assets/category_explosion/8bit_explosion.mp3")
  }
  if(bullet.isTouching(build5)){
    bullet.x=1000;
    bullet.y=3000;
    bullet.velocityY=0;
    build5.height=build5.height-60;
    playSound("assets/category_explosion/8bit_explosion.mp3")
  }
  if(bullet.isTouching(build6)){
    bullet.x=1000;
    bullet.y=3000;
    bullet.velocityY=0;
    build6.height=build6.height-60;
    playSound("assets/category_explosion/8bit_explosion.mp3")
    
  }
  if(build1.height<=40){
    build1.x=10000;
  }
  if(build2.height<=40){
    build2.x=10000;
  }
  if(build3.height<=40){
    build3.x=10000;
  }
  if(build4.height<=40){
    build4.x=10000;
  }
  if(build5.height<=40){
    build5.x=10000;
  }
  if(build6.height<=40){
    build6.x = 10000;
  }
  if(ufo.isTouching(build1)){
    ufo.velocityX=0;
    textSize(33);
    text('Game Over',10,40);
    text("press  enter to play again",10,80);
    bullet1="pro";
    gamestate="ended";
  }
  if(ufo.isTouching(build2)){
    ufo.velocityX=0;
    textSize(33);
    text('Game Over',10,40);
    text("press enter to play again",10,80);
    bullet1="pro";
    gamestate="ended";
  }
  if(ufo.isTouching(build3)){
    ufo.velocityX=0;
    textSize(33);
    text('Game Over',10,40);
    text("press enter to play again",10,80);
    bullet1="pro";
    gamestate="ended";
  }
  if(ufo.isTouching(build4)){
    ufo.velocityX=0;
    textSize(33);
    text('Game Over',10,40);
    text("press enter to play again",10,80);
    bullet1="pro";
    gamestate="ended";
  }
  if(ufo.isTouching(build5)){
    ufo.velocityX=0;
    textSize(33);
    text('Game Over',10,40);
    text("press enter to play again",10,80);
    bullet1="pro";
    gamestate="ended";
  }
  if(ufo.isTouching(build6)){
    ufo.velocityX=0;
    textSize(33);
    text('Game Over',10,40);
    text("press enter to play again",10,80);
    bullet1="pro";
    gamestate="ended";
  }
  if(gamestate==="ended"&&keyDown("enter")){
    reset();
  }
  if(build1.x===10000&&build2.x===10000&&build3.x===10000&&build4.x===10000&&build5.x===10000&&build6.x===10000){
    ufo.velocityX=0;
    textSize(50);
    text('you won',10,100);
    stopSound("assets/Coffin-Dance-TikTok-Viral-Ringtone.mp3"); 
  }
  drawSprites();
 }
  
}
 

function reload(){
  cactus2.x=randomNumber(1150,1300);
  cactus1.x=randomNumber(700,850);
  trex.y=275;
  score=0;

}  
function reset(){
  ufo.x=200;
  ufo.y=30;
  ufo.setVelocity(0,0);
  gamestate="started";
}
function gameover(){
  background(rgb(0,0,0));
  textSize(35);
  text("Game Over",30,200);
  text("Press space to restart",30,240);
  car2.velocityY=0;
  car4.velocityY=0;
  fuel1.velocityY=0;
  carstate="over";
  score=0;
}
function re(){
  car2.y=0;
  car4.y=-200;
  
  car2.x=randomNumber(50,350);
  car4.x=randomNumber(50,350);
  
  car2.velocityY=4;
  car4.velocityY=4;
  
  fuel1.y=-1600;
  fuel1.velocityY=8;
  
  carstate="start";
  
  car1.x=150;
  car1.y=350;
  
  score=0;
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
