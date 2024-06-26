function Cannon(x, y, w, h, img) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = loadImage(img);
  this.over = false;
  this.lock = false;
  this.xPlaced = x;
  this.yPlaced = y;
  this.isPlaced = false;
  this.angle = 45;

  this.display = function () {
    this.img.resize(this.w, this.h);
    if (this.isPlaced) {
      for (i = 0; i < e.length; i++) {
        push();
        translate(this.xPlaced, this.yPlaced);
        angleMode(DEGREES);
        this.rise = e[0].y - this.y;
        this.run = e[0].x - this.x;
        this.angle = Math.atan(this.rise / this.run);
        this.angle = (this.angle * 180) / Math.PI;
        if (this.rise < 0 && this.run < 0) {
          this.angle -= 90;
        } else if (this.rise < 0 && this.run > 0) {
          this.angle += 90;
        } else if (this.rise > 0 && this.run > 0) {
          this.angle += 90;
        } else if (this.rise > 0 && this.run < 0) {
          this.angle -= 90;
        }
        rotate(this.angle);
        image(this.img, (-1 * this.w) / 2, (-1 * this.h) / 2);
        pop();
      }
    } else {
      image(this.img, this.x, this.y);
    }
  };
  this.grab = function () {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      cursor("grab");
      this.over = true;
    } else {
      cursor(ARROW);
    }
  };
}
