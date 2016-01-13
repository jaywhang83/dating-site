$(document).ready(function(){
  $("form#dating").submit(function(event) {
    var food = $("input#favorite-food").val();
    var shape = $("input#favorite-shape").val();
    var color = $("input#favorite-color").val();
    var age = parseInt($("input#age").val());

    var gender =$("select#gender").val();

    var menArray =["King Henry VIII", "Vlad the Impaler", "Prince George", "Prince William"];
    var womenArray =["Ada Lovelace", "Queen Vicoria", "Joan of Arc", "Eleanor of Aquitaine"]

    if (food && shape && color) {
      if (age <= 18 && gender === "male") {
        var answer = menArray[2];
      }
      else if (age > 18 && gender === "male") {
        var answer = menArray[1];
      }
      else if (age <= 18 && gender === "female") {
        var answer = womenArray[2];
      }
      else if (age > 18 && gender === "female") {
        var answer = womenArray[0];
      }
      else if (age <= 18 && gender === "undecided") {
        var answer = womenArray[3];
      }
      else if (age > 18 && gender === "undecided") {
        var answer = menArray[1];
      }


    }
    else{

    }

    $("#food").text(food);
    $("#shape").text(shape);
    $("#color").text(color);
    $("#gender-choice").text(gender);
    $("#age-input").text(age);
    $("#answer").text(answer)

    $("#quote").show();

    event.preventDefault();
  });


})
