function createMap() {
    var map = L.map('map').setView([38.9869, -76.9426], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //first random coordinate
    const firstRandomCoordinateLatitude = getRandomInRange(30, 35, 3);
    const firstRandomCoordinateLongitude = getRandomInRange(-90, -100, 3);

    //second random coordinate
    const secondRandomCoordinateLatitude = getRandomInRange(30, 35, 3);
    const secondRandomCoordinateLongitude = getRandomInRange(-90, -100, 3);

    //third random coordinate
    const thirdRandomCoordinateLatitude = getRandomInRange(30, 35, 3);
    const thirdRandomCoordinateLongitude = getRandomInRange(-90, -100, 3);    

}


function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}
    
    

window.onload = createMap;