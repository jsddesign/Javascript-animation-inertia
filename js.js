// Get elements
var box = document.getElementById("box");
var ball = document.getElementById("ball");
// Define variables
var boxLeft = ballLeft = 0;
var step = 1;
// Loop
var animationTrigger = setInterval(animationLoop, 50); 
function animationLoop(){
	boxLeft += step;
	// Set the inertia here, greater number will give greater inertia
	ballLeft += (boxLeft - ballLeft) / 52;
	if(boxLeft<=200){box.style.left = boxLeft + "px";}
	ball.style.left = ballLeft + "px";
	// Stop the animation, kill the interval
	if(ballLeft >= 200){clearInterval(animationTrigger);}
}
