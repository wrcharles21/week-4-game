

$(document).ready(function() {
		var winCounter = 0; 
		var lossCounter = 0; 
		var score = 0;
		var number = Math.floor((Math.random() *102) + 19);
		console.log(number);
		var red =Math.floor((Math.random() *12) + 1);
		var blue =Math.floor((Math.random() *12) + 1);
		var yellow =Math.floor((Math.random() *12) + 1);
		var green =Math.floor((Math.random() *12) + 1);


		$("#numberToMatch").html(number);
		console.log();

		$("#redCrystal").click(function() {
			update(red);
		})


		$("#blueCrystal").click(function() {
			update(blue);
		});

		$("#yellowCrystal").click(function() {
			update(yellow);
		});

		$("#greenCrystal").click(function() {
			update(green);
		});

		function reset() {
			
			number = Math.floor((Math.random() * 102) + 19);

			$("#numberToMatch").html(number);
			
			red =Math.floor((Math.random() *12) + 1);
		 	blue =Math.floor((Math.random() *12) + 1);
		 	yellow =Math.floor((Math.random() *12) + 1);
		 	green =Math.floor((Math.random() *12) + 1);

		 	$("totalScore").html(score);
		 };

		 function update(crystal) {
		 	score += crystal;
		 	$("#totalScore").empty();
		 	$("#totalScore").append(score);

		 	if (score > number) {
		 		lossCounter++;
		 		$("#losses").html(lossCounter);
		 		$("#winLose").html("You Lose!!!");

		 		reset();
		 	}
		 	else if (score === number) {
		 		winCounter++;
		 		$("#win").html(winCounter);
		 		$("#winLose").html("You Win !!!");

		 		reset();
		 	}

		 };
});







