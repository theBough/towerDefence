function Enemy(x,y,w,h,s){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.section = s
  this.speed = 1
  
  this.display = function(){
    rect(this.x, this.y, this.w, this.h)
  }
  
  this.followPath = function(){
    if(this.section == 1){
      this.x += this.speed
      if(this.x >188){
        this.section += 1
      }
    }else if (this.section == 2){
      this.y -= this.speed
      if(this.y<68){
        this.section += 1
      }
    }else if (this.section == 3){
      this.x -= this.speed
      if(this.x<120){
        this.section += 1
      }
    }
    
  }
}
