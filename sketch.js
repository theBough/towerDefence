let img;
let e = [];
let c;
let x;
let sendButton;
let revenue;
let myFont;
let waveCount;
let stopSending;
let stopShooting;
let b = []

function setup() {
  createCanvas(500, 400);
  img = loadImage("towerGood.png");
  c = new Cannon(410, 50, 30, 30, "cannon.png");
  revenue = 100;
  myFont = loadFont("Anta.ttf");
  sendButton = createButton("send em");
  waveCount = 10;
}
function draw() {
  background(220);
  img.resize(400, 400);
  image(img, 0, 0);
  enemyStuff();
  cannonStuff();
  textStuff();
  sendButtonStuff();
  bulletStuff();
}

function createBullet(){
  let xSpeed1;
  let xSpeedAfter = 0
  let ySpeedBefore;
  let ySpeedAfter;
  xSpeed1 = e[0].x - c.x;
  ySpeedBefore = e[0].y - c.y;
  ySpeedAfter = ySpeedBefore / xSpeed1;
  if(ySpeedBefore>0){
    if(ySpeedAfter<0){
      ySpeedAfter *= -1
    }
  }else{
    if(ySpeedAfter > 0){
      ySpeedAfter *= -1
    }
  }
  if(xSpeed1 < 0){
    xSpeedAfter = -1
  }else{
    xSpeedAfter = 1
  }
  b.push(new Bullet(c.x, c.y ,5,5, xSpeedAfter, ySpeedAfter))
}
function bulletStuff(){
  for(var i =0 ; i < b.length ; i++){
    b[i].display();
    b[i].collision();
  }
}
function sendButtonStuff() {
  sendButton.position(410, 150);
  sendButton.style("background-color", "red");
  sendButton.mousePressed(() => {
    sendButton.hide();
    stopSending = setInterval(createEnemy, 1000);
    stopShooting = setInterval(createBullet, 1000);
  });
}
function createEnemy() {
  e.push(new Enemy(0, 159, 20, 20, 1));
  waveCount -= 1;
  if(waveCount < 1){
    clearInterval(stopSending);
    waveCount = 10
    sendButton.show();
  }
}
function textStuff() {
  fill("black");
  textSize(10);
  textFont(myFont);
  text("revenue: " + revenue, 410, 10);
  text("cost: 1 ", 410, 100);
}
function mouseReleased() {
  c.lock = false;
  revenue -= 1;
  c.xPlaced = c.x;
  c.yPlaced = c.y;
  c.isPlaced = true;
}
function mouseDragged() {
  if (c.lock) {
    c.x = mouseX - 10;
    c.y = mouseY - 10;
  }
}
function mousePressed() {
  if (c.over && revenue > 0) {
    c.lock = true;
  }
}
function cannonStuff() {
  c.display();
  c.grab();
}
function enemyStuff() {
  for (i = 0; i < e.length; i++) {
    e[i].display();
    e[i].followPath();
  }
}
