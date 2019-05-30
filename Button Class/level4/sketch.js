var player;
var timer;
var platformManager1;
var platformManager2;
var platformManager3;
var healthBar;

function preload()
{

}

function setup()
{
	createCanvas(800,500);

	var playerImage = loadImage('https://ps20221023.github.io/Y10-computer-design/Questions/Student.png');

	// setup player
	player = new Player(100,10);
	player.setPlayerImage(playerImage,59/4,89/4);



	// setup health bar
	healthBar = new HealthBar(10,10); // startinghealth, maxhealth
	healthBar.setHealthBarXY(400,10);

	// --------------------------------- Death Animation ---------------------------------

	var deathAnimation = new Array(6);
	deathAnimation[0] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-1.png');
	deathAnimation[1] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-2.png');
	deathAnimation[2] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-3.png');
	deathAnimation[3] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-4.png');
	deathAnimation[4] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-5.png');
	deathAnimation[5] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-6.png');

	// --------------------------------- Death Animation ---------------------------------



	// --------------------------------- QUESTION 1 ---------------------------------
	var question1 = loadImage('https://ps20221023.github.io/Y10-computer-design/Questions/level4q1.png');
	var answers1 = new Array(4);
	answers1[0] = loadImage('https://ps20221023.github.io/Y10-computer-design/level4q1a.png'); // 0
	answers1[1] = loadImage('https://ps20221023.github.io/Y10-computer-design/level4q1b.png'); // 1
	answers1[2] = loadImage('https://ps20221023.github.io/Y10-computer-design/level4q1c.png'); // 2
	answers1[3] = loadImage('https://ps20221023.github.io/Y10-computer-design/level4q1d.png'); // 3

	// numberofquestions,arrayofimages,randomized,answer,extraplatforms
	platformManager1 = new QuestionManager(4,null,true,2,3);

	// all answer platforms
	platformManager1.setPlatform(0,100+0*80,350,50,50,answers1[0]);
	platformManager1.setPlatform(1,100+1*80,350,50,50,answers1[1]);
	platformManager1.setPlatform(2,100+2*80,350,50,50,answers1[2]);
	platformManager1.setPlatform(3,100+3*80,350,50,50,answers1[3]);

	// all other platforms including question
	platformManager1.addImagePlatform(4,question1,0,500-50,800,50);
	platformManager1.addPlatform(5,0,0,25,500);
	platformManager1.addPlatform(6,800-25,0,25,500);

	// --------------------------------- QUESTION 1 ---------------------------------


	// --------------------------------- QUESTION 2 ---------------------------------
	var question2 = loadImage('https://ps20221023.github.io/Y10-computer-design/Questions/level4q2.png');
	var answers2 = new Array(4);

	answers2[0] = loadImage('https://ps20221023.github.io/Y10-computer-design/level4q2a.png');
	answers2[1] = loadImage('https://ps20221023.github.io/Y10-computer-design/level4q2b.png');
	answers2[2] = loadImage('https://ps20221023.github.io/Y10-computer-design/level4q2c.png');
	answers2[3] = loadImage('https://ps20221023.github.io/Y10-computer-design/level4q2d.png');


	// numberofquestions,arrayofimages,randomized,answer,extraplatforms
	platformManager2 = new QuestionManager(4,null,false,0,3);

	// all answer platforms
	platformManager2.setPlatform(0,100+0*80,350,50,50,answers2[0]);
	platformManager2.setPlatform(1,100+1*80,350,50,50,answers2[1]);
	platformManager2.setPlatform(2,100+2*80,350,50,50,answers2[2]);
	platformManager2.setPlatform(3,100+3*80,350,50,50,answers2[3]);

	// all other platforms including question
	platformManager2.addImagePlatform(4,question2,0,500-50,800,50);
//	platformManager.addPlatform(4,0,500-25,800,25);
	platformManager2.addPlatform(5,0,0,25,500);
	platformManager2.addPlatform(6,800-25,0,25,500);
	// --------------------------------- QUESTION 2 ---------------------------------



	// --------------------------------- QUESTION 3 ---------------------------------
	var question3 = loadImage('https://ps20221023.github.io/Y10-computer-design/Questions/level4q3.png');
	var answers3 = new Array(4);

	answers3[0] = loadImage('https://ps20221023.github.io/Y10-computer-design/Questions/level4q3a.png');
	answers3[1] = loadImage('https://ps20221023.github.io/Y10-computer-design/Questions/level4q3b.png');
	answers3[2] = loadImage('https://ps20221023.github.io/Y10-computer-design/Questions/level4q3c.png');
	answers3[3] = loadImage('https://ps20221023.github.io/Y10-computer-design/Questions/level4q3d.png');


	// numberofquestions,arrayofimages,randomized,answer,extraplatforms
	platformManager3 = new QuestionManager(4,null,false,3,3);

	// all answer platforms
	platformManager3.setPlatform(0,100+0*80,350,50,50,answers3[0]);
	platformManager3.setPlatform(1,100+1*80,350,50,50,answers3[1]);
	platformManager3.setPlatform(2,100+2*80,350,50,50,answers3[2]);
	platformManager3.setPlatform(3,100+3*80,350,50,50,answers3[3]);

	// all other platforms including question
	platformManager3.addImagePlatform(4,question3,0,500-50,800,50);
//	platformManager.addPlatform(4,0,500-25,800,25);
	platformManager3.addPlatform(5,0,0,25,500);
	platformManager3.addPlatform(6,800-25,0,25,500);
	// --------------------------------- QUESTION 3 ---------------------------------



	// begin with question 1
	platformManager1.start();
}

