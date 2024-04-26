document.addEventListener("DOMContentLoaded", () => {

	let ball = document.getElementById("ball"); // Targetting the ball element

	//here the ballX and ballY will be helping us to set starting point of ball w.r.t table
	let ballX = 50; // distance of the top of the ball w.r.t ping pong table
	let ballY = 50; // distance of the left of the ball w.r.t ping pong table

	ball.style.top = `${ballX}px`;
	ball.style.left = `${bally}px`;

})