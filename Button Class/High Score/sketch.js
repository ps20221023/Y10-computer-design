var b1;
var b2;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("Main Menu");
	b1.setTextOver("Are you sure?");
	b1.setButtonOverFill(255,255,50);



}

function draw()
{
	background(125,125,125);

	b1.showButton();


	if (b1.getButtonState() == 1)
	{
		window.open("../index.html","_self");
	}
}
