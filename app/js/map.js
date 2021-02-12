function initMap(){
	// Map options
	var options = {
		zoom:12,
		center:{lat:44.826930, lng:20.461060}
	}

	// New map
	var map = new google.maps.Map(document.getElementById('map'), options);

	// Add image
	var image = 'images/map-marker.png';

	// Add marker
	var marker = new google.maps.Marker({
		position:{lat:44.826930, lng:20.461060},
		map: map,
		icon: image,
		mapTypeId: 'roadmap'
	});

	map.setMapTypeId('roadmap');

}