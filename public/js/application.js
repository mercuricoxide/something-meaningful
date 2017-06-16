$(document).ready(function() {

  $(document).on("keydown", handleTyping);

  function handleTyping(event) {
    console.log(event.which);
  };
});
