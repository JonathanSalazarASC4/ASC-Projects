var area = "NewYork";

document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+area+"&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyD9L7lmxwordeZ2qRb6YTD6GpaIrtkNjYk";

function changeArea(){
    area = document.getElementById("newArea").value;
    document.getElementById("map").src="https://maps.googleapis.com/maps/api/staticmap?center="+area+"&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyD9L7lmxwordeZ2qRb6YTD6GpaIrtkNjYk";
}

