$(document).ready(function() {

  $("#selectForm").submit(function(event) {
    event.preventDefault();

    var animal = $("#animal").val();


    if (animal === "insect") {
      $(".text").slideUp(400);
      $(".insects").slideToggle(1000);
    } else if (animal === "snake") {
      $(".text").slideUp(400);
      $(".snakes").slideToggle(1000);
    } else if (animal === "turtle") {
      $(".text").slideUp(400);
      $(".turtles").slideToggle(1000);
    }

    $(".outro").fadeIn(2800)
  });



});
