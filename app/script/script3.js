$("document").ready(function() { 
	
	var myModule = (function (){	

		var tableSpinner = $("table");
		var spinner = $("#loader");
		spinner.hide();
		spinner.addClass("loader");
		
		var cityNameHTML = $("#cityName");
		var cityTemperatureNow = $("#cityTemperatureNow");
		var cityTemperature3 = $("#cityTemperature3");
		var cityTemperature6 = $("#cityTemperature6");

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
		
		function universalFunc(){
			$("button").on("click", function (){
				
				tableSpinner.hide();
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
					var tempData = data.list.concat(0,2); // температура -  полный путь .main.temp, дата - .dt_txt, давление - .main.pressure, .weather[0].description, .wind.speed
					var country = data.city.country; //страна					
					var city = data.city.name; //город
					
					createTable(tempData, country, city);
					
					spinner.hide();
					tableSpinner.show();
				})
			});
		};
		
		function createTable(tempData, country, city){
			var table = $("#createTable");
			var i = 0;
			table.empty();
			table.append("<thead><tr><th>Date</th><th>Country</th><th>City</th><th>Temp</th><th>Pressure</th><th>Wind</th><th>Weather</th></tr></thead>");			
			for (i; i < 3; i++) {
				table.append("<tr><td>"+tempData[i].dt_txt+"</td><td>"+country+"</td><td>"+city+"</td><td>"+kelvinToCelsius(tempData[i].main.temp)+"\u00B0C</td><td>"+tempData[i].main.pressure+"</td><td>"+tempData[i].wind.speed+"</td><td>"+tempData[i].weather[0].description+"</td></tr>");
			}
		};
		
		function kelvinToCelsius(temp) {
			var celsius = temp - 273.15;
			return celsius.toFixed(2);
		};
		
		return {
			init: universalFunc			
		}
	})();

  myModule.init();
	
});