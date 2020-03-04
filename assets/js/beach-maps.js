var map;

function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 7.893, lng: 98.294 },
      zoom: 13
   });
};

function getData(cb) {
   var xhr = new XMLHttpRequest();

   xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=8&lon=90&APPID=30d97b87215b9e9e7b0c5a065f302d8d");
   xhr.send();

   xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         cb(JSON.parse(this.responseText));
      }
   };
};

var temperature
var conditions

getData(function (data) {
   conditions = data.weather[0].main;
   temperature = data.main.temp - 273.15;
   temperature = Math.round(temperature);
   document.getElementById("data").innerHTML = `<h3>Current Weather</h3><table><tr><th>Conditions</th><th>Temperature</th></tr>
   <tr><td>${conditions}</td><td>${temperature}</td></tr></table>`
});
