var Playerx = 85;
var Playery = 85;
var w = 87;
var s = 83;
var a = 65;
var d = 68;
var obstacle1X = 50;
var obstacle1Y = 50;
var obstacle2X = 60;
var obstacle2Y = 60;
var obstacle1xspeed;
var obstacle1yspeed;
var obstacle2xspeed;
var obstacle2yspeed;
var mouseshapex;
var mouseshapey;

function setup()
{
    createCanvas(600,600);
    obstacle1xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle1yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle2xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle2yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

}
function draw()
{
  background(40,11,150);
  fill(0);
  createBorders(10);
  drawCharcter();
  charcterMovement();
  fill(27,51,43);
  circle(obstacle1X,obstacle1Y,10);
  circle(obstacle2X,obstacle2Y,10);
  obstacle1X += obstacle1xspeed
  obstacle1Y += obstacle1yspeed
  obstacle2X += obstacle2xspeed
  obstacle2Y += obstacle2yspeed
  if(obstacle1X > width)
  {
    obstacle1X = 0;
  }
  if(obstacle1X < 0)
  {
    obstacle1X = width;
  }
  if(obstacle1Y > height)
  {
    obstacle1Y = 0;
  }
  if(obstacle1Y < 0)
  {
    obstacle1Y = height;
  }
  if(obstacle2X > width)
  {
    obstacle2X = 0;
  }
  if(obstacle2X < 0)
  {
    obstacle2X = width;
  }
  if(obstacle2Y > height)
  {
    obstacle2Y = 0;
  }
  if(obstacle2Y < 0)
  {
    obstacle2Y = height;
  }
  textSize(20);
  fill(0);
  text("exit", width-60,height-50);
  if(Playerx > width && Playery > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
  fill(13,13,13);
  circle(mouseshapex,mouseshapey,50)
 
}

function charcterMovement()
{
if(keyIsDown(w))
   {
        Playery -= 5;
   }
  if(keyIsDown(s))
   {
        Playery += 5;
   }
  if(keyIsDown(a))
   {
        Playerx -= 5;
   }
  if(keyIsDown(d))
   {
        Playerx += 5;
   }
}

function drawCharcter() 
{
    fill(72,111,67);
   circle(Playerx,Playery,30); 
}

function createCharcter(x,y)
{
  Playerx = x;
  Playery = y;
  console. log(Playerx);
}

function createBorders(thickness)
{
  rect(0,0,width,thickness);
  rect(0,height-thickness,width,thickness);
  rect(0,0,thickness,height);
  rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
  {
    mouseshapex = mouseX;
    mouseshapey = mouseY;
  }