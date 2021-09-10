$(document).ready(function() {
  $('#jokeFact1').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://api.icndb.com/jokes/random.json",
      success: function(getJoke1) {
        console.log(getJoke1["value"]["joke"]);
          $('#Joke1').text(getJoke1["value"]["joke"]);
        },
        error: function(xhr,status,error) {
        console.log(error);
      }
      })
    });
  });

$(document).ready(function() {
  $('#jokeFact2').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://api.chucknorris.io/jokes/random",
      success: function(getJoke2) {
        console.log(getJoke2["value"]);
          $('#Joke2').text(getJoke2["value"]);
      },
      error: function(xhr,status,error) {
      console.log(error);
      }
    });
  });
});
