$(document).ready(function() {
  var breakLength = 5;
  $("#break").html("<h3>" + breakLength + "</h3>");
  var sessionLength = 25;
  $("#session").html("<h3>" + sessionLength + "</h3>");

  $("#break-minus").on("click", function(e) {
    breakLength -= 1;
    $("#break").html("<h3>" + breakLength + "</h3>");
  });
  $("#break-plus").on("click", function(e) {
    breakLength += 1;
    $("#break").html("<h3>" + breakLength + "</h3>");
  });
  $("#session-minus").on("click", function(e) {
    sessionLength -= 1;
    $("#session").html("<h3>" + sessionLength + "</h3>");
  });
  $("#session-plus").on("click", function(e) {
    sessionLength += 1;
    $("#session").html("<h3>" + sessionLength + "</h3>");
  });

  $("#start-button").click(function(e) {
    var counter = sessionLength*60;
    setInterval(function(e) {
      counter--;
      if (counter >= 0) {
        var minutes = Math.floor(counter / 60);
        var seconds = counter - minutes * 60;
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        $(".info").html("<h1>Work Time!</h1>");
        $(".screen").html("<h1>" + minutes + ":" + seconds + "</h1>");
      }
      if (counter === 0) {
        clearInterval(counter);
        var breakCounter = breakLength*60;
        setInterval(function(e) {
          breakCounter--;
          if (breakCounter >= 0) {
            var minutes = Math.floor(breakCounter / 60);
            var seconds = breakCounter - minutes * 60;
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
            $(".info").html("<h1>Break Time!</h1>");
            $(".screen").html("<h1>" + minutes + ":" + seconds + "</h1>");
          }
          if (breakCounter === 0) {
            clearInterval(breakCounter);
            $( "#start-button" ).trigger( "click" );
          }
       }, 1000);
      }
    }, 1000);
  });
});
