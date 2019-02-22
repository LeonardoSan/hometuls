var script = document.createElement('script');
// Add the google maps API key
var googleMapsKey = '';
script.src = 'https://maps.google.com/maps/api/js?key=' + googleMapsKey;
document.getElementsByTagName('body')[0].appendChild(script);

$(window).on('load', function () {
	($.ajax({
		url: 'http://34.201.19.114:40003/recordController/getAllRecords',
		dataType: 'json',
		type: 'GET',
		success: function(data){
			console.log(data);

			for (var i = 0; i < data.length; i++) {
				initMap(data[i].latitude, data[i].longitude, data[i].id, data[i].citName);
			}
		},
		error: function(error){
			console.error(error);
		}
	}));
});

function initMap(latitude, longitude, id, title) {
	var location = new google.maps.LatLng(latitude, longitude);
	var mapOptions = {
		center: location,
		zoom: 14
	};
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		title: title
	});
	var div = document.createElement('div');
	div.id = id;
	div.className = 'map';
	var nameMap = document.createElement('h4');
	nameMap.innerText = title;
	document.getElementById('maps').appendChild(nameMap);
	document.getElementById('maps').appendChild(div);
	var map = new google.maps.Map(document.getElementById(id), mapOptions);
	marker.setMap(map);
}