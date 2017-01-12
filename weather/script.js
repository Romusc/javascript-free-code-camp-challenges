$(document).ready(function(e) {

  $(".c-f-switch").on("click", function(a) {
    $(".temp-celsius").toggleClass("hidden");
    $(".temp-fahrenheit").toggleClass("hidden")
  });
  var lat = "0";
  var lon = "0";

  if (navigator.geolocation) {
  console.log("Navigator geolocator working");

  navigator.geolocation.getCurrentPosition(getCoor, errorCoor, {maximumAge:60000, timeout:5000,     enableHighAccuracy:true});

    function getCoor(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat = position.coords.latitude);
      console.log(lon = position.coords.longitude);
      var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=eb2f4e068dcf9bbc033d5e1be75e0e30";
      var celTemp = 0;
      e.preventDefault;
      $.ajax({
        type: "GET",
        url: url,
        success: function(data) {
             celTemp = Math.round(data.main.temp - 273.15);
             var bgColor = "white";
             if (celTemp <= 5) {
              bgColor = "gray";
             }
             else if (celTemp <= 20) {
              bgColor = "blue";
             } else {
              bgColor = "orange";
             };
             $(".temp-celsius").html(celTemp + " C");
             $(".temp-fahrenheit").html(Math.round(data.main.temp*(9/5) - 459.67) + " F");
             $(".city").html(data.name);
             $(".description").html(data.weather[0].description);
            var bgColor = "white";
            if (celTemp <= 5) {
              bgColor = "blue";
              $("#cold").toggleClass("hidden");
              console.log(celTemp);
              console.log(bgColor);
            }
            else if (celTemp <= 20) {
              bgColor = "gray";
              $("#mild").toggleClass("hidden");
              console.log(celTemp);
              console.log(bgColor);
            } else {
              bgColor = "orange";
              $("#hot").toggleClass("hidden");
              console.log(celTemp);
              console.log(bgColor);
            };
            $("body").css("background-color", bgColor);
        }
      });
    }
    function errorCoor(position) {
      console.log("Doesn't seem to be working!");
      $(".no-loc-alert").toggleClass("hidden");
      $(".no-loc-details").toggleClass("hidden");
      var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=eb2f4e068dcf9bbc033d5e1be75e0e30";
      var celTemp = 0;
      e.preventDefault;
      $.ajax({
        type: "GET",
        url: url,
        success: function(data) {
             celTemp = Math.round(data.main.temp - 273.15);
             var bgColor = "white";
             if (celTemp <= 5) {
              bgColor = "gray";
             }
             else if (celTemp <= 20) {
              bgColor = "blue";
             } else {
              bgColor = "orange";
             };
             $("body").css("background-color", bgColor);
             $(".temp-celsius").html(celTemp + " C");
             $(".temp-fahrenheit").html(Math.round(data.main.temp*(9/5) - 459.67) + " F");
             $(".city").html(data.name);
             $(".description").html(data.weather[0].description);
            var bgColor = "white";
            if (celTemp <= 5) {
              bgColor = "blue";
              $("#cold").toggleClass("hidden");
              console.log(celTemp);
              console.log(bgColor);
            }
            else if (celTemp <= 20) {
              bgColor = "gray";
              $("#mild").toggleClass("hidden");
              console.log(celTemp);
              console.log(bgColor);
            } else {
              bgColor = "orange";
              $("#hot").toggleClass("hidden");
              console.log(celTemp);
              console.log(bgColor);
            };
            $("body").css("background-color", bgColor);
        }
      });
    }
  }
});
