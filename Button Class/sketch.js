
// Creating a Variable called "b1";
// stands for "button 1"
var b1	;
var b2  ;

function setup()
{
	createCanvas(500,500);

	//initalizing the button 1 with
	// x, yz length height values
	b1 = new Button(150,250,100,25);
	b1.setText("Level 3");
	b1.setTextOver("Are you sure?");
	b1.setButtonOverFill(50,255,50);

	b2 = new Button(250,300,100,25);
	b2.setText("Instructions");
	b2.setTextOver("Are you sure?");
	b2.setButtonOverFill(100,223,126);

b3 = new Button(250,350,100,25);
b3.setText("High Score");
b3.setTextOver("Are you sure?");
b3.setButtonOverFill(123,125,643);

b4 = new Button(350,250,100,25);
b4.setText("Level 4");
b4.setTextOver("Are you sure?");
b4.setButtonOverFill(167,317,125);
	}

	b5 = new Button(150,200,100,25);
	b5.setText("Level 1");
	b5.setTextOver("Are you sure?");
	b5.setButtonOverFill(167,317,125);

	b6 = new Button(350,200,100,25);
	b6.setText("Level 2");
	b6.setTextOver("Are you sure?");
	b6.setButtonOverFill(167,317,125);


function draw()
{
	background(255,255,255);

	b1.showButton();
	b2.showButton();
	b3.showButton();
	b4.showButton();
	b5.showButton();
	b6.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("level3/level3.html","_self");
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
			window.open("level4/level4.html","_self");

		 }
	if(b5.getButtonState() == 1)
				{
				 window.open("level1/level1.html","_self");

				}
				if(b6.getButtonState() == 1)
					 {
						window.open("level2/level2.html","_self");

					 }


}
