let img;
let e;
let c;
let x;
let revenue;
function setup() {
  createCanvas(500, 400);
  img = loadImage("towerGood.png");
  e = new Enemy(0, 159, 20, 20, 1);
  c = new Cannon(410, 50, 30, 30, "cannon.png");
  revenue = 1;
  
}

function draw() {
  background(220);
  img.resize(400, 400);
  image(img, 0, 0);
  enemyStuff();
  cannonStuff();
  
  /*
  push()
  angleMode(DEGREES)
  translate(100,100)
  rotate(x)
  c.display()
  rect(10,10,50,50)
  pop()
  x+=1
  */
  
}
function mouseReleased() {
  c.lock = false;
  revenue -= 1
  console.log(revenue )
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
  c.display(); 
  c.grab();
}
function enemyStuff() {
  e.display();
  e.followPath();
}
