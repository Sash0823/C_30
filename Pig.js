class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
  }
display(){
  console.log(this.body.speed);
  if(this.body.speed<30){
    super.display();
  }
  else{
    World.remove(world,this.body)
    Push()
    this.visibilty = -5;
    tint(),this.visibility
    Image(this.Image,this.body.posistion.x,this.position.y,50,50);
  }
}
};