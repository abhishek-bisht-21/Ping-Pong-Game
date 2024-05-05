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

		/**
		 * ballX < paddle.offsetLeft + paddle.offsetWidth -> if left(wrt table) of the ball < right(wrt table) of paddle
		 * 
		 * Next conditions are to check the ball should bounce back of the paddle only
		 *
		 * ballY > paddle.offsetTop -> if top(wrt table) of ball > topwrt table) of paddle 
		 * ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
		 * ballY + ball.offsetHeight -> bottom of the ball
		 * paddle.offsetTop + paddle.offsetHeight -> bottom of the paddle
		 */
		if (ballX < paddle.offsetLeft + paddle.offsetWidth && ballY > paddle.offsetTop && ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight) {
			dx *= -1;
		}

		if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1; // change x-direction
		if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1; // change y-direction
	}, 1);


	let paddleY = 0;
	let dPy = 10; // displacement for paddle in y-direction

	document.addEventListener("keydown", (event) => {
		event.preventDefault(); // prevents the execution of default event behaviour

		if (event.keyCode == 38 && paddleY > 0) {
			// up arrow key is pressed
			console.log("up");
			paddleY += (-1) * dPy;;
		} else if (event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
			// down arrow key is pressed
			console.log("down");
			paddleY += dPy;
		}

		paddle.style.top = `${paddleY}px`;
	});

	document.addEventListener("mousemove", (event) => {
		let mouseDistFromTop = event.clientY; // this is the distance of the mouse pointer from the top of the screen
		let distOfTableFromTop = table.offsetTop;
		let mousePointControl = mouseDistFromTop - distOfTableFromTop - paddle.offsetHeight/2;
		
		// if the bottom of the paddle touches bottom of table. Then return.
		paddleY = mousePointControl;
		if(paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) return;

		paddle.style.top = `${mousePointControl}px`;
	})

})