function initMap() {
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 13,
    center: {lat: 33.678, lng: -116.243},
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: {
      north: 33.685, 
      south: 33.671, 
      east: -116.234, 
      west: -116.251 
    }
  });
}



/* No jala
function initMap(){
	var map = new google.maps.Map(document.getElementById('mapa'), {
		zoom: 13,
		center: {lat: 33.678, lng: -116.243}//,
		//mapTypeId: google.maps.MapTypeId.TERRAIN
	});

	var rectangulo = new google.maps.Rectangle({
		strokeColor: "red",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "red",
		fillOpacity: 0.35,
		map: map,
		bounds: {
			north: 33.685,
			south: 33.671,
			east: -116.234,
			west: -110.241
		}
	});
}

*/