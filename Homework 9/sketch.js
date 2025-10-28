function setup()
{
    createCanvas(400, 400);
}

function draw()
{
    background(220);



    // body
    strokeWeight(5);
    rect(150,280,100,120);
    
    //beard

    // head
    circle(200,200,175); 

    // nose
    triangle(180,220,220,220,200,190);

    //eyes
    circle(160,175,40);
    circle(240,175,40);
    strokeWeight(15);
    point(160,175);
    point(240,175);
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
    textSize(40);
    text('Me IRL', 10, 50);

    //signature
    textSize(15);
    text('doug lautzenheiser', 10, 350);
}