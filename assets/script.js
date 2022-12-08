var apiKey = 'd058ea765342023d2ab28e46acf11198';

//store searches
function storeSearch (){
  var pastSearch = [];
  if (localStorage["pastSearch"]) {
    pastSearch = JSON.parse(localStorage["pastSearches"]);
  }

  if(pastSearch.indexOf(search) == -1) {
    pastSearch.unshift(search);
    if(pastSearch.length > 5) { 
       pastSearch.pop();
    }
    localStorage["pastSearch"] = JSON.stringify(pastSearch);
}
}

function drawPastSearches() {
  if(pastSearch.length) {
      var html = pastSearchTemplate({search:pastSearch});
      $("#pastSearch").html(html);
  }
}

$(document).on("click", ".userInput", function(e) {
  e.preventDefault();
  var search = $(this).text();
  doSearch(search);
});

// get API data
function getApi () {
  let searchBox = document.getElementById("userInput").value;
  let openUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+searchBox+'&exclude=minutely,hourly,alerts&appid='+apiKey+'&units=imperial';
  
  fetch(openUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(searchBox);
  })
}

document.getElementById("citySubmit").addEventListener("click", getApi);