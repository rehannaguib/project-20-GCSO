var bullet, wall;
var thickness,speed, weight;

function setup() { 
  createCanvas(1600, 400); 
  thickness=random(10,70);
  speed=random(223,321);
   weight=random(30,52);
    bullet=createSprite(50, 200, 50, 30);
     
     bullet.shapeColor=color(255);
      wall=createSprite(1500,200,thickness, height/2) 
      wall.shapeColor=color(80,80,80) 
    } 
    function draw() {
       background(0); 
       bullet.velocityX = speed; 
       if(hasCollided(bullet,wall)){
         bullet.velocityX=0;
         var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

        if(damage>10){
          wall.shapeColor = color(255,0,0);
        }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }


       }
          drawSprites();
         }


function hasCollided(lbullet,lwall){
  var bulletRightEdge= lbullet.x + lbullet.width;
  var wallLeftEdge= lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}