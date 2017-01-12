$(document).ready(function (e) {
  // strict mode
  var strict = false
  $(".strict").on("click", function() {
    strict = (strict === false);
    if ($(".strict").text() === "Strict Mode: Off") {
      $(".strict").text("Strict Mode: On");
    } else {
      $(".strict").text("Strict Mode: Off");
    }
  })
  // defining the sound variables
  var audioGreen = document.createElement('audio');
  audioGreen.setAttribute('src', 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var audioRed = document.createElement('audio');
  audioRed.setAttribute('src', 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var audioYellow = document.createElement('audio');
  audioYellow.setAttribute('src', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  var audioBlue = document.createElement('audio');
  audioBlue.setAttribute('src', 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  var soundHash = {".red": audioRed, ".green": audioGreen, ".yellow": audioYellow, ".blue": audioBlue};
  // function that will be used to add a temporary clasa
  (function($){
    $.fn.extend({
      addTemporaryClass: function(className, duration) {
        var elements = this;
        setTimeout(function() {
          elements.removeClass(className);
        }, duration);
        return this.each(function() {
          $(this).addClass(className);
        });
      }
    });
  })(jQuery);
  // defines the computer plays function
  function computerPlays(array, n) {
    var i = 1;
    setInterval(function() {
      if (i <= n) {
        $(array[i]).addTemporaryClass("on", 1000);
        soundHash[array[i]].play();
      }
      else return;
      i++;
    }, 2000);
  }

  // game process after clicking 'start'
  $(".start").on("click", function() {
    // making a random color string at the start of the game
    var colors = [".green", ".red", ".yellow", ".blue"];
    var colorArray = [];
    for (i = 1; i <= 21; i++) {
      var color = colors[Math.floor(Math.random()*colors.length)];
      colorArray.push(color);
    }
    var j = 1;
    $(".count").html("Count: " + j);
    computerPlays(colorArray, j);
    var playerArray = []
    $(".button").on("click", function() {
      soundHash["." + this.id].play();
      $("." + this.id).addTemporaryClass("on", 1000)
      playerArray.push("." + this.id);
      if ((playerArray.length == 20) && (playerArray.join("") === colorArray.slice(1, j + 1).join(""))) {
        alert("You won!");
        $(".start").trigger("click");
      } else if (playerArray.join("") === colorArray.slice(1, j + 1).join("")) {
        j++;
        $(".count").html(j + " notes");
        computerPlays(colorArray, j);
        playerArray = [];
      } else if ((playerArray.length == j) && (playerArray.join("") !== colorArray.slice(1, j + 1).join(""))){
        if (strict === true) {
          alert("You lost! Let's start from scratch");
          $(".start").trigger("click");
        } else {
          alert("False! Let's try one more time");
          computerPlays(colorArray, j);
          playerArray = [];
        }
      }
    });
  })
})
