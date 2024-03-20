let img;
let e;
function setup() {
  createCanvas(400, 400);
  img = loadImage("towerGood.png")
  e = new Enemy(0,159,20,20)

}

function draw() {
  background(220);
  img.resize(400,400)
  image(img,0,0)
  e.display()
  e.followPath()
  
}
