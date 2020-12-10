var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
 
  bullet=createSprite(50,200,80,15);
  bullet.shapeColor=("white")

  wall=createSprite(1200,200,thickness,height/2)
 wall.shapeColor= (80,80,80)

 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);

bullet.velocityX=speed;

}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10)
    {
      wall.shapeColor=color(255,0,0)
    }

    if (damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  }

 /* if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*speed*weight*speed/22509;
    if (deformation>180)
    {
      car.shapeColor="red";
    }

    if(deformation<180 &&deformation>100)
    {
      car.shapeColor="yellow"
    }

    if(deformation<100)
    {
      car.shapeColor="green"
    }
  }*/
  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}