var car, wall;
var speed, weight;



function setup() {
  createCanvas(1500,400);

  speed=random(55,90);
  weight=random(400,1200);
  car=createSprite(50,200,50,50);
  //car.shapeColor = colour(0,0,0);
  car.debug=true;
  wall=createSprite(1400,200,60, height/2);
  wall.shapeColor = colour(80,80,80);
  
 
  
}

function draw() {
  background("black");  
  car.velocityX = speed;

  

  if(wall.x-car.x < (car.width + wall.width)/2){
    car.velocityX=0;

    var deformation= 0.5 * weight * speed * speed/22509;

    if(deformation > 180){
      car.shapeColor=color(255,0,0);
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }

  }

  Text("start",500,500);
  drawSprites();
}