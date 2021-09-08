$(document).ready(function() {
  $('#jokeFact').click(function() {
    $.ajax({
      dataType: "json",
      url: "http://api.icndb.com/jokes/random.json",
      success: function(getJoke) {
        console.log(getJoke["value"]["joke"]);
        let str = getJoke["value"]["joke"]
        if str.includes("")
        $('p').text(getJoke["value"]["joke"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
