$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      dataType: "json",
      url: "http://api.icndb.com/jokes/random",
      success: function(results) {
        console.log(results["url"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
