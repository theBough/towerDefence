let img;
let e;
let c;
function setup() {
  createCanvas(500, 400);
  img = loadImage("towerGood.png")
  e = new Enemy(0,159,20,20,1)
  c = new Cannon(410,50,30,30,"cannon.png")
}

function draw() {
  background(220);
  img.resize(400,400)
  image(img,0,0)
   enemyStuff();
  cannonStuff()
  
}
function cannonStuff(){
     c.display() 
    c.grab()
}

function enemyStuff(){
   e.display()
  e.followPath()
}
