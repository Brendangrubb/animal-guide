$(document).ready(function() {

  var animal = $("#animal");
  var snake = $("#snake-info").val();
  var turtle = $("#turtle-info").val();
  var insect = $("#insect").val();

  if (animal === insect) {
    $(snake).show();
  }

});
