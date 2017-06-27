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
}]

var currentQuestion = 0;

var rightAnswers = 0;

var wrongAnswers = 0;

var timer = {
	value: 20,
	running: false,
}


$("#gamePlay").hide();

function game() {

	function displayQuestion() {

		var i = currentQuestion;

    	console.log(timer.value);

    	function counter() {
    		if (timer.value > 0) {
    			timer.value--;
    			$("#counterDiv").html("<h2>" + timer.value + "</h2>")
    		} else {
    			timeUp();
    		};
    	};

    	counter();

		function timeUp() {
			$("#answerOptions").hide();
			$("#questionContent").html("<h3>The correct answer is " + questions[i].options[questions.correctAnswer] + ".</h3>")
			wrongAnswers++;
		};
		
		
		$("#questionHeader").html("<h2>Question " + (i+1) + "</h2>");
		$("#questionContent").html("<h3>" + questions[i].question + "<h3>")
		$("#optionA").html("<h3>" + questions[i].options[0] + "<h3>");
		$("#optionB").html("<h3>" + questions[i].options[1] + "<h3>");
		$("#optionC").html("<h3>" + questions[i].options[2] + "<h3>");
		$("#optionD").html("<h3>" + questions[i].options[3] + "<h3>");
	};








	

	$("#gamePlay").show("fast", function(){});
	displayQuestion();


}

$("#startButton").on("click", function(){
	game();
	$("#startButton").hide();
});


});