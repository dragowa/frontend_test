function initMap() {
  var myLatlng = {lat: 50.435747, lng: 30.490125};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatlng
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Click to zoom'
  });

  map.addListener('center_changed', function() {


    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });
}
