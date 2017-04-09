function initMap() {
	var map, 
		marker,
		image,
		stylesArray,
		styledMap;

	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 48.447718, lng: 35.057674},
		scrollwheel: false,
		zoom: 13
	});

	image = {
		url:'img/svg/marker.svg',
		size: new google.maps.Size(45, 55),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(10,55)
	};

	marker = new google.maps.Marker({
        map: map,
        place: {
		  location: {lat: 48.447718, lng: 35.057674},
		  query: 'K.A.O Web Design',
		},
		icon: image,
		position:{lat: 48.447718, lng: 35.057674},
		title: 'K.A.O Web Design',
		animation: google.maps.Animation.DROP
    });

  	stylesArray = [
  		{
    		featureType: "all",
    		stylers: [
      		{ saturation: -60 }
   		 ]
  		},
		{
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [
				{ "hue": "#aaffaa" },
				{ "color": "#86a87a" }
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [
				{ "hue": "#86ddd6" },
				{ "color": "#d6d6d6" }
			]
		}
	]
marker.addListener('click', toggleBounce);
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
styledMap = new google.maps.StyledMapType(stylesArray,{name: "Styled Map"});
map.mapTypes.set('map_style', styledMap);
map.setMapTypeId('map_style');
}