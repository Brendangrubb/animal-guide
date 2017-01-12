$(document).ready(function() {

  $("button#snake-btn").click(function() {
    $(".text").fadeOut(0)
    $("#snake-info").toggle(1000);
    $("#outro").show();
  })

  $("button#turtle-btn").click(function() {
    $(".text").fadeOut(0)
    $("#turtle-info").toggle(1000);
    $("#outro").show();
  })

  $("button#insect-btn").click(function() {
    $(".text").fadeOut(0)
    $("#insect-info").toggle(1000);
    $("#outro").show();
  })
});
