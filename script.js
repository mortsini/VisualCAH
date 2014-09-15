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
		
		
		
		$('#cards').append('<div class="card white-card">'+answers[9]+'</div>');
	});
});
