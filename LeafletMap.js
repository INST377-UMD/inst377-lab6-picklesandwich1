function createMap() {
    var map = L.map('map').setView([38.9869, -76.9426], 13);

    // First random coordinate
    const firstRandomCoordinateLatitude = getRandomInRange(30, 35, 3);
    const firstRandomCoordinateLongitude = getRandomInRange(-90, -100, 3);
    var marker1 = L.marker([firstRandomCoordinateLatitude, firstRandomCoordinateLongitude]).addTo(map);
    marker1.bindPopup("<b>Marker 1</b><br>Randomly Generated Coordinates Point 1").openPopup();
    
    // Get locality for marker 1 using its coordinates
    getLocalityOfTheCoordinate(firstRandomCoordinateLatitude, firstRandomCoordinateLongitude, "marker1");

    // Second random coordinate
    const secondRandomCoordinateLatitude = getRandomInRange(30, 35, 3);
    const secondRandomCoordinateLongitude = getRandomInRange(-90, -100, 3);
    var marker2 = L.marker([secondRandomCoordinateLatitude, secondRandomCoordinateLongitude]).addTo(map);
    marker2.bindPopup("<b>Marker 2</b><br>Randomly Generated Coordinates Point 2").openPopup();
    
    // Get locality for marker 2 using its coordinates
    getLocalityOfTheCoordinate(secondRandomCoordinateLatitude, secondRandomCoordinateLongitude, "marker2");

    // Third random coordinate
    const thirdRandomCoordinateLatitude = getRandomInRange(30, 35, 3);
    const thirdRandomCoordinateLongitude = getRandomInRange(-90, -100, 3);
    var marker3 = L.marker([thirdRandomCoordinateLatitude, thirdRandomCoordinateLongitude]).addTo(map);
    marker3.bindPopup("<b>Marker 3</b><br>Randomly Generated Coordinates Point 3").openPopup();
    
    // Get locality for marker 3 using its coordinates
    getLocalityOfTheCoordinate(thirdRandomCoordinateLatitude, thirdRandomCoordinateLongitude, "marker3");

    // Tile layer for the map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1; // Converts to number
}

function getLocalityOfTheCoordinate(latitude, longitude, markerId) {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson);
            var info = document.getElementById(markerId); // Use markerId to update the correct div
            if (resJson.locality) {
                info.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude} - Locality: ${resJson.locality}`;
            } else {
                info.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude} - Locality: Not found`;   
            }
        });
}

// Initialize the map on window load
window.onload = createMap;