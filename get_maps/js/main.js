var script = document.createElement('script');
// Add the google maps API key
var googleMapsKey = '';
script.src = 'https://maps.google.com/maps/api/js?key=' + googleMapsKey;
document.getElementsByTagName('body')[0].appendChild(script);

$(window).on('load', function () {
	var api = [{ "id": "0248b9d0-d443-498b-b073-9a08b8f85050", "categoryA": "M", "categoryB": "M2", "comments": null, "politicA": null, "politicB": null, "politicC": null, "anonymus": true, "name": null, "email": null, "phone": null, "code_state": "16", "code_city": "1", "gender": null, "ipAddress": "434.34.34.34", "ipInfo": null, "date": 1549049707000, "image": null, "staName": "BOGOTA D.C.", "citName": "BOGOTA. D.C.", "citId": null, "latitude": 4.710989, "longitude": -74.072092, "countItems": 0 }, { "id": "1248b9d0-d443-498b-b073-9a08b8f85050", "categoryA": "M", "categoryB": "M2", "comments": null, "politicA": null, "politicB": null, "politicC": null, "anonymus": true, "name": null, "email": null, "phone": null, "code_state": "16", "code_city": "1", "gender": null, "ipAddress": "434.34.34.34", "ipInfo": null, "date": 1549049707000, "image": null, "staName": "BOGOTA D.C.", "citName": "BOGOTA. D.C.", "citId": null, "latitude": 4.710989, "longitude": -74.072092, "countItems": 0 }];

	console.log('api', api);

	for (var i = 0; i < api.length; i++) {
		initMap(api[i].latitude, api[i].longitude, api[i].id, api[i].staName);
	}
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