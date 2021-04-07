class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255;
  }
display(){
  //console.log(this.body.speed)

  if(this.body.speed<2){
  super.display()
}
else{
  push()
    World.remove(world,this.body)
    this.visiblity-=3
  tint (255,this.visiblity)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop()
}
}
score(){
if(this.visiblity<0 && this.visiblity>-275){
  score++
}

}
};