var questions;
var answers;

$(document).ready(function(){
	$.get("against-humanity/questions.txt", function(data,status){
		questions = data.split('\n');
	}, 'text');
	$.get("against-humanity/answers.txt", function(data,status){
		answers = data.split('\n');
	}, 'text');
	
	$('#action_deal').click(function(){
		var questionString = questions[Math.floor(questions.length * Math.random())];
		var numAnswers = Math.max(1, (questionString.match(/_+[^_]*/g) || []).length);
		$('#questions-container').empty();
		$('#answers-container').empty();
		$('#questions-container').append(toCard(questionString, false));
		for (var i = 0; i < numAnswers; i++) {
			var answerString = answers[Math.floor(answers.length * Math.random())];
			$('#answers-container').append(toCard(answerString, true));
		}
		$('.card').effect('slide');
	});
});

function toCard(text, isAnswer) {
	var colorType = (isAnswer) ? 'a' : 'q';
	return '<span class="card-container"><div class="card '+
		colorType+'-color">'+text+'</div></span>';
}