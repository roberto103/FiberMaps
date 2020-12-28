// Initialize and add the map
function initMap() {
    const location = { lat: -7.8502794, lng: -35.7670493 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: location,
      mapTypeId: 'satellite',
      mapTypeControl: false
    });

    map.addListener('click', function(e){
        console.log(e);
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
}