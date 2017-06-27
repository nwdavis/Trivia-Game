//timers
//questions
//what happens when user clicks start (entire game wrapped in a function)
//what happens when user gets it right
//what happens when user gets it wrong
//reset game

console.log("linked");

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

$("#gamePlay").hide();

function game () {

	function displayQuestion() {

		var i = currentQuestion;
		$("#questionHeader").html("<h2>" + questions[i].question + "</h2>");
		$("#optionA").html("<h3>" + questions[i].options[0] + "<h2>");
		$("#optionB").html("<h3>" + questions[i].options[1] + "<h2>");
		$("#optionC").html("<h3>" + questions[i].options[2] + "<h2>");
		$("#optionD").html("<h3>" + questions[i].options[3] + "<h2>");
	}

	$("#gamePlay").show("fast", function(){});

	if (currentQuestion === 0) {
		$("#questionHeader").html("<h2>" + questions[0].question + "</h2>");
		$("#optionA").html("<h3>" + questions[0].options[0] + "<h2>");
		$("#optionB").html("<h3>" + questions[1].options[1] + "<h2>");
		$("#optionC").html("<h3>" + questions[2].options[2] + "<h2>");
		$("#optionD").html("<h3>" + questions[3].options[3] + "<h2>");
	}


}

$("#startButton").on("click", game());