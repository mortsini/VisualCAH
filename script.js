var questions;
var answers;
var dealing = false;
$(document).ready(function(){
	$.get("against-humanity/questions.txt", function(data,status){
		questions = data.split('\n');
	}, 'text');
	$.get("against-humanity/answers.txt", function(data,status){
		answers = data.split('\n');
	}, 'text');
	
	$('html').click(clearAndDealCards);
	$(document).keypress(clearAndDealCards);
});

function clearAndDealCards() {
	if (!dealing) {
		dealing = true;
		$('#card-content').slideUp(function(){
			$('.card-container').empty();
			$('#card-content').slideDown(dealCards);
		});
	}
}
function dealCards() {
	var questionString = questions[Math.floor(questions.length * Math.random())];
		var numAnswers = Math.max(1, (questionString.match(/_+[^_]*/g) || []).length);
		$('#questions-container').append(toCard(questionString, false));
		for (var i = 0; i < numAnswers; i++) {
			var answerString = answers[Math.floor(answers.length * Math.random())];
			$('#answers-container').append(toCard(answerString, true));
		}
		$('.card').effect('slide', function(){
			dealing = false;
		});
}
function toCard(text, isAnswer) {
	var colorType = (isAnswer) ? 'a' : 'q';
	return '<span class="card-container"><div class="card '+
		colorType+'-color">'+text+'</div></span>';
}