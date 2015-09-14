var factorial = function(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }

};

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number = parseInt($("input#number").val());
    if(isNaN(number)) {
      $(".factorial").text("not a number, choose a NUMBER, jerk");
    } else {
      var result = factorial(number);
      $(".factorial").text(result);
    }

    $("#result").show();
    event.preventDefault();
  })
})
