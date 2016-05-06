$("document").ready(function() { 
		
  var cityNameHTML = $("#cityName");
  var cityTemperatureNow = $("#cityTemperatureNow");
  var cityTemperature3 = $("#cityTemperature3");
  var cityTemperature6 = $("#cityTemperature6");
	var spinner = $("#loader");
	spinner.hide();
	spinner.addClass("loader");
	var cityCherkassy = {
		id: 710791,
	  name: "Cherkassy"
		};
	var cityKiev = {
		id: 703448,
		name: "Kiev"
		};
	var cityKharkiv = {
		id: 706483,
		name: "Kharkiv"
	};
	
	var cities = [cityCherkassy,cityKiev,cityKharkiv];

	(function universalFunc(){
		$("button").on("click", function (){
			spinner.show();
			var cityName = this.innerHTML;
			var i = 0;
			var citiesLength = cities.length;
			var cityId;
			for (i; i < citiesLength; i++){
				if (cities[i].name === cityName) {
					cityId = cities[i].id;
					break;
				}
			}
			$.get("http://api.openweathermap.org/data/2.5/forecast/city?id=" + cityId + "&APPID=58f420f86326565c7d552af951c62bbb", function (data, status){
				var tempKelvinNow = data.list[0].main.temp;
				var tempKelvin3 = data.list[1].main.temp;
				var tempKelvin6 = data.list[2].main.temp;
				cityNameHTML.html("City: " + cityName);
				cityTemperatureNow.html("Now: " + kelvinToCelsius(tempKelvinNow) + " \u00B0C");
				cityTemperature3.html("After 3 hours: " + kelvinToCelsius(tempKelvin3) + " \u00B0C");
				cityTemperature6.html("After 6 hours: " + kelvinToCelsius(tempKelvin6) + " \u00B0C");
				spinner.hide();
			})
		});
	})();
	
	function kelvinToCelsius(temp) {
	  var celsius = temp - 273.15;
	  return celsius.toFixed(2);
  };
  
});