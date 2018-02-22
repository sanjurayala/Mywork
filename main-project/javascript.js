//Maps//
function myMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
        position: uluru,
          map: map
        });
}
//pop-up//
var btn = document.getElementById('read-more');
var box = document.getElementById('click');
var span = document.getElementsByClassName('close')[0];
btn.onclick = function () {
    box.style.display = 'block';
}
span.onclick = function () {
    box.style.display = 'none';
}
window.onclick = function (x) {
    if (x.target == box) {
        box.style.display = 'none';
    }
}
angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);