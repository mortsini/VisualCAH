var questions;
var answers;

$(document).ready(function(){
	$('p').css("background-color","#0000FF");
	$.get("against-humanity/questions.txt", function(data,status){
		questions = data.split('\n');
	}, 'text');
	$.get("against-humanity/answers.txt", function(data,status){
		answers = data.split('\n');
	}, 'text');
	
	$('#action_deal').click(function(){
		var questionString = questions[Math.floor(questions.length * Math.random())];
		var numAnswers = Math.max(1, (questionString.match(/_/g) || []).length);
		$('#cards').empty();
		$('#cards').append('<div class="card q-color">'+questionString+'</div>');
		for (var i = 0; i < numAnswers; i++) {
			var answerString = answers[Math.floor(answers.length * Math.random())];
			$('#cards').append('<div class="card a-color">'+answerString+'</div>');
		}
		$('.card').effect('slide');
	});
});
