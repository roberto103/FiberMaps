// Initialize and add the map
function initMap() {
    const location = { lat: -7.8502794, lng: -35.7670493 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: location,
        mapTypeId: 'satellite',
        mapTypeControl: false
    });

    // Adiciona novo marcador
    map.addListener('click', function (e) {

        var ClickPosition = e.latLng;

        new google.maps.Marker({
            position: ClickPosition,
            map: map,
            title: 'CTO',
            alt: 'C'
        });

    });
}