//timers
//questions
//what happens when user clicks start (entire game wrapped in a function)
//what happens when user gets it right
//what happens when user gets it wrong
//reset game
$(document).ready(function() {


var questions = [
	{
	question: "The St. Lawrence River forms part of the border between which two countries?",
	options: ["South Africa & Zimbabwe", "Italy & France", "U.S. & Canada", "U.S. & Mexico"],
	correctAnswer: 2,
},
	{
	question: "What U.S. National Park, located in the Northwest corner of Montana, has the nickname 'Crown of the Continent?'",
	options: ["Yellowstone", "Glacier", "Arches", "Grand Canyon"],
	correctAnswer: 1,
},
	{
	question: "Sardinia, the second largest island in the Mediterranean Sea, is an autonomous region of what country?",
	options: ["Italy", "Egypt", "Spain", "France"],
	correctAnswer: 0,
},
	{
	question: "Beirut is the capital and largest city of what country?",
	options: ["Israel", "Lebanon", "Oman", "Egypt"],
	correctAnswer: 1,
},
	{
	question: "Located in Northwestern Turkey, which strait separates Europe and Asia?",
	options: ["Hormuz", "Gibraltar", "Malacca", "Bosphorus"],
	correctAnswer: 3,
},
	{
	question: "South Africa completely surrounds which other African nation?",
	options: ["Lesotho", "Swaziland", "Zanzibar", "Malawi"],
	correctAnswer: 0,
},
	{
	question: "The Yangtze River is entirely located in which country?",
	options: ["Laos", "Vietnam", "China", "Taiwan"],
	correctAnswer: 2,
},
	{
	question: "How many US states border the Pacific Ocean?",
	options: ["Two", "Three", "Four", "Five"],
	correctAnswer: 3,
}];

var facts = [
	"The St. Lawrence River drains into the Gulf of St. Lawrence, the largest estuary in the world.",
	"Glacier National Park was established in 1910, and has 3 million visitors per year, on average.",
	"Sardines are named after the island of Sardinia, where they were once found in abundance.",
	"Beirut is also known as the Paris of the East.",
	"There are three bridges that cross the Bosphorus, the most recent of which opened to traffic in 2016.",
	"A mountainous country, Lesotho (pronounced li-SOO-too) is the southernmost landlocked country in the world.",
	"The Yangtze River is the third largest river in the world.",
	"While only 5 states border the Pacific, there are numerous US Overseas Territories in the Pacific Ocean.",
]

var currentQuestion = 0;

var rightAnswers = 0;

var wrongAnswers = 0;

var answerTimer = {
	value: 20,
	running: false,
};

var intervalId;


$("#gamePlay").hide();

$("#startButton").on("click", function(){
	game();
	$("#startButton").hide();
});

	function game() {

		// shows the game, shows the question div, checks if all questions have been answered. i is equal to the current question
		function displayQuestion(i) {

			$("#gamePlay").show("fast", function(){});

			intervalId = setInterval(countDown, 1000);

			if (i === 8) {
				$("#answerOptions").hide();
				$("#questionHeader").html("<h2>Thanks for playing!</h2>")
				$("#questionContent").html("<h3>Correct: " + rightAnswers + "</h3><br><h3>Incorrect: " + wrongAnswers + 
					"</h3>");
				setTimeout(gameReplay, 1000 * 5);
			} else {
			
				$("#questionHeader").html("<h2>Question " + (i+1) + "</h2>");
				$("#questionContent").html("<h3>" + questions[i].question + "<h3>")
				$("#optionA").html("<h3>" + questions[i].options[0] + "<h3>");
				$("#optionB").html("<h3>" + questions[i].options[1] + "<h3>");
				$("#optionC").html("<h3>" + questions[i].options[2] + "<h3>");
				$("#optionD").html("<h3>" + questions[i].options[3] + "<h3>");

			};
			
		};

		function countDown() {
			answerTimer.value--;
			if (answerTimer.value === 0){
				clearInterval(intervalId);
				wrongAnswers++;
				$("#questionHeader").html("<h2>Wrong!</h2>");
				$("#questionContent").html("<h3>The correct answer is " + questions[currentQuestion].options[questions[currentQuestion].correctAnswer] + ".</h3>");
				currentQuestion++;
				answerTimer.value = 20;
				displayQuestion(currentQuestion);
			};
			$("#counterDiv").html("<h3>" + answerTimer.value + "<h3>");
		};

		function nextQuestionTimer() {
			displayQuestion(currentQuestion);
		};

		// along with timeout function above, restarts game. having trouble showing the question div again on replay though
		function gameReplay() {
			currentQuestion = 0;
			rightAnswers = 0;
			wrongAnswers = 0;
			answerTimer.value = 20;
			game();
		};

			// on click answering

			$(".answer").on("click", function(){
				clearInterval(intervalId);
				setTimeout(nextQuestionTimer, 1000 * 3);
				if (this.id === "optionA") {
					var userAnswer = 0;
					var i = currentQuestion;
					if (userAnswer === questions[currentQuestion].correctAnswer) {
						rightAnswers++;
						$("#questionHeader").html("<h2>Correct!</h2>");
						$("#questionContent").html("<h3>" + facts[i] + "</h3>");
						currentQuestion++;
					} else {
						wrongAnswers++;
						$("#questionHeader").html("<h2>Wrong!</h2>");
						$("#questionContent").html("<h3>The correct answer is " + questions[i].options[questions[i].correctAnswer] + ".</h3>");
						currentQuestion++;
					};
				};

				if (this.id === "optionB") {
					var userAnswer = 1;
					var i = currentQuestion;
					if (userAnswer === questions[currentQuestion].correctAnswer) {
						rightAnswers++;
						$("#questionHeader").html("<h2>Correct!</h2>");
						$("#questionContent").html("<h3>" + facts[i] + "</h3>");
						currentQuestion++;
					} else {
						wrongAnswers++;
						$("#questionHeader").html("<h2>Wrong!</h2>");
						$("#questionContent").html("<h3>The correct answer is " + questions[i].options[questions[i].correctAnswer] + ".</h3>");
						currentQuestion++;
					};
				}

				if (this.id ==="optionC"){
					var userAnswer = 2;
					var i = currentQuestion;
					if (userAnswer === questions[currentQuestion].correctAnswer) {
						rightAnswers++;
						$("#questionHeader").html("<h2>Correct!</h2>");
						$("#questionContent").html("<h3>" + facts[i] + "</h3>");
						currentQuestion++;
					} else {
						wrongAnswers++;
						$("#questionHeader").html("<h2>Wrong!</h2>");
						$("#questionContent").html("<h3>The correct answer is " + questions[i].options[questions[i].correctAnswer] + ".</h3>");
						currentQuestion++;
					};
				};

				if (this.id ==="optionD") {
					var userAnswer = 3;
					var i = currentQuestion;
					if (userAnswer === questions[currentQuestion].correctAnswer) {
						rightAnswers++;
						$("#questionHeader").html("<h2>Correct!</h2>");
						$("#questionContent").html("<h3>" + facts[i] + "</h3>");
						currentQuestion++;
					} else {
						wrongAnswers++;
						$("#questionHeader").html("<h2>Wrong!</h2>");
						$("#questionContent").html("<h3>The correct answer is " + questions[i].options[questions[i].correctAnswer] + ".</h3>");
						currentQuestion++;
					};
				};
			});
		
	// displays the question for the first time
	displayQuestion(currentQuestion);

	};

});