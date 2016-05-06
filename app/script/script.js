$("document").ready(function() { 
	
  var cityName = $("#cityName");
  var cityTemperature = $("#cityTemperature");

  $("#cityCherkassy").on("click", function (){
		$.get("http://api.openweathermap.org/data/2.5/forecast/city?id=710791&APPID=58f420f86326565c7d552af951c62bbb", function (data, status){
			var tempKelvin = data.list[0].main.temp;	  
			cityName.html("Cherkassy");
			cityTemperature.html(kelvinToCelsius(tempKelvin));  
			})
  })

  $("#cityKiev").on("click", function (){
		$.get("http://api.openweathermap.org/data/2.5/forecast/city?id=703448&APPID=58f420f86326565c7d552af951c62bbb", function (data, status){
			var tempKelvin = data.list[0].main.temp;	
			cityName.html("Kiev");
			cityTemperature.html(kelvinToCelsius(tempKelvin)); 
			})
  })	
  
  $("#cityKharkiv").on("click", function (){
		$.get("http://api.openweathermap.org/data/2.5/forecast/city?id=706483&APPID=58f420f86326565c7d552af951c62bbb", function (data, status){
			var tempKelvin = data.list[0].main.temp;	
			cityName.html("Kharkiv");
			cityTemperature.html(kelvinToCelsius(tempKelvin));  
			})
  })	  
 
  function kelvinToCelsius(temp) {
	  var celsius = temp - 273.15;
	  return celsius.toFixed(2);
  };
  
	
});