var Playerx = 85;
var Playery = 85;
var w = 87;
var s = 83;
var a = 65;
var d = 68;
var mouseshapex;
var mouseshapey;
var ObstacleXs = [];
var ObstacleYs = [];
var ObstacleDiameters = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];
var colornumber;

function setup()
{
    createCanvas(600,600);
    for (var i = 0; i < 5; i++)
      {
     shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     ObstacleXs[i] = getRandomNumber(500);
     ObstacleYs[i] = getRandomNumber(600);
     ObstacleDiameters[i] = getRandomNumber(30);       
      }
}
function draw()
{

  background(40,11,150);
  fill(0);
  createBorders(10);
  drawCharcter();
  charcterMovement();
  drawExit();
  youWin();
  Drawobstacles();
  drawMouseclick();

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

function drawExit()
{
  textSize(20);
  fill(0);
  text("exit", width-60,height-50);
}

function youWin()
{
  if(Playerx > width && Playery > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
}

function drawMouseclick()
{
  fill(13,13,13);
  circle(mouseshapex,mouseshapey,50)
}

function mouseClicked()
  {
  mouseshapex = mouseX;
  mouseshapey = mouseY;
  }

function getRandomNumber(number)
{
  return Math.floor(Math.random() * number)+10;
}
function Drawobstacles()
{
   fill(colornumber[i],colornumber[i],colornumber[i]);
  for (var i = 0; i < ObstacleXs.length; i++){
   circle(ObstacleXs[i], ObstacleYs[i], ObstacleDiameters[i]);
   shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   ObstacleXs[i] += shapeXSpeeds[i];
   ObstacleYs[i] += shapeYSpeeds[i];
    if (ObstacleXs[i] > width) 
      {ObstacleXs[i] = 0;}
    if (ObstacleXs[i] < 0) 
      {ObstacleXs[i] = width;}
    if (ObstacleYs[i] > height) 
      {ObstacleYs[i] = 0;}
    if (ObstacleYs[i] < 0) 
      {ObstacleYs[i] = height;} 
  }
}
function colornumber(){
  return Math.floor(Math.random() * number)+10;
}