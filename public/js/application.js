$(document).ready(function() {

  $(document).on("keydown", handleTyping);

  var pacman = {};

  pacman.r = 20;
  pacman.d = 5;
  pacman.l = 20
  pacman.u = 5


  function handleTyping(event) {

    pacman.r += 10
    pacman.d += 10
    pacman.l -= 10
    pacman.u -= 10

    switch(event.which) {
      case 39:
        $("#pacman").css({
          "left": pacman.r + "px"
        });
        break;
      case 40:
      $("#pacman").css({
        "top": pacman.d + "px"
      });
        break;
      case 37:
      $("#pacman").css({
        "left": pacman.l + "px"
      });
        break;
      case 38:
      $("#pacman").css({
        "top": pacman.u + "px"
      });
        break;
      };

    };


});

// trbl = 38 39 40 37
