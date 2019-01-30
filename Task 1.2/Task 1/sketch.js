function setup()
{
  createCanvas(700,500);

}

function draw()
{
	background(123,231,412)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(123,3,255);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(251,2,351);

	// modifies the thickness of the border of an object
	strokeWeight(20);


	rect(10,10,100,50);
	rect(10,100,100,50);


	fill(521,235,261);
	stroke(215,255,25);
	strokeWeight(20);

	rect(150,10,100,50);
	rect(150,100,100,50);
	worked with justin cai

}
