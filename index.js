document.addEventListener("DOMContentLoaded", () => {

	let ball = document.getElementById("ball"); // Targetting the ball element
	let table = document.getElementById("ping-pong-table");

	//here the ballX and ballY will be helping us to set starting point of ball w.r.t table
	let ballX = 50; // distance of the top of the ball w.r.t ping pong table
	let ballY = 50; // distance of the left of the ball w.r.t ping pong table

	let dx = 2; // displacement factor in x-direction, 2 -> you'll displace 2px in +x direction, -2 -> you'll displace 2px in -x direction
	let dy = 2;  // displacement factor in y-direction, 2 -> you'll displace 2px in +y direction, -2 -> you'll displace 2px in -y direction

	ball.style.left = `${ballX}px`;
	ball.style.top = `${ballY}px`;

	setInterval(function exec() {
		ballX += dx;
		ballY += dy;

		ball.style.left = `${ballX}px`;
		ball.style.top = `${ballY}px`;

		if (ballX > table.offsetWidth-ball.offsetWidth || ballX <= 0) dx *= -1; // change x-direction
		if (ballY > table.offsetHeight-ball.offsetHeight || ballY <= 0) dy *= -1; // change y-direction
	}, 1);

})