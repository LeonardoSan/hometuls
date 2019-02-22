$(document).ready(function(){
	console.log('post');

	$('#post').click(function(){
		post();
	});
});

function post(){

	var uuid = generateUUID();
	console.log(uuid);

	$('#result').html('UUID generated: <span>' + uuid + '</span>');
	$('#result').show();
}

function generateUUID(){
  function frame4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return frame4() + frame4() + '-' + frame4() + '-' + frame4() + '-' + frame4() + '-' + frame4() + frame4() + frame4();
}