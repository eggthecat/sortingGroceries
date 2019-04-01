$(document).ready(function() {
  $("#things form").submit(function(event) {
    var list = ["dairy", "meat", "veggies"];

//
//     things.forEach(function(thing) {
//       var userInput = $("input#" + thing).val();
//       $("." + thing).text(userInput);
//     });
//
//     $("#story").show();
//     console.log(userInput);
//     event.preventDefault();
//   });
// });



    var dairy = $('#dairy').val();
    var meat = $('#meat').val();
    var veggies = $('#veggies').val();
    var array1 = [dairy, meat, veggies];

    event.preventDefault();
  });
});
