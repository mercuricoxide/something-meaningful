$(document).ready(function() {

  $(document).on("keydown", handleTyping);

  var pacman = {};

  pacman.rightCoord = 105;
  pacman.downCoord = 267;
  pacman.leftCoord = 105;
  pacman.upCoord = 267;


  function handleTyping(event) {

    pacman.rightCoord += 5
    pacman.downCoord -= 5
    pacman.leftCoord -= 5
    pacman.upCoord += 5

    switch(event.which) {
      case 39:
        $("#pacman").css({
          "left": pacman.rightCoord + "px"
        });
        break;
      case 40:
        $("#pacman").css({
          "bottom": pacman.downCoord + "px"
        });
        break;
      case 37:
        $("#pacman").css({
        "left": pacman.leftCoord + "px"
        });
        break;
      case 38:
        $("#pacman").css({
        "bottom": pacman.upCoord + "px"
        });
        break;
      };

    };


});

// Keys: Right: 39, Down: 40, Left: 37, Up: 38
// trbl = 38 39 40 37
