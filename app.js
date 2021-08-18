function userLocation(){
    var out_put = document.getElementById("out_put");
    function userCoords(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        out_put.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    }

    function errorCoords(){
        out_put.textContent = 'Location not found';
    }

    if(!navigator.geolocation){
        out_put.textContent = 'Browser Not support';
    }else{
        navigator.geolocation.getCurrentPosition(userCoords, errorCoords);
    }

}

document.getElementById("location").addEventListener('click', userLocation);