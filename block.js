class Block extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    Matter.Body.setAngle(this.body, angle);
  }
  
  display(){
    console.log(this.body.speed);
    
    if(this.body.speed<3){
    super.display();
    
    }
    
    else{
      World.remove(world,this.body);
      push()
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      pop()
    
      //code for space button 32
    }
  }

}