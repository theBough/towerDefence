function Bullet(x,y,w,h,xSpeed, ySpeed){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;
  
  this.display = function(){
    rect(this.x, this.y, this.w, this.h)
    this.x += this.xSpeed;
    this.y += this.ySpeed
  }//end Display
}//end Function
