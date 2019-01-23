function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);

}

function draw()
{
  //create a background using RGB values
  background(112,219,100)

  // change the paint brush to a specific color according to RGB values
  fill	(126,175,218)  ;

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(10,10,10,50);
  rect(10,10,50,10);
  rect(10,50,50,10);
  rect(50,10,10,50);
  rect(70,10,10,50);
  rect(100,10,10,50);
  rect(100,25,12,10);
  rect(100,30,12,10);
  rect(103,25,12,10);
  rect(110,20,12,10);
  rect(120,15,12,10);
  rect(103,30,12,10);
  rect(110,40,12,10);
  rect(120,50,12,10);

}
