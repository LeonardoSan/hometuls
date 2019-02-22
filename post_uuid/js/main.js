$(document).ready(function(){
	console.log('post');

	$('#post').click(function(){
		post();
	});

	$('#check').click(function(){
		var uuid = $('#uuid').val();

		($.ajax({
			url: 'http://34.201.19.114:40003/recordController/getAllRecords',
			dataType: 'json',
			type: 'GET',
			success: function(data){
				console.log(data);
				var exist = false;
				for (var i = 0; i < data.length; i++) {
					if(data[i].id == uuid){
						exist = true;
						$('#result-check').html('<p>The register is : ' + JSON.stringify(data[i]) + '</p>');
					}

					if(exist == false){
						$('#result-check').html('The register does not exist');
					}
					$('#result-check').show();
				}
			},
			error: function(error){
				console.error(error);
			}
		}));
	});
});

function post(){
	var uuid = generateUUID();
	console.log(uuid);

	var send = {
		"id": uuid,
		"categoryA":"M",
		"categoryB":"M4",
		"comments":null,
		"politicA":null,
		"politicB":null,
		"politicC":null,
		"anonymus":true,
		"name":null,
		"email":null,
		"phone":null,
		"code_state":"16",
		"code_city":"1",
		"gender":null,
		"ipAddress":"127.0.0.1",
		"ipInfo":null,
		"date": new Date().getTime(),
		"image":null,
		"staName":"BOGOTA D.C.",
		"citName":"BOGOTA. D.C.",
		"citId":null,
		"latitude":4.710989,
		"longitude":-74.072092,
		"countItems":0
	};

	($.ajax({
		url: 'http://34.201.19.114:40003/recordController/createRecord',
		contentType: "application/json",
		type: 'POST',
		data: JSON.stringify(send),
		success: function(res){
			console.log(res);
			$('#result-uuid').html('UUID generated: <span>' + uuid + '</span>');
			$('#result-uuid').show();
		},
		error: function(error){
			console.error(error);
		}
	}));
}

function generateUUID(){
  function frame4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return frame4() + frame4() + '-' + frame4() + '-' + frame4() + '-' + frame4() + '-' + frame4() + frame4() + frame4();
}