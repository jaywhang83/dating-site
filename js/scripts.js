$(document).ready(function(){
  $("form#dating").submit(function(event) {
    var food = $("input#favorite-food").val();

    if (food) {
      if (food === "pasta") {
        alert("That's great!")
      }
    }

    $("#food").text(food);
    $("#quote").show();

    event.preventDefault();
  });


})
