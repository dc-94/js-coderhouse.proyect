let mainMap;

function initMap() {
  mainMap = new google.maps.Map(document.getElementById("maps"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}