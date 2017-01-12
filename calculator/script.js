$(document).ready(function() {
  var calc = ""

  $(".num").on("click", function(e) {
    var b = e.target.id;
    calc += b;
    $("#output").html(calc);
    $("#details").html(calc);
  })

  $(".sign").on("click", function(e) {
    var b = e.target.id;
    calc += b;
    $("#output").html(b);
    $("#details").html(calc);
  })

  $("#ac").on("click", function(e) {
    calc = "";
    $("#output").html("0");
    $("#details").html("0");
  })

  $("#ce").on("click", function(e) {
    if (calc.length === 1) {
      calc = 0;
    } else {
      calc = calc.substr(0, calc.length - 1);
    }
      $("#output").html("0");
      // $("#details").html(calc);
  })

  $("#equal").on("click", function(e) {
    var result = eval(calc); // to number
    $("#output").html(result);
    $("#details").html(calc + "=" + result);
  })
})
