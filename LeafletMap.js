function createMap() {
    var map = L.map('map').setView([38.9869, -76.9426], 13);

    //first random coordinate
    const firstRandomCoordinateLatitude = getRandomInRange(30, 35, 3);
    const firstRandomCoordinateLongitude = getRandomInRange(-90, -100, 3);
    var marker1 = L.marker([firstRandomCoordinateLatitude, firstRandomCoordinateLongitude]).addTo(map);
    marker1.bindPopup("<b>Marker 1</b><br>Randomly Generated Coordinates Point 1").openPopup();

    //second random coordinate
    const secondRandomCoordinateLatitude = getRandomInRange(30, 35, 3);
    const secondRandomCoordinateLongitude = getRandomInRange(-90, -100, 3);
    var marker2 = L.marker([secondRandomCoordinateLatitude, secondRandomCoordinateLongitude]).addTo(map);
    marker2.bindPopup("<b>Marker 2</b><br>Randomly Generated Coordinates Point 2").openPopup();

    //third random coordinate
    const thirdRandomCoordinateLatitude = getRandomInRange(30, 35, 3);
    const thirdRandomCoordinateLongitude = getRandomInRange(-90, -100, 3);
    var marker3 = L.marker([thirdRandomCoordinateLatitude, thirdRandomCoordinateLongitude]).addTo(map);
    marker3.bindPopup("<b>Marker 3</b><br>Randomly Generated Coordinates Point 3").openPopup();


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

}


function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}


function getLocalityOfTheCoordinate(latitude, longitude){
    fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en")
    .then((res) => res.json())
    .then((resJson) => {
        //console.log("Response Json: ", resJson)
        Object.entries(resJson).forEach(([key, value]) => { 

        })
    })
}


window.onload = createMap;