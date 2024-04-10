let img;
let e = [];
let c;
let x;
let revenue;
let myFont;
function setup() {
  createCanvas(500, 400);
  img = loadImage("towerGood.png");
  c = new Cannon(410, 50, 30, 30, "cannon.png");
  revenue = 100;
  myFont = loadFont("Anta.ttf")
  x=0
}
function draw() {
  background(220);
  img.resize(400, 400);
  image(img, 0, 0);
  enemyStuff();
  cannonStuff();
  textStuff();
  if(keyIsDown(83)){
    setInterval(createEnemy,1000)
  }
}

function createEnemy(){
  console.log("I create an enemy now")
  e.push(new Enemy(0,159,20,20,1))
}

function textStuff(){
  fill("black")
  textSize(10)
  textFont(myFont)
  text("revenue: " + revenue, 410,10)
  text("cost: 1 ", 410,100)
}
function mouseReleased() {
  c.lock = false;
  revenue -= 1
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
  if (c.over && revenue  > 0) {
    c.lock = true;
  }
  
}
function cannonStuff() {
   c.display()
  c.grab();
}
function enemyStuff() {
  for(i=0 ; i<e.length ; i++){
    e[i].display();
    e[i].followPath();
  }
  
}
