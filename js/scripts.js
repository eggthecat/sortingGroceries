$(document).ready(function() {
  $("#questions").submit(function(event){
    var things1Input = $("#things1").val();
    var things2Input = $("#things2").val();
    var things3Input = $("#things3").val();

    var array1 = [things1Input, things2Input, things3Input];

    $("#answerArea").show();
    // $("#quiz").hide();
    // $("#display").text(array1);
    // $("#display").text(array1);
    event.preventDefault();

    var array2 = [];
    var array3 = [];
    var array4 = [];
    // array2.push(array1[0], array1[1], array1[2]);
    // $("#elementZero").text("We also love " + array2[0]);
    // $("#elementOne").text("We also love " + array2[1]);
    // $("#elementTwo").text("We also love " + array2[2]);
    array2.push(array1[0]);
    array2.push(array1[1]);
    array2.push(array1[2]);
    $("#elementZeroTwo").text("We also love " + array2[0]);
    $("#elementOneTwo").text("We also love " + array2[1]);
    $("#elementTwoTwo").text("We also love " + array2[2]);

    var array3 = array2.map(function(upper) {
        return (upper.toUpperCase());
        // return $("#display" + (upper.toUpperCase()));
    });
    $("#display").text((array3).sort());
    console.log(array3);

    array3.push(array1[0]);
    array3.push(array1[1]);
    array3.push(array1[2]);
    $("#elementZeroTwo").text("We also love " + array3[0]);
    $("#elementOneTwo").text("We also love " + array3[1]);
    $("#elementTwoTwo").text("We also love " + array3[2]);
  });
});
