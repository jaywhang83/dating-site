$(document).ready(function(){
  $("form#dating").submit(function(event) {
    var food = $("input#favorite-food").val();
    var shape = $("input#favorite-shape").val();
    var color = $("input#favorite-color").val();
    var age = parseInt($("input#age").val());

    var gender =$("select#gender").val();


    var menArray =["Prince George", "King Henry VIII", "Vlad the Impaler"];
    var womenArray =[ "Joan of Arc", "Eleanor of Aquitaine", "Queen Vicoria"];


    if (food && shape && color) {
      if (age <= 18 && gender === "male") {
        var answer = menArray[0];
        $("#george").show();
      }
      else if (age > 18 && gender === "male") {
        var answer = menArray[1];
        $("#henry").show();
      }
      else if (age <= 18 && gender === "female") {
        var answer = womenArray[0];
        $("#joan").show();
      }
      else if (age > 18 && gender === "female") {
        var answer = womenArray[1];
        $("#eleanor").show();
      }
      else if (age <= 18 && gender === "undecided") {
        var answer = womenArray[2];
        $("#victoria").show();
      }
      else if (age > 18 && gender === "undecided") {
        var answer = menArray[2];
        $("#vlad").show();

      }
      $("#food").text(food);
      $("#shape").text(shape);
      $("#color").text(color);
      $("#gender-choice").text(gender);
      $("#age-input").text(age);
      $("#answer").text(answer)

      $("#quote").show();
    }
    else{
      alert("You forgot to fill in a box! We cannot match you accurately if all answes are not ptovided.");
    }

    event.preventDefault();
  });


})
