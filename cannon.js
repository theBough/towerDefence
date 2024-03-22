function Cannon(x,y,w,h,img){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = loadImage(img)
  
  this.display = function(){
    this.img.resize(this.w, this.h);
    image(this.img, this.x, this.y)
  }
}
