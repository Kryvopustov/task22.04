$("document").ready(function() { 
	
  var cityNameHTML = $("#cityName");
  var cityTemperature = $("#cityTemperature");
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
	universalFunc();

	function universalFunc(){
		$("button").on("click", function (){
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
				var tempKelvin = data.list[0].main.temp;
				cityNameHTML.html(cityName);
				cityTemperature.html(kelvinToCelsius(tempKelvin));
			})
		});
	};
	
	function kelvinToCelsius(temp) {
	  var celsius = temp - 273.15;
	  return celsius.toFixed(2);
  };
  
	
});