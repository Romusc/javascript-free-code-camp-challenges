$(document).ready(function() {
  var myConstant = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"]
  myConstant.forEach(function(user) {
    var url = "https://wind-bow.gomix.me/twitch-api/streams/"
    user.preventDefault;
    $.ajax({
      type: "GET",
      url: url + user,
      success: function(data) {
        console.log(user);
        console.log(data["stream"]);
        if (data["stream"] === null) {
          $(".inactive-users").append('<div class="col-xs-12 box-inactive"><h3>' + user + '</h3><h5>Offline</h5></div>')
        } else {
          $(".active-users").append('<a href=" https://www.twitch.tv/' + user + '"><div class="col-xs-12 box-active"><h3>' + user + '</h3><h5></a>' + data["stream"].channel.status + '</h5></div>')
        };
      }
    });
  });
  $(".box-active").click(function() {
    window.location = "www.google.com";
  })
})
