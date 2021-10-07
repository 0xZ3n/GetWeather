//My api key ea10cd75a7ccafd4dac1dcb6eb7aca23

var searchButton = document.querySelector('.btn');
var inputBox = document.querySelector('.searchInput');
var cityResult = document.querySelector('.city');
var weatherResult = document.querySelector('.weather');
var tempResult = document.querySelector('.temparature');


function getCurrentWeather (cityName) {
    fetch ('api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid=ea10cd75a7ccafd4dac1dcb6eb7aca23')
    .then(response => response.json())
    .then(data => {

       var citySearch = data['name'];
       var weatherSearch = data['weather']['description'];
       var tempSearch = data['main']['temp'];

       city.innerHTML = citySearch;
       weather.innerHTML = weatherSearch;
       temperature.innerHTML = tempSearch;
    })
}


searchButton.addEventListener('click', function(){
    getCurrentWeather(inputBox.value);
});
console.log();
console.log();