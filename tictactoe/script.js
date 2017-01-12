console.log("hey its linked!");
$(document).ready(function() {
  $(".player-selector").on("click", function(e) {
    $(".dummy-selector").attr("id",this.id);
    $(".player-box").addClass("hidden");
    $(".board").removeClass("hidden");
    $(".token-choice").toggleClass("hidden");
    $(".token-selector").on("click", function(e) {
      if (this.id === "token-cross") {
        var tokenP = "x";
        var tokenC = "o";
      } else {
        var tokenP = "o";
        var tokenC = "x"
      }
      $(".token-choice").toggleClass("hidden");
      if ($(".dummy-selector")[0].id === "one-player-mode") { // condition to start one-player-mode
        var possiblePositions = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
        $(".square").on("click", function(e) {
          // player plays
          var id = this.id;
          var index = possiblePositions.indexOf(id);
          if ($("#"+id).text() === "") {
            possiblePositions.splice(index,1);
            $("#"+id).html("<h1>" + tokenP + "</h1>");
          }
          // game over function
          var colOne = $("#a1").text() + $("#a2").text() + $("#a3").text();
          var colTwo = $("#b1").text() + $("#b2").text() + $("#b3").text();
          var colThree = $("#c1").text() + $("#c2").text() + $("#c3").text();
          var lineOne = $("#a1").text() + $("#b1").text() + $("#c1").text();
          var lineTwo = $("#a2").text() + $("#b2").text() + $("#c2").text();
          var lineThree = $("#a3").text() + $("#b3").text() + $("#c3").text();
          var diagOne = $("#a1").text() + $("#b2").text() + $("#c3").text();
          var diagTwo = $("#a3").text() + $("#b2").text() + $("#c1").text();
          var outputArray = [colOne, colTwo, colThree, lineOne, lineTwo, lineThree, diagOne, diagTwo]
          outputArray.forEach(function(output) {
            if (output === tokenP + tokenP + tokenP) {
              $("#"+id).html("<h1>" + tokenP + "</h1>");
              alert("You Won!");
              window.location.reload(true);
            }
          }); // closes game over function

          // computer plays
          var id2 = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
          var index2 = possiblePositions.indexOf(id2);
          if ($("#"+id2).text() === "") {
            possiblePositions.splice(index2,1);
            $("#"+id2).html("<h1>" + tokenC + "</h1>");
          }

          // game over process for computer
          var colOne = $("#a1").text() + $("#a2").text() + $("#a3").text();
          var colTwo = $("#b1").text() + $("#b2").text() + $("#b3").text();
          var colThree = $("#c1").text() + $("#c2").text() + $("#c3").text();
          var lineOne = $("#a1").text() + $("#b1").text() + $("#c1").text();
          var lineTwo = $("#a2").text() + $("#b2").text() + $("#c2").text();
          var lineThree = $("#a3").text() + $("#b3").text() + $("#c3").text();
          var diagOne = $("#a1").text() + $("#b2").text() + $("#c3").text();
          var diagTwo = $("#a3").text() + $("#b2").text() + $("#c1").text();
          var outputArray = [colOne, colTwo, colThree, lineOne, lineTwo, lineThree, diagOne, diagTwo]
          outputArray.forEach(function(output) {
            if (output === tokenC + tokenC + tokenC) {
              $("#"+id).html("<h1>" + tokenC + "</h1>");
              alert("The computer Won!");
              window.location.reload(true);
            }
          }); // closes game over function
        }); // closes click on a square
      } else { // condition for two-player-mode
        var turn = 1;
        $(".square").on("click", function(e) {
          var id = this.id;
          if ($("#"+id).html() === "") {
            if (turn === 1) {
              $("#"+id).html("<h1>" + tokenP + "</h1>");
            };
            if (turn === -1) {
              $("#"+id).html("<h1>" + tokenC + "</h1>");
            };
            turn = (-1)*turn;
          }
          var colOne = $("#a1").text() + $("#a2").text() + $("#a3").text();
          var colTwo = $("#b1").text() + $("#b2").text() + $("#b3").text();
          var colThree = $("#c1").text() + $("#c2").text() + $("#c3").text();
          var lineOne = $("#a1").text() + $("#b1").text() + $("#c1").text();
          var lineTwo = $("#a2").text() + $("#b2").text() + $("#c2").text();
          var lineThree = $("#a3").text() + $("#b3").text() + $("#c3").text();
          var diagOne = $("#a1").text() + $("#b2").text() + $("#c3").text();
          var diagTwo = $("#a3").text() + $("#b2").text() + $("#c1").text();
          var outputArray = [colOne, colTwo, colThree, lineOne, lineTwo, lineThree, diagOne, diagTwo]
          outputArray.forEach(function(output) {
            if (output === tokenP + tokenP + tokenP) {
              alert("Player 1 won!");
              window.location.reload(true);
            }
            if (output === tokenC + tokenC + tokenC) {
              alert("Player 2 won!");
              indow.location.reload(true);
            }
          }); // closes game over function
        }); // closes click on a square
      } //closes two-players-mode
    });
  })
}); // closes document ready



