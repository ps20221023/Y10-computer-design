var b1;
var b2;
var b3;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("level1");
	b1.setTextOver("Are you sure?");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,100,100,25);
b2.setText("level2");
b2.setTextOver("Are you sure?")
b2.setButtonOverFill(125,126,901);

b3 = new Button(10,190,100,25);
b3.setText("level3")
b3.setTextOver("Are you sure?")
b3.setButtonOverFill(122,512,169);

}

function draw()
{
	background(125,125,125);

	b1.showButton();
	b2.showButton();
	b3.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("level1/level1.html","_self");
	}
	if (b2.getButtonState()== 1)
	{
		window.open("level2/level2.html","_self");
	}
	if (b3.getButtonState()== 1)
	{
		window.open("level3/level3.html","_self");
	}


}
