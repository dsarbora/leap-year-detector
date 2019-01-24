var leapYear = function(year){
  return false;

}


$(function(){
  $("#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("#year").val());
    var result = leapYear(year);
    $("#result").text(result)
  }); //end submit function
}); //end document ready function