function draw()
{
	background(125,125,125);

	// show controls
	fill(255,255,255);
	text("'A' Move Left",50,50);
	text("'D' Move Right",50,75);
	text("'W' Jump",50,100);

	// ------------------------------------- QUESTION 1 -------------------------------------
	if (platformManager1.hasStarted())
	{
		platformManager1.drawPlatforms();
		var q = player.drawPlayer(platformManager1.getAllPlatforms());
		if (q == platformManager1.getAnswer())
		{
			console.log('answer touched');
			// T - start countdown timer - T
			platformManager1.startCountdownTimer();
		}
		// destroy platform when the player strikes it from the bottom
		if (q != -1)
		{
			platformManager1.destroyPlatform(q);
			// if incorrect answer deduct health
			if (q != platformManager1.getAnswer())
					healthBar.deductHealth(4);
		}
		// T - use a countdown timer before next question begins - T
		if (platformManager1.isCountdownTimerFinished() == false)
		{
			platformManager1.runTimer();
		}
		// T - otherwise end the question - T
		else {
			platformManager1.endQuestion();
			platformManager2.start();
		}
	}
	// ------------------------------------- QUESTION 1 -------------------------------------


	// ------------------------------------- QUESTION 2 -------------------------------------
	if (platformManager2.hasStarted())
	{
		platformManager2.drawPlatforms();
		var q = player.drawPlayer(platformManager2.getAllPlatforms());
		if (q == platformManager2.getAnswer())
		{
			console.log('answer touched');
			// T - start countdown timer - T
			platformManager2.startCountdownTimer();
		}
		// destroy platform when the player strikes it from the bottom
		if (q != -1)
		{
			platformManager2.destroyPlatform(q);
			// if incorrect answer deduct health
			if (q != platformManager2.getAnswer())
					healthBar.deductHealth(4);
		}
		// T - use a countdown timer before next question begins - T
		if (platformManager2.isCountdownTimerFinished() == false)
		{
			platformManager2.runTimer();
		}
		// T - otherwise end the question - T
		else {
			platformManager2.endQuestion();
			platformManager3.start();
		}
	}
	// ------------------------------------- QUESTION 2 -------------------------------------



	// ------------------------------------- QUESTION 3 -------------------------------------
	if (platformManager3.hasStarted())
	{
		platformManager3.drawPlatforms();
		var q = player.drawPlayer(platformManager3.getAllPlatforms());
		if (q == platformManager3.getAnswer())
		{
			console.log('answer touched');
			// T - start countdown timer - T
			platformManager3.startCountdownTimer();
		}
		// destroy platform when the player strikes it from the bottom
		if (q != -1)
		{
			platformManager3.destroyPlatform(q);
			// if incorrect answer deduct health
			if (q != platformManager3.getAnswer())
					healthBar.deductHealth(4);
		}
		// T - use a countdown timer before next question begins - T
		if (platformManager3.isCountdownTimerFinished() == false)
		{
			platformManager3.runTimer();
		}
		// T - otherwise end the question - T
		else {
			window.open("../level4/level4	.html","_self");
		}
	}
	// ------------------------------------- QUESTION 3 -------------------------------------



	// ------------------------------------- HEALTH BAR -------------------------------------
	// show health bar
	healthBar.showHealthBar();
	// if health reaches 0, DEAD
	if (healthBar.isAlive() == false)
	{
		// go to main menu
		window.open("mainmenu/mainmenu.html","_self");
	}
	// ------------------------------------- HEALTH BAR -------------------------------------

}

function keyPressed()
{
	player.charKeyPressed();
}

function keyReleased()
{
	player.charKeyReleased();
}
