const weatherCountries = [
   {
      name: 'maldives',
      lat: 3,
      long: 73
   },
   {
      name: 'rhodes',
      lat: 36,
      long: 28
   },
   {
      name: 'lisbon',
      lat: 39,
      long: 9
   },
   {
      name: 'marrakesh',
      lat: 31,
      long: 8
   },
]


const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const appId = "30d97b87215b9e9e7b0c5a065f302d8d";

const getData = () => {
   for (const country in weatherCountries) {
      console.log(country);
      fetch(`${baseUrl}?lat=${weatherCountries[country].lat}&lon=${weatherCountries[country].long}&APPID=${appId}`)
         .then(res => res.json())
         .then(data => {
            conditions = data.weather[0].main;
            temperature = data.main.temp - 273.15;
            temperature = Math.round(temperature);
            document.getElementById(weatherCountries[country].name).innerHTML = `<h5>Current Weather:</h5>
               <table>
                  <tr><th>Conditions:</th><th>Temperature:</th></tr>
                  <tr class="lowerTableRow"><td>${conditions}</td><td>${temperature} Celcius</td></tr>
               </table>`;
         })
   }
}

getData()