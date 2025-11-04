var headX = 200;
var headY = 200;
var headDirection = 3;
var lefteyeX = 160;
var lefteyeY = 175;
var lefteyeDirection = 2;
var righteyeX = 240;
var righteyeY = 175;
var righteyeDirection = 4;
var bodyX = 150;
var bodyY = 280;
var bodyDirection = 1; 
var size = 22;
var count = 0;
var sizeDirection = 2;
var eyepointX = 160;
var eyepointY = 175;
var eyepointDirection = 1; 

function setup()
{
    createCanvas(400, 400);
    headDirection = floor(random(1,11));
    bodyDirection = floor(random(1,11));
    righteyeDirection = floor(random(1,11));
    lefteyeDirection = floor(random(1,11));
    eyepointDirection = floor(random(1,11));

    
}

function draw()
{
    background(220);



    // body
    strokeWeight(5);
    rect(bodyX,280,100,120);
    bodyX+=bodyDirection;
    if(bodyX >= 300 || bodyX <= 0)
    {
        bodyDirection *= -1;
    }
    

    // head
    circle(headX,headY,175); 
    headX+=headDirection;
    if(headX >= 400 || headX <= 0)
    {
        headDirection *= -1;
    }


    // nose
    triangle(180,220,220,220,200,190);

    //eyes
    circle(lefteyeX,lefteyeY,40);
    circle(240,righteyeY,40);
    strokeWeight(15);
    point(eyepointX,eyepointY);
    point(240,righteyeY);
     lefteyeY+=lefteyeDirection;
    if(lefteyeY >= 400 || lefteyeY <= 0)
    {
        lefteyeDirection *= -1;
    }
    righteyeY+=righteyeDirection;
    if(righteyeY >= 400 || righteyeY <= 0)
    {
        righteyeDirection *= -1;
    }
    eyepointX+=eyepointDirection;
    if(eyepointX >= 400 || eyepointX <= 0)
    {
        eyepointDirection *= -1;
    }  
    eyepointY+=eyepointDirection;
    if(eyepointY >= 400 || eyepointY <= 0)
    {
        eyepointDirection *= -1;
    }
    strokeWeight(20);
    line(140,150,175,150);
    line(220,150,255,150);

    //hair
    strokeWeight(20);
    line(200,100,80,175);
    line(200,100,320,175);

    //beard
    strokeWeight(5);
    line(170,230,230,230);
    line(170,230,160,240);
    line(230,230,240,240);
    line(240,240,284,175);
    line(160,240,116,175);

    //mouth
    line(160,260,240,260);

    //title
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Me IRL', 10, 50);

    //signature
    textSize(15);
    text('Doug Lautzenheiser', 10, 350);
}