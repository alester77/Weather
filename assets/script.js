var myApi = "afc541bfbb5fee51552f41423c944cfd";
var citySearch = "";
var lastCity = "";

  function getApi() {
    var cityName= document.getElementById("userInput").value;
    var appID = "afc541bfbb5fee51552f41423c944cfd";
    var baseUrl = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+appID+"&units=imperial";
  
    fetch(baseUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        inputWeather(data);
        // console.log(data);
        // console.log(cityName);
      })
      .catch(function() {

      });
  }
  
  citySubmit.addEventListener('click', getApi);

  // display current weather
  function inputWeather(d){
    var image = document.createElement('img');
    image.src = "http://openweathermap.org/img/wn/"+d.weather[0].icon+"@2x.png"
    document.getElementById('temp').innerHTML = d.main.temp+"°F";
    document.getElementById('location').innerHTML = d.name;
    document.getElementById('humidity').innerHTML = "Humidity: "+d.main.humidity+"%";
    document.getElementById('wind_speed').innerHTML = "Wind Speed: "+d.wind.speed+"mph";
    document.getElementById('icon').appendChild(image);
    // console.log(icon);
  }

  function getForecast () {
    var cityName= document.getElementById("userInput").value;
    var appID = "d058ea765342023d2ab28e46acf11198";
    var dailyUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&exclude=minutely,hourly,alerts&appid='+appID+"&units=imperial";
    var forecastEl = document.getElementsByClassName("forecast");

    fetch(dailyUrl)
    .then(function (response) {
      console.log(data);
    })
  }
    citySubmit.addEventListener('click', getForecast)