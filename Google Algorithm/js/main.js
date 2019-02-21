// Developed by Leonardo Sanabria Hoyos

var google = [
	['g', 'G'],
	['o', 0, 'O', '()', '[]', '<>'],
	['o', 0, 'O', '()', '[]', '<>'],
	['g', 'G'],
	['l', 'L', 'I'],
	['e', 'E', 3]
];

var words = [];

for (var i = 0; i < google[0].length; i++) {
	for (var j = 0; j < google[1].length; j++) {
		for (var k = 0; k < google[2].length; k++) {
			for (var l = 0; l < google[3].length; l++) {
				for (var m = 0; m < google[4].length; m++) {
					for (var n = 0; n < google[5].length; n++) {
						words.push(google[0][i] + google[1][j] + google[2][k] + google[3][l] + google[4][m] + google[5][n]);
					}
				}
			}
		}
	}
}

console.log('words: ', words);


$(document).ready(function () {
	console.log('google algorithm');

	$('#search').click(function () {
		var search = $('#input').val();
		console.log('search: ', search);
		validate(search);
	});
});

function validate(search) {
	var exist = 0;
	for (var i = 0; i < words.length; i++) {
		if (search == words[i]) {
			exist++;
			i = words.length;
		}
	}

	if (exist == 0) {
		$('#result').html('<span>' + search + '</span> -> FALSE');
	} else {
		$('#result').html('<span>' + search + '</span> -> TRUE');
	}

	$('#result').show();
}