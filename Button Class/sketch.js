
// Creating a Variable called "b1";
// stands for "button 1"
var b1	;
var b2  ;

function setup()
{
	createCanvas(500,500);

	//initalizing the button 1 with
	// x, yz length height values
	b1 = new Button(10,10,100,25);
	b1.setText("Easy");
	b1.setTextOver("Are you sure?");
	b1.setButtonOverFill(50,255,50);

	b2 = new Button(10,100,100,25);
	b2.setText("Instructions");
	b2.setTextOver("Are you sure?");
	b2.setButtonOverFill(100,223,126);

b3 = new Button(10,190,100,25);
b3.setText("High Score");
b3.setTextOver("Are you sure?");
b3.setButtonOverFill(123,125,643);

b4 = new Button(10,280,100,25);
b4.setText("Hard");
b4.setTextOver("Are you sure?");
b4.setButtonOverFill(167,317,125);
	}


function draw()
{
	background(255,255,255);

	b1.showButton();
	b2.showButton();
	b3.showButton();
	b4.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("Easy/Easy.html","_self");
		//           buttonList/buttonList.html
	}

 if (b2.getButtonState() == 1)
  {
		window.open("Instructions/Instructions.html","_self");
	}
	if (b3.getButtonState() == 1)
	 {
		 window.open("High Score/High Score.html","_self");
}
	if(b4.getButtonState() == 1)
		 {
			window.open("Hard/Hard.html","_self");

		 }

}
