document.addEventListener("DOMContentLoaded", () => {

	let ball = document.getElementById("ball"); // Targetting the ball element
	let table = document.getElementById("ping-pong-table");
	let paddle = document.getElementById("paddle"); // targetting the paddle element

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

		if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1; // change x-direction
		if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1; // change y-direction
	}, 1);


	let paddleY = 0;
	let dPy = 5; // displacement for paddle in y-direction

	document.addEventListener("keydown", (event) => {
		event.preventDefault(); // prevents the execution of default event behaviour

		if (event.keyCode == 38 && paddleY > 0) {
			// up arrow key is pressed
			console.log("up");
			paddleY += (-1)*dPy;;
		} else if (event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
			// down arrow key is pressed
			console.log("down");
			paddleY += dPy;
		}

		paddle.style.top = `${paddleY}px`;
	})

})