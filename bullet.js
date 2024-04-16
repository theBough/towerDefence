function Bullet(x, y, w, h, xSpeed, ySpeed) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;

  this.display = function () {
    rect(this.x, this.y, this.w, this.h);
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }; //end Display
  this.collision = function () {
    for(var i =0 ; i< e.length ; i++){
      if (
      e[i].x > this.x &&
      e[i].x < this.x + this.w &&
      e[i].y > this.y &&
      e[i].y < this.y + this.h
    ) {
      e.splice(i,1);
      }//end if
    }//end loop
    
  };
} //end Function
