var wall, thickness;
var bullet, speed, weight;
var damage;
var bulletRightedge, wallLeftedge

thickness = random(22, 83);
speed = random(223, 321);
weight = random(30, 50);


function setup() {
   createCanvas(1600, 400);
   createSprite(400, 200, 50, 50);

   bullet = createSprite(50, 200, 100, 20)
   bullet.shapeColor = "white";

   wall = createSprite(1200, 200, thickness, height / 2);
   wall.shapeColor = color(80, 80, 80);

}


function draw() {
   background(0);


   if (hasColided(bullet, wall)) {
      bullet.velocityX = 0;
      damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
   }

   if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
   }

   if (damage < 10) {
      wall.shapeColor = color(0, 255, 0)
   }




   bullet.velocityX = speed;


   hasColided();
   drawSprites();
}


function hasColided(bullet, wall) {
   bulletRightedge = bullet.x + bullet.width;
   wallLeftedge = wall.x;
   if (bulletRightedge >= wallLeftedges) {
      return true;
   }
   return false;

}
